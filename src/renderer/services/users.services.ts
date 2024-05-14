import { ResponseDTO } from "@fluyappgo/commons";
import { HttpClient } from "../helpers/httpClient";
import { loginDTO, TwoFactorDTO, UserDTO } from "../dtos";

export class UsersServices extends HttpClient {

    constructor(headers: any) {
        super(headers);
    }

    public getUser = () => {
        return this.instance.get<ResponseDTO>(`${this.baseUrl.msUsers}/checking-user`)
    };
    public login = (data :loginDTO) => this.instance.post<ResponseDTO>(`/api/ms_users/user-login`, data);
    public loginTwoFactor = (data :TwoFactorDTO) => this.instance.post<ResponseDTO>(`/api/ms_users/user-login-two-factor`, data);
    public logout = () => this.instance.post<ResponseDTO>('/api/ms_users/logout');

    
}

