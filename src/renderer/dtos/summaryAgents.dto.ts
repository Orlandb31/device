import { EntityTreeUuid } from "@fluyappgo/commons"
import { GroupPeriod } from "@fluyappgo/commons/build/interfaces/analytics"

export interface SummaryAgents {
    entityTree: EntityTreeUuid,
    period: GroupPeriod,
    limit: number;
    year: number;
    month?: number;
    week?: number;
    day?: number;
    hour?: number;
    details?: boolean;
}