
import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { RoomsServices } from "../../services";
import { ModifyStoreDTO } from "../../dtos";

enum Type {
  SET_BEGIN = "SET_BEGIN",
  SET_END = "SET_END",
  SET_SEARCH = "SET_SEARCH",
  SET_SHOW = "SET_SHOW",
  SET_ENTITY = "SET_ENTITY",
  SET_BRANCH = "SET_BRANCH",

  GET_RECORDING_ROOMS = "GET_RECORDING_ROOMS",
  GET_ROOM_TAGS = "GET_ROOM_TAGS",
  GET_ROOM_FILES = "GET_ROOM_FILES",
  CHECK_RECORDING_EXISTS = "CHECK_RECORDING_EXISTS",
  GET_RECORDING_TIME = "GET_RECORDING_TIME",
  GET_CALL_TIME = "GET_CALL_TIME",
  GET_AGENT_CALL_TIME = "GET_AGENT_CALL_TIME",
  GET_BRANCH_CALL_TIME = "GET_BRANCH_CALL_TIME",
  GET_CHAT_MESSAGES = "GET_CHAT_MESSAGES",
  GET_ON_PREMISE_AUDIO = "GET_ON_PREMISE_AUDIO",
  GET_SURVEYS = "GET_SURVEYS",
  GET_SURVEY = "GET_SURVEY",
  MODIFY_SURVEY = "MODIFY_SURVEY",
  CREATE_SURVEY = "CREATE_SURVEY",
  UPDATE_SURVEY = "UPDATE_SURVEY",
  DELETE_SURVEY = "DELETE_SURVEY",
  SET_SURVEY = "SET_SURVEY",
  GET_SURVEY_REPORT = "GET_SURVEY_REPORT",
}

class RoomsActionsClass {
  public headers: any = undefined;
  public Type = Type;

  public getSurveys = createAsyncThunk(Type.GET_SURVEYS, async (data: any) => {
    const roomApi = new RoomsServices(this.headers);
    const response: any = await roomApi.getSurveys(data);
    return response.data;
  });

  public getSurveyReport = createAsyncThunk(Type.GET_SURVEY_REPORT, async (data: any) => {
    const roomApi = new RoomsServices(this.headers);
    const response: any = await roomApi.getSurveyReport(data);
    return response.data;
  });


  public deleteSurveyById = createAsyncThunk(
    Type.DELETE_SURVEY,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.deleteSurveyById(data);
      return response.data;
    }
  );

  public getSurveyById = createAsyncThunk(Type.GET_SURVEY, async (id: any) => {
    const roomApi = new RoomsServices(this.headers);
    const response: any = await roomApi.getSurveyById(id);
    return response.data;
  });

  public createSurvey = createAsyncThunk(
    Type.CREATE_SURVEY,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.createSurvey(data);
      return response.data;
    }
  );

  public updateSurvey = createAsyncThunk(
    Type.UPDATE_SURVEY,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.updateSurvey(data);
      return response.data;
    }
  );

  public getRecordingRooms = createAsyncThunk(
    Type.GET_RECORDING_ROOMS,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getRecordingRoomsFiltered(data);
      return response.data;
    }
  );

  public getRoomTags = createAsyncThunk(
    Type.GET_ROOM_TAGS,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getRoomTags(data);
      return response.data;
    }
  );

  public getRoomFiles = createAsyncThunk(
    Type.GET_ROOM_FILES,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getRoomFiles(data);
      return response.data;
    }
  );

  public checkRecordingExists = createAsyncThunk(
    Type.CHECK_RECORDING_EXISTS,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.checkRecordingExists(data);
      return response.data;
    }
  );

  public getChatMessages = createAsyncThunk(
    Type.GET_CHAT_MESSAGES,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getChatMessages(data);
      return response.data;
    }
  );

  public getRecordingTime = createAsyncThunk(
    Type.GET_RECORDING_TIME,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getRecordingTime(data);
      return response.data;
    }
  );

  public getCallTime = createAsyncThunk(
    Type.GET_CALL_TIME,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getCallTime(data);
      return response.data;
    }
  );

  public getAgentTime = createAsyncThunk(
    Type.GET_AGENT_CALL_TIME,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getAgentTime(data);
      return response.data;
    }
  );

  public getBranchTime = createAsyncThunk(
    Type.GET_BRANCH_CALL_TIME,
    async (data: any) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getBranchTime(data);
      return response.data;
    }
  );

  public getOnPremiseAudioRecording = createAsyncThunk(
    Type.GET_ON_PREMISE_AUDIO,
    async (roomId: string) => {
      const roomApi = new RoomsServices(this.headers);
      const response: any = await roomApi.getOnPremiseAudioRecording(roomId);
      return response.data;
    }
  );

  public modifySurvey = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_SURVEY, payload: data });
    };
  };

  public setSurvey = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_SURVEY, payload: data });
    };
  };

  public setBegin = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_BEGIN, payload: data });
    };
  };
  public setEnd = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_END, payload: data });
    };
  };
  public setSearch = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_SEARCH, payload: data });
    };
  };
  public setShow = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_SHOW, payload: data });
    };
  };
  public setEntity = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_ENTITY, payload: data });
    };
  };
  public setBranch = (data: any) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_BRANCH, payload: data });
    };
  };
}

export const RoomsActions = new RoomsActionsClass();
