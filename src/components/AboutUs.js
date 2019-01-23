import React, { Component } from "react";
import bg from "../images/bg.jpeg";
import sd from "../images/sd.jpeg";
import sg from "../images/sg.jpeg";
import gf from "../images/gf.jpeg";
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
        flexDirection: "column",
        marginTop: 20,
        width: "15%",
    },
    withOpacity: {
        padding: 5,
        flexDirection: "column",
        marginTop: 20,
        width: "15%",
        opacity: 0.5
    },
}

class AboutUs extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         opacity: 1,
    //         padding: 5,
    //         flexDirection: "column",
    //         marginTop: 20,
    //         width: "15%",
    //     }
    //     this.mouseEnter = this.mouseEnter.bind(this);
    //     this.mouseLeave = this.mouseLeave.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    state = {
        hover: false
    }

    // mouseEnter() {
    //     console.log("mouse entered");
    //     this.setState({ opacity: 0.5 })
    // }

    // mouseLeave() {
    //     console.log("mouse left");
    //     this.setState({ opacity: 1 })
    // }

    // handleClick() {
    //     this.setState({ opacity: 0.5 })
    // }

    componentDidMount() {
        window.addEventListener("mouseover", this.handleMouseEnter);
    }

    componentWillUnmount() {
        window.removeEventListener("mouseout", this.handleMouseOut);
    }

    handleMouseEnter = (event) => {
        console.log(event);
        // this.setState({
        //     hover: true,
        // })
    }

    handleMouseOut = () => {
        console.log("leaving");
        this.setState({
            hover: false,
        })
    }

    render() {
        // let pics = ["bg", "sg", "gf", "sd", "yp"];

        // let imageArray = images.map(image => {
        //     return (
        //         < img
        //             key={image.id}
        //             style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
        //             src={image.img}
        //             alt={image.id}
        //         />
        //     )
        // });

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
                        mouseon={this.handleMouseEnter}
                        mouseoff={this.handleMouseOut}
                    >
                        <img
                            src={bg}
                            style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
                        // mouseon={this.handleMouseEnter}
                        // mouseoff={this.handleMouseOut}
                        />
                        <img
                            src={sd}
                            style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
                        // mouseon={this.handleMouseEnter}
                        // mouseoff={this.handleMouseOut}
                        />
                        <img
                            src={sg}
                            style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
                        // mouseon={this.handleMouseEnter}
                        // mouseoff={this.handleMouseOut}
                        />
                        <img
                            src={gf}
                            style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
                        // mouseon={this.handleMouseEnter}
                        // mouseoff={this.handleMouseOut}
                        />
                        <img
                            src={yp}
                            style={this.state.hover === true ? aboutUsStyles.withOpacity : aboutUsStyles.facesIndividual}
                        // mouseon={this.handleMouseEnter}
                        // mouseoff={this.handleMouseOut}
                        />
                    </div>

                </div>
            </section >
        )
    }
}

export default AboutUs;