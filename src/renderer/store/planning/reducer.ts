import { CallerType } from "@fluyappgo/commons";
import { PlanningActions } from "./action";
import {
    AppointmentPlanningActionType,
    BranchPlanningActionType,
    callerActionType,
    callersActionType,
    DayPlanningActionType,
    DaysPlanningActionType,
    DepartmentPlanningActionActionType,
    ModifyPlanningActionActionType,
    PlanningState,
    ServicePlanningActionActionType,
    templateActionType,
    templatesActionType,
    TicketActionType,
    TicketNotesActionType,
    TicketsActionType,
    TicketTopicsActionType,
    TicketTopicsxActionType,
    TicketTrackingActionType
} from "./types";


const initTemplate = {
    transitionTime: 0,
    backgroundObject: {
    },
    backgroundColor: '#eee',
    ticketItem: {
        backgroundColor: '#eee',
        backgroundBoxColor: '#eee',
        fontColor: '#eee',
        fontSize: 12
    },
    showName: false,
    speech: false,
    lang: 'es',
    type: CallerType.horizontal,
}

const initialState: PlanningState = {
    branch: { days: {} },
    department: { days: {} },
    service: { days: {} },
    day: {},
    days: { count: 0, rows: [] },
    tickets: { count: 0, rows: [] },
    ticket: {},
    configs: { count: 0, rows: [] },
    config: {},
    daysConfigs: { count: 0, rows: [] },
    dayConfig: {},
    weeksConfigs: { count: 0, rows: [] },
    weekConfig: {},
    monthsConfigs: { count: 0, rows: [] },
    monthConfig: {},
    appointmentPlanning: {},
    ticketTracking: [],
    callers: [],
    caller: {},
    templates: [],
    template: initTemplate,
    loading: false,
    topics: [],
    notes: [],
    tickeTopics: [],
    bookingDate: {},
    dataQuery: []
}

export function planningReducer(
    state = initialState,
    action: BranchPlanningActionType & DepartmentPlanningActionActionType &
        ServicePlanningActionActionType & ModifyPlanningActionActionType & DaysPlanningActionType
        & DayPlanningActionType & TicketActionType & TicketsActionType & BranchPlanningActionType
        & AppointmentPlanningActionType & TicketTrackingActionType & templateActionType
        & templatesActionType & callerActionType & callersActionType & TicketTopicsActionType & TicketNotesActionType & TicketTopicsxActionType

): PlanningState {
    switch (action.type) {

        case PlanningActions.Type.GET_TICKET_TOPICS + "/fulfilled": {

            const ticketTopics = action.payload;

            return {
                ...state,
                tickeTopics: ticketTopics
            }
        }

        
        
        case PlanningActions.Type.SET_BOOKING_PLANNING: {

            const data = action.payload;

            return {
                ...state,
                bookingDate: data
            }
        }

        case PlanningActions.Type.GET_TEMPLATES + "/fulfilled": {

            const templates = action.payload;

            return {
                ...state,
                templates: templates
            }
        }

        case PlanningActions.Type.GET_TEMPLATE + "/fulfilled": {

            const template = action.payload;

            return {
                ...state,
                template: template
            }
        }

        case PlanningActions.Type.GET_CALLERS + "/fulfilled": {

            const callers = action.payload;

            return {
                ...state,
                callers: callers
            }
        }


        case PlanningActions.Type.GET_CALLER + "/fulfilled": {

            const caller = action.payload;

            return {
                ...state,
                caller: caller
            }
        }

        case PlanningActions.Type.MODIFY_TEMPLATE: {

            const { name, value } = action.payload;

            return {
                ...state,
                template: {
                    ...state.template,
                    [name]: value
                }
            }
        }

        case PlanningActions.Type.RESET_TEMPLATE: {

            return {
                ...state,
                template: initTemplate
            }
        }

        case PlanningActions.Type.DELETE_TEMPLATE_OBJECT: {

            const { name, value } = action.payload;

            const splitx = name.split('.');
            let parentObject: any = {};

            if (splitx[0] == 'backgroundObject') {
                parentObject = state.template.backgroundObject
            }

            const filterKeysObjects: string[] = Object.keys(parentObject).filter((key: string) => { return key != splitx[1] })


            return {
                ...state,
                template: {
                    ...state.template,
                    [splitx[0]]: {
                        ...(filterKeysObjects.map((key) => { return parentObject[key] }))
                    }
                }
            }
        }

        case PlanningActions.Type.MODIFY_TEMPLATE_EDIT_OBJECT: {

            const { name, value } = action.payload;

            const splitx = name.split('.');
            let parentObject: any = {};

            if (splitx[0] == 'backgroundObject') {
                parentObject = state.template.backgroundObject
            }

            return {
                ...state,
                template: {
                    ...state.template,
                    [splitx[0]]: {
                        ...parentObject,
                        [splitx[1]]: value
                    }
                }
            }
        }


        

        case PlanningActions.Type.GET_NOTES + "/fulfilled": {

            const notes = action.payload;

            return {
                ...state,
                notes: notes
            }
        }

        case PlanningActions.Type.GET_TOPICS + "/fulfilled": {

            const topics = action.payload;

            return {
                ...state,
                topics: topics
            }
        }

        case PlanningActions.Type.GET_TICKET_TRACKING + "/fulfilled": {

            const ticketTracking = action.payload;

            return {
                ...state,
                ticketTracking: ticketTracking
            }
        }

        case PlanningActions.Type.GET_APPOINTMENT_PLANNING + "/fulfilled": {

            const configX = action.payload;

            return {
                ...state,
                appointmentPlanning: configX
            }
        }


        case PlanningActions.Type.CREATE_WEEK_CONFIG + "/fulfilled": {

            const configX = action.payload;

            return {
                ...state,
                weeksConfigs: {
                    ...state.weeksConfigs,
                    rows: state.weeksConfigs.rows.map((config) => {
                        if (config.uuid == configX.uuid) {
                            return configX
                        }
                        return config
                    })
                }
            }
        }

        case PlanningActions.Type.CREATE_DAY_CONFIG + "/fulfilled": {

            const configX = action.payload;

            return {
                ...state,
                daysConfigs: {
                    ...state.daysConfigs,
                    rows: state.daysConfigs.rows.map((config) => {
                        if (config.uuid == configX.uuid) {
                            return configX
                        }
                        return config
                    })
                }
            }
        }

        case PlanningActions.Type.CREATE_APPOINTMENT_CONFIG + "/fulfilled": {

            const configX = action.payload;

            return {
                ...state,
                configs: {
                    ...state.configs,
                    rows: state.configs.rows.map((config) => {
                        if (config.uuid == configX.uuid) {
                            return configX
                        }
                        return config
                    })
                }
            }
        }


        case PlanningActions.Type.GET_APPOINTMENTS_CONFIGS + "/fulfilled": {

            const configs = action.payload;
            console.log(configs)

            return {
                ...state,
                configs: configs
            }
        }


        case PlanningActions.Type.GET_DAYS_CONFIGS + "/fulfilled": {

            const daysConfigs = action.payload;

            return {
                ...state,
                daysConfigs: daysConfigs
            }
        }

        case PlanningActions.Type.GET_WEEKS_CONFIGS + "/fulfilled": {

            const weeksConfigs = action.payload;

            return {
                ...state,
                weeksConfigs: weeksConfigs
            }
        }


        case PlanningActions.Type.GET_MONTHS_CONFIGS + "/fulfilled": {

            const monthsConfigs = action.payload;

            return {
                ...state,
                monthsConfigs: monthsConfigs
            }
        }


        case PlanningActions.Type.GET_TICKET + "/fulfilled": {

            const ticket = action.payload;

            return {
                ...state,
                ticket: ticket
            }
        }

        case PlanningActions.Type.CREATE_TURN + "/fulfilled": {

            const ticket = action.payload;

            return {
                ...state,
                ticket: ticket
            }
        }


        case PlanningActions.Type.GET_TICKET + "/fulfilled": {

            const ticket = action.payload;

            return {
                ...state,
                ticket: ticket
            }
        }


        case PlanningActions.Type.GET_TICKETS + "/fulfilled": {

            const tickets = action.payload;

            return {
                ...state,
                tickets: tickets
            }
        }


        case PlanningActions.Type.UPDATE_DEPARTMENT_PLANNING + "/fulfilled": {

            const departmentPlanning = action.payload;

            return {
                ...state,
                department: departmentPlanning
            }
        }


        case PlanningActions.Type.GET_DEPARTMENT_PLANNING + "/fulfilled": {

            const departmentPlanning = action.payload;

            return {
                ...state,
                department: departmentPlanning
            }
        }


        case PlanningActions.Type.UPDATE_SERVICE_PLANNING + "/fulfilled": {

            const servicePlanning = action.payload;

            return {
                ...state,
                service: servicePlanning
            }
        }


        case PlanningActions.Type.GET_SERVICE_PLANNING + "/fulfilled": {

            const servicePlanning = action.payload;

            return {
                ...state,
                service: servicePlanning
            }
        }

        case PlanningActions.Type.UPDATE_BRANCH_PLANNING + "/fulfilled": {

            const branchPlanning = action.payload;

            return {
                ...state,
                branch: branchPlanning
            }
        }

        case PlanningActions.Type.GET_BRANCH_PLANNING + "/fulfilled": {

            const branchPlanning = action.payload;

            return {
                ...state,
                branch: branchPlanning
            }
        }

        case PlanningActions.Type.GET_DAYS_PLANNING + "/fulfilled": {

            const daysPlanning = action.payload;

            return {
                ...state,
                days: daysPlanning
            }
        }

        case PlanningActions.Type.UPDATE_DAY_PLANNING + "/fulfilled": {

            const dayPlanning = action.payload;

            return {
                ...state,
                day: dayPlanning,
                days: {
                    ...state.days,
                    rows: state.days.rows.map((day) => {
                        if (dayPlanning.id == day.id) {
                            return dayPlanning
                        }
                        return day
                    })
                }
            }
        }

        case PlanningActions.Type.GET_DAY_PLANNING + "/fulfilled": {

            const dayPlanning = action.payload;

            return {
                ...state,
                day: dayPlanning,
                days: {
                    ...state.days,
                    rows: state.days.rows.map((day) => {
                        if (dayPlanning.id == day.id) {
                            return dayPlanning
                        }
                        return day
                    })
                }
            }
        }


        case PlanningActions.Type.SET_DAY_PLANNING: {

            const dayPlanning = action.payload;

            return {
                ...state,
                day: dayPlanning,
                days: {
                    ...state.days,
                    rows: state.days.rows.map((day) => {
                        if (dayPlanning.id == day.id) {
                            return dayPlanning
                        }
                        return day
                    })
                }
            }
        }




        case PlanningActions.Type.MODIFY_DAY_PLANNING_TREE: {

            const { name, value } = action.payload;

            const split = name.split('.');
            let parentObject: any = {};

            if (split[0] == 'branch') {
                parentObject = state.branch;
            }
            if (split[0] == 'department') {
                parentObject = state.department;
            }

            if (split[0] == 'service') {
                parentObject = state.service;
            }

            const init = {
                ...state,
                [split[0]]: {
                    ...parentObject,
                    days: {
                        ...parentObject.days,
                        [split[1]]: {
                            ...parentObject.days[split[1]],
                            [split[2]]: value
                        }
                    }
                }
            }

            return init
        }


        default:
            return state
    }
}