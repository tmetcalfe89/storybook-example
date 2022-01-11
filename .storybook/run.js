const path = require("path");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "Storybook Example",
  issuerBaseURL: `https://dev-2bman97t.us.auth0.com/`,
});

const app = express();

app.use(checkJwt);
app.use(express.static(path.join(__dirname, "../storybook-static")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
