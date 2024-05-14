import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> { }
}

export abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public baseUrl = {
        msUsers: 'https://fluyapp.com/api/ms_users',
        msEntities: 'https://fluyapp.com/api_entities',
        msMoving: 'https://fluyapp.com/api_moving',
        msDevices: 'https://fluyapp.com/devices',
        msVideo: 'https://fluyapp.com/video',
        msAnalytics: 'https://fluyapp.com/api_analytics',
        msNotifications: 'https://fluyapp.com/api_notifications',
        msSocket: 'https://fluyapp.com/socket'
    };


    public constructor(headers: any) {

        if (typeof window == 'undefined') {

            this.instance = axios.create({
                //baseURL,
            });

            this.baseUrl = {
                msUsers: 'http://msusers-clusterip-srv:8091/api/ms_users',
                msEntities: 'http://msentities-clusterip-srv:8092/api_entities',
                msMoving: 'http://msmoving-clusterip-srv:8093/api_moving',
                msDevices: 'http://msdevices-clusterip-srv:8099/devices',
                msVideo: 'http://msvideo-clusterip-srv:8097/video',
                msAnalytics: 'http://msanalytics-clusterip-srv:8090/api_analytics',
                msNotifications: 'http://msnotification-clusterip-srv:8089/api_notifications',
                msSocket: 'http://mssocketvideo-clusterip-srv:8098/socket'
            };

            if (headers) {
                this.instance.defaults.headers = headers
            }


        } else {
            this.instance = axios.create({
                //baseURL,
            });
        }
        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }
    private _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest as any,
            this._handleError,
        );
    };

    private _handleRequest = (config: AxiosRequestConfig) => {

        if (!config.headers)
            return

        if (typeof window == 'undefined') {
            config.headers['Host'] = 'fluyapp.biz';
        } else {
            config.headers['Authorization'] = window.localStorage.getItem('token') || "";
            config.headers['Authticket'] = window.localStorage.getItem('authticket') || "";
        }

        return config;
    };


    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        );
    };

    private _handleResponse = ({ data }: AxiosResponse) => data;

    protected _handleError = (error: any) => {

        if (error && error.response && error.response.status == 401) {

            if (typeof window != 'undefined') {

                window.localStorage.removeItem('token');
                window.localStorage.removeItem('user');
                //window.location.reload()

            }

        }

        if (error && error.response && error.response.status == 500 && error.response?.data?.message)
            toast.error(error.response?.data?.message)

        return Promise.reject(error);

    }
}
