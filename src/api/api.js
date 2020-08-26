import axios from "axios"
import { Notification } from "element-ui"
import router from "../router"
const baseUrl = "/static/data";

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    var message = "";
    switch (error.response.status) {
        case 401:
            message: "授权错误"
            router.push({ path: "/login" });
            break;
    }
    Notification({
        title: "出错了",
        type: "error",
        message: message
    });
    return Promise.reject(error);
})

export const loginUserUrl = parms => {
    var url = baseUrl + "/user/login.json";
    return axios.get(url);
}
export const getUsersUrl = parms => {
    var url = baseUrl + "/user/get.json";
    return axios.get(url);
}
export const getBikesUrl = parms => {
    var url = baseUrl + "/bike/get.json";
    return axios.get(url);
}
export const getBikeDetailUrl = parms => {
    var url = baseUrl + "/bike/getDetail.json";
    return axios.get(url);
}
export const getUserDataUrl = parms => {
    var url = baseUrl + "/statistics/userSex.json";
    return axios.get(url);
}
export const getUserAreaUrl = parms => {
    var url = baseUrl + "/statistics/userArea.json";
    return axios.get(url);
}
export const getUserAgeUrl = parms => {
    var url = baseUrl + "/statistics/userAge.json";
    return axios.get(url);
}