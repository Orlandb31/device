import { EntityActions } from "../entity/action";
import { AgentActionType } from "../entity/types";
import { AuthActions } from "./action";
import { AuthState, EntityTreeActionType, TicketActionType, UserActionType } from "./types";

const initialState: AuthState = {
    isAuth: false,
    loading: false,
    twoFactor: false,
    user: {
        id: -1,
        fullname: '',
        email: '',
        acronymusLanguage: '',
        aboutMe: '',
        password: '',
        status: false,
        profileId: -1,
        typeRegister: -1,
        flag: -1,
        createBy: -1,
        photo: '',
        updateBy: -1,
        dataOwner: {},
        serviceId: -1,
        entityId: -1,
        branchId: -1,
        idCountry: -1,
        departamentId: -1
    },
    entity: {},
    branch: {},
    department: {},
    services: [],
    agent: {},
    ticket: {}, 
    token: ""
}

export function authReducer(
    state = initialState,
    action: UserActionType & EntityTreeActionType & AgentActionType & TicketActionType

): AuthState {
    switch (action.type) {

        case EntityActions.Type.GET_AGENT_USER + "/fulfilled": {

            const agent = action.payload;

            return {
                ...state,
                agent: agent
            }

        }

        case EntityActions.Type.GET_TICKET_AGENT + "/fulfilled": {

            const ticket = action.payload;

            return {
                ...state,
                ticket: ticket
            }

        }


        case AuthActions.Type.GET_USER + "/pending":

            return {
                ...state
            }

        case AuthActions.Type.GET_USER + "/rejected":


            return {
                ...state,
                loading: false,
                isAuth: false
            }

        case AuthActions.Type.GET_USER + "/fulfilled":

            const user = action.payload;

            return {
                ...state,
                user: user,
                isAuth: true
            }


        case AuthActions.Type.LOGIN + "/fulfilled":

            const userx: any = action.payload;

            if (userx.twoFactor) {

                localStorage.setItem('user', JSON.stringify(userx.user));
                
                return {
                    ...state,
                    user: userx.user,
                    twoFactor: true,
                    isAuth: true,
                    token: userx.token
                }

            } else {

                localStorage.setItem('user', JSON.stringify(userx.user));
                localStorage.setItem('token', userx.token);

                return {
                    ...state,
                    isAuth: true,
                    user: userx.user,
                    twoFactor: false
                }
            }




        case AuthActions.Type.LOG_OUT + "/fulfilled":

            localStorage.removeItem('user');
            localStorage.removeItem('token');

            return {
                ...state,
                isAuth: false,
                user: {}
            }

        case AuthActions.Type.GET_ENTITY_USER + "/fulfilled":

            const { entity, branch, department, services } = action.payload;

            console.log(entity, branch)

            return {
                ...state,
                entity: entity || {},
                branch: branch || {},
                department: department || {},
                services: services || [],
            }



        default:
            return state
    }
}