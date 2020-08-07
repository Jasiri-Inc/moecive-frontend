import React from "react";
import { render } from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn:
    "https://e63b522e35a445928268f8db25357edb@o356272.ingest.sentry.io/5381759",
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
