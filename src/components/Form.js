import React, {Component} from 'react';

const list = [
    {
        course: "SE",
        years: 4
    },
    {
        course: "CS",
        years: 3
    },
    {
        course: "TE",
        years: 4
    },
    {
        course: "BIS",
        years: 3
    },
    {
        course: "CIS",
        years: 3
    }
]

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list,
            searchTerm: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        console.log('Event Handle Working!');
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text"
                           onSearchChange={this.onSearchChange}
                    />
                </form>
            </div>

        );
    }
}

export default Form;