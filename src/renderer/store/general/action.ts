import { Dispatch } from "react";

enum Type {
    CHANGE_STATE_HEADER = 'CHANGE_STATE_HEADER',
    CHANGE_STATE_ASIDE = 'CHANGE_STATE_ASIDE',
    BEGIN_DATE = 'BEGIN_DATE',
    END_DATE = 'END_DATE',
    NEXTKEY = 'NEXTKEY',
    PERIOD = 'PERIOD',
    YEAR = 'YEAR',
    MONTH = 'MONTH',
    WEEK = 'WEEK',
    DAY = 'DAY',
    HOUR = 'HOUR',
    PAGINATION = 'PAGINATION',

    UPDATE_DATA_QUERY = 'UPDATE_DATA_QUERY'
}

class GeneralClass {

    public headers: any = undefined;
    public Type = Type;


    public updateDataQuery = (data: any) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.UPDATE_DATA_QUERY, payload: data })
        }
    }


    public setBeginDate = (date: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.BEGIN_DATE, payload: { begin: date } })
        }
    }

    public setEndDate = (date: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.END_DATE, payload: { end: date } })
        }
    }

    public setNextKey = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.NEXTKEY, payload: { nextKey: data } })
        }
    }

    public setPeriod = (data: string) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.PERIOD, payload: { begin: data } })
        }
    }

    public setYear = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.YEAR, payload: { nextKey: data } })
        }
    }

    public setMonth = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.MONTH, payload: { nextKey: data } })
        }
    }

    public setWeek = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.WEEK, payload: { nextKey: data } })
        }
    }

    public setDay = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.DAY, payload: { nextKey: data } })
        }
    }

    public setHour = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.HOUR, payload: { nextKey: data } })
        }
    }

    public setPagination = (data: number) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.NEXTKEY, payload: { pagination: data } })
        }
    }

    public setIsSidebarShow = (isSidebarShow: boolean) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.CHANGE_STATE_HEADER, payload: { isSidebarShow: isSidebarShow } })
        }
    }

    public setIsAsidebarShow = (isAsidebarShow: boolean) => {
        return (dispatch: Dispatch<any>) => {
            dispatch({ type: Type.CHANGE_STATE_ASIDE, payload: { isAsidebarShow: isAsidebarShow } })
        }
    }

}

export const GeneralActions = new GeneralClass()