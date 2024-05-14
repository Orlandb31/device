import { Agent, EntityTreeUuid, Subscriber, UserFB } from "@fluyappgo/commons";
import { ElementBuilder } from "@fluyappgo/commons/build/interfaces/builder";

export interface AddElementDTO {
    parent?: string,
    element: ElementBuilder;
}