import { EntityTreeUuid, ResponseDTO } from "@fluyappgo/commons";
import axios from "axios";
import { EntityTreeWithDateRange, SummaryAgents, SummaryTicket, } from "../dtos";
import { HttpClient } from "../helpers/httpClient";

export class AnalyticsServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public getAgentsTrackingByCriteria = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-agents-tracking-summary`, { params: data })
    };

    public getTicketsTrackingByCriteria = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-tickets-tracking-summary`, { params: data })
    };

    public getSummaryTicketsTrackingByPeriod = (data: SummaryTicket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/analytics/tickets`, data)
    };

    public getSummaryTicketsTrackingRankingByPeriod = (data: SummaryTicket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/analytics/tickets-ranking`, data)
    };

    public getSummaryAgentsByPeriod = (data: SummaryAgents) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/analytics/agents`, data)
    };

    public getSummaryAgentsRankingByPeriod = (data: SummaryAgents) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/analytics/agents-ranking`, data)
    };

    public getTicketCountToday = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-count-today`, data)
    };

    public getTicketCountByDate = (data: EntityTreeWithDateRange) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-count-byDate`, data)
    };

    public getTicketsRatesByPeriod = (data: EntityTreeWithDateRange) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-tickets-rating-summary`, {
            params: data
        })
    };


    public deleteTrack = (data: number) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/delete-ticket-tracking`, { id: data })
    };

    public getTicketTiming = (data: EntityTreeWithDateRange) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-timing`, data)
    };

    public getTodayTicketTiming = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-timing-today`, data)
    };

    public getTicketsLastTwelveMonths = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-last-twelve-months`, { ...data, state: 'ALL' })
    };

    public getTicketCountByStates = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/analytics/tickets-count-by-states`, data);
    }

    public getTicketsLastSixMonths = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-last-six-months`, { ...data, state: 'ALL' })
    };

    public getTicketsLastMonth = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-last-month`, { ...data, state: 'ALL' })
    };

    public getTicketsLastSevenDays = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-last-seven-days`, { ...data, state: 'ALL' })
    };

    public getTicketTodayByHours = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-ticket-today-byHour`, { ...data, state: 'ALL' })
    };

    public getTopWaitingTimeByhours = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/get-top-waitingtime-byHours`, data)
    };


    public getUrlVideo = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/bucket-auth-caller-video`, data)
    };

    public putObject = (url: string, file: any) => {
        axios.create();
        return axios.put(url, file)
    }

    public getCurrentTickets = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-current-tickets`, data);
    }

    public getActiveAgents = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-active-agents`, data);
    }

    public getTicketCountByServiceTemplate = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/get-ticket-service-count`, data)
    };

    public getTicketCountByDepartmentTemplate = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/get-ticket-department-count`, data)
    };

    public getTicketCountByBranchTemplate = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/get-ticket-branch-count`, data)
    };


}

