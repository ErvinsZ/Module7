import * as React from "react";

class Titles extends React.Component {
    render() {
        return (
            <div style={{display:"flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"}}>

                <h1>Weather Forecast</h1>
                <p>Enter Location</p>
            </div>
        );
    }
};

export default Titles;