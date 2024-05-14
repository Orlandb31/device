import { Ticket } from "@fluyappgo/commons";


export interface TransferTicketDto {
    ticket: Ticket;
    note: string;
    serviceUuid: string;    
}