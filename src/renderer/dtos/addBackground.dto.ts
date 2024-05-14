import { Background } from "@fluyappgo/commons/build/interfaces/builder";

export interface AddBackgroundDTO {
    parent?: string,
    element: Background;
}