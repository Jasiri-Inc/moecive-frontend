import React from 'react';
import {render} from 'react-dom';
import App from "./App";



const rootElement = document.getElementById("root");
render(
    <App/>,
    rootElement
);

//(HRM)-Hot Module Replacement
if (module.hot) {
    module.hot.accept('./App', () => {
        render(<App/>, rootElement)
    });
}