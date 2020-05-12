import React from 'react';
import {render} from 'react-dom';
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";


const App = () => {
    return (

        <div>
            <Header/>
            <Maincontent/>
            <Footer/>
        </div>

    );
};


render(
    <App/>,
    document.getElementById("root")
);

//Hot Module Replacement
if(module.hot){
    module.hot.accept();
}