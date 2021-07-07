const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey("bbca70cc-0b6b-420a-b8e9-ada42f9bda10");

exports.colorizer = async (image_url) => {
    try {
        const res = await deepai.callStandardApi("colorizer", {
            image: image_url,
        });
        return res.output_url;
    } catch (e) {
        console.log("Error" + e);
    }
};
