import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import bodyParser from "body-parser";
import { Helmet } from "react-helmet";

import App from "./src/app";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  const gtmHead = `<!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KGBZ5X2');</script>
  <!-- End Google Tag Manager -->`;

  const gtmBody = `<!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGBZ5X2"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->`;

  const html = `
    <html>
        <head>
          ${gtmHead}
          ${helmet.meta.toString()}
          ${helmet.title.toString()}
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
          ${gtmBody}
        <script src="client_bundle.js"></script>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App Running on ${PORT}`);
});
