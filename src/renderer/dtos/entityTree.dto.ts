import { Branch, Department, Entity, Service } from "@fluyappgo/commons";

export interface EntityTreeDTO {
    entityId?: number;
    branchId?: number;
    departmentId?: number;
    serviceId?: number;
    entity?: Entity;
    branch?: Branch;
    department?: Department;
    service?: Service;
    services?: Service[];
}