/* Single-source site footer for the Bunya website.
 * Edit the footer ONCE here and every page updates.
 * Each page only needs, in <head>:   <script src="footer.js" defer></script>
 * and, where the footer should appear: <div id="site-footer"></div>
 */
(function () {
  var FOOTER = `<footer class="site">
  <div class="container">
    <div class="fcols">
      <div>
        <div class="logo"><img src="assets/bunya-logo-white.png" alt="Bunya" class="logo-img"></div>
        <p class="tagline">The command centre advice firms own. Built on Microsoft, in your tenancy, to your firm's way of working.</p>
      </div>
      <div><h4>Platform</h4><a href="command-centre.html">Command Centre</a><a href="broadcast-hq.html">Broadcast HQ</a><a href="bunya-voice.html">Bunya Voice</a></div>
      <div><h4>Resources</h4><a href="cost-calculator.html">Cost calculator</a><a href="vs-traditional-crm.html">Bunya vs a CRM</a><a href="xplan-alternative.html">Xplan alternative</a><a href="advice-software-alternatives.html">Alternatives compared</a><a href="faq.html">FAQ</a><a href="blog.html">Insights</a></div>
      <div><h4>Company</h4><a href="about.html">About</a><a href="partners.html">Partners</a><a href="case-studies.html">Case studies</a><a href="contact.html">Contact</a></div>
      <div><h4>Get started</h4><a href="contact.html#check">Run the free check</a><a href="contact.html">Book a demo</a></div>
    </div>
    <div class="fine"><span>&copy; 2026 Bunya. The operating system for Australian financial advice firms.</span><span>Australia &middot; Power Platform delivery</span></div>
  </div>
</footer>`;
  function mount() {
    var slot = document.getElementById('site-footer');
    if (slot) slot.outerHTML = FOOTER;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
