import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID gz4R27u9-SuuQl6PMCeqw9_j3D1SJjNeUyQJLnBDLvE"

    }
})

