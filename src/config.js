require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'sbw',
    description: 'sbw - StartBodyweight.com routine application.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'sbw - StartBodyweight.com routine application',
        'og:image': 'https://sbw-makiator.rhcloud.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'sbw',
        'og:description': 'sbw - StartBodyweight.com routine application',
        'twitter:card': 'summary',
        'twitter:site': '@msvalina',
        'twitter:creator': '@msvalina',
        'twitter:title': 'sbw',
        'twitter:description': '',
        'twitter:image': 'https://sbw-makiator.rhcloud.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  }
}, environment);
