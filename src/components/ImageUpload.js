import React from "react";
import Following from "./Following";
import "../App.css"

import { colorizer } from "../api/deepai";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image_url: null,
            colored_url: null,
            isLoading: true,
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.onChange = this.onChange.bind(this);

    }

    async onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        await this.getLinks();
        console.log("converting...");
        console.log(this.state.colored_url);
        this.setState({ isLoading: false });
    }

    onChange(e) {
        this.setState({ image_url: e.target.value });
        console.log(e.target.value);
    }


    async getLinks() {
        this.state.colored_url = await colorizer(this.state.image_url);
    }



    render() {
        const { image_url, colored_url, isLoading } = this.state;
        if (isLoading)
            return (
                <div>
                    <div className="HeadingContainer"><h1 className="heading">Colorizer</h1></div>
                    <section className="headSec">
                        <div className="sec1">
                            <div className="sec3"><h2 className = "heading2">What is this Tool?</h2></div>
                            <div className="paragraph">
                            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?

                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                            </p>
                            <p>Ex: https://thumbs.dreamstime.com/b/canal-venice-bridge-gondolas-people-black-white-taken-rialto-italy-gondola-boats-111434192.jpg</p>
                            </div>
                            <img className="img" src='blackToColor.jpg' alt ="Black and White to colored" />
                        </div>
                        <div className="sec2">
                            <div className="sec3"><h2 className = "heading2">Try it here</h2></div>
                            <div className="sec3"><h3 className = "heading2">Enter Image URL:</h3></div>
                            <form className="form" onSubmit={this.onFormSubmit}>

                                <input className = "input1" type="text" onChange={this.onChange} />

                                <button className = "button1" type="submit">Convert</button>
                            </form>
                        </div>
                    </section>
                </div>
                
            );
        return (
            <div>
                <div className="HeadingContainer"><h1 className="Heading">Colorizer</h1></div>
                <div className="sec4">
                    <div className = "form2">
                    <div className="sec7"><h2 className="Heading">Convert some more images here: </h2></div>
                            <form className = "form3" onSubmit={this.onFormSubmit}>
                                <input className = "input1" type="text" onChange={this.onChange} />

                                <button className = "button1" type="submit">Convert</button>
                            </form>
                    </div> 
                </div>
                <Following
                    original_image={image_url}
                    colored_image={colored_url}
                />
            </div>
        );
    }
}

export default ImageUpload;
