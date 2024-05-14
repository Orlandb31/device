import { Branch, Department, Entity, Service } from "@fluyappgo/commons";

export interface CreateElementEntityTreeDTO<T> {
    uuid: string;
    data: T
} 