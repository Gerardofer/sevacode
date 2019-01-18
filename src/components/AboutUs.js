import React, { Component } from "react";

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
        opacity: 1,
    },
    facesIndividual: {
        padding: 5,
        flexDirection: "column",
        marginTop: 20,
        width: "15%",
    },
}

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5,
        };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.namePop = this.namePop.bind(this);
    }

    mouseEnter() {
        console.log("mouse entered");
        this.setState({ opacity: 0.6 })
        this.namePop();
    }

    mouseLeave() {
        console.log("mouse left");
        this.setState({ opacity: 1 })
    }

    namePop() {
        alert("name pop, bitch");
    }

    render() {
        let pics = ["bg", "sg", "gf", "sd", "yp"];

        let images = pics.map(image => {
            return <img key={image} {...this.state.opacity} style={aboutUsStyles.facesIndividual} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} src={require(`../images/${image}.jpeg`)} alt="" />
        })
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
                        {images}
                    </div>

                </div>
            </section>

        )
    }
}

export default AboutUs;