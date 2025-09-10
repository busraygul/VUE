//her sayfada http localhost3000 i yazmak yerine proje genelininde kullanabilmek için burada import ediyoruz
import axios from "axios";

export const appAxios = axios.create({
    baseURL: "http://localhost:3000"
});