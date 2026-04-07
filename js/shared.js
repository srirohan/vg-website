// Shared nav HTML
const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-box">VG</div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">International SG Pte Ltd</span>
      <span class="nav-logo-sub">Architecture · Structure · MEPF</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="about.html">About</a></li>
    <li><a href="disciplines.html">Disciplines</a></li>
    <li><a href="specialisms.html">Specialisms</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="insights.html">Insights</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Request a Consultation</a>
</nav>`;

// Shared footer HTML
const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand">VG International SG Pte Ltd</div>
      <div class="footer-tag">Architecture · Structural · MEPF · Singapore · Global</div>
      <div class="footer-tagline">"Engineering the Future, Built on Trust."</div>
      <div style="font-family:'Inter',sans-serif;font-size:0.78rem;color:var(--sand-muted);line-height:1.8;">
        Singapore Headquarters<br>
        Global Project Delivery<br>
        consult@vginternational.com.sg
      </div>
    </div>
    <div>
      <div class="footer-col-title">Disciplines</div>
      <a class="footer-link" href="disciplines.html">Architecture</a>
      <a class="footer-link" href="disciplines.html#structural">Structural Engineering</a>
      <a class="footer-link" href="disciplines.html#mepf">MEPF Engineering</a>
    </div>
    <div>
      <div class="footer-col-title">Specialisms</div>
      <a class="footer-link" href="specialisms.html#netzero">Net Zero Buildings</a>
      <a class="footer-link" href="specialisms.html#datacenter">Data Centers</a>
      <a class="footer-link" href="specialisms.html#coldchain">Cold Chain</a>
      <a class="footer-link" href="specialisms.html#retrofit">Retrofits</a>
      <a class="footer-link" href="specialisms.html#owners">Owner's Engineering</a>
    </div>
    <div>
      <div class="footer-col-title">Global Markets</div>
      <a class="footer-link" href="about.html#markets">Southeast Asia</a>
      <a class="footer-link" href="about.html#markets">South Asia</a>
      <a class="footer-link" href="about.html#markets">GCC & Middle East</a>
      <a class="footer-link" href="about.html#markets">North America</a>
      <a class="footer-link" href="about.html#markets">UK & Europe</a>
      <a class="footer-link" href="about.html#markets">Australia & NZ</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-legal">© 2025 VG International SG Pte Ltd. All rights reserved. Registered in Singapore.</div>
    <div class="footer-creds">
      <span class="cred">ISO 19650</span>
      <span class="cred">LEED AP</span>
      <span class="cred">CIBSE</span>
      <span class="cred">ASHRAE</span>
      <span class="cred">BCA Green Mark</span>
      <span class="cred">NFPA</span>
    </div>
  </div>
</footer>`;

// Trust bar HTML
const TRUST_BAR_HTML = `
<div class="trust-bar">
  <div class="trust-bar-label">Accredited by</div>
  <div class="trust-items">
    <span class="trust-item">ISO 19650</span>
    <span class="trust-item">LEED AP</span>
    <span class="trust-item">BREEAM</span>
    <span class="trust-item">ASHRAE</span>
    <span class="trust-item">CIBSE Chartered</span>
    <span class="trust-item">Uptime Institute</span>
    <span class="trust-item">BCA Green Mark</span>
    <span class="trust-item">NFPA</span>
    <span class="trust-item">FM Global</span>
    <span class="trust-item">WELL</span>
    <span class="trust-item">Green Star</span>
    <span class="trust-item">IGBC</span>
  </div>
</div>`;

// Inject shared elements
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Trust bar
  const trustPlaceholder = document.getElementById('trust-placeholder');
  if (trustPlaceholder) trustPlaceholder.outerHTML = TRUST_BAR_HTML;

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // Nav shrink on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.style.height = '60px';
    } else {
      nav.style.height = '72px';
    }
  });
});
