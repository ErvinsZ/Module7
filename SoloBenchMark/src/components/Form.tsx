import * as React from "react";
import "./Form.css"

interface IFormComponentProps {
    getWeather: (e: any) => Promise<any>
}

interface IFormComponentStates {
}

class Form extends React.Component<IFormComponentProps, IFormComponentStates> {
    constructor(props: IFormComponentProps) {
        super (props);
    }
    
    render() {
        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="input" type="text" name="city" placeholder="City.."/>
                <input className="input" type="text" name="country" placeholder="Country.."/>
                <div className="wrapper">
                <button id="btn">Get Weather</button>
                </div>
            </form>
        );
    }
}

export default Form;