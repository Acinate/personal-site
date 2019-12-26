import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cors, {CorsOptions} from "cors";

import {PORT} from "./util/secrets";
// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as blogController from "./controllers/blog";

// Create Express server
const app = express();

// Domain Whitelist
const whitelist = [
  "http://jefthimi.net/",
  "http://www.jefthimi.net/",
  "http://localhost:8080"
];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }
};

// Express configuration
app.set("port", PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

/**
 * Server routes.
 */
app.get("/", homeController.index);
app.get("/blog", blogController.posts);

export default app;
