import React from "react";
const Following = (props) => {
    const original_image = props.original_image;
    const colored_image = props.colored_image;

    return (
        <div>

            <div className="HeadingContainer"><h2 className="Heading">Images:</h2></div>
            <section className="headSec">
                <div className="cont">
                    <div className="sec5"><h3>Original Image</h3></div>
                    <div className="sec6"><img  className="img1" src={original_image} alt="" /></div>
                </div>
                <div  className="cont">
                    <div className="sec5"><h3>Converted Image</h3></div>
                    <div className="sec6"><img className="img1" src={colored_image} alt="" /></div>
                </div>
            </section>
            
        </div>
    );
};

export default Following;
