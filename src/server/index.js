import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../shared/store/configureStore'
import serialize from "serialize-javascript"
import App from '../shared/App'
import { ServerStyleSheet } from 'styled-components'

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/*', (req, res, next) => {
  const preloadedState = {
    counter: {
      count: Math.round(Math.random() * 100)
    }
  }

  const store = configureStore(preloadedState)
  const styleSheet = new ServerStyleSheet()

  const markup = renderToString(
    styleSheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={preloadedState}>
          <App />
        </StaticRouter>
      </Provider>
    )
  )

  const styles = styleSheet.getStyleTags()

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR for React</title>
        <script src="/bundle.js" defer></script>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
        </script>
        ${styles}
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('App Started')
})
