import { Branch, Department, Entity, Service } from "@fluyappgo/commons";

export interface EntityTreeCompleteDTO {
    entity: Entity;
    branch: Branch;
    department: Department;
    service: Service;
    services: Service[];
}