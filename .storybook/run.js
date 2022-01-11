require("dotenv").config();
const path = require("path");
const express = require("express");
const { auth } = require("express-openid-connect");

const app = express();

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    secret: process.env.STORYBOOK_AUTH_SECRET,
    baseURL: process.env.STORYBOOK_AUTH_BASEURL,
    clientID: process.env.STORYBOOK_AUTH_CLIENTID,
    issuerBaseURL: process.env.STORYBOOK_AUTH_ISSUERBASEURL,
  })
);

app.use((req, res, next) => {
  req.oidc.isAuthenticated() ? next() : res.redirect("/login");
});

app.use(express.static(path.join(__dirname, "../storybook-static")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
