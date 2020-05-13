import React from 'react';

const list = [
    {
        "name": "James",
        "age": 20,
        "objectID": 0

    },
    {
        "name": "Zoo",
        "age": 17,
        "objectID": 1

    },
    {
        "name": "James",
        "age": 73,
        "objectID": 2

    },
    {
        "name": "James",
        "age": 73,
        "objectID": 2

    },
]

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: list,
        };
    }

    render() {
        return (
            <div>
                {list.map(item => <div key={item.objectID}>
                    <br/>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <br/>
                    <span>
                        <button onClick={() => this.onDismiss(item.objectID)}
                                type="button">
                            Dismiss

                        </button>
                    </span>
                </div>)}
            </div>
        );
    }
}

export default Header;