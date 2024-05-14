import { Background } from "@fluyappgo/commons/build/interfaces/builder";
import { Period } from "@fluyappgo/commons/build/interfaces/analytics";
import { EntityTreeUuid } from "@fluyappgo/commons";

export interface ActiveAgentDTO extends EntityTreeUuid {
    by: Period
} 