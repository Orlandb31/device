import { EntityTreeUuid, UserFB } from "@fluyappgo/commons";

export interface UpdateUserDTO {
    user: UserFB,
    entityTree: EntityTreeUuid
}