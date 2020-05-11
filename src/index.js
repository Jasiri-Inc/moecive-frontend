import React from 'react';
import {render} from 'react-dom';


const App = () => {
    return (
     <div>
         <h1>Hello</h1>
         <p>I just greet </p>
         <ol>
             <li>Hi</li>
             <li>Hey</li>

         </ol>
     </div>

    );
};


render(
   <App />,
    document.getElementById("root")
);

export default App;