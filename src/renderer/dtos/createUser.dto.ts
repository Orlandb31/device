import { EntityTreeUuid, UserFB } from "@fluyappgo/commons";

export interface CreateUserDTO {
    user: UserFB,
    entityTree: EntityTreeUuid
}