
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AnalyticsServices } from "../../services";
import { ActiveAgentDTO, EntityTreeWithDateRange, SummaryAgents, SummaryTicket } from "../../dtos";
import { EntityTreeUuid } from "@fluyappgo/commons";

enum Type {
    GET_TICKET_TIMING = 'GET_TICKET_TIMING',
    GET_TICKET_COUNT = 'GET_TICKET_COUNT',
    GET_RATES = 'GET_RATES',
    GET_TICKET_COUNT_TODAY = 'GET_TICKET_COUNT_TODAY',
    GET_TICKETS_LAST_TWELVE_MONTHS = 'GET_TICKETS_LAST_TWELVE_MONTHS',
    GET_TICKETS_LAST_SIX_MONTHS = 'GET_TICKETS_LAST_SIX_MONTHS',
    GET_TICKETS_LAST_MONTH = 'GET_TICKETS_LAST_MONTH',
    GET_TICKETS_LAST_SEVEN_DAYS = 'GET_TICKETS_LAST_SEVEN_DAYS',
    GET_TICKETS_TODAY_HOURS = 'GET_TICKETS_TODAY_HOURS',
    GET_SUMMARY_TICKETS = 'GET_SUMMARY_TICKETS',
    GET_SUMMARY_TICKETS_ANALYTICS = 'GET_SUMMARY_TICKETS_ANALYTICS',
    GET_SUMMARY_AGENTS = 'GET_SUMMARY_AGENTS',
    GET_TICKETS_WAITING_VS_ATTENDING= 'GET_TICKETS_WAITING_VS_ATTENDING',
    DELETE_TRACK = 'DELETE_TRACK',
    GET_TODAY_TICKET_TIMING = 'GET_TODAY_TICKET_TIMING',
    GET_TICKET_COUNT_BYSERVICE = 'GET_TICKET_COUNT_BYSERVICE',
    GET_TICKET_COUNT_BYBRANCH = 'GET_TICKET_COUNT_BYBRANCH',
    GET_TICKET_COUNT_BYDEPARTMENT = 'GET_TICKET_COUNT_BYDEPARTMENT'
}



class AnalyticsActionsClass {

    public headers: any = undefined;
    public Type = Type;


    public getSummaryAgentsTrackingByCriteria = createAsyncThunk(
        Type.GET_SUMMARY_AGENTS,
        async (data: ActiveAgentDTO) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getAgentsTrackingByCriteria(data);
            return response.data;
        }
    )

    public getSummaryTicketsTrackingByCriteria = createAsyncThunk(
        Type.GET_SUMMARY_TICKETS,
        async (data: ActiveAgentDTO) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsTrackingByCriteria(data);
            return response.data;
        }
    )

    public getSummaryTicketsTrackingByPeriod = createAsyncThunk(
        Type.GET_SUMMARY_TICKETS_ANALYTICS,
        async (data: SummaryTicket) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getSummaryTicketsTrackingByPeriod(data);
            return response.data;
        }
    )


    public getSummaryTicketsTrackingRankingByPeriod = createAsyncThunk(
        Type.GET_SUMMARY_TICKETS_ANALYTICS,
        async (data: SummaryTicket) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getSummaryTicketsTrackingRankingByPeriod(data);
            return response.data;
        }
    )


    public getSummaryAgentsByPeriod = createAsyncThunk(
        Type.GET_SUMMARY_TICKETS_ANALYTICS,
        async (data: SummaryAgents) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getSummaryAgentsByPeriod(data);
            return response.data;
        }
    )

    public getSummaryAgentsRankingByPeriod = createAsyncThunk(
        Type.GET_SUMMARY_TICKETS_ANALYTICS,
        async (data: SummaryAgents) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getSummaryAgentsRankingByPeriod(data);
            return response.data;
        }
    )
    
    public deleteTrack = createAsyncThunk(
        Type.DELETE_TRACK,
        async (data: number) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.deleteTrack(data);
            return response.data;
        }
    )

    public getTiming = createAsyncThunk(
        Type.GET_TICKET_TIMING,
        async (data: EntityTreeWithDateRange) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketTiming(data);
            return response.data;
        }
    )

    public getTicketRatesByPeriod = createAsyncThunk(
        Type.GET_RATES,
        async (data: EntityTreeWithDateRange) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsRatesByPeriod(data)
            return response.data;
        }
    )


    public getTicketCount = createAsyncThunk(
        Type.GET_TICKET_COUNT,
        async (data: EntityTreeWithDateRange) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountByDate(data)
            return response.data;
        }
    )

    public getTicketCountToday = createAsyncThunk(
        Type.GET_TICKET_COUNT_TODAY,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountToday(data)
            return response.data;
        }
    )


    public getTicketsLastTwelveMonths = createAsyncThunk(
        Type.GET_TICKETS_LAST_TWELVE_MONTHS,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsLastTwelveMonths(data)
            return response.data;
        }
    )

    public getTicketCountByStates = createAsyncThunk(
        Type.GET_TICKETS_WAITING_VS_ATTENDING,
        async (data: any) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountByStates(data)
            return response.data;
        }
    )



    public getTicketsLastSixMonths = createAsyncThunk(
        Type.GET_TICKETS_LAST_SIX_MONTHS,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsLastSixMonths(data)
            return response.data;
        }
    )


    public getTicketsLastMonth = createAsyncThunk(
        Type.GET_TICKETS_LAST_MONTH,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsLastMonth(data)
            return response.data;
        }
    )

    public getTicketsLastSevenDays = createAsyncThunk(
        Type.GET_TICKETS_LAST_SEVEN_DAYS,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketsLastSevenDays(data)
            return response.data;
        }
    )

    public getTicketTodayByHours = createAsyncThunk(
        Type.GET_TICKETS_TODAY_HOURS,
        async (data: EntityTreeUuid) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketTodayByHours(data)
            return response.data;
        }
    )

    public getTodayTicketTiming = createAsyncThunk(
        Type.GET_TODAY_TICKET_TIMING,
        async (data: any) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTodayTicketTiming(data)
            return response.data;
        }
    )

    public getTicketCountByServiceTemplate = createAsyncThunk(
        Type.GET_TICKET_COUNT_BYSERVICE,
        async (data: any) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountByServiceTemplate(data)
            return response.data;
        }
    )

    public getTicketCountByDepartmentTemplate = createAsyncThunk(
        Type.GET_TICKET_COUNT_BYDEPARTMENT,
        async (data: any) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountByDepartmentTemplate(data)
            return response.data;
        }
    )

    public getTicketCountByBranchTemplate = createAsyncThunk(
        Type.GET_TICKET_COUNT_BYBRANCH,
        async (data: any) => {
            const analyticsApi = new AnalyticsServices(this.headers);
            const response: any = await analyticsApi.getTicketCountByBranchTemplate(data)
            return response.data;
        }
    )






}

export const AnalyticsActions = new AnalyticsActionsClass()