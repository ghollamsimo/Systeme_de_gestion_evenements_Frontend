import {Config} from "../helpers/ConfigHelper.ts";
import axios from "axios";

const Api = () => {
    const token = localStorage.getItem("token");
    return axios.create(Config(token));
}

export default Api