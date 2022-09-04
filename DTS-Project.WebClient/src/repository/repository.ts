import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { settings } from "@/constants/index";
import { localStorageService } from "@/services/localStorageService";

export class BaseClient {
    public axiosInstance: AxiosInstance;
    public Repository: any;

    public constructor(url: string) {
        const baseUrl = `https://localhost:7286/api/${url}`;
        this.Repository = {};
        this.axiosInstance = axios.create({
        baseURL: baseUrl,
        responseType: "json",
        timeout: 10000,
        headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                let token = localStorageService.GetToken();
                if (token) {
                    return new Promise(function (resolve, reject) {
                    originalRequest.headers["Authorization"] = `Bearer ${token}`;
                    resolve(axios(originalRequest));
                    });
                }
                }
                return Promise.reject(error);
            }
        );

        const responseBody = (res: any) => res.data;
        const processError = (err: any) => err.data;
        this.Repository = {
            get: (url: string, params = {}) =>
                this.axiosInstance.get(url, { params: params }).then(responseBody).catch(processError),
            post: (url: string, data: any) =>
                this.axiosInstance.post(url, data).then(responseBody).catch(processError),
            put: (url: string, data: any) =>
                this.axiosInstance.put(url, data).then(responseBody).catch(processError),
            delete: (url: string) =>
                this.axiosInstance.delete(url).then(responseBody).catch(processError),
            postWithFile: (url: string, data: any) =>
                this.axiosInstance.post(url, data, { headers: { "Content-Type": "multipart/form-data" } })
                                .then(responseBody),
        };
    }  
}
