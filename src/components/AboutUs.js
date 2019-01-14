import React, { Component } from "react";


const aboutUsStyles = {
    layout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: "100%",
    }
}
class AboutUs extends Component {
    render() {
        return (
            <div
                style={aboutUsStyles.layout}
            >
                <h1>This is the About Us Section</h1>
            </div>
        )
    }
}

export default AboutUs;