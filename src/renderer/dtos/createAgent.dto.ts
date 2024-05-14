import { Agent, EntityTreeUuid, UserFB } from "@fluyappgo/commons";

export interface CreateAgentDTO {
    agent: Agent,
    entityTree: EntityTreeUuid
}