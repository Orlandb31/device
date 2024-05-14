import {
  Entity as Entity,
  Branch,
  Department,
  Service,
  List,
  UserFB,
  ProfileI,
  Agent,
  Subscriber,
  AgentTracking,
  Menu,
  Template,
  GeneralBranch,
  GeneralDepartment,
  GeneralService,
  TicketSla,
  TicketEmails,
} from "@fluyappgo/commons";
import { EntityTreeDTO, ModifyStoreDTO } from "../../dtos";

export interface EntityState {
  generalBranches: List<GeneralBranch[]>;
  generalBranch: GeneralBranch;
  generalDepartments: List<GeneralDepartment[]>;
  generalDepartment: GeneralDepartment;
  generalServices: List<GeneralService[]>;
  generalService: GeneralService;
  entities: List<Entity[]>;
  branches: List<Branch[]>;
  templates: List<Template[]>;
  template: Template;
  menus: List<Menu[]>;
  menu: Menu;
  departments: List<Department[]>;
  services: List<Service[]>;
  users: List<UserFB[]>;
  entity: Entity;
  branch: Branch;
  department: Department;
  service: Service;
  user: UserFB;
  profiles: ProfileI[];
  agents: List<Agent[]>;
  agent: Agent;
  subscribers: List<Subscriber[]>;
  subscriber: Subscriber;
  agentTracking: List<AgentTracking[]>;
  entityTree: EntityTreeDTO;
  loading: boolean;
  sla: TicketSla;
  entityEmailTemplates: TicketEmails;
}

interface AgentsAction {
  type: String;
  payload: List<Agent[]>;
}

interface AgentAction {
  type: String;
  payload: Agent;
}

interface EntitiesAction {
  type: String;
  payload: List<Entity[]>;
}

interface DepartmentsAction {
  type: String;
  payload: List<Department[]>;
}

interface ServicesAction {
  type: String;
  payload: List<Service[]>;
}

interface ProfilesAction {
  type: String;
  payload: ProfileI[];
}

interface UsersAction {
  type: String;
  payload: List<UserFB[]>;
}

interface BranchesAction {
  type: String;
  payload: List<Branch[]>;
}

interface SubscribersAction {
  type: String;
  payload: List<Subscriber[]>;
}

interface SubscriberAction {
  type: String;
  payload: Subscriber;
}

interface EntityAction {
  type: String;
  payload: Entity;
}

interface BranchAction {
  type: String;
  payload: Branch;
}

interface GeneralBranchAction {
  type: String;
  payload: GeneralBranch;
}

interface GeneralBranchesAction {
  type: String;
  payload: List<GeneralBranch[]>;
}

interface GeneralDepartmentAction {
  type: String;
  payload: GeneralDepartment;
}

interface GeneralDepartmentsAction {
  type: String;
  payload: List<GeneralDepartment[]>;
}

interface GeneralServiceAction {
  type: String;
  payload: GeneralService;
}

interface GeneralServicesAction {
  type: String;
  payload: List<GeneralService[]>;
}

interface TicketSlaAction {
  type: String;
  payload: TicketSla;
}

interface MenuAction {
  type: String;
  payload: Menu;
}

interface MenusAction {
  type: String;
  payload: List<Menu[]>;
}

interface TemplateAction {
  type: String;
  payload: Template;
}

interface TemplatesAction {
  type: String;
  payload: List<Template[]>;
}

interface DepartmentAction {
  type: String;
  payload: Department;
}

interface ServiceAction {
  type: String;
  payload: Service;
}

interface UserAction {
  type: String;
  payload: UserFB;
}

interface ModifyEntityAction {
  type: String;
  payload: ModifyStoreDTO;
}

interface AgentTrackingAction {
  type: String;
  payload: List<AgentTracking[]>;
}

interface TicketEmailAction {
  type: String;
  payload: TicketEmails;
}

export type EntitiesActionType = EntitiesAction;
export type EntityActionType = EntityAction;
export type BranchActionType = BranchAction;
export type DepartmentActionType = DepartmentAction;
export type ServiceActionType = ServiceAction;
export type ModifyEntityActionType = ModifyEntityAction;
export type BranchesActionType = BranchesAction;
export type DepartmentsActionType = DepartmentsAction;
export type ServicesActionType = ServicesAction;
export type UsersActionType = UsersAction;
export type ProfilesActionType = ProfilesAction;
export type UserActionType = UserAction;
export type AgentsActionType = AgentsAction;
export type AgentActionType = AgentAction;
export type SubscribersActionType = SubscribersAction;
export type SubscriberActionType = SubscriberAction;
export type AgentTrackingActionType = AgentTrackingAction;
export type MenuActionType = MenuAction;
export type MenusActionType = MenusAction;
export type TemplateActionType = TemplateAction;
export type TemplatesActionType = TemplatesAction;
export type GeneralBranchActionType = GeneralBranchAction;
export type GeneralBranchesActionType = GeneralBranchesAction;
export type GeneralDepartmentActionType = GeneralDepartmentAction;
export type GeneralDepartmentsActionType = GeneralDepartmentsAction;
export type GeneralServiceActionType = GeneralServiceAction;
export type GeneralServicesActionType = GeneralServicesAction;
export type TicketSlaActionType = TicketSlaAction;
export type TicketEmailActionType = TicketEmailAction;
