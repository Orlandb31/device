
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Dispatch } from "react";
import { PlanningServices } from "../../services";
import { EntityTreeWithDateRange, GenerateTicketDTO, ModifyStoreDTO, TransferTicketDto } from "../../dtos";
import {
    AppointmentConfig, BranchPlanning, DayConfig, DayPlanning,
    DepartmentPlanning, EntityTreeUuid, MonthConfig, ServicePlanning, Ticket, WeekConfig, PaginationDTO, TicketNote, AddDeleteTopic, TicketTopicsDTO, Subscriber, Agent
} from "@fluyappgo/commons";


enum Type {

    MODIFY_DAY_PLANNING_TREE = 'MODIFY_DAY_PLANNING_TREE',

    MODIFY_BRANCH_PLANNING = 'MODIFY_BRANCH_PLANNING',
    GET_BRANCH_PLANNING = 'GET_BRANCH_PLANNING',
    UPDATE_BRANCH_PLANNING = 'UPDATE_BRANCH_PLANNING',
    GET_BRANCHES_PLANNING = 'GET_BRANCHES_PLANNING',
    MODIFY_BRANCH_PLANNING_DAY = 'MODIFY_BRANCH_PLANNING_DAY',
    RESET_BRANCH_PLANNING = 'RESET_BRANCH_PLANNING',

    MODIFY_DEPARTMENT_PLANNING = 'MODIFY_DEPARTMENT_PLANNING',
    GET_DEPARTMENT_PLANNING = 'GET_DEPARTMENT_PLANNING',
    UPDATE_DEPARTMENT_PLANNING = 'UPDATE_DEPARTMENT_PLANNING',
    GET_DEPARTMENTS_PLANNING = 'GET_DEPARTMENTS_PLANNING',
    REMOVE_DEPARTMENT_PLANNING = 'REMOVE_DEPARTMENT_PLANNING',


    MODIFY_SERVICE_PLANNING = 'MODIFY_SERVICE_PLANNING',
    GET_SERVICE_PLANNING = 'GET_SERVICE_PLANNING',
    UPDATE_SERVICE_PLANNING = 'UPDATE_SERVICE_PLANNING',
    GET_SERVICES_PLANNING = 'GET_SERVICES_PLANNING',
    REMOVE_SERVICE_PLANNING = 'REMOVE_SERVICE_PLANNING',


    SET_DAY_PLANNING = 'SET_DAY_PLANNING',
    MODIFY_DAY_PLANNING = 'MODIFY_DAY_PLANNING',
    GET_DAY_PLANNING = 'GET_DAY_PLANNING',
    UPDATE_DAY_PLANNING = 'UPDATE_DAY_PLANNING',
    GET_DAYS_PLANNING = 'GET_DAYS_PLANNING',


    GET_APPOINTMENTS_CONFIGS = 'GET_APPOINTMENTS_CONFIGS',
    GET_APPOINTMENT_CONFIG = 'GET_APPOINTMENT_CONFIG',

    CREATE_APPOINTMENT_CONFIG = 'CREATE_APPOINTMENT_CONFIG',
    CREATE_DAY_CONFIG = 'CREATE_DAY_CONFIG',
    CREATE_WEEK_CONFIG = 'CREATE_WEEK_CONFIG',
    CREATE_MONTH_CONFIG = 'CREATE_MONTH_CONFIG',

    REMOVE_APPOINTMENT_CONFIG = 'REMOVE_APPOINTMENT_CONFIG',
    REMOVE_DAY_CONFIG = 'REMOVE_DAY_CONFIG',
    REMOVE_WEEK_CONFIG = 'REMOVE_WEEK_CONFIG',
    REMOVE_MONTH_CONFIG = 'REMOVE_MONTH_CONFIG',

    GET_DAY_CONFIG = 'GET_DAY_CONFIG',
    GET_DAYS_CONFIGS = 'GET_DAY_CONFIG',
    GET_WEEK_CONFIG = 'GET_WEEK_CONFIG',
    GET_WEEKS_CONFIGS = 'GET_WEEKS_CONFIGS',
    GET_MONTHS_CONFIGS = 'GET_MONTHS_CONFIGS',
    GET_MONTH_CONFIG = 'GET_MONTH_CONFIG',



    GET_TICKET = 'GET_TICKET',
    GET_TICKETS = 'GET_TICKETS',
    GET_TICKET_TRACKING = 'GET_TICKET_TRACKING',
    GENERATE_TICKET = 'GENERATE_TICKET',
    UPDATE_TICKET = 'UPDATE_TICKET',
    FINISH_TICKET = 'FINISH_TICKET',
    CANCEL_TICKET = 'CANCEL_TICKET',
    REQUEUE_TICKET = 'REQUEUE_TICKET',
    UPDATE_TICKET_SUBSCRIBER = 'UPDATE_TICKET_SUBSCRIBER',

    ENCRYPT_DATA = 'ENCRYPT_DATA',

    GET_APPOINTMENT_PLANNING = 'GET_APPOINTMENT_PLANNING',


    GET_CALLERS = 'GET_CALLERS',
    GET_CALLER = 'GET_CALLER',
    GET_TEMPLATES = 'GET_TEMPLATES',
    GET_TEMPLATE = 'GET_TEMPLATE',

    MODIFY_TEMPLATE = 'MODIFY_TEMPLATE',
    DELETE_TEMPLATE_OBJECT = 'DELETE_TEMPLATE_OBJECT',
    MODIFY_TEMPLATE_EDIT_OBJECT = 'MODIFY_TEMPLATE_EDIT_OBJECT',
    RESET_TEMPLATE = 'RESET_TEMPLATE',

    CONFIRM_TICKET = 'CONFIRM_TICKET',

    GET_TOPICS = 'GET_TOPICS',
    ADD_TOPIC = 'ADD_TOPIC',
    DELETE_TOPIC = 'DELETE_TOPIC',
    EDIT_TOPIC = 'EDIT_TOPIC',

    GET_NOTES = 'GET_NOTES',
    ADD_NOTE = 'ADD_NOTE',

    SEND_FEEDBACK = 'SEND_FEEDBACK',

    TRANSFER_TICKET = 'TRANSFER_TICKET',
    ASSIGN_TICKET = 'ASSIGN_TICKET',

    ADD_TOPICS_TICKET = 'ADD_TOPICS_TICKET',
    GET_TICKET_TOPICS = 'GET_TICKET_TOPICS',

    SET_BOOKING_PLANNING ='SET_BOOKING_PLANNING',
    BOOK_TICKET = 'BOOK_TICKET',

    CREATE_TURN = 'CREATE_TURN',
    IS_OPEN_ENTITY = 'IS_OPEN_ENTITY',

}


class PlanningActionsClass {
  public headers: any = undefined;
  public Type = Type;

  public setBookingPlanning = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_BOOKING_PLANNING, payload: data });
    };
  };

  public resetTemplate = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.RESET_TEMPLATE, payload: data });
    };
  };

  public modifyTemplate = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_TEMPLATE, payload: data });
    };
  };

  public modifyTemplateEditObject = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_TEMPLATE_EDIT_OBJECT, payload: data });
    };
  };

  public deleteTemplateObject = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.DELETE_TEMPLATE_OBJECT, payload: data });
    };
  };

  public getCallers = createAsyncThunk(Type.GET_CALLERS, async (data: any) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.encryptData(data);
    return response.data;
  });

  public getNotes = createAsyncThunk(Type.GET_NOTES, async (data: string) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.getNotes(data);
    return response.data;
  });

  public addNote = createAsyncThunk(Type.ADD_NOTE, async (data: TicketNote) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.addNote(data);
    return response.data;
  });

  public getTopics = createAsyncThunk(
    Type.GET_TOPICS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTopics(data);
      return response.data;
    }
  );

  public addTopicsToTicket = createAsyncThunk(
    Type.ADD_TOPICS_TICKET,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.addTopicsToTicket(data);
      return response.data;
    }
  );

  public getTicketTopics = createAsyncThunk(
    Type.GET_TICKET_TOPICS,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketTopics(data);
      return response.data;
    }
  );

  public addTopic = createAsyncThunk(
    Type.ADD_TOPIC,
    async (data: AddDeleteTopic) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.addTopic(data);
      return response.data;
    }
  );

  public deleteTopic = createAsyncThunk(
    Type.DELETE_TOPIC,
    async (data: TicketTopicsDTO) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.deleteTopic(data);
      return response.data;
    }
  );

  public editTopic = createAsyncThunk(
    Type.EDIT_TOPIC,
    async (data: TicketTopicsDTO) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.editTopic(data);
      return response.data;
    }
  );

  public getCaller = createAsyncThunk(Type.GET_CALLER, async (data: any) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.encryptData(data);
    return response.data;
  });

  public getTemplates = createAsyncThunk(
    Type.GET_TEMPLATES,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.encryptData(data);
      return response.data;
    }
  );

  public getTemplate = createAsyncThunk(
    Type.GET_TEMPLATE,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.encryptData(data);
      return response.data;
    }
  );

  public encryptData = createAsyncThunk(
    Type.ENCRYPT_DATA,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.encryptData(data);
      return response.data;
    }
  );

  public finishTicket = createAsyncThunk(
    Type.FINISH_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.finishTicket(data);
      return response.data;
    }
  );

  public cancelTicket = createAsyncThunk(
    Type.CANCEL_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.cancelTicket(data);
      return response.data;
    }
  );

  public cancelTicketBooking = createAsyncThunk(
    Type.CANCEL_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.cancelTicketBooking(data);
      return response.data;
    }
  );

  public cancelTicketByAgent = createAsyncThunk(
    Type.CANCEL_TICKET,
    async () => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.cancelTicketByAgent();
      return response.data;
    }
  );

  public requeueTicket = createAsyncThunk(
    Type.REQUEUE_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.requeueTicket(data);
      return response.data;
    }
  );

  public updateTicketSubscriber = createAsyncThunk(
    Type.UPDATE_TICKET_SUBSCRIBER,
    async (data: { ticket: Ticket; subscriber: Subscriber }) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateTicketSubscriber(data);
      return response.data;
    }
  );

  public getTicket = createAsyncThunk(Type.GET_TICKET, async (uuid: string) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.getTicket(uuid);
    return response.data;
  });

  public getTicketVideo = createAsyncThunk(
    Type.GET_TICKET,
    async (uuid: string) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketVideo(uuid);
      return response.data;
    }
  );

  public getTicketByToken = createAsyncThunk(Type.GET_TICKET, async () => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.getTicketByToken();
    return response.data;
  });

  public confirmTicket = createAsyncThunk(
    Type.CONFIRM_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.confirmTicket(data);
      return response.data;
    }
  );

  public confirmKioskTicket = createAsyncThunk(
    Type.CONFIRM_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.confirmKioskTicket(data);
      return response.data;
    }
  );

  public confirmReservation = createAsyncThunk(
    Type.CONFIRM_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.confirmReservation(data);
      return response.data;
    }
  );

  public cancelReservation = createAsyncThunk(
    Type.CANCEL_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.cancelReservation(data);
      return response.data;
    }
  );

  public cancelTicketByToken = createAsyncThunk(
    Type.CANCEL_TICKET,
    async () => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.cancelTicketByToken();
      return response.data;
    }
  );

  public sendFeedback = createAsyncThunk(
    Type.SEND_FEEDBACK,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.sendFeedback(data);
      return response.data;
    }
  );

  public transferTicket = createAsyncThunk(
    Type.TRANSFER_TICKET,
    async (data: TransferTicketDto) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.transferTicket(data);
      return response.data;
    }
  );

  public assignTicket = createAsyncThunk(
    Type.ASSIGN_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.assingTicket(data);
      return response.data;
    }
  );

  public assignTicketAdmin = createAsyncThunk(
    Type.ASSIGN_TICKET,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.assingTicketAgent(data);
      return response.data;
    }
  );

  public getTickets = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: PaginationDTO<EntityTreeUuid>) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTickets(data);
      return response.data;
    }
  );

  public getTicketRecordBySubscriber = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: PaginationDTO<any>) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketRecordsBySubscriber(
        data
      );
      return response.data;
    }
  );

  public getTicketsBySubscriber = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketsBySubscriber(data);
      return response.data;
    }
  );

  public getAppointmentsByAgent = createAsyncThunk(
    Type.GET_TICKETS,
    async () => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getAppointmentsByAgent();
      return response.data;
    }
  );

  public getAppointmentsByDate = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: EntityTreeWithDateRange) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getAppointmentsByDate(data);
      return response.data;
    }
  );

  public getTicketsPending = createAsyncThunk(Type.GET_TICKETS, async () => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.getTicketPending();
    return response.data;
  });

  public getTicketsPendingByAgent = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: Agent) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketPendingByAgent(data);
      return response.data;
    }
  );

  public getTicketsRealTime = createAsyncThunk(
    Type.GET_TICKETS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketsRealTime(data);
      return response.data;
    }
  );

  public getTicketTracking = createAsyncThunk(
    Type.GET_TICKET_TRACKING,
    async (data: string) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getTicketTracking(data);
      return response.data;
    }
  );

  public generateTicket = createAsyncThunk(
    Type.GENERATE_TICKET,
    async (data: GenerateTicketDTO) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.generateTicket(data);
      return response.data;
    }
  );

  public generateTicketP = createAsyncThunk(
    Type.GENERATE_TICKET,
    async (data: GenerateTicketDTO) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.generateTicketP(data);
      return response.data;
    }
  );

  public getAppointmentPlanning = createAsyncThunk(
    Type.GET_APPOINTMENT_PLANNING,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getAppointmentPlanning(data);
      return response.data;
    }
  );

  public bookTicket = createAsyncThunk(Type.BOOK_TICKET, async (data: any) => {
    const planningApi = new PlanningServices(this.headers);
    const response: any = await planningApi.bookTicket(data);
    return response.data;
  });

  public kioskCreateTurn = createAsyncThunk(
    Type.CREATE_TURN,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.createTurnKiosk(data);
      return response.data;
    }
  );

  public getBookingPlanning = createAsyncThunk(
    Type.GET_APPOINTMENT_PLANNING,
    async (data: any) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getBookingPlanning(data);
      return response.data;
    }
  );

  public updateTicket = createAsyncThunk(
    Type.UPDATE_TICKET,
    async (data: Ticket) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateTicket(data);
      return response.data;
    }
  );

  public updateDayPlanning = createAsyncThunk(
    Type.UPDATE_DAY_PLANNING,
    async (data: DayPlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateDayPlanning(data);
      return response.data;
    }
  );

  public updateDepartmentPlanning = createAsyncThunk(
    Type.UPDATE_DEPARTMENT_PLANNING,
    async (data: DepartmentPlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateDepartmentPlanning(data);
      return response.data;
    }
  );

  public removeDepartmentPlanning = createAsyncThunk(
    Type.REMOVE_DEPARTMENT_PLANNING,
    async (data: DepartmentPlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeDepartmentPlanning(data);
      return response.data;
    }
  );

  public updateBranchPlanning = createAsyncThunk(
    Type.UPDATE_BRANCH_PLANNING,
    async (data: BranchPlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateBranchPlanning(data);
      return response.data;
    }
  );

  public resetBranchPlanning = createAsyncThunk(
    Type.RESET_BRANCH_PLANNING,
    async (data: BranchPlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.resetBranchPlanning(data);
      return response.data;
    }
  );

  public updateServicePlanning = createAsyncThunk(
    Type.UPDATE_SERVICE_PLANNING,
    async (data: ServicePlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.updateServicePlanning(data);
      return response.data;
    }
  );

  public removeServicePlanning = createAsyncThunk(
    Type.REMOVE_SERVICE_PLANNING,
    async (data: ServicePlanning) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeServicePlanning(data);
      return response.data;
    }
  );

  public getBranchPlanning = createAsyncThunk(
    Type.GET_BRANCH_PLANNING,
    async (uuid: string) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getBranchPlanning(uuid);
      return response.data;
    }
  );

  public getDepartmentPlanning = createAsyncThunk(
    Type.GET_DEPARTMENT_PLANNING,
    async (uuid: string) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getDepartmentPlanning(uuid);
      return response.data;
    }
  );

  public getServicePlanning = createAsyncThunk(
    Type.GET_SERVICE_PLANNING,
    async (uuid: string) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getServicePlanning(uuid);
      return response.data;
    }
  );

  public getDaysPlanning = createAsyncThunk(
    Type.GET_DAYS_PLANNING,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getDaysPlanning(data);
      return response.data;
    }
  );

  public createConfig = createAsyncThunk(
    Type.CREATE_APPOINTMENT_CONFIG,
    async (data: AppointmentConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.createConfig(data);
      return response.data;
    }
  );

  public removeConfig = createAsyncThunk(
    Type.REMOVE_APPOINTMENT_CONFIG,
    async (data: AppointmentConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeConfig(data);
      return response.data;
    }
  );

  public createDayConfig = createAsyncThunk(
    Type.CREATE_DAY_CONFIG,
    async (data: DayConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.createDayConfig(data);
      return response.data;
    }
  );

  public removeDayConfig = createAsyncThunk(
    Type.REMOVE_DAY_CONFIG,
    async (data: DayConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeDayConfig(data);
      return response.data;
    }
  );

  public createWeekConfig = createAsyncThunk(
    Type.CREATE_WEEK_CONFIG,
    async (data: WeekConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.createWeekConfig(data);
      return response.data;
    }
  );

  public removeWeekConfig = createAsyncThunk(
    Type.REMOVE_WEEK_CONFIG,
    async (data: WeekConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeWeekConfig(data);
      return response.data;
    }
  );

  public createMonthConfig = createAsyncThunk(
    Type.CREATE_MONTH_CONFIG,
    async (data: MonthConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.createMonthConfig(data);
      return response.data;
    }
  );

  public removeMonthConfig = createAsyncThunk(
    Type.REMOVE_MONTH_CONFIG,
    async (data: MonthConfig) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.removeMonthConfig(data);
      return response.data;
    }
  );

  public getConfigs = createAsyncThunk(
    Type.GET_APPOINTMENTS_CONFIGS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getConfigs(data);
      return response.data;
    }
  );

  public getConfig = createAsyncThunk(
    Type.GET_APPOINTMENT_CONFIG,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getConfig(data);
      return response.data;
    }
  );

  public getDaysConfigs = createAsyncThunk(
    Type.GET_DAYS_CONFIGS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getDaysConfigs(data);
      return response.data;
    }
  );

  public getDayConfig = createAsyncThunk(
    Type.GET_DAY_CONFIG,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getdayConfig(data);
      return response.data;
    }
  );

  public getWeeksConfigs = createAsyncThunk(
    Type.GET_WEEKS_CONFIGS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getWeeksConfigs(data);
      return response.data;
    }
  );

  public getWeekConfig = createAsyncThunk(
    Type.GET_WEEK_CONFIG,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getWeekConfig(data);
      return response.data;
    }
  );

  public getMonthConfig = createAsyncThunk(
    Type.GET_MONTH_CONFIG,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getMonthConfig(data);
      return response.data;
    }
  );

  public getMonthsConfigs = createAsyncThunk(
    Type.GET_MONTHS_CONFIGS,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.getMonthsConfigs(data);
      return response.data;
    }
  );

  public isOpenEntity = createAsyncThunk(
    Type.IS_OPEN_ENTITY,
    async (data: EntityTreeUuid) => {
      const planningApi = new PlanningServices(this.headers);
      const response: any = await planningApi.isOpenEntity(data);
      return response.data;
    }
  );

  public setPlanningDay = (data: DayPlanning) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_DAY_PLANNING, payload: data });
    };
  };

  public modifyPlanningDay = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_DAY_PLANNING, payload: data });
    };
  };

  public modifyPlanningDayTree = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_DAY_PLANNING_TREE, payload: data });
    };
  };

  public modifyBranchPlanning = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_BRANCH_PLANNING, payload: data });
    };
  };

  public modifyDepartmentPlanning = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_DEPARTMENT_PLANNING, payload: data });
    };
  };

  public modifyServicePlanning = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_SERVICE_PLANNING, payload: data });
    };
  };
}

export const PlanningActions = new PlanningActionsClass()