import React from "react";
import LogoComponent from "./LogoComponent";
import ViewTitleComponent from "./ViewTitleComponent";
import './Component.css';

class HeaderComponent extends React.Component {
    // Define Constructor
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    state={
        value:"",
    };
    //Define handleChange method
    handleChange(data) { 
        this.setState({value:data});
    }   

    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component with title from child: {this.state.value}</h2>
                <LogoComponent input={this.state.value}></LogoComponent>
                {/* Define event to handle changes in ViewTitleComponent */}
                <ViewTitleComponent input={this.state.value} handleChangeRef={this.handleChange}></ViewTitleComponent>
            </div>
        );
    }
}
export default HeaderComponent;