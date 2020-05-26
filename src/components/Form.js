import React, {useState, useEffect}from "react";

const IncrButton = () => {
    const [count, countUpdate] = useState(0);


    useEffect(() => {
        document.title = `you clicked ${count}`;
    })


    return(

        <div>
            <p>You clicked {count}</p>
            <button
            onClick={() => countUpdate(count + 1)}
            >
                click me
            </button>
        </div>

    )
}

export default IncrButton;