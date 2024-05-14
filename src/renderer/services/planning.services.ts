import { AddDeleteTopic, Agent, AppointmentConfig, Branch, BranchPlanning, DayConfig, DayPlanning, Department, DepartmentPlanning, Entity, EntityTreeUuid, MonthConfig, PaginationDTO, ResponseDTO, Service, ServicePlanning, Subscriber, Ticket, TicketNote, TicketTopicsDTO, UserFB, WeekConfig } from "@fluyappgo/commons";
import axios from "axios";
import { CreateAgentDTO, CreateElementEntityTreeDTO, EntityTreeDTO, EntityTreeWithDateRange, GenerateTicketDTO } from "../dtos";
import { HttpClient } from "../helpers/httpClient";

export class PlanningServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public addNote = (data: TicketNote) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/add-ticket-note`, { ticketUuid: data.ticket, note: data.note })
    };

    public getNotes = (data: string) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-notes`, { ticketUuid: data })
    };

    public getTopics = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/topics/get-topics`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public addTopicsToTicket = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/topics/add-ticket-topics`, data)
    };

    public getTicketTopics = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/topics/get-ticket-topics`, {
            ticket: {
                uuid: data
            }
        })
    };

    public addTopic = (data: AddDeleteTopic) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/topics/add-topic/${data.parent}`, data)
    };

    public deleteTopic = (data: TicketTopicsDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/topics/delete-topic/${data.uuid}`, data)
    };

    public editTopic = (data: TicketTopicsDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/topics/edit-topic`, { topic: data })
    };

    public getUrlImage = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/bucket-auth-caller-image`, data)
    };

    public getUrlVideo = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msMoving}/bucket-auth-caller-video`, data)
    };


    public putObject = (url: string, file: any) => {
        axios.create();
        return axios.put(url, file)
    }

    public encryptData = (data: any) => {
        return this.instance.post<ResponseDTO>(`/video/anonymous/encrypt`, data)
    };

    public getBranchesPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-entity-tree`)
    };

    public getBranchPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-branch-planning/${uuid}`)
    };

    public updateBranchPlanning = (data: BranchPlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/update-branch-planning`, data)
    };

    public resetBranchPlanning = (data: BranchPlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/reset-branch-planning`, data)
    };

    public getDepartmentsPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-entity-tree`)
    };

    public getDepartmentPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-department-planning/${uuid}`)
    };

    public updateDepartmentPlanning = (data: DepartmentPlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/update-department-planning`, data)
    };

    public removeDepartmentPlanning = (data: DepartmentPlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-department-planning`, data)
    };

    public getServicesPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-entity-tree`)
    };

    public getServicePlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-service-planning/${uuid}`)
    };

    public updateServicePlanning = (data: ServicePlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/update-service-planning`, data)
    };

    public removeServicePlanning = (data: ServicePlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-service-planning`, data)
    };

    public getConfigs = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointments-configs`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getConfig = (data: AppointmentConfig) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointment-config`, { params: { uuid: data.uuid } })
    };

    public createConfig = (data: AppointmentConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/create-appointment-config`, data)
    };
    public removeConfig = (data: AppointmentConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-appointment-config`, data)
    };

    public getDaysConfigs = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-days-configs`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getdayConfig = (data: AppointmentConfig) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-day-config`, { params: { uuid: data.uuid } })
    };

    public createDayConfig = (data: DayConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/create-day-config`, data)
    };

    public removeDayConfig = (data: DayConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-day-config`, data)
    };

    public getWeeksConfigs = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-weeks-configs`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getWeekConfig = (data: AppointmentConfig) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-week-config`, { params: { uuid: data.uuid } })
    };

    public createWeekConfig = (data: WeekConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/create-week-config`, data)
    };

    public removeWeekConfig = (data: WeekConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-week-config`, data)
    };

    public getMonthsConfigs = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-months-configs`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getMonthConfig = (data: AppointmentConfig) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-month-config`, { params: { uuid: data.uuid } })
    };

    public createMonthConfig = (data: MonthConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/create-month-config`, data)
    };

    public removeMonthConfig = (data: MonthConfig) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/remove-month-config`, data)
    };

    public getDaysPlanning = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-days-planning`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getDayPlanning = (uuid: String) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-entity-tree`)
    };

    public updateDayPlanning = (data: DayPlanning) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/update-day-planning`, data)
    };

    public getTicket = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket/${uuid}`)
    };

    public getTicketVideo = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-video/${uuid}`)
    };

    public getTicketByToken = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-by-token`)
    };

    public confirmTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/confirm-ticket`, data)
    };

    public confirmKioskTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/confirm-kiosk-ticket`, data)
    };

    public confirmReservation = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/confirm-reservation`, data)
    };

    public cancelReservation = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/cancel-reservation`, data)
    };

    public sendFeedback = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/send-feedback`, data)
    };

    public transferTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/transfer-ticket`, data)
    };

    public assingTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/manual-match-ticket`, {
            ticket: {
                uuid: data?.uuid
            }
        })
    };

    public assingTicketAgent = ({ ticket, agent }: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/manual-match-ticket-admin`, {
            ticket: {
                uuid: ticket.uuid
            },
            agentX: {
                uuid: agent.uuid
            }
        })
    };

    public getTickets = (data: PaginationDTO<EntityTreeUuid>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-tickets`, data)
    };

    public getTicketRecordsBySubscriber = (data: PaginationDTO<any>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-subscriber-record`, data)
    };

    public getTicketsBySubscriber = (data: any) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointments-by-subscriber`, { params: { id: data.documentId, email: data.email } })
    };

    public getAppointmentsByAgent = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointments-by-agent`)
    };

    public getAppointmentsByDate = (data: EntityTreeWithDateRange) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointments-by-date`, data)
    };

    public getTicketsRealTime = (data: EntityTreeUuid) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-tickets-real-time`, data)
    };

    public getTicketPending = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-tickets-pending`)
    };

    public getTicketPendingByAgent = (data: Agent) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-tickets-pending-by-agent`, data)
    };

    public getTicketTracking = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-tracking/${uuid}`)
    };

    public generateTicket = (data: GenerateTicketDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/generate-ticket`, data)
    };


    public generateTicketP = (data: GenerateTicketDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/generate-ticket-sam`, data)
    };

    public getAppointmentPlanning = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-appointment-planning`, { params: { branchUuid: data.branchUuid, departmentUuid: data.departmentUuid, serviceUuid: data.serviceUuid } })
    };

    public getBookingPlanning = (data: any) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-booking-planning`, { params: { branchUuid: data.branchUuid, menuUuid: data.menuUuid } })
    };

    public bookTicket = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/book-appointment`, data)
    };

    public createTurnKiosk = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/generate-kiosk-turnTicket`, data)
    };


    public finishTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/finish-ticket`, data)
    };

    public cancelTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/cancel-ticket`, data)
    };

    public cancelTicketBooking = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/cancel-ticket-booking`, data)
    };

    public cancelTicketByAgent = () => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/cancel-ticket-by-agent`)
    };


    public requeueTicket = (data: Ticket) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/requeue-ticket`, { ticketUuid: data.uuid })
    };

    public updateTicketSubscriber = (data: { ticket: Ticket, subscriber: Subscriber }) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/update-ticket-subscriber`, data)
    };

    public cancelTicketByToken = () => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/cancel-ticket-by-token`)
    };

    public updateTicket = (data: Ticket) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/update-ticket/${data.uuid}`, data)
    };

    public isOpenEntity = (data: EntityTreeUuid) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/is-open-entity`, data)
    };

    

}

