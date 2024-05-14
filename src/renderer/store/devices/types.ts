import { ResponseDTO } from "@fluyappgo/commons";
import { Background, DeviceBuilder, DeviceTracking, ElementBuilder, TemplateBuilder } from "@fluyappgo/commons/build/interfaces/builder";
import { AddBackgroundDTO, AddElementDTO } from "../../dtos";

export interface TemplateState {
    template: TemplateBuilder;
    templates: TemplateBuilder[];
    loading: boolean;
    element: ElementBuilder;
    device: DeviceBuilder;
    devices: DeviceBuilder[];
    deviceTracking: DeviceTracking;
}


interface DeviceTrackingAction {
    type: String,
    payload: DeviceTracking;
}

interface TemplateAction {
    type: String,
    payload: TemplateBuilder;
}

interface TemplatesAction {
    type: String,
    payload: TemplateBuilder[];
}

interface AddElementAction {
    type: String,
    payload: AddElementDTO;
}

interface AddBackgroundAction {
    type: String,
    payload: AddBackgroundDTO;
}

interface ResponseDTOAction {
    type: String,
    payload: ResponseDTO;
}

interface ElementIDdAction {
    type: String,
    payload: string;
}

interface RatioAction {
    type: String,
    payload: number;
}




export type TemplateActionType = TemplateAction;
export type TemplatesActionType = TemplatesAction;
export type AddBackgroundActionType = AddBackgroundAction;
export type AddElementActionType = AddElementAction;
export type ResponseDTOActionType = ResponseDTOAction;
export type ElementIDdActionType = ElementIDdAction;
export type RatioActionType = RatioAction;
export type DeviceTrackingActionType = DeviceTrackingAction;

