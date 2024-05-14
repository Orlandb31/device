import { RoomsActions } from "./action";
import {
  RoomActionType,
  RoomsActionType,
  RoomsState,
  StatsActionType,
  SurveysActionType,
  SurveyActionType,
} from "./types";
import moment from "moment-timezone";

const initialState: RoomsState = {
  loading: false,
  begin: moment().format("YYYY-MM-DD"),
  end: moment().add(7, "days").format("YYYY-MM-DD"),
  search: "",
  entity: 0,
  branch: 0,
  rooms: { count: 0, rows: [] },
  room: {},
  recordingTime: [],
  callTime: [],
  agentTime: [],
  branchTime: [],
  surveys: [],
  survey: {},
  recordingTimeExcel: { data: [], results: [] },
  callTimeExcel: { data: [], results: [] },
  agentTimeExcel: { data: [], results: [] },
  branchTimeExcel: { data: [], results: [] },
};

export function roomsReducer(
  state = initialState,
  action: RoomActionType &
    RoomsActionType &
    StatsActionType &
    SurveysActionType &
    SurveyActionType
): RoomsState {
  switch (action.type) {
    case RoomsActions.Type.GET_RECORDING_ROOMS + "/fulfilled":
      const rooms = action.payload;

      return {
        ...state,
        rooms: rooms,
      };

    case RoomsActions.Type.GET_RECORDING_TIME + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        recordingTime: data.data,
        recordingTimeExcel: data.excelData,
      };
    }

    case RoomsActions.Type.GET_CALL_TIME + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        callTime: data.data,
        callTimeExcel: data.excelData,
      };
    }

    case RoomsActions.Type.GET_AGENT_CALL_TIME + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        agentTime: data.data,
        agentTimeExcel: data.excelData,
      };
    }

    case RoomsActions.Type.GET_SURVEYS + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        surveys: data,
      };
    }

    case RoomsActions.Type.GET_SURVEY + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        survey: data,
      };
    }

    case RoomsActions.Type.SET_SURVEY: {
      const data = action.payload;

      return {
        ...state,
        survey: data,
      };
    }

    case RoomsActions.Type.GET_BRANCH_CALL_TIME + "/fulfilled": {
      const data = action.payload;

      return {
        ...state,
        branchTime: data.data,
        branchTimeExcel: data.excelData,
      };
    }

    case RoomsActions.Type.SET_BEGIN: {
      const data: any = action.payload;
      return {
        ...state,
        begin: data,
      };
    }

    case RoomsActions.Type.SET_END: {
      const data: any = action.payload;
      return {
        ...state,
        end: data,
      };
    }

    case RoomsActions.Type.SET_SEARCH: {
      const data: any = action.payload;
      return {
        ...state,
        search: data,
      };
    }

    case RoomsActions.Type.SET_ENTITY: {
      const data: any = action.payload;
      return {
        ...state,
        entity: data,
      };
    }

    case RoomsActions.Type.MODIFY_SURVEY: {
      const data: any = action.payload;

      return {
        ...state,
        survey: { ...state.survey, [data.name!]: data.value },
      };
    }

    case RoomsActions.Type.SET_BRANCH: {
      const data: any = action.payload;
      return {
        ...state,
        branch: data,
      };
    }
    default:
      return state;
  }
}
