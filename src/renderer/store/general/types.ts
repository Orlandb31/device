import { ResponseDTO, User } from "@fluyappgo/commons";
import { GroupPeriod } from "@fluyappgo/commons/build/interfaces/analytics";

export interface GeneralState {
    isSidebarShow: boolean;
    isAsidebarShow: boolean;
    begin: string;
    end: string;
    nextKey: number;
    pagination: number;
    year: number;
    month: number;
    week: number;
    day: number;
    hour: number;
    period: GroupPeriod;
    dataQuery: any;
}



interface BeginAction {
    type: String,
    payload: { begin: string };
}

interface EndAction {
    type: String,
    payload: { end: string };
}

interface PaginationAction {
    type: String,
    payload: { pagination: number };
}


interface NextKeyAction {
    type: String,
    payload: { nextKey: number };
}


export type BeginActionType = BeginAction;
export type EndActionType = EndAction;
export type PaginationActionType = PaginationAction;
export type NextKeyActionType = NextKeyAction;


