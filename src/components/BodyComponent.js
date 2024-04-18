import React from "react";
import BodyContentComponent from "./BodyContentComponent";
import './Component.css';

class BodyComponent extends React.Component {
    // define BodyComponent constructor 
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }
    

    state ={
        value:""
    }
    //method to handle change event   
    handleChange(event) {
        this.setState({value:event.target.value});
     }
    render() {
        return (
            <div className="BodyComponent">
                <h2> I am Body Component!!</h2>
                <form>
                    <div>
                        <label>Body text:</label>
                        {/* Define Input field to take in data and set State value */}
                        <input type='text' onChange={this.handleChange} />
                        
                        
                        <p>State value: {this.state.value}</p>
                    </div>
                </form>
                <BodyContentComponent text={this.state.value}></BodyContentComponent>
                <BodyContentComponent text={this.state.value}></BodyContentComponent>
            </div>
        );
    }
}
export default BodyComponent;