import React from 'react';

class ViewTitleComponent extends React.Component {
    // Define Constructor
    constructor(props){
        super(props);
        this.handleValChange = this.handleValChange.bind(this);
    }

    // Define handleValChange method
    handleValChange(event) {
        this.props.handleChangeRef(event.target.value);
     }

    render() {
        return (
            <div className="ViewTitleComponent">
                <form>
                    <div>
                        <label>View Title:</label>
                        {/* Define input foeld to handle changes */}
                        <input onChange={this.handleValChange} />
                    </div>
                </form>
                <p>Title value: {this.props.input}</p>
            </div>
        );
    }
}
export default ViewTitleComponent;