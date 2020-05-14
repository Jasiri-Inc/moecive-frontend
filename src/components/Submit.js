import React, {Component} from 'react';

class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        console.log("Submitted !");
    }

    render() {
        return (
            <div>
                <span>
                    <button onClick={this.onSubmit}
                            type="button"
                    >
                    Submit!
                    </button>
                </span>
            </div>
        );
    }
}

export default SubmitButton;