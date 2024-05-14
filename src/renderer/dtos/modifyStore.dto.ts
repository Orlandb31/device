import { CallerObject } from "@fluyappgo/commons";

export interface ModifyStoreDTO {
    name: string,
    value: string | number | boolean | CallerObject | object
}