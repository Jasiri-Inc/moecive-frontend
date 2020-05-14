import React from 'react';
import {render} from 'react-dom';

// Custom Components
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import Submit from "./components/Submit";


const App = () => {
    return (

        <div>
            <Header/>
            <Maincontent/>
            <Footer/>
            <Submit />
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