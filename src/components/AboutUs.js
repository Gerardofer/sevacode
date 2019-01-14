import React, { Component } from "react";


const aboutUsStyles = {
    sectionLine: {
        backgroundColor: "yellow",
        color: "yellow",
        width: "60%"
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
        width: "45%",
    },
    faces: {

    },
}
class AboutUs extends Component {
    render() {
        return (
            <div>
                {/* div for section line */}
                <div>
                    <hr
                        style={aboutUsStyles.sectionLine}
                    />
                </div>

                {/* section content */}
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


                </div>
            </div>

        )
    }
}

export default AboutUs;