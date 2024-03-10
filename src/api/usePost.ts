import axios from "axios";
import api from "./api";
import React from "react";


const usePost = (endPoint: any, body: any) => {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        axios.post(api + endPoint, body).then((res) => {
            console.log(res);
            setData(res.data.data)
        }).catch((err: any) => {
            console.log(err)
        })
    }, [])

    return [data];
}

export default usePost;