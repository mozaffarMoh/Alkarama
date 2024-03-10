import axios from "axios";
import api from "./api";
import React from "react";


const usePost = (endPoint: any, body: any) => {
    const [data, setData] = React.useState();

    const getData = () => {
        axios.post(api + endPoint, body).then((res) => {
            console.log(res);
            setData(res.data.data)
        }).catch((err: any) => {
            console.log(err)
        })
    }

    return [data, getData];
}

export default usePost;