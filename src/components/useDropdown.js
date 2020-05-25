import React, {useState} from "react";


const useDropdown = (label, defaultState, options ) => {
    const [state, updateState] = useState("");
    const id = ``;

    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
            id={id}
            value={state}
            onClick={event => updateState(event.target.value)}
            onBlur={event => updateState(event.value)}
            >
                {options.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );
return [state, Dropdown];
}

export default useDropdown;