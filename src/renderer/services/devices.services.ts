import { EntityTreeUuid, ResponseDTO } from "@fluyappgo/commons";
import { DeviceBuilder, TemplateBuilder } from "@fluyappgo/commons/build/interfaces/builder";
import axios from "axios";
import { EntityTreeWithDateRange, } from "../dtos";
import { HttpClient } from "../helpers/httpClient";

export class DevicesServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public tts = (data: { text: string, locale: string }) => {
        return this.instance.post<any>(`${this.baseUrl.msUsers}/tts/text-to-speech`, data)
    };

    public createDevice = (data: DeviceBuilder) => {
        return this.instance.post<any>(`${this.baseUrl.msDevices}/create-device`, { device: data })
    };

    public updateDevice = (data: TemplateBuilder) => {
        return this.instance.post<any>(`${this.baseUrl.msDevices}/update-device`, { device: data })
    };

    public getDeviceTracking = (data: { deviceUuid: string, branchUuid: string }) => {
        return this.instance.get<any>(`${this.baseUrl.msDevices}/get-device-tracking/${data.deviceUuid}`, {
            params: {
                branchUuid: data.branchUuid
            }
        })
    };

    public getDevice = (data: string) => {
        return this.instance.get<any>(`${this.baseUrl.msDevices}/get-device/${data}`)
    };

    public getDevices = (data: EntityTreeUuid) => {
        return this.instance.get<any>(`${this.baseUrl.msDevices}/get-devices`, { params: data })
    };

    public createTemplate = (data: TemplateBuilder) => {
        return this.instance.post<any>(`${this.baseUrl.msDevices}/create-template`, { template: data })
    };

    public updateTemplate = (data: TemplateBuilder) => {
        return this.instance.post<any>(`${this.baseUrl.msDevices}/update-template`, { template: data })
    };

    public getTemplate = (data: string) => {
        return this.instance.get<any>(`${this.baseUrl.msDevices}/get-template/${data}`)
    };

    public getTemplates = () => {
        return this.instance.get<any>(`${this.baseUrl.msDevices}/get-templates`)
    };

    public getUrlImage = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msDevices}/bucket-auth-caller-image`, data)
    };

    public putObject = (url: string, file: any) => {
        axios.create();
        return axios.put(url, file)
    }


}

