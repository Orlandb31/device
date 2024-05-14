import { Agent, Branch, Department, Entity, ResponseDTO, Service, Ticket, UserFB } from "@fluyappgo/commons";
import { EntityTreeCompleteDTO } from "../../dtos";

export interface AuthState {
    twoFactor: boolean;
    isAuth: boolean;
    user: UserFB;
    loading: boolean;
    entity: Entity;
    branch: Branch;
    department: Department;
    services: Service[];
    agent: Agent;
    ticket: Ticket;
    token: string;
}

interface TicketAction {
    type: String,
    payload: Ticket;
}

interface UserAction {
    type: String,
    payload: UserFB;
}

interface EntityTreeAction {
    type: String,
    payload: EntityTreeCompleteDTO;
}


interface AgentAction {
    type: String,
    payload: Agent;
}


interface ResponseDTOAction {
    type: String,
    payload: ResponseDTO;
}


export type UserActionType = UserAction;
export type ResponseDTOActionType = ResponseDTOAction;
export type EntityTreeActionType = EntityTreeAction;
export type AgentActionType = AgentAction;
export type TicketActionType =TicketAction;
