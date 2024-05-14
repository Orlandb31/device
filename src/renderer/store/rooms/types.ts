import { List, Room, ExcelResults, Survey } from "@fluyappgo/commons";
import { TicketByX } from "@fluyappgo/commons/build/interfaces/analytics";

export interface RoomsState {
  loading: boolean;
  begin: string;
  end: string;
  search: string;
  entity: number;
  branch: number;
  surveys: Survey[];
  survey: Survey;
  rooms: List<Room[]>;
  room: Room;
  recordingTime: TicketByX[];
  callTime: TicketByX[];
  agentTime: TicketByX[];
  branchTime: TicketByX[];
  recordingTimeExcel: ExcelResults;
  callTimeExcel: ExcelResults;
  agentTimeExcel: ExcelResults;
  branchTimeExcel: ExcelResults;
}

interface RoomsAction {
  type: String;
  payload: List<Room[]>;
}

interface RoomAction {
  type: String;
  payload: Room;
}

interface SurveyAction {
  type: String;
  payload: Survey;
}

interface SurveysAction {
  type: String;
  payload: Survey[];
}

interface StatsAction {
  type: String;
  payload: { data: TicketByX[]; excelData: ExcelResults };
}

export type RoomsActionType = RoomsAction;
export type RoomActionType = RoomAction;
export type StatsActionType = StatsAction;
export type SurveyActionType = SurveyAction;
export type SurveysActionType = SurveysAction;
