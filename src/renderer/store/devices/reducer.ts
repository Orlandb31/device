import { Background, DeviceBuilder, DeviceTracking, ElementBuilder, ElementType, TemplateBuilder } from "@fluyappgo/commons/build/interfaces/builder";
import { AddElementDTO } from "../../dtos";
import { DevicesActions } from "./action";
import { TemplateActionType, TemplateState, TemplatesActionType, AddBackgroundActionType, AddElementActionType, ElementIDdActionType, RatioActionType, DeviceTrackingActionType } from "./types";
import { v4 as uuidv4 } from 'uuid';


const initialState: TemplateState = {
    loading: false,
    template: {
        name: 'hola',
        children: [{
            _id: uuidv4(),
            type: ElementType.background,
            visible: true,
            objects: [],
            children: [],
            expiresAt: '',
            permanent: true,
            backgrounColor: 'gray',
            order: 1
        }]
    },
    templates: [],
    element: {},
    device: {},
    devices: [],
    deviceTracking: {}
}

export function devicesReducer(
    state = initialState,
    action: TemplateActionType & TemplatesActionType & AddElementActionType
        & ElementIDdActionType & RatioActionType & DeviceTrackingActionType
): TemplateState {
    switch (action.type) {

        case DevicesActions.Type.ADD_ELEMENT: {

            const data: AddElementDTO = action.payload;
            let template: ElementBuilder = JSON.parse(JSON.stringify(state.template))

            const getResultChild = (element: ElementBuilder) => {
                let local = { ...element }
                let children: ElementBuilder[] = local?.children ? JSON.parse(JSON.stringify(local.children)) : [];
                let newChildren: ElementBuilder[] = [];
                children.forEach((elem) => {
                    newChildren.push(getResultChild(elem));
                })
                if (element._id == data.parent) {
                    newChildren.push(data.element);
                }
                local = { ...local, children: newChildren };
                return local;
            }

            return {
                ...state,
                template: getResultChild(template)
            }

        }

        case DevicesActions.Type.HIDE_ELEMENT: {

            const data: string = action.payload;
            let template: ElementBuilder = JSON.parse(JSON.stringify(state.template))

            const getResultChild = (element: ElementBuilder) => {
                let local = { ...element }
                let children: ElementBuilder[] = local?.children ? JSON.parse(JSON.stringify(local.children)) : [];
                let newChildren: ElementBuilder[] = [];
                children.forEach((elem) => {
                    newChildren.push(getResultChild(elem));
                })
                if (local._id == data) {
                    local.visible = !local.visible || false;
                }
                local = { ...local, children: newChildren };
                return local;
            }

            return {
                ...state,
                template: getResultChild(template)
            }

        }


        case DevicesActions.Type.REMOVE_ELEMENT: {

            const data: string = action.payload;
            let template: ElementBuilder = JSON.parse(JSON.stringify(state.template))

            const getResultChild = (element: ElementBuilder) => {
                let local = { ...element }
                let children: ElementBuilder[] = local?.children ? JSON.parse(JSON.stringify(local.children)) : [];
                let newChildren: ElementBuilder[] = [];
                children.forEach((elem) => {
                    if (data != elem._id) {
                        newChildren.push(getResultChild(elem));
                    }
                })
                local = { ...local, children: newChildren };
                return local;
            }

            return {
                ...state,
                template: getResultChild(template)
            }

        }

        case DevicesActions.Type.MODIFY_DEVICE: {

            const data: DeviceBuilder = action.payload;


            return {
                ...state,
                device: data,
                devices: state.devices.map((dev) => {
                    if (dev._id == data._id) {
                        return data
                    }
                    return dev
                })
            }

        }

        case DevicesActions.Type.MODIFY_ELEMENT: {

            const data: ElementBuilder = action.payload;
            let template: ElementBuilder = JSON.parse(JSON.stringify(state.template))
            const elementSelected = state.element;

            const getResultChild = (element: ElementBuilder) => {
                let local = { ...element }
                let children: ElementBuilder[] = local?.children ? JSON.parse(JSON.stringify(local.children)) : [];
                let newChildren: ElementBuilder[] = [];

                if (data._id == element._id) {
                    local = data;
                }

                children.forEach((elem) => {
                    newChildren.push(getResultChild(elem));
                })
                local = { ...local, children: newChildren };

                return local;
            }

            return {
                ...state,
                template: getResultChild(template),
                element: elementSelected?._id == data._id ? data : state.element
            }

        }


        case DevicesActions.Type.SELECT_ELEMENT: {

            const data: string = action.payload;
            let template: ElementBuilder = JSON.parse(JSON.stringify(state.template))
            let elementSelected = {};

            const getResultChild = (element: ElementBuilder) => {
                let local = { ...element }
                let children: ElementBuilder[] = local?.children ? JSON.parse(JSON.stringify(local.children)) : [];
                let newChildren: ElementBuilder[] = [];

                if (local?._id == data) {
                    elementSelected = element;
                }

                children.forEach((elem) => {
                    newChildren.push(getResultChild(elem));
                })
                local = { ...local, children: newChildren };
                return local;
            }


            getResultChild(template)

            return {
                ...state,
                element: elementSelected
            }

        }


        case DevicesActions.Type.SET_TEMPLATE: {

            const data: TemplateBuilder = action.payload;

            return {
                ...state,
                template: data,
                element: {}
            }

        }

        case DevicesActions.Type.SET_DEVICE: {

            const data: DeviceBuilder = action.payload;

            return {
                ...state,
                device: data,
                template: data?.templates && data?.templates?.length > 0 ? data?.templates[0] : {},
                element: {}
            }

        }


        case DevicesActions.Type.SET_RATIO: {

            const ratio: number = action.payload;

            return {
                ...state,
                template: {
                    ...state.template
                }
            }

        }


        case DevicesActions.Type.GET_TEMPLATE + "/fulfilled": {

            const data: TemplateBuilder = action.payload;

            return {
                ...state,
                template: data
            }

        }


        case DevicesActions.Type.GET_TEMPLATES + "/fulfilled": {

            const data: TemplateBuilder[] = action.payload;

            return {
                ...state,
                templates: data
            }

        }


        case DevicesActions.Type.GET_DEVICE_TRACKING + "/fulfilled": {

            const data: DeviceTracking = action.payload;

            return {
                ...state,
                deviceTracking: data
            }

        }

        case DevicesActions.Type.GET_DEVICE + "/fulfilled": {

            const data: DeviceBuilder = action.payload;

            return {
                ...state,
                device: data,
                template: data?.templates && data?.templates?.length > 0 ? data?.templates[0] : {},
            }

        }


        case DevicesActions.Type.GET_DEVICES + "/fulfilled": {

            const data: DeviceBuilder[] = action.payload;

            return {
                ...state,
                devices: data
            }

        }



        default:
            return state
    }
}