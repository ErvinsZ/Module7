import * as React from "react";
import {WiHumidity} from "react-icons/wi"

interface IWeatherProps {
    temperature: number | undefined,
    city: string | undefined,
    country: string | undefined,
    humidity: number | undefined,
    description: string | undefined,
    error: string | undefined
}

interface IWeatherStates {

}

class Weather extends React.Component<IWeatherProps, IWeatherStates> {
    constructor(props: IWeatherProps) {
        super(props);
    }

    render() {
        return (
            <>
            <div style={{paddingTop:"60px", fontWeight:500, fontSize:"30px", display:"flex", justifyContent:"space-evenly"}}>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} °C</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}<WiHumidity style={{paddingBottom:"7px", fontSize:"40px"}}/></p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error} </p>}
        
            </div>
            </>
        );
    }
};

export default Weather;