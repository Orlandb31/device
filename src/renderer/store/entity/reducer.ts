import { EntityActions } from "./action";
import {
  EntityState,
  EntityActionType,
  BranchActionType,
  DepartmentActionType,
  ServiceActionType,
  ServicesActionType,
  EntitiesActionType,
  ModifyEntityActionType,
  ProfilesActionType,
  SubscribersActionType,
  SubscriberActionType,
  AgentTrackingActionType,
  MenuActionType,
  MenusActionType,
  TemplateActionType,
  TemplatesActionType,
  GeneralBranchActionType,
  GeneralBranchesActionType,
  GeneralDepartmentActionType,
  GeneralDepartmentsActionType,
  GeneralServiceActionType,
  GeneralServicesActionType,
  TicketSlaActionType,
  TicketEmailActionType
} from "./types";

const initialState: EntityState = {
  branches: { count: 0, rows: [] },
  entities: { count: 0, rows: [] },
  services: { count: 0, rows: [] },
  departments: { count: 0, rows: [] },
  templates: { count: 0, rows: [] },
  users: { count: 0, rows: [] },
  menus: { count: 0, rows: [] },
  generalBranches: { count: 0, rows: [] },
  generalDepartments: { count: 0, rows: [] },
  generalServices: { count: 0, rows: [] },
  generalBranch: {},
  generalDepartment: {},
  generalService: {},
  menu: {},
  template: {},
  entity: { description: "", entityName: "" },
  branch: {},
  department: {},
  service: {},
  user: {},
  profiles: [],
  agents: { count: 0, rows: [] },
  agent: {},
  subscribers: { count: 0, rows: [] },
  subscriber: {},
  agentTracking: { count: 0, rows: [] },
  loading: false,
  entityTree: {},
  sla: {},
  entityEmailTemplates: {}
};

export function entityReducer(
  state = initialState,
  action: EntityActionType &
    EntityActionType &
    BranchActionType &
    DepartmentActionType &
    ServiceActionType &
    ServicesActionType &
    EntitiesActionType &
    ModifyEntityActionType &
    ProfilesActionType &
    SubscribersActionType &
    SubscriberActionType &
    AgentTrackingActionType &
    MenuActionType &
    MenusActionType &
    TemplateActionType &
    TemplatesActionType &
    GeneralBranchActionType &
    GeneralBranchesActionType &
    GeneralDepartmentActionType &
    GeneralDepartmentsActionType &
    GeneralServiceActionType &
    GeneralServicesActionType & TicketSlaActionType
    & TicketEmailActionType
): EntityState {
  switch (action.type) {

    case EntityActions.Type.GET_EMAIL_TEMPLATES + "/fulfilled": {
      const emailTemplates = action.payload;

      return {
        ...state,
        entityEmailTemplates: emailTemplates,
      };
    }

    case EntityActions.Type.MODIFY_EMAIL_TEMPLATES: {
      const { name, value } = action.payload;

      return {
        ...state,
        entityEmailTemplates: { ...state.entityEmailTemplates, [name]: value },
      };
    }

    case EntityActions.Type.GET_SLA + "/fulfilled": {
      const sla = action.payload;

      return {
        ...state,
        sla: sla,
      };
    }

    case EntityActions.Type.GET_ENTITY_TREE + "/fulfilled": {
      const entityTree = action.payload;

      return {
        ...state,
        entityTree: entityTree,
      };
    }

    case EntityActions.Type.GET_AGENT_TRACKING + "/fulfilled": {
      const agentTracking = action.payload;

      return {
        ...state,
        agentTracking: agentTracking,
      };
    }

    case EntityActions.Type.GET_SUBSCRIBERS + "/fulfilled": {
      const subscribers = action.payload;

      return {
        ...state,
        subscribers: subscribers,
      };
    }

    case EntityActions.Type.GET_SUBSCRIBERS + "/fulfilled": {
      const subscribers = action.payload;

      return {
        ...state,
        subscribers: subscribers,
      };
    }

    case EntityActions.Type.GET_SUBSCRIBER + "/fulfilled": {
      const subscriber = action.payload;

      return {
        ...state,
        subscriber: subscriber,
      };
    }

    case EntityActions.Type.SET_AGENT: {
      const agent: any = action.payload;

      return {
        ...state,
        agent: agent,
      };
    }

    case EntityActions.Type.GET_AGENT + "/fulfilled": {
      const agent: any = action.payload;

      return {
        ...state,
        agent: agent,
      };
    }

    case EntityActions.Type.GET_AGENTS + "/fulfilled": {
      const agents = action.payload;

      return {
        ...state,
        agents: agents,
      };
    }

    case EntityActions.Type.UPDATE_USER + "/fulfilled": {
      const user = action.payload;

      return {
        ...state,
        user: user,
        users: {
          ...state.users,
          rows: state.users.rows.map((userI) => {
            if (userI.id == user.id) return user;
            return userI;
          }),
        },
      };
    }

    case EntityActions.Type.GET_PROFILES + "/fulfilled": {
      const profiles = action.payload;

      return {
        ...state,
        profiles: profiles,
      };
    }

    case EntityActions.Type.CREATE_ENTITY + "/fulfilled":
      return {
        ...state,
        entity: {},
      };

    case EntityActions.Type.CREATE_BRANCH + "/fulfilled":
      return {
        ...state,
        branch: {},
      };

    case EntityActions.Type.CREATE_TEMPLATE + "/fulfilled":
      return {
        ...state,
        template: {},
      };

    case EntityActions.Type.CREATE_DEPARTMENT + "/fulfilled":
      return {
        ...state,
        department: {},
      };

    case EntityActions.Type.CREATE_SERVICE + "/fulfilled":
      return {
        ...state,
        service: {},
      };

    case EntityActions.Type.CREATE_USER_ENTITY + "/fulfilled":
      return {
        ...state,
        user: {},
      };

    case EntityActions.Type.MODIFY_BRANCH: {
      const { name, value } = action.payload;

      return {
        ...state,
        branch: { ...state.branch, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_GENERAL_BRANCH: {
      const { name, value } = action.payload;

      return {
        ...state,
        generalBranch: { ...state.generalBranch, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_GENERAL_DEPARTMENT: {
      const { name, value } = action.payload;

      return {
        ...state,
        generalDepartment: { ...state.generalDepartment, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_GENERAL_SERVICE: {
      const { name, value } = action.payload;

      return {
        ...state,
        generalService: { ...state.generalService, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_USER_ENTITY: {
      const { name, value } = action.payload;

      return {
        ...state,
        user: { ...state.user, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_SERVICE: {
      const { name, value } = action.payload;

      return {
        ...state,
        service: { ...state.service, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_DEPARTMENT: {
      const { name, value } = action.payload;

      return {
        ...state,
        department: { ...state.department, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_ENTITY: {
      const { name, value } = action.payload;

      return {
        ...state,
        entity: { ...state.entity, [name]: value },
      };
    }

    case EntityActions.Type.MODIFY_TEMPLATE: {
      const { name, value } = action.payload;

      return {
        ...state,
        template: { ...state.template, [name]: value },
      };
    }

    case EntityActions.Type.GET_USERS + "/fulfilled":
      const users = action.payload;

      return {
        ...state,
        users: users,
      };

    case EntityActions.Type.GET_SERVICES + "/fulfilled":
      const services = action.payload;

      return {
        ...state,
        services: services,
      };

    case EntityActions.Type.GET_DEPARTMENTS + "/fulfilled":
      const departments = action.payload;

      return {
        ...state,
        departments: departments,
      };

    case EntityActions.Type.GET_GENERAL_DEPARTMENTS + "/fulfilled": {
      const departments = action.payload;

      return {
        ...state,
        generalDepartments: departments,
      };
    }

    case EntityActions.Type.GET_TEMPLATES + "/fulfilled":
      const templates = action.payload;

      return {
        ...state,
        templates: templates,
      };

    case EntityActions.Type.GET_BRANCHES + "/fulfilled":
      const branches = action.payload;

      return {
        ...state,
        branches: branches,
      };

    case EntityActions.Type.GET_GENERAL_BRANCHES + "/fulfilled": {
      const branches = action.payload;

      return {
        ...state,
        generalBranches: branches,
      };
    }

    case EntityActions.Type.GET_GENERAL_SERVICES + "/fulfilled": {
      const services = action.payload;

      return {
        ...state,
        generalServices: services,
      };
    }

    case EntityActions.Type.GET_GENERAL_SERVICE + "/fulfilled": {
      const service = action.payload;

      return {
        ...state,
        generalService: service,
      };
    }

    case EntityActions.Type.GET_ENTITIES + "/fulfilled":
      const entities = action.payload;

      return {
        ...state,
        entities: entities,
      };

    case EntityActions.Type.GET_MENU + "/fulfilled":
      const menu = action.payload;

      return {
        ...state,
        loading: false,
        menu: menu,
      };

    case EntityActions.Type.GET_MENU + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_MENU + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_MENUS + "/fulfilled":
      const menus = action.payload;

      return {
        ...state,
        loading: false,
        menus: menus,
      };

    case EntityActions.Type.GET_MENUS + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_MENUS + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_ENTITY + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_ENTITY + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_ENTITY + "/fulfilled": {
      const entity = action.payload;

      return {
        ...state,
        loading: false,
        entity: entity,
      };
    }

    case EntityActions.Type.GET_TEMPLATE + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_TEMPLATE + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_TEMPLATE + "/fulfilled": {
      const template = action.payload;

      return {
        ...state,
        loading: false,
        template: template,
      };
    }

    case EntityActions.Type.GET_BRANCH + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_BRANCH + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_BRANCH + "/fulfilled":
      const branch = action.payload;

      return {
        ...state,
        branch: branch,
      };

    case EntityActions.Type.GET_GENERAL_BRANCH + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_GENERAL_BRANCH + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_GENERAL_BRANCH + "/fulfilled": {
      const branch = action.payload;

      return {
        ...state,
        generalBranch: branch,
      };
    }

    case EntityActions.Type.GET_GENERAL_DEPARTMENT + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_GENERAL_DEPARTMENT + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_GENERAL_DEPARTMENT + "/fulfilled": {
      const department = action.payload;

      return {
        ...state,
        generalDepartment: department,
      };
    }

    case EntityActions.Type.GET_DEPARTMENT + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_DEPARTMENT + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_DEPARTMENT + "/fulfilled":
      const department = action.payload;

      return {
        ...state,
        department: department,
      };

    case EntityActions.Type.GET_SERVICE + "/pending":
      return {
        ...state,
        loading: true,
      };

    case EntityActions.Type.GET_SERVICE + "/rejected":
      return {
        ...state,
        loading: false,
      };

    case EntityActions.Type.GET_SERVICE + "/fulfilled":
      const service = action.payload;

      return {
        ...state,
        services: {
          count: state.services.count + 1,
          rows: [
            ...state.services.rows.filter((item) => service.id != item.id),
            service,
          ],
        },
        service: service,
      };

    case EntityActions.Type.SET_ENTITY: {
      const entity = action.payload;

      return {
        ...state,
        entity: entity,
      };
    }

    case EntityActions.Type.SET_MENU: {
      const menu = action.payload;

      return {
        ...state,
        menu: menu,
      };
    }

    case EntityActions.Type.SET_BRANCH: {
      const branch = action.payload;

      return {
        ...state,
        branch: branch,
      };
    }

    case EntityActions.Type.SET_GENERAL_BRANCH: {
      const branch = action.payload;

      return {
        ...state,
        generalBranch: branch,
      };
    }

    case EntityActions.Type.SET_TEMPLATE: {
      const template = action.payload;

      return {
        ...state,
        template: template,
      };
    }

    case EntityActions.Type.SET_DEPARTMENT: {
      const department = action.payload;

      return {
        ...state,
        department: department,
      };
    }

    case EntityActions.Type.SET_SERVICE: {
      const service = action.payload;

      return {
        ...state,
        service: service,
      };
    }

    case EntityActions.Type.SET_GENERAL_SERVICE: {
      const service = action.payload;

      return {
        ...state,
        generalService: service,
      };
    }

    case EntityActions.Type.SET_GENERAL_DEPARTMENT: {
      const department = action.payload;

      return {
        ...state,
        generalDepartment: department,
      };
    }

    default:
      return state;
  }
}
