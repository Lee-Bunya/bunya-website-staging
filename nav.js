/* Single-source site navigation for the Bunya website.
 * Edit the nav ONCE here and every page updates.
 * Each page only needs, in <head>:   <script src="nav.js" defer></script>
 * and, where the nav should appear:  <div id="site-nav"></div>
 */
(function () {
  var HEADER = `<header class="nav">
  <div class="nav-inner">
    <a href="index.html" class="logo"><img src="assets/bunya-logo-colour.png" alt="Bunya" class="logo-img"></a>
    <button class="menu-btn" aria-label="Open menu" onclick="openMenu()">&#8801;</button>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <div class="nav-item">
        <a>Platform <svg class="caret" viewBox="0 0 12 12" fill="none"><path d="M2 4 L6 8 L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="dropdown">
          <a href="command-centre.html" class="dd-link"><span class="t">Command Centre</span><span class="d">The core platform that runs the practice</span></a>
          <a href="broadcast-hq.html" class="dd-link"><span class="t">Broadcast HQ</span><span class="d">Compliant marketing, adviser to firm</span></a>
          <a href="bunya-voice.html" class="dd-link"><span class="t">Bunya Voice</span><span class="d">Calls &amp; meetings, captured to the record</span></a>
        </div>
      </div>
      <a href="grow.html">Grow</a>
      <a href="partners.html">Partners</a>
      <div class="nav-item">
        <a>Resources <svg class="caret" viewBox="0 0 12 12" fill="none"><path d="M2 4 L6 8 L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="dropdown">
          <a href="blog.html" class="dd-link"><span class="t">Insights</span><span class="d">Practical answers for principals</span></a>
          <a href="faq.html" class="dd-link"><span class="t">FAQ</span><span class="d">The questions principals ask</span></a>
          <a href="case-studies.html" class="dd-link"><span class="t">Case studies</span><span class="d">Real firms, running Bunya</span></a>
          <a href="cost-calculator.html" class="dd-link"><span class="t">Cost calculator</span><span class="d">What the current way is costing you</span></a>
          <div class="dd-sep"></div>
          <a href="vs-traditional-crm.html" class="dd-link"><span class="t">Bunya vs a CRM</span><span class="d">Why it isn't just another CRM</span></a>
          <a href="xplan-alternative.html" class="dd-link"><span class="t">Xplan alternative</span><span class="d">The alternative you own, not rent</span></a>
          <a href="advice-software-alternatives.html" class="dd-link"><span class="t">Alternatives compared</span><span class="d">The whole field, side by side</span></a>
          <a href="fin365-alternative.html" class="dd-link"><span class="t">Bunya vs Fin365</span><span class="d">The closest comparison, honestly</span></a>
          <a href="vs-ai-plugin.html" class="dd-link"><span class="t">Bunya vs an AI plugin</span><span class="d">Own the system, or rent a layer</span></a>
        </div>
      </div>
      <a href="about.html">About</a>
      <a href="booking.html" class="nav-cta">Book a demo &#8594;</a>
    </nav>
  </div>
</header>`;
  var MOBILE = `<div class="m-overlay" id="mMenu">
  <div class="m-top">
    <a href="index.html" class="logo"><img src="assets/bunya-logo-white.png" alt="Bunya" class="logo-img"></a>
    <button class="m-close" aria-label="Close menu" onclick="closeMenu()">&#10005;</button>
  </div>
  <div class="m-scroll">
    <div class="m-group">
      <a href="index.html" class="top-link">Home</a>
    </div>
    <div class="m-group">
      <div class="m-h">Platform</div>
      <a href="command-centre.html">Command Centre</a>
      <a href="broadcast-hq.html">Broadcast HQ</a>
      <a href="bunya-voice.html">Bunya Voice</a>
    </div>
    <div class="m-group">
      <div class="m-h">Grow</div>
      <a href="grow.html">Grow your firm</a>
    </div>
    <div class="m-group">
      <div class="m-h">Resources</div>
      <a href="blog.html">Insights</a>
      <a href="faq.html">FAQ</a><a href="case-studies.html">Case studies</a>
      <a href="cost-calculator.html">Cost calculator</a>
      <a href="vs-traditional-crm.html">Bunya vs a CRM</a>
      <a href="xplan-alternative.html">Xplan alternative</a>
      <a href="advice-software-alternatives.html">Alternatives compared</a>
      <a href="fin365-alternative.html">Bunya vs Fin365</a>
      <a href="vs-ai-plugin.html">Bunya vs an AI plugin</a>
    </div>
    <div class="m-group">
      <div class="m-h">Company</div>
      <a href="about.html">About</a>
      <a href="booking.html">Booking</a>
    </div>
  </div>
  <div class="m-cta"><a href="booking.html">Book a demo &#8594;</a></div>
</div>`;

  function mount() {
    var slot = document.getElementById('site-nav');
    if (!slot) return;
    slot.outerHTML = HEADER + MOBILE;

    // Highlight the current top-level page (skip the "Book a demo" CTA button)
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var links = document.querySelectorAll('.nav-links > a[href]:not(.nav-cta)');
    for (var i = 0; i < links.length; i++) {
      if ((links[i].getAttribute('href') || '').toLowerCase() === here) {
        links[i].classList.add('active');
        links[i].setAttribute('aria-current', 'page');
      }
    }
  }

  // Mobile menu controls — global so inline onclick handlers in the markup can reach them
  window.openMenu = function () {
    var m = document.getElementById('mMenu');
    if (m) { m.classList.add('open'); document.body.classList.add('menu-open'); }
  };
  window.closeMenu = function () {
    var m = document.getElementById('mMenu');
    if (m) { m.classList.remove('open'); document.body.classList.remove('menu-open'); }
  };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') window.closeMenu(); });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
