interface Window {
  smartlook: CallableFunction,
}

interface SmartlookOptions {
  id?: string,
  debug?: boolean,
}

interface ClientOptions {
  isClient(): boolean,
  router: import("vue-router").default
}
