import { NotificationsActions } from "./action";
import { NotificationsState, NotificationActionType, NotificationsActionType} from "./types";

const initialState: NotificationsState = {
    notification: {},
    notifications: []
}

export function notificationsReducer(
    state = initialState,
    action: NotificationsActionType & NotificationActionType 

): NotificationsState {
    switch (action.type) {

        case NotificationsActions.Type.GET_NOTIFICATIONS + "/fulfilled": {

            const timing = action.payload;

            return {
                ...state,
                notifications: timing
            }

        }

        default:
            return state
    }
}