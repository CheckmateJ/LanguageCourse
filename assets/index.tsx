import React = require("react");
import ReactDOM = require("react-dom/client");
import App from "./Test";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
