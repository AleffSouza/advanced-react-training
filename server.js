require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015', 'react-app'],
})
require('ignore-styles')

const fs = require('fs')
const express = require('express')

const { createElement } = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')

const App = require('./src/components/app/App').default
const { storeFactory } = require('./src/store')

const app = express()
const indexFile = fs.readFileSync(`${__dirname}/build/index.html`, 'utf8')

function bootstrapApp (store) {
  const appEntry = createElement(
    Provider, { store }, createElement(
      App))

  return renderToString(appEntry)
}

app.use('/static', express.static(`${__dirname}/build/static/`))
app.use((request, response) => {
  /*
    <Provider store={store}>
    <App/>
  </Provider>,
  */
  const store = storeFactory()
  const renderedApp = bootstrapApp(store)
  response.send(indexFile.replace('<span id="ssr-content"></span>', renderedApp))
})

app.listen(8080)