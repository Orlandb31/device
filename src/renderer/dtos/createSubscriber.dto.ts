import { Agent, EntityTreeUuid, Subscriber, UserFB } from "@fluyappgo/commons";

export interface CreateSubscriberDTO {
    subscriber: Subscriber,
    entityTree: EntityTreeUuid
}