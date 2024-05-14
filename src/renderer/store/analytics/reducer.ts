import { AnalyticsActions } from "./action";
import { AnalyticsState, CounterTodayActionType, TicketByMonthsActionType, TicketTimingActionType, } from "./types";

const initialState: AnalyticsState = {
    loading: false,
    begin: '01/01/2020',
    end: '01/01/2022',
    ticketsLastDay: [],
    ticketsLastMonth: [],
    ticketsLastSevenDays: [],
    ticketsLastSixMonths: [],
    ticketsLastTwelveMonths: [],
    timing: {
        CREATED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        WAITING: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        CALLING: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        ATTENDING: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        FINISHED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        ABANDONED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        TRANSFERING: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        CANCELLED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        },
        VISIT_CREATED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        }, VISIT_BEGIN: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        }, VISIT_END: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        }, VISIT_REJECTED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        }, VISIT_CANCELLED: {
            min: 0,
            max: 0,
            avg: 0,
            maxUuid: '',
            minUuid: ''
        }
    },
    counterToday: {
        CANCELLED: 0,
        FINISHED: 0,
        TOTAL: 0,
        CREATED: 0
    },
    counterByDate: {
        CANCELLED: 0,
        FINISHED: 0,
        TOTAL: 0,
        CREATED: 0
    }
}

export function analyticsReducer(
    state = initialState,
    action: TicketByMonthsActionType & TicketTimingActionType & CounterTodayActionType

): AnalyticsState {
    switch (action.type) {

        case AnalyticsActions.Type.GET_TICKET_TIMING + "/fulfilled": {

            const timing = action.payload;

            return {
                ...state,
                timing: timing
            }

        }

        case AnalyticsActions.Type.GET_TICKET_COUNT_TODAY + "/fulfilled": {

            const counterToday: any = action.payload;

            return {
                ...state,
                counterToday: counterToday
            }

        }

        case AnalyticsActions.Type.GET_TICKET_COUNT + "/fulfilled": {

            const counter: any = action.payload;

            return {
                ...state,
                counterByDate: counter
            }

        }

        case AnalyticsActions.Type.GET_TICKETS_LAST_TWELVE_MONTHS + "/fulfilled": {

            const lastTwelve = action.payload;

            return {
                ...state,
                ticketsLastTwelveMonths: lastTwelve
            }

        }

        case AnalyticsActions.Type.GET_TICKETS_LAST_SIX_MONTHS + "/fulfilled": {

            const lastSix = action.payload;

            return {
                ...state,
                ticketsLastSixMonths: lastSix
            }

        }

        case AnalyticsActions.Type.GET_TICKETS_LAST_MONTH + "/fulfilled": {

            const lastMonth = action.payload;

            return {
                ...state,
                ticketsLastMonth: lastMonth
            }

        }


        case AnalyticsActions.Type.GET_TICKETS_LAST_SEVEN_DAYS + "/fulfilled": {

            const lastSeven = action.payload;

            return {
                ...state,
                ticketsLastSevenDays: lastSeven
            }

        }


        case AnalyticsActions.Type.GET_TICKETS_TODAY_HOURS + "/fulfilled": {

            const lastHours = action.payload;

            return {
                ...state,
                ticketsLastDay: lastHours
            }

        }



        default:
            return state
    }
}