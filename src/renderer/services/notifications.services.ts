import { EntityTreeUuid, ResponseDTO } from "@fluyappgo/commons";
import axios from "axios";
import { EntityTreeWithDateRange, SummaryAgents, SummaryTicket, } from "../dtos";
import { HttpClient } from "../helpers/httpClient";

export class NotificationsServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public getNotifications = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msNotifications}/get-notifications`)
    };

   

}

