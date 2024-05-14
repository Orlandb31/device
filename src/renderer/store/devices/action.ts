
import { EntityTreeUuid } from "@fluyappgo/commons";
import { DeviceBuilder, ElementBuilder, TemplateBuilder } from "@fluyappgo/commons/build/interfaces/builder";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Dispatch } from "react";
import { AddBackgroundDTO, AddElementDTO } from "../../dtos";
import { DevicesServices } from "../../services";

enum Type {
    ADD_ELEMENT = 'ADD_ELEMENT',
    REMOVE_ELEMENT = 'REMOVE_ELEMENT',
    ADD_BACKGROUND = "ADD_BACKGROUND",
    HIDE_ELEMENT = 'HIDE_ELEMENT',
    SELECT_ELEMENT = 'SELECT_ELEMENT',
    MODIFY_ELEMENT = 'MODIFY_ELEMENT',
    EDIT_BACKGROUND_OBJECT = 'EDIT_BACKGROUND_OBJECT',

    CREATE_DEVICE = 'CREATE_DEVICE',
    GET_DEVICE = 'GET_DEVICE',
    GET_DEVICE_TRACKING = 'GET_DEVICE_TRACKING',
    GET_DEVICES = 'GET_DEVICES',
    EDIT_DEVICE = 'EDIT_DEVICE',
    SET_DEVICE = 'SET_DEVICE',
    MODIFY_DEVICE = 'MODIFY_DEVICE',

    CREATE_TEMPLATE = 'CREATE_TEMPLATE',
    GET_TEMPLATE = 'GET_TEMPLATE',
    GET_TEMPLATES = 'GET_TEMPLATES',
    SET_TEMPLATE = 'SET_TEMPLATE',
    EDIT_TEMPLATE = 'EDIT_TEMPLATE',

    SET_RATIO = 'SET_RATIO',

    TTS = 'TTS',
}


class DevicesActionsClass {

    public headers: any = undefined;
    public Type = Type;

    public getTemplate = createAsyncThunk(
        Type.GET_TEMPLATE,
        async (data: string) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.getTemplate(data);
            return response.data;
        }
    )

    public getTemplates = createAsyncThunk(
        Type.GET_TEMPLATES,
        async () => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.getTemplates();
            return response.data;
        }
    )

    public getDeviceTracking = createAsyncThunk(
        Type.GET_DEVICE_TRACKING,
        async (data: any) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.getDeviceTracking(data);
            return response.data;
        }
    )

    public getDevice = createAsyncThunk(
        Type.GET_DEVICE,
        async (data: string) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.getDevice(data);
            return response.data;
        }
    )

    public getDevices = createAsyncThunk(
        Type.GET_DEVICES,
        async (data: EntityTreeUuid) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.getDevices(data);
            return response.data;
        }
    )

    public editDevice = createAsyncThunk(
        Type.EDIT_DEVICE,
        async (data: TemplateBuilder) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.updateDevice(data);
            return response.data;
        }
    )


    public createDevice = createAsyncThunk(
        Type.CREATE_DEVICE,
        async (data: DeviceBuilder) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.createDevice(data);
            return response.data;
        }
    )

    public editTemplate = createAsyncThunk(
        Type.EDIT_TEMPLATE,
        async (data: TemplateBuilder) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.updateTemplate(data);
            return response.data;
        }
    )

    public createTemplate = createAsyncThunk(
        Type.CREATE_TEMPLATE,
        async (data: TemplateBuilder) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.createTemplate(data);
            return response.data;
        }
    )

    public tts = createAsyncThunk(
        Type.TTS,
        async (data: any) => {
            const devicesApi = new DevicesServices(this.headers);
            const response: any = await devicesApi.tts(data);
            return response.data;
        }
    )



    public setDevice = (data: DeviceBuilder) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.SET_DEVICE, payload: data })
        }
    }

    public setTemplate = (data: TemplateBuilder) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.SET_TEMPLATE, payload: data })
        }
    }


    public setRatio = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.SET_RATIO, payload: data })
        }
    }

    public modifyDevice = (data: DeviceBuilder) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.MODIFY_DEVICE, payload: data })
        }
    }

    public modifyElement = (data: ElementBuilder) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.MODIFY_ELEMENT, payload: data })
        }
    }

    public selectElement = (data: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.SELECT_ELEMENT, payload: data })
        }
    }

    public removeElement = (data: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.REMOVE_ELEMENT, payload: data })
        }
    }

    public hideElement = (data: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.HIDE_ELEMENT, payload: data })
        }
    }

    public addElement = (data: AddElementDTO) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.ADD_ELEMENT, payload: data })
        }
    }

    public addBackground = (data: AddBackgroundDTO) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.ADD_BACKGROUND, payload: data })
        }
    }




}

export const DevicesActions = new DevicesActionsClass()