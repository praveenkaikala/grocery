const { default: axios } = require("axios");

const AxiosPrivate=axios.create(
    {
        baseURL:"http://192.168.210.18:1337/api",
    }
)
export const baseUrl="http://192.168.210.18:1337"
export const getCategory=()=>AxiosPrivate.get("/categories/?populate=*");
export const getSliders=()=>AxiosPrivate.get('/sliders/?populate=*').then((data)=>{
    return data.data.data;
}).catch((error)=>{
    console.log(error)
})


