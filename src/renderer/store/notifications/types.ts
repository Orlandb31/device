import { TicketStates, Notification } from "@fluyappgo/commons";

export interface NotificationsState {
    notification: Notification;
    notifications: Notification[];
}

interface NotificationsAction {
    type: String,
    payload: Notification[];
}


interface NotificationAction {
    type: String,
    payload: Notification;
}




export type NotificationsActionType = NotificationsAction;
export type NotificationActionType = NotificationAction