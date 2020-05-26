import React, {useState} from "react";

const counterFun = () => {
    const [count, updateCount] = useState(0);

    return(
        <div>
            <p>You clicked it {count}</p>
            <button
            onClick={() => updateCount(count + 1)}
            >
                Click Me
            </button>
        </div>
    )
}
export default counterFun;