import React from 'react';
import {render} from 'react-dom';


const Hello = () => {
    return (
       <ol>
           <li>1</li>
           <li>2</li>
           <li>3</li>
       </ol>
    );
};


render(
   <Hello />,
    document.getElementById("root")
);