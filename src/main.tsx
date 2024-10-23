import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SessionProvider } from "./context/SessionContext";

import { App } from "./App";

// TODO, MAKE IT LAZY LOAD WHEN DOING THE BACKEND
import { Amplify } from "aws-amplify";
import awsExports from "./amplifyconfiguration.json";
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SessionProvider>
          <App />
        </SessionProvider>
      </BrowserRouter>
    </HelmetProvider>
  // </React.StrictMode>
);
