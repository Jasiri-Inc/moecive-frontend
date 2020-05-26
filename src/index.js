import React from 'react';
import {render} from 'react-dom';

// Custom Components
import Form from "./components/Form";


const App = () => {
    return (

        <div>

           <Form />

        </div>

    );
};


const rootElement = document.getElementById("root");
render(
    <App/>,
    rootElement
);

//(HRM)-Hot Module Replacement
// if (module.hot) {
//     module.hot.accept();
// }