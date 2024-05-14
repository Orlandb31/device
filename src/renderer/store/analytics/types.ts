import { Agent, Branch, Department, Entity, ResponseDTO, Service, Ticket, TicketStates, UserFB } from "@fluyappgo/commons";
import { TicketByX, TimingEnum, Distribution } from '@fluyappgo/commons/build/interfaces/analytics'

export interface AnalyticsState {
    loading: boolean;
    begin: string;
    end: string;
    ticketsLastTwelveMonths: TicketByX[],
    ticketsLastSixMonths: TicketByX[],
    ticketsLastMonth: TicketByX[],
    ticketsLastSevenDays: TicketByX[],
    ticketsLastDay: TicketByX[],
    timing: any,
    counterToday: {
        [TicketStates.CANCELLED]: number,
        [TicketStates.FINISHED]: number,
        [TicketStates.CREATED]: number,
        TOTAL: number
    }, 
    counterByDate: {
        [TicketStates.CANCELLED]: number,
        [TicketStates.FINISHED]: number,
        [TicketStates.CREATED]: number,
        TOTAL: number
    }
 
}

interface TicketByXAction {
    type: String,
    payload: TicketByX[];
}

interface TicketTimingAction {
    type: String,
    payload: {
        [key in TicketStates]: Distribution
    };
}

interface CounterTodayAction {
    type: String,
    payload:  {
        [TicketStates.CANCELLED]: number,
        [TicketStates.FINISHED]: number,
        TOTAL: number
    };
}


export type TicketByMonthsActionType = TicketByXAction;
export type TicketTimingActionType = TicketTimingAction;
export type CounterTodayActionType = CounterTodayAction;
