import React from 'react';
import {render} from 'react-dom';

// Custom Components
import Dismiss from "./components/Dismiss";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import Submit from "./components/Submit";
import Form from "./components/Form";


const App = () => {
    return (

        <div>
            <Dismiss/>
            <Maincontent/>
            <Footer/>
            <Submit />
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
if (module.hot) {
    module.hot.accept();
}