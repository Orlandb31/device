import { Branch, Department, Entity, EntityTreeUuid, Service } from "@fluyappgo/commons";
import { Period } from "@fluyappgo/commons/build/interfaces/analytics";

export interface EntityTreeWithDateRange extends EntityTreeUuid {
    startDate: string;
    endDate: string;
    by?: Period;
}