const { default: axios } = require("axios");

const AxiosPrivate=axios.create(
    {
        baseURL:"http://localhost:1337/api",
    }
)
export const baseUrl="http://localhost:1337"
export const getCategory=()=>AxiosPrivate.get("/categories/?populate=*");


