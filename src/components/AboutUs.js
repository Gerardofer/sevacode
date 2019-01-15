import React, { Component } from "react";
import bg from "../images/bg.jpeg";
import sg from "../images/sg.jpeg";
import gf from "../images/gf.jpeg";
import sd from "../images/sd.jpeg";
import yp from "../images/yp.jpeg";

const aboutUsStyles = {
    sectionLine: {
        backgroundColor: "yellow",
        color: "yellow",
        width: "65%"
    },
    layout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "100%",
        height: "100%",
    },
    headers: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "auto",
    },
    paragraph: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "60%",
    },
    facesDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    facesIndividual: {
        padding: 5,
        marginTop: 20,
        width: "15%",
    },
    namesDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    }
}
class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isClicked: false,
        };
    }

    handleClick(e) {
        e.preventDefault();
        console.log("face clicked");
        this.setState(this.toggleClickState);
    }

    toggleClickState(state) {
        return {
            isClicked: !state.isClicked,
        };
    }

    render() {
        return (
            <section>
                <div>
                    <hr
                        style={aboutUsStyles.sectionLine}
                    />
                </div>

                <div>
                    <h2
                        style={aboutUsStyles.headers}
                    >
                        Who We Are
                    </h2>

                    <p
                        style={aboutUsStyles.paragraph}
                    >
                        We're a group of Junior Engineers who went to a MERN Full Stack coding bootcamp together. While there, we worked on a multitude of class projects and assignments, ranging from simple To-Do lists to complex single-page applications in React. At SevaCode, you can rest assured that you won't be getting just one set of eyes on your project, there will be 5. Each of us has certification proving our skills as Full Stack Engineers, and we hope you'll choose us for your next project.
                    </p>

                    <div
                        style={aboutUsStyles.facesDiv}
                    >
                        <img
                            src={bg}
                            style={aboutUsStyles.facesIndividual}
                            alt="Bahadur Ghataorhe"
                            onClick={this.handleClick}
                        />
                        <img
                            src={sg}
                            style={aboutUsStyles.facesIndividual}
                            alt="Sofiane Guerfi"
                        />
                        <img
                            src={gf}
                            style={aboutUsStyles.facesIndividual}
                            alt="Gerardo Fernandez"
                        />
                        <img
                            src={sd}
                            style={aboutUsStyles.facesIndividual}
                            alt="Sandon Du"
                        />
                        <img
                            src={yp}
                            style={aboutUsStyles.facesIndividual}
                            alt="Yogi Patel"
                        />
                    </div>

                    <div
                        style={aboutUsStyles.namesDiv}
                    >
                        {
                            this.state.isClicked &&
                            <h4>
                                Bahadur Ghataorhe
                            </h4>
                        }
                    </div>
                </div>
            </section>

        )
    }
}

export default AboutUs;