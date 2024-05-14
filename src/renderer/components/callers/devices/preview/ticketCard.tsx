import React from 'react';
import { Ticket, TicketStates } from '@fluyappgo/commons';

type Props = {
    cssTicket: any;
    cssModule: any;
    ticket: Ticket;
    callByName: boolean;
    limit?: number;
}

export const TicketCard: React.FC<Props> = (props) => {

    const { cssTicket, cssModule, ticket, callByName, limit } = props;


    if (callByName) {
        return <div className='row w-100'>
            <div className={`w-100 text-center relative ${ticket.status == TicketStates.CALLING ? 'blink_me' : ''}`}  style={{ position: 'relative' }}>
                {ticket?.isAppointment && <span className="ribbon">CITA</span>}
                <div style={cssTicket} className="overflow-hidden" >
                    {`${ticket?.subscriber?.name} ${ticket?.subscriber?.lastname}`.substring(0, (limit || 12))}
                </div>
                <div className='card-caller-module' style={cssModule}>
                    {ticket?.agent?.label || ticket?.agent?.alias}
                </div>
            </div>
        </div>
    }

    return <div className='row w-100'>
        <div className={`w-100 text-center ${ticket.status == TicketStates.CALLING ? 'blink_me' : ''}`} style={{ position: 'relative' }}>
            {ticket?.isAppointment && <span className="ribbon">CITA</span>}
            <div style={cssTicket} >
                {ticket?.isAppointment ? ticket.hour : ticket.ticketLabel}
            </div>
            <div className='card-caller-module' style={cssModule}>
                {ticket?.agent?.label || ticket?.agent?.alias}
            </div>
        </div>
    </div>




}