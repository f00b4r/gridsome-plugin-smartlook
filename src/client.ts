export default function (_Vue: any, options: SmartlookOptions, { isClient, router }: ClientOptions) {
  // Validation
  if (!options.id) {
    console.error('Missing Smartlook ID')
    return
  }

  // Only client side is supported
  if (!isClient) return

  // make sure we're not debugging
  if (options.debug !== true) {
    // Disable tracking on localhost
    if (window.location.host.startsWith('localhost')) return;
  }

  // Show tracking
  console.log('[gridsome-smartlook-plugin] 👀')

  // Init smartlook
  window.smartlook || (function (d) {
    // @ts-ignore
    var o = window.smartlook = function () { o.api.push(arguments) }, h = d.getElementsByTagName('head')[0];
    // @ts-ignore
    var c = d.createElement('script'); o.api = new Array(); c.async = true; c.type = 'text/javascript';
    c.charset = 'utf-8'; c.src = 'https://rec.smartlook.com/recorder.js'; h.appendChild(c);
  })(document);

  window.smartlook('init', options.id);

  router.afterEach(function (to) {
    window.smartlook('navigation', to.fullPath);
  });
}
