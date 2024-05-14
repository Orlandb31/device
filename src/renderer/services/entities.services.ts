import { Agent, Branch, Department, Entity, EntityTreeUuid, GeneralBranch, GeneralDepartment, GeneralService, Menu, PaginationDTO, ResponseDTO, Service, Subscriber, UserFB } from "@fluyappgo/commons";
import axios from "axios";
import { CreateAgentDTO, CreateElementEntityTreeDTO, CreateSubscriberDTO, CreateUserDTO, EntityTreeDTO, IsAgentOnlineDTO, ModifyPriority, UpdateUserDTO } from "../dtos";
import { HttpClient } from "../helpers/httpClient";

export class EntitiesServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public getEntityTree = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity-tree`)
    };

    public updateEntity = (data: Entity) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/entity-update/${data.uuid}`, data)
    };

    public getEntityByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity-uuid`, { params: { uuid: data } })
    };

    public getDepartmentsByBranch = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/kiosk-list-departments`, { params: { uuid: data } })
    };

    public getServicesByDepartment = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/kiosk-list-services`, { params: { uuid: data } })
    };

    public getBookingEntityByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity-uuid-booking`, { params: { uuid: data } })
    };

    public getMenusByEntityUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/menu/menu-by-entity/${data}`,)
    };

    public getEntity = (data: EntityTreeDTO) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity`, { params: { entityId: data.entityId } })
    };

    public getEntities = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/entity-lists`)
    };

    public createEntity = (data: Entity) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/entity-create`, data)
    };

    public deleteEntity = (data: Entity) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/entity-remove`, data)
    };

    public createUserEntity = (data: CreateElementEntityTreeDTO<UserFB>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/service-create`, data)
    };

    public updateBranch = (data: Entity) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/branch-update/${data.uuid}`, data)
    };

    public updateBranchFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/branch-update-from-template/`, data)
    };

    public getBranch = (data: EntityTreeDTO) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-branch`, { params: { id: data.branchId } })
    };

    public getBranches = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/branch-lists`, data)
    };

    public getBranchesMap = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/branch-lists-map`, data)
    };

    public createBranch = (data: CreateElementEntityTreeDTO<Branch>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/branch-create`, data)
    };

    public createTreeFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/create-tree-from-template`, data)
    };

    public createServicesFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/create-services-from-template`, data)
    };

    public createDepartmentTreeFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/create-department-tree-from-template`, data)
    };

    public createGeneralBranch = (data: CreateElementEntityTreeDTO<GeneralBranch>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-branch-create`, data)
    };

    public deleteBranch = (data: Branch) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/branch-remove`, data)
    };

    public getBranchByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-branch-uuid`, { params: { uuid: data } })
    };

    public getBranchByMenuUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/list-branch-by-menu`, { params: { uuid: data } })
    };

    public updateDepartment = (data: Entity) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/department-update/${data.uuid}`, data)
    };

    public getDeparment = (data: EntityTreeDTO) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-department`, { params: { id: data.departmentId } })
    };

    public deleteDepartment = (data: Department) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/department-remove`, data)
    };

    public getDepartments = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/department-lists`, data)
    };

    public createDepartment = (data: CreateElementEntityTreeDTO<Department>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/department-create`, data)
    };

    public getDepartmentByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-department-uuid`, { params: { uuid: data } })
    };

    public updateService = (data: Entity) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/service-update/${data.uuid}`, data)
    };

    public updateServiceFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/service-update-from-template/`, data)
    };

    public updateDepartmentFromTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/department-update-from-template/`, data)
    };

    public getGenServicesByTemplate = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/gen-service-by-template`, { params: { uuid: data } })
    };

    public getGenDepartmentsByTemplate = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/gen-department-by-template`, { params: { uuid: data } })
    };

    public getService = (data: EntityTreeDTO) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-service`, { params: { id: data.serviceId } })
    };

    public getServices = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/service-lists`, data)
    };

    public getGeneralServices = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-service-lists`, data)
    };

    public updateGeneralService = (data: GeneralService) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/gen-service-update/${data.uuid}`, data)
    };

    public getServicesByEntityTreeUuid = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-services-by-entitytreeuuid`, {
            params: data
        })
    };

    public getServicesByEntityTreeUuidTemplate = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-services-by-entitytreeuuid-template`, {
            params: data
        })
    };

    public getMenuServices = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-menu-services`, {
            params: data
        })
    };

    public createMenu = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/menu/create`, data)
    };

    public updateMenu = (data: any) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/menu/update/${data.uuid}`, data)
    };

    public removeMenu = (data: Menu) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/menu/remove`, data)
    };

    public getMenu = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/menu/${uuid}`)
    };


    public getEntityTreeByUuid = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity-tree-by-uuid`, {
            params: data
        })
    };

    public createService = (data: CreateElementEntityTreeDTO<Service>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/service-create`, data)
    };

    public deleteService = (data: Service) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/service-remove`, data)
    };

    public createGeneralService = (data: CreateElementEntityTreeDTO<GeneralService>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-service-create`, data)
    };

    public deleteGeneralService = (data: GeneralService) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-service-remove`, data)
    };

    public getUsersByEntityTree = (data: PaginationDTO<EntityTreeUuid>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/get-users-by-entity-tree`, data)
    };

    public createUser = (data: CreateUserDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/user-create/`, data)
    };

    public updateUser = (data: UpdateUserDTO) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msUsers}/user-update/${data.user.id}`, data)
    };

    public getProfiles = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msUsers}/get-all-profiles`)
    };

    public createAgent = (data: CreateAgentDTO) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/create-agent`, data)
    };

    public deleteAgent = (data: Agent) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/agent-remove`, data)
    };

    public deleteUser = (data: UserFB) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/user-remove`, data)
    };


    public updateAgent = (data: Agent) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/update-agent/${data.uuid}`, data)
    };

    public updatePriority = (data: ModifyPriority) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msMoving}/update-agent-priority/${data.uuid}`, data)
    };

    public getAgents = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-agents`, {
            params: {
                entityUuid: data.entityUuid,
                branchUuid: data.branchUuid,
                departmentUuid: data.departmentUuid,
                serviceUuid: data.serviceUuid
            }
        })
    };


    public getAgentsSearch = (data: PaginationDTO<EntityTreeUuid>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-agents-search`, data)
    };


    public getAgentsRealTime = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-agents-real-time`, {
            params: {
                entityUuid: data.entityUuid,
                branchUuid: data.branchUuid,
                departmentUuid: data.departmentUuid,
                serviceUuid: data.serviceUuid
            }
        })
    };




    public getAgentsByServices = (data: string[]) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-agents-by-services`, { uuids: data })
    };

    public getAgent = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-agent/${uuid}`)
    };

    public getSlaByEntitytree = (data: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-sla-by-entitytree`, {
            params: data
        })
    };

    public getAgentTracking = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-agent-tracking/${data.query}`, data)
    };

    public getAgentByUser = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-agent-by-user/`)
    };

    public getTicketAgent = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-by-agent/`)
    };

    public getTicketAgentAdmin = (data: Agent) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/get-ticket-by-agent-admin`, data)
    };

    public isAgentOnline = (data: IsAgentOnlineDTO) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msMoving}/is-agent-online/`, { params: data })
    };

    public switchAgentStatus = (status: string) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/switch-agent-status`, { status: status })
    };

    public switchAgentStatusAdmin = (agent: Agent) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/switch-agent-status-admin`, { status: agent.status, agentUuid: agent.uuid })
    };

    public approveRejectVisit = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/approve-reject-visit`, data)
    };


    public switchAgentNextState = (status: string) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/switch-agent-next-state`, { status: status })
    };

    public switchAgentNextStateAdmin = (data: Agent) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/switch-agent-next-state-admin`, { status: data.status, agentUuid: data.uuid })
    };

    public getSubscriber = (uuid: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msUsers}/get-subscriber/${uuid}`)
    };

    public getSubscribers = (entityTree: EntityTreeUuid) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msUsers}/get-subscribers`, { params: entityTree })
    };

    public getSubscribersFiltered = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/get-subscribers-filtered`, data)
    };

    public getSubscribersByEmail = (data: any) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msUsers}/get-subscribers`, { params: data })
    };


    public getSubscribersLimit = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/get-subscribers-limit`, data)
    };

    public createSubscriber = (data: CreateSubscriberDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/create-subscriber`, data)
    };

    public authSubscriber = (data: CreateSubscriberDTO) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msUsers}/auth-subscriber`, data)
    };

    public updateSubscriber = (data: Subscriber) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msUsers}/update-subscriber/${data.uuid}`, data)
    };

    public createUpdateSubscriber = (data: Subscriber) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msUsers}/create-update-subscriber`, data)
    };

    public getServiceByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-service-uuid`, { params: { uuid: data } })
    };

    public getGenServiceByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-gen-service-uuid`, { params: { uuid: data } })
    };

    public getUrlBookingLogo = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msEntities}/bucket-auth-booking-logos`, data)
    };

    public getUrlPregisterImage = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msEntities}/bucket-auth-pregister-images`, data)
    };

    public getUrldocumentPregisterImage = (data: any) => {
        return this.instance.post<any>(`${this.baseUrl.msEntities}/bucket-auth-pregister-document-images`, data)
    };

    public putObject = (url: string, file: any) => {
        axios.create();
        return axios.put(url, file)
    }

    public getMenusSearch = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/menu/get-menus`, data)
    };

    public createTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/template-create/`, data);
    }

    public deleteTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/template-remove/`, data);
    }

    public updateTemplate = (data: any) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/template-update/${data.uuid}`, data);
    }

    public assignMeAgent = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/assign-me-agent`, { agentUuid: data.agentUuid, label: data.label });
    }

    public getTemplateByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-template-uuid/`, { params: { uuid: data } });
    }

    public getAllTemplates = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/template-lists/`, {
            params: {
                entityUuid: data
            }
        });
    }

    public deleteGenBranch = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-branch-remove/`, data);
    }

    public updateGenBranch = (data: any) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/gen-branch-update/${data.uuid}`, data);
    }

    public getGenBranchByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-gen-branch-uuid/`, { params: { uuid: data } });
    }

    public getGenBranches = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-branch-lists/`, data);
    }


    public deleteGenDepartment = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-department-remove/`, data);
    }

    public updateGenDepartment = (data: any) => {
        return this.instance.put<ResponseDTO>(`${this.baseUrl.msEntities}/gen-department-update/${data.uuid}`, data);
    }

    public getTicketTimingByTemplate = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msAnalytics}/analytics/tickets-timing-by-template`, data);
    }

    public getTicketCountByBranch = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msMoving}/analytics/tickets-count-by-branch`, data);
    }

    public getGenDepartmentByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-gen-department-uuid/`, { params: { uuid: data } });
    }

    public getGenDepartments = (data: PaginationDTO<string>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-department-lists/`, data);
    }

    public createGeneralDepartment = (data: CreateElementEntityTreeDTO<GeneralDepartment>) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/gen-department-create`, data)
    };

    public getEmailTemplatesByUuid = (data: string) => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msEntities}/get-entity-mails-uuid`, { params: { uuid: data } })
    };

    public updateEmailTemplates = (data: any) => {
        return this.instance.post<ResponseDTO>(`${this.baseUrl.msEntities}/set-entity-mails`, data);
    };


}

