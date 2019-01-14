import React, { Component } from "react";
import logo from "../images/SevaCode_Logo.png";

const homeStyles = {
    layout: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
    },
    logo: {
        margin: "0 auto",
        width: 550,
        height: 175,
    }
}

class Home extends Component {
    render() {
        return (
            <div
                style={homeStyles.layout}
            >
                <img
                    src={logo}
                    style={
                        homeStyles.logo
                    }
                    alt="Sevacode"
                />
            </div>
        )
    }
}

export default Home;
