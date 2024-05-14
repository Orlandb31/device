import {
    AppointmentConfig, BranchPlanning, DayConfig, DayInfoSlot,
    DayPlanning, DepartmentPlanning, List, MonthConfig, ServicePlanning,
    Ticket, TicketTracking, WeekConfig, CallerDevice, CallerTemplate, TicketTopicsDTO, TicketNote, TicketTopic, TicketxTopic
} from "@fluyappgo/commons";
import { ModifyStoreDTO } from "../../dtos";



export interface PlanningState {
    branch: BranchPlanning;
    department: DepartmentPlanning;
    service: ServicePlanning;
    day: DayPlanning;
    days: List<DayPlanning[]>;
    tickets: List<Ticket[]>;
    ticket: Ticket;
    ticketTracking: TicketTracking[],
    tickeTopics: TicketxTopic[],
    configs: List<AppointmentConfig[]>;
    config: AppointmentConfig;
    dayConfig: DayConfig;
    daysConfigs: List<DayConfig[]>;
    weekConfig: WeekConfig;
    weeksConfigs: List<WeekConfig[]>;
    monthConfig: MonthConfig;
    monthsConfigs: List<MonthConfig[]>;
    appointmentPlanning: DayInfoSlot,
    callers: CallerDevice[],
    caller: CallerDevice,
    templates: CallerTemplate[],
    template: CallerTemplate,
    loading: boolean;
    topics: TicketTopicsDTO[];
    notes: TicketNote[];
    bookingDate: any;
    dataQuery: any;
}

interface TicketsAction {
    type: String,
    payload: List<Ticket[]>;
}

interface TicketAction {
    type: String,
    payload: Ticket;
}

interface BranchesPlanningAction {
    type: String,
    payload: BranchPlanning[];
}

interface BranchPlanningAction {
    type: String,
    payload: BranchPlanning;
}

interface DepartmentPlanningAction {
    type: String,
    payload: DepartmentPlanning;
}

interface ServicePlanningAction {
    type: String,
    payload: ServicePlanning;
}

interface ModifyPlanningAction {
    type: String,
    payload: ModifyStoreDTO;
}

interface DaysPlanningAction {
    type: String,
    payload: List<DayPlanning[]>;
}

interface DayPlanningAction {
    type: String,
    payload: DayPlanning;
}


interface AppointmentPlanningAction {
    type: String,
    payload: DayInfoSlot;
}

interface TicketTrackingAction {
    type: String,
    payload: TicketTracking[];
}


interface templatesAction {
    type: String,
    payload: CallerTemplate[];
}


interface templateAction {
    type: String,
    payload: CallerTemplate;
}

interface callersAction {
    type: String,
    payload: CallerDevice[];
}

interface callerAction {
    type: String,
    payload: CallerDevice;
}

interface TicketTopicsAction {
    type: String,
    payload: TicketTopicsDTO[];
}

interface TicketNotesAction {
    type: String,
    payload: TicketNote[];
}

interface TicketTopicsxAction {
    type: String,
    payload: TicketTopic[];
}

export type BranchPlanningActionType = BranchPlanningAction;
export type DepartmentPlanningActionActionType = DepartmentPlanningAction;
export type ServicePlanningActionActionType = ServicePlanningAction;
export type ModifyPlanningActionActionType = ModifyPlanningAction;
export type DaysPlanningActionType = DaysPlanningAction;
export type DayPlanningActionType = DayPlanningAction;
export type TicketsActionType = TicketsAction;
export type TicketActionType = TicketAction;
export type BranchesPlanningActionType = BranchesPlanningAction;
export type AppointmentPlanningActionType = AppointmentPlanningAction;
export type TicketTrackingActionType = TicketTrackingAction;
export type templatesActionType = templatesAction;
export type templateActionType = templateAction;
export type callersActionType = callersAction;
export type callerActionType = callerAction;
export type TicketTopicsActionType = TicketTopicsAction;
export type TicketNotesActionType = TicketNotesAction;
export type TicketTopicsxActionType = TicketTopicsxAction;



