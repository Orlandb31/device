import { ResponseDTO } from "@fluyappgo/commons";
import { HttpClient } from "../helpers/httpClient";

export class RoomsServices extends HttpClient {
  constructor(headers: any) {
    super(headers);
  }

  public getRecordingRoomsFiltered = (data: any) => {
    return this.instance.post<ResponseDTO>(
      `${this.baseUrl.msVideo}/room-recordings/filtered`,
      data
    );
  };

  public getSurveys = (data: any) => {
    return this.instance.post<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/getAll`,
      data
    );
  };

  public getSurveyById = (id: any) => {
    return this.instance.get<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/getById/${id}`,
    );
  };

  public getSurveyReport = (data: any) => {
    return this.instance.post<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/data`, data
    );
  };

  public deleteSurveyById = (id: any) => {
    return this.instance.delete<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/delete/${id}`,
    );
  };

  public createSurvey = (data: any) => {
    return this.instance.post<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/create`,
      data
    );
  };

  public updateSurvey = (data: any) => {
    return this.instance.post<ResponseDTO>(
      `${this.baseUrl.msVideo}/survey/update`,
      data
    );
  };

  public getRoomFiles = (data: { roomId: string }) =>
    this.instance.get<any>(
      `${this.baseUrl.msVideo}/recordings/videoFiles?id=${data.roomId}`
    );
  public getRoomTags = (data: any) =>
    this.instance.post<any>(`${this.baseUrl.msVideo}/room/getTags`, data);

  public checkRecordingExists = (data: { roomId: string }) =>
    this.instance.post<any>(`${this.baseUrl.msVideo}/room/recordingExists`, {
      data,
    });

  public getChatMessages = (roomId: string) =>
    this.instance.get(`${this.baseUrl.msSocket}/chats/messages/${roomId}`);

  public getRecordingTime = (data: any) =>
    this.instance.post<any>(
      `${this.baseUrl.msVideo}/recordings/getRecordingTime`,
      { data }
    );

  public getCallTime = (data: any) =>
    this.instance.post<any>(`${this.baseUrl.msVideo}/recordings/getCallTime`, {
      data,
    });

  public getBranchTime = (data: any) =>
    this.instance.post<any>(
      `${this.baseUrl.msVideo}/recordings/getBranchTime`,
      { data }
    );

  public getAgentTime = (data: any) =>
    this.instance.post<any>(`${this.baseUrl.msVideo}/recordings/getAgentTime`, {
      data,
    });

  public getOnPremiseAudioRecording = (roomId: string) =>
    this.instance.post<any>(
      `${this.baseUrl.msVideo}/recordings/getOnPremiseAudioRecording`,
      { roomId }
    );
}
