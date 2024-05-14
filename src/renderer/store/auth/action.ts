
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Dispatch } from "react";
import { EntitiesServices, UsersServices } from "../../services";
import { v4 as uuidv4 } from 'uuid';
import { EntityTreeDTO, loginDTO, TwoFactorDTO } from "../../dtos";

enum Type {
    GET_USER = 'GET_USER',
    LOG_OUT = 'LOG_OUT',
    LOGIN = 'LOGIN',
    GET_ENTITY_USER = 'GET_ENTITY_USER',
    SET_PIPELINE = "SET_PIPELINE"
}


class AuthActionsClass {

    public headers: any = undefined;
    public Type = Type;

    public getUser = createAsyncThunk(
        Type.GET_USER,
        async () => {
            const usersApi = new UsersServices(this.headers);
            const response: any = await usersApi.getUser();
            return response.data;
        }
    )


    public logOut = createAsyncThunk(
        Type.LOG_OUT,
        async () => {
            const usersApi = new UsersServices(this.headers);
            const response: any = await usersApi.logout()
            //window.location.reload();
            return response;
        }
    )

    public login = createAsyncThunk(
        Type.LOGIN,
        async (data: loginDTO) => {
            const usersApi = new UsersServices(this.headers);
            const response: any = await usersApi.login(data)
            return response.data;
        }
    )

    public loginTwoFactor = createAsyncThunk(
        Type.LOGIN,
        async (data: TwoFactorDTO) => {
            const usersApi = new UsersServices(this.headers);
            const response: any = await usersApi.loginTwoFactor(data)
            return response.data;
        }
    )

    public getEntityTree = createAsyncThunk(
        Type.GET_ENTITY_USER,
        async () => {
            const entityApi = new EntitiesServices(this.headers);
            const response: any = await entityApi.getEntityTree();
            return response.data;
        }
    )


    public setPipeline = () => {
        return (dispatch: Dispatch<any>) => {
            const randome = uuidv4();
            dispatch({ type: Type.SET_PIPELINE, payload: randome })
        }
    }

  


}

export const AuthActions = new AuthActionsClass()