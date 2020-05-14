import React, {Component} from 'react';

const list = [
    {
        id: 0,
        course: "SE",
        years: 4
    },
    {
        id: 1,
        course: "CS",
        years: 3
    },
    {
        id: 2,
        course: "TE",
        years: 4
    },
    {
        id: 3,
        course: "BIS",
        years: 3
    },
    {
        id: 4,
        course: "CIS",
        years: 3
    }
]

//To search depending on the User's Input.
function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());

    }

}

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
        this.setState({searchTerm: event.target.value})
        console.log(`changes occurring are: ${event.target.value}`);
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text"
                           onChange={this.onSearchChange}
                    />
                </form>
                {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
                    <div key={item.id}>
                        <span>{item.course}</span>
                        <span>{item.years}</span>
                    </div>
                )}
            </div>

        );
    }
}

export default Form;