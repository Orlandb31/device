import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { EntitiesServices } from "../../services";
import {
  CreateAgentDTO,
  CreateElementEntityTreeDTO,
  CreateSubscriberDTO,
  CreateUserDTO,
  EntityTreeDTO,
  IsAgentOnlineDTO,
  loginDTO,
  ModifyPriority,
  ModifyStoreDTO,
  UpdateUserDTO,
} from "../../dtos";
import {
  Agent,
  AgentStates,
  Branch,
  Department,
  Entity,
  EntityTreeUuid,
  GeneralBranch,
  GeneralDepartment,
  GeneralService,
  Menu,
  PaginationDTO,
  Service,
  Subscriber,
  Template,
  UserFB,
} from "@fluyappgo/commons";

enum Type {
  UPDATE_ENTITY = "UPDATE_ENTITY",
  MODIFY_ENTITY = "MODIFY_ENTITY",
  GET_ENTITIES = "GET_ENTITIES",
  MODIFY_USER_ENTITY = "MODIFY_USER_ENTITY",
  CREATE_ENTITY = "CREATE_ENTITY",
  REMOVE_ENTITY = "REMOVE_ENTITY",

  CREATE_USER_ENTITY = "CREATE_USER_ENTITY",
  GET_ENTITY = "GET_ENTITY",
  SET_ENTITY = "SET_ENTITY",

  UPDATE_BRANCH = "UPDATE_BRANCH",
  CREATE_BRANCH = "CREATE_BRANCH",
  MODIFY_BRANCH = "MODIFY_BRANCH",
  REMOVE_BRANCH = "REMOVE_BRANCH",

  GET_BRANCH = "GET_BRANCH",
  SET_BRANCH = "SET_BRANCH",
  GET_BRANCHES = "GET_BRANCHES",

  UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT",
  MODIFY_DEPARTMENT = "MODIFY_DEPARTMENT",
  CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
  REMOVE_DEPARTMENT = "REMOVE_DEPARTMENT",

  GET_DEPARTMENTS = "GET_DEPARTMENTS",
  GET_DEPARTMENT = "GET_DEPARTMENT",
  SET_DEPARTMENT = "SET_DEPARTMENT",

  UPDATE_SERVICE = "UPDATE_SERVICE",
  GET_SERVICE = "GET_SERVICE",
  SET_SERVICE = "SET_SERVICE",
  CREATE_SERVICE = "CREATE_SERVICE",
  GET_SERVICES = "GET_SERVICES",
  MODIFY_SERVICE = "MODIFY_SERVICE",
  REMOVE_SERVICE = "REMOVE_SERVICE",

  GET_ENTITY_TREE = "GET_ENTITY_TREE",

  GET_USERS = "GET_USERS",
  CREATE_USER = "CREATE_USER",
  UPDATE_USER = "UPDATE_USER",
  REMOVE_USER = "REMOVE_USER",
  GET_PROFILES = "GET_PROFILES",

  CREATE_AGENT = "CREATE_AGENT",
  UPDATE_AGENT = "UPDATE_AGENT",
  GET_AGENTS = "GET_AGENTS",
  GET_AGENT = "GET_AGENT",
  REMOVE_AGENT = "REMOVE_AGENT",

  SET_AGENT = "SET_AGENT",

  GET_AGENT_TRACKING = "GET_AGENT_TRACKING",
  GET_AGENT_USER = "GET_AGENT_USER",
  GET_TICKET_AGENT = "GET_TICKET_AGENT",
  SWITCH_AGENT_STATUS = "SWITCH_AGENT_STATUS",
  SWITCH_AGENT_NEXT_STATE = "SWITCH_AGENT_NEXT_STATE",
  IS_AGENT_ONLINE = "IS_AGENT_ONLINE",
  APPROVE_REJECT_VISIT = "APPROVE_REJECT_VISIT",

  CREATE_SUBSCRIBER = "CREATE_SUBSCRIBER",
  AUTH_SUBSCRIBER = "AUTH_SUBSCRIBER",
  GET_SUBSCRIBER = "GET_SUBSCRIBER",
  GET_SUBSCRIBERS = "GET_SUBSCRIBERS",
  UPDATE_SUBSCRIBER = "UPDATE_SUBSCRIBER",

  SET_MENU = "SET_MENU",
  GET_MENUS = "GET_MENUS",
  GET_MENU = "GET_MENU",
  CREATE_MENU = "CREATE_MENU",
  UPDATE_MENU = "UPDATE_MENU",
  REMOVE_MENU = "REMOVE_MENU",

  UPDATE_TEMPLATE = "UPDATE_TEMPLATE",
  MODIFY_TEMPLATE = "MODIFY_TEMPLATE",
  CREATE_TEMPLATE = "CREATE_TEMPLATE",
  REMOVE_TEMPLATE = "REMOVE_TEMPLATE",
  CREATE_TREE_TEMPLATE = "CREATE_TREE_TEMPLATE",

  GET_TEMPLATES = "GET_TEMPLATES_ENTITY",
  GET_TEMPLATE = "GET_TEMPLATE_ENTITY",
  SET_TEMPLATE = "SET_TEMPLATE_ENTITY",

  UPDATE_GENERAL_BRANCH = "UPDATE_GENERAL_BRANCH",
  CREATE_GENERAL_BRANCH = "CREATE_GENERAL_BRANCH",
  MODIFY_GENERAL_BRANCH = "MODIFY_GENERAL_BRANCH",
  REMOVE_GENERAL_BRANCH = "REMOVE_GENERAL_BRANCH",

  GET_GENERAL_BRANCH = "GET_GENERAL_BRANCH",
  SET_GENERAL_BRANCH = "SET_GENERAL_BRANCH",
  GET_GENERAL_BRANCHES = "GET_GENERAL_BRANCHES",

  UPDATE_GENERAL_DEPARTMENT = "UPDATE_GENERAL_DEPARTMENT",
  MODIFY_GENERAL_DEPARTMENT = "MODIFY_GENERAL_DEPARTMENT",
  CREATE_GENERAL_DEPARTMENT = "CREATE_GENERAL_DEPARTMENT",
  REMOVE_GENERAL_DEPARTMENT = "REMOVE_GENERAL_DEPARTMENT",

  GET_GENERAL_DEPARTMENTS = "GET_GENERAL_DEPARTMENTS",
  GET_GENERAL_DEPARTMENT = "GET_GENERAL_DEPARTMENT",
  SET_GENERAL_DEPARTMENT = "SET_GENERAL_DEPARTMENT",

  UPDATE_GENERAL_SERVICE = "UPDATE_GENERAL_SERVICE",
  MODIFY_GENERAL_SERVICE = "MODIFY_GENERAL_SERVICE",
  CREATE_GENERAL_SERVICE = "CREATE_GENERAL_SERVICE",
  REMOVE_GENERAL_SERVICE = "REMOVE_GENERAL_SERVICE",

  GET_GENERAL_SERVICES = "GET_GENERAL_SERVICES",
  GET_GENERAL_SERVICE = "GET_GENERAL_SERVICE",
  SET_GENERAL_SERVICE = "SET_GENERAL_SERVICE",

  ASSIGN_ME_AGENT = "ASSIGN_ME_AGENT",
  GET_SLA = "GET_SLA",

  GET_EMAIL_TEMPLATES = "GET_EMAIL_TEMPLATES",
  UPDATE_EMAIL_TEMPLATES = "UPDATE_EMAIL_TEMPLATES",
  MODIFY_EMAIL_TEMPLATES = "MODIFY_EMAIL_TEMPLATES",

  GET_TICKET_TIMING_BY_TEMPLATE = "GET_TICKET_TIMING_BY_TEMPLATE",
  GET_TICKET_COUNT_BY_BRANCH = "GET_TICKET_COUNT_BY_BRANCH",
}

class EntityActionsClass {
  public headers: any = undefined;
  public Type = Type;

  public createSubscriber = createAsyncThunk(
    Type.CREATE_SUBSCRIBER,
    async (data: CreateSubscriberDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createSubscriber(data);
      return response.data;
    }
  );

  public authSubscriber = createAsyncThunk(
    Type.AUTH_SUBSCRIBER,
    async (data: CreateSubscriberDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.authSubscriber(data);
      return response.data;
    }
  );

  public getSubscriber = createAsyncThunk(
    Type.GET_SUBSCRIBER,
    async (uuid: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSubscriber(uuid);
      return response.data;
    }
  );

  public getSubscribers = createAsyncThunk(
    Type.GET_SUBSCRIBERS,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSubscribers(data);
      return response.data;
    }
  );

  public getSubscribersFiltered = createAsyncThunk(
    Type.GET_SUBSCRIBERS,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSubscribersFiltered(data);
      return response.data;
    }
  );

  public getSubscribersByEmail = createAsyncThunk(
    Type.GET_SUBSCRIBERS,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSubscribersByEmail(data);
      return response.data;
    }
  );

  public getSubscribersLimit = createAsyncThunk(
    Type.GET_SUBSCRIBERS,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSubscribersLimit(data);
      return response.data;
    }
  );

  public updateSubscriber = createAsyncThunk(
    Type.UPDATE_SUBSCRIBER,
    async (data: Subscriber) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateSubscriber(data);
      return response.data;
    }
  );

  public createUpdateSubscriber = createAsyncThunk(
    Type.UPDATE_SUBSCRIBER,
    async (data: Subscriber) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createUpdateSubscriber(data);
      return response.data;
    }
  );

  public updateAgent = createAsyncThunk(
    Type.UPDATE_AGENT,
    async (data: Agent) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateAgent(data);
      return response.data;
    }
  );

  public createAgent = createAsyncThunk(
    Type.CREATE_AGENT,
    async (data: CreateAgentDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createAgent(data);
      return response.data;
    }
  );

  public deleteAgent = createAsyncThunk(
    Type.REMOVE_AGENT,
    async (data: Agent) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteAgent(data);
      return response.data;
    }
  );

  public deleteUser = createAsyncThunk(
    Type.REMOVE_USER,
    async (data: UserFB) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteUser(data);
      return response.data;
    }
  );

  public createMenu = createAsyncThunk(
    Type.CREATE_MENU,
    async (data: CreateAgentDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createMenu(data);
      return response.data;
    }
  );

  public updateMenu = createAsyncThunk(Type.UPDATE_MENU, async (data: any) => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.updateMenu(data);
    return response.data;
  });

  public getMenu = createAsyncThunk(Type.GET_MENU, async (uuid: string) => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getMenu(uuid);
    return response.data;
  });

  public getAgentByUser = createAsyncThunk(Type.GET_AGENT_USER, async () => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getAgentByUser();
    return response.data;
  });

  public getTicketAgent = createAsyncThunk(Type.GET_TICKET_AGENT, async () => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getTicketAgent();
    return response.data;
  });

  public getTicketAgentAdmin = createAsyncThunk(
    Type.GET_TICKET_AGENT,
    async (data: Agent) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getTicketAgentAdmin(data);
      return response.data;
    }
  );

  public isAgentOnline = createAsyncThunk(
    Type.IS_AGENT_ONLINE,
    async (data: IsAgentOnlineDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.isAgentOnline(data);
      return response.data;
    }
  );

  public switchAgentStatus = createAsyncThunk(
    Type.SWITCH_AGENT_STATUS,
    async (status: AgentStates) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.switchAgentStatus(status);
      return response.data;
    }
  );

  public switchAgentNextState = createAsyncThunk(
    Type.SWITCH_AGENT_NEXT_STATE,
    async (status: AgentStates) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.switchAgentNextState(status);
      return response.data;
    }
  );

  public switchAgentNextStateAdmin = createAsyncThunk(
    Type.SWITCH_AGENT_NEXT_STATE,
    async (data: Agent) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.switchAgentNextStateAdmin(data);
      return response.data;
    }
  );

  public switchAgentStatusAdmin = createAsyncThunk(
    Type.SWITCH_AGENT_STATUS,
    async (data: Agent) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.switchAgentStatusAdmin(data);
      return response.data;
    }
  );

  public approveRejectVisit = createAsyncThunk(
    Type.APPROVE_REJECT_VISIT,
    async (status: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.approveRejectVisit(status);
      return response.data;
    }
  );

  public updatePriority = createAsyncThunk(
    Type.UPDATE_AGENT,
    async (data: ModifyPriority) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updatePriority(data);
      return response.data;
    }
  );

  public getAgent = createAsyncThunk(Type.GET_AGENT, async (uuid: string) => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getAgent(uuid);
    return response.data;
  });

  public getAgentTracking = createAsyncThunk(
    Type.GET_AGENT_TRACKING,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getAgentTracking(data);
      return response.data;
    }
  );

  public getAgents = createAsyncThunk(
    Type.GET_AGENTS,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getAgents(data);
      return response.data;
    }
  );

  public getAgentsSearch = createAsyncThunk(
    Type.GET_AGENTS,
    async (data: PaginationDTO<EntityTreeUuid>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getAgentsSearch(data);
      return response.data;
    }
  );

  public getAgentsRealTime = createAsyncThunk(
    Type.GET_AGENTS,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getAgentsRealTime(data);
      return response.data;
    }
  );

  public getAgentsByServices = createAsyncThunk(
    Type.GET_AGENTS,
    async (data: string[]) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getAgentsByServices(data);
      return response.data;
    }
  );

  public getUsersByEntityTree = createAsyncThunk(
    Type.GET_USERS,
    async (data: PaginationDTO<EntityTreeUuid>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getUsersByEntityTree(data);
      return response.data;
    }
  );

  public getProfiles = createAsyncThunk(Type.GET_PROFILES, async () => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getProfiles();
    return response.data;
  });

  public createUser = createAsyncThunk(
    Type.CREATE_USER,
    async (data: CreateUserDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createUser(data);
      return response.data;
    }
  );

  public updateUser = createAsyncThunk(
    Type.UPDATE_USER,
    async (data: UpdateUserDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateUser(data);
      return response.data;
    }
  );

  public getServices = createAsyncThunk(
    Type.GET_SERVICES,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getServices(data);
      return response.data;
    }
  );

  public getGeneralServices = createAsyncThunk(
    Type.GET_GENERAL_SERVICES,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGeneralServices(data);
      return response.data;
    }
  );

  public getEntityTreeByUuid = createAsyncThunk(
    Type.GET_ENTITY_TREE,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getEntityTreeByUuid(data);
      return response.data;
    }
  );

  public getServicesByEntityTreeUuid = createAsyncThunk(
    Type.GET_SERVICES,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getServicesByEntityTreeUuid(data);
      return response.data;
    }
  );

  public getServicesByEntityTreeUuidTemplate = createAsyncThunk(
    Type.GET_GENERAL_SERVICES,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getServicesByEntityTreeUuidTemplate(data);
      return response.data;
    }
  );

  public getMenuServices = createAsyncThunk(
    Type.GET_SERVICES,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getMenuServices(data);
      return response.data;
    }
  );

  public getDepartments = createAsyncThunk(
    Type.GET_DEPARTMENTS,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getDepartments(data);
      return response.data;
    }
  );

  public getGeneralDepartments = createAsyncThunk(
    Type.GET_GENERAL_DEPARTMENTS,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenDepartments(data);
      return response.data;
    }
  );

  public getBranches = createAsyncThunk(
    Type.GET_BRANCHES,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBranches(data);
      return response.data;
    }
  );

  public getBranchesMap = createAsyncThunk(
    Type.GET_BRANCHES,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBranchesMap(data);
      return response.data;
    }
  );

  public getGeneralBranches = createAsyncThunk(
    Type.GET_GENERAL_BRANCHES,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenBranches(data);
      return response.data;
    }
  );

  public getBranchesByMenu = createAsyncThunk(
    Type.GET_BRANCHES,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBranchByMenuUuid(data);
      return response.data;
    }
  );

  public getEntities = createAsyncThunk(Type.GET_ENTITIES, async () => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getEntities();
    return response.data;
  });

  public updateEntity = createAsyncThunk(
    Type.UPDATE_ENTITY,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateEntity(data);
      return response.data;
    }
  );

  public updateBranch = createAsyncThunk(
    Type.UPDATE_BRANCH,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateBranch(data);
      return response.data;
    }
  );

  public updateBranchFromTemplate = createAsyncThunk(
    Type.UPDATE_BRANCH,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateBranchFromTemplate(data);
      return response.data;
    }
  );

  public updateGeneralBranch = createAsyncThunk(
    Type.UPDATE_GENERAL_BRANCH,
    async (data: GeneralBranch) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateGenBranch(data);
      return response.data;
    }
  );

  public updateDepartment = createAsyncThunk(
    Type.UPDATE_DEPARTMENT,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateDepartment(data);
      return response.data;
    }
  );

  public updateGeneralDepartment = createAsyncThunk(
    Type.UPDATE_GENERAL_DEPARTMENT,
    async (data: GeneralDepartment) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateGenDepartment(data);
      return response.data;
    }
  );

  public getTicketsTimingByTemplate = createAsyncThunk(
    Type.GET_TICKET_TIMING_BY_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getTicketTimingByTemplate(data);
      return response.data;
    }
  );

  public getTicketsCountByBranch = createAsyncThunk(
    Type.GET_TICKET_COUNT_BY_BRANCH,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getTicketCountByBranch(data);
      return response.data;
    }
  );

  public updateGeneralService = createAsyncThunk(
    Type.UPDATE_GENERAL_SERVICE,
    async (data: GeneralService) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateGeneralService(data);
      return response.data;
    }
  );

  public updateService = createAsyncThunk(
    Type.UPDATE_SERVICE,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateService(data);
      return response.data;
    }
  );

  public updateServiceFromTemplate = createAsyncThunk(
    Type.UPDATE_SERVICE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateServiceFromTemplate(data);
      return response.data;
    }
  );

  public updateDepartmentFromTemplate = createAsyncThunk(
    Type.UPDATE_DEPARTMENT,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateDepartmentFromTemplate(data);
      return response.data;
    }
  );

  public getEntity = createAsyncThunk(
    Type.GET_ENTITY,
    async (data: EntityTreeDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getEntity(data);
      return response.data;
    }
  );

  public getEntityByUuid = createAsyncThunk(
    Type.GET_ENTITY,
    async (data: string) => {
      console.log({ data }, "Aqaui");
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getEntityByUuid(data);
      return response.data;
    }
  );

  public getBookingEntityByUuid = createAsyncThunk(
    Type.GET_ENTITY,
    async (data: string) => {
      console.log({ data }, "Aqaui");
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBookingEntityByUuid(data);
      return response.data;
    }
  );

  public getDepartmentByBranch = createAsyncThunk(
    Type.GET_DEPARTMENTS,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getDepartmentsByBranch(data);
      return response.data;
    }
  );

  public getServicesByDepartment = createAsyncThunk(
    Type.GET_SERVICES,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getServicesByDepartment(data);
      return response.data;
    }
  );

  public getBranch = createAsyncThunk(
    Type.GET_BRANCH,
    async (data: EntityTreeDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBranch(data);
      return response.data;
    }
  );

  public getDepartment = createAsyncThunk(
    Type.GET_DEPARTMENT,
    async (data: EntityTreeDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getDeparment(data);
      return response.data;
    }
  );

  public getService = createAsyncThunk(
    Type.GET_SERVICE,
    async (data: EntityTreeDTO) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getService(data);
      return response.data;
    }
  );

  public createEntity = createAsyncThunk(
    Type.CREATE_ENTITY,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createEntity(data);
      return response.data;
    }
  );

  public removeEntity = createAsyncThunk(
    Type.REMOVE_SERVICE,
    async (data: Entity) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteEntity(data);
      return response.data;
    }
  );

  public removeTemplate = createAsyncThunk(
    Type.REMOVE_TEMPLATE,
    async (data: Template) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteTemplate(data);
      return response.data;
    }
  );

  public createBranch = createAsyncThunk(
    Type.CREATE_BRANCH,
    async (data: CreateElementEntityTreeDTO<Branch>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createBranch(data);
      return response.data;
    }
  );

  public createTreeFromTemplate = createAsyncThunk(
    Type.CREATE_TREE_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createTreeFromTemplate(data);
      return response.data;
    }
  );

  public createDepartmentFromTemplate = createAsyncThunk(
    Type.CREATE_TREE_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createDepartmentTreeFromTemplate(
        data
      );
      return response.data;
    }
  );

  public createServicesFromTemplate = createAsyncThunk(
    Type.CREATE_TREE_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createServicesFromTemplate(data);
      return response.data;
    }
  );

  public createGeneralBranch = createAsyncThunk(
    Type.CREATE_GENERAL_BRANCH,
    async (data: CreateElementEntityTreeDTO<GeneralBranch>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createGeneralBranch(data);
      return response.data;
    }
  );

  public removeBranch = createAsyncThunk(
    Type.REMOVE_BRANCH,
    async (data: Branch) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteBranch(data);
      return response.data;
    }
  );

  public removeGeneralBranch = createAsyncThunk(
    Type.REMOVE_GENERAL_BRANCH,
    async (data: GeneralBranch) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteGenBranch(data);
      return response.data;
    }
  );

  public createDepartment = createAsyncThunk(
    Type.CREATE_DEPARTMENT,
    async (data: CreateElementEntityTreeDTO<Department>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createDepartment(data);
      return response.data;
    }
  );

  public createGeneralDepartment = createAsyncThunk(
    Type.CREATE_GENERAL_DEPARTMENT,
    async (data: CreateElementEntityTreeDTO<GeneralDepartment>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createGeneralDepartment(data);
      return response.data;
    }
  );

  public removeDepartment = createAsyncThunk(
    Type.CREATE_DEPARTMENT,
    async (data: Department) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteDepartment(data);
      return response.data;
    }
  );

  public removeGeneralDepartment = createAsyncThunk(
    Type.REMOVE_GENERAL_DEPARTMENT,
    async (data: GeneralDepartment) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteGenDepartment(data);
      return response.data;
    }
  );

  public createService = createAsyncThunk(
    Type.CREATE_SERVICE,
    async (data: CreateElementEntityTreeDTO<Service>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createService(data);
      return response.data;
    }
  );

  public removeService = createAsyncThunk(
    Type.REMOVE_SERVICE,
    async (data: Service) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteService(data);
      return response.data;
    }
  );

  public createGeneralService = createAsyncThunk(
    Type.CREATE_GENERAL_SERVICE,
    async (data: CreateElementEntityTreeDTO<GeneralService>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createGeneralService(data);
      return response.data;
    }
  );

  public removeGeneralService = createAsyncThunk(
    Type.REMOVE_GENERAL_SERVICE,
    async (data: GeneralService) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.deleteGeneralService(data);
      return response.data;
    }
  );

  public createUserEntity = createAsyncThunk(
    Type.CREATE_USER_ENTITY,
    async (data: CreateElementEntityTreeDTO<UserFB>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createUserEntity(data);
      return response.data;
    }
  );

  public getBranchByUuid = createAsyncThunk(
    Type.GET_BRANCH,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getBranchByUuid(data);
      return response.data;
    }
  );

  public getGenBranchByUuid = createAsyncThunk(
    Type.GET_GENERAL_BRANCH,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenBranchByUuid(data);
      return response.data;
    }
  );

  public getdepartmentByUuid = createAsyncThunk(
    Type.GET_DEPARTMENT,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getDepartmentByUuid(data);
      return response.data;
    }
  );

  public getGenDepartmentByUuid = createAsyncThunk(
    Type.GET_GENERAL_DEPARTMENT,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenDepartmentByUuid(data);
      return response.data;
    }
  );

  public getServiceByUuid = createAsyncThunk(
    Type.GET_SERVICE,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getServiceByUuid(data);
      return response.data;
    }
  );

  public getGenServiceByUuid = createAsyncThunk(
    Type.GET_GENERAL_SERVICE,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenServiceByUuid(data);
      return response.data;
    }
  );

  public getGenServicesByTemplate = createAsyncThunk(
    Type.GET_GENERAL_SERVICES,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenServicesByTemplate(data);
      return response.data;
    }
  );

  public getGenDepartmentsByTemplate = createAsyncThunk(
    Type.GET_GENERAL_DEPARTMENTS,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getGenDepartmentsByTemplate(data);
      return response.data;
    }
  );

  public setEntity = (data: Entity) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_ENTITY, payload: data });
    };
  };
  
  public getMenusByEntityUuid = createAsyncThunk(
    Type.GET_MENUS,
    async (data: string) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getMenusByEntityUuid(data);
      return response.data;
    }
  );

  public getMenus = createAsyncThunk(
    Type.GET_MENUS,
    async (data: PaginationDTO<string>) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getMenusSearch(data);
      return response.data;
    }
  );

  public removeMenu = createAsyncThunk(Type.REMOVE_MENU, async (data: Menu) => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.removeMenu(data);
    return response.data;
  });

  public createTemplate = createAsyncThunk(
    Type.CREATE_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.createTemplate(data);
      return response.data;
    }
  );

  public updateTemplate = createAsyncThunk(
    Type.UPDATE_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateTemplate(data);
      return response.data;
    }
  );

  public getTemplateByUuid = createAsyncThunk(
    Type.GET_TEMPLATE,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getTemplateByUuid(data);
      return response.data;
    }
  );

  public assignMeAgent = createAsyncThunk(
    Type.ASSIGN_ME_AGENT,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.assignMeAgent(data);
      return response.data;
    }
  );

  public GetSlaByEntityTree = createAsyncThunk(
    Type.GET_SLA,
    async (data: EntityTreeUuid) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getSlaByEntitytree(data);
      return response.data;
    }
  );

  public getAllTemplates = createAsyncThunk(Type.GET_TEMPLATES, async (data: string) => {
    const entityApi = new EntitiesServices(this.headers);
    const response: any = await entityApi.getAllTemplates(data);
    return response.data;
  });

  public updateEmailTemplate = createAsyncThunk(
    Type.UPDATE_EMAIL_TEMPLATES,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.updateEmailTemplates(data);
      return response.data;
    }
  );

  public getEmailTemplate = createAsyncThunk(
    Type.GET_EMAIL_TEMPLATES,
    async (data: any) => {
      const entityApi = new EntitiesServices(this.headers);
      const response: any = await entityApi.getEmailTemplatesByUuid(data);
      return response.data;
    }
  );

  public setMenu = (data: Menu) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_MENU, payload: data });
    };
  };

  public setTemplate = (data: Template) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_TEMPLATE, payload: data });
    };
  };

  public setAgent = (data: Agent) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_AGENT, payload: data });
    };
  };

  public setBranch = (data: Branch) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_BRANCH, payload: data });
    };
  };

  public setDepartment = (data: Department) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_DEPARTMENT, payload: data });
    };
  };

  public setService = (data: Service) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_SERVICE, payload: data });
    };
  };

  public setGeneralService = (data: GeneralService) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_GENERAL_SERVICE, payload: data });
    };
  };

  public setGeneralDepartment = (data: GeneralDepartment) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_GENERAL_DEPARTMENT, payload: data });
    };
  };

  public setGeneralBranch = (data: GeneralBranch) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.SET_GENERAL_BRANCH, payload: data });
    };
  };

  public modifyEntity = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_ENTITY, payload: data });
    };
  };

  public modifyTemplate = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_TEMPLATE, payload: data });
    };
  };

  public modifyBranch = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_BRANCH, payload: data });
    };
  };

  public modifyGeneralBranch = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_GENERAL_BRANCH, payload: data });
    };
  };

  public modifyDepartment = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_DEPARTMENT, payload: data });
    };
  };

  public modifyGeneralDepartment = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_GENERAL_DEPARTMENT, payload: data });
    };
  };

  public modifyService = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_SERVICE, payload: data });
    };
  };

  public modifyGeneralService = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_GENERAL_SERVICE, payload: data });
    };
  };

  public modifyUser = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_USER_ENTITY, payload: data });
    };
  };

  public modifyEmailTemplates = (data: ModifyStoreDTO) => {
    return (dispatch: Dispatch<any>) => {
      dispatch({ type: Type.MODIFY_EMAIL_TEMPLATES, payload: data });
    };
  };
}

export const EntityActions = new EntityActionsClass();
