export default defineNuxtConfig({
  modules: [
    '@productdevbook/chatwoot'
  ],

  chatwoot: {
    init: {
      websiteToken: 'bGVpmxKWhQ6wdEHD83dwLZbj',
      baseUrl: 'https://app.chatwoot.com'
    },
  }
})
