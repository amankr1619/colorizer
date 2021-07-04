import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { colorizer } from "../api/deepai";

const Following = () => {
    const image_url =
        "https://images.unsplash.com/photo-1581388847562-d5a56eec1cfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80";

    const [coloredUrl, setColoredUrl] = useState("");

    const getLinks = async () => {
        const output_url = await colorizer(image_url);
        console.log(`here output url ${output_url}`);
        setColoredUrl(output_url);
    };

    useEffect(() => {
        getLinks();
        console.log(`here colored url ${coloredUrl}`);
    }, []);

    return (
        <div>
            <h1>following page</h1>
            <div>
                <h3>this is original image</h3>
                <img src={image_url} alt="" />
            </div>
            <div>
                <h3>this is colored image</h3>
                <img src={coloredUrl} alt="" />
            </div>
        </div>
    );
};

export default Following;
