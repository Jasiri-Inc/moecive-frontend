import React from 'react';

const list = [
    {
        "name": "James",
        "age": 20,

    },
    {
        "name": "Zoo",
        "age": 17,

    },
    {
        "name": "James",
        "age": 73,

    },
]

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: list,
        };
    }
}

export default Header;