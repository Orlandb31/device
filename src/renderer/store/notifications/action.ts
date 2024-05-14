
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AnalyticsServices } from "../../services";
import { ActiveAgentDTO, EntityTreeWithDateRange, SummaryAgents, SummaryTicket } from "../../dtos";
import { EntityTreeUuid } from "@fluyappgo/commons";
import { NotificationsServices } from "../../services";

enum Type {
    GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'

}



class NotificationsClass {

    public headers: any = undefined;
    public Type = Type;


    public getNotifications = createAsyncThunk(
        Type.GET_NOTIFICATIONS,
        async () => {
            const analyticsApi = new NotificationsServices(this.headers);
            const response: any = await analyticsApi.getNotifications();
            return response.data;
        }
    )





}

export const NotificationsActions = new NotificationsClass()