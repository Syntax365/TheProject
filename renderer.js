import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/reducers";

import App from "./src/app";

const gtmHead = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGBZ5X2');</script>`;

const gtmBody = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGBZ5X2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

export default function renderer(req, res) {
  const store = createStore(reducers);

  const context = {};
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();

  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
            ${gtmHead}
            <meta name="viewport" content="width=320, initial-scale=1">
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
        </head>
        <body>
            ${gtmBody}
            <div id="root">${content}</div>
        </body>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(
          preloadedState,
        ).replace(/</g, "\\u003c")}</script>
        <script src="client_bundle.js"></script>
    </html>`;

  res.send(html);
}
