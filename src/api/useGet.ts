import axios from "axios";
import api from "./api";
import React from "react";


const useGet = (endPoint:any) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(api + endPoint).then((res) => {
            console.log(res);
            setData(res.data.data)
        }).catch((err: any) => {
            console.log(err)
        })
    }, [])

    return [data];
}

export default useGet;