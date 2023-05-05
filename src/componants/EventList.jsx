import React from 'react'
import EventItem from './EventItem'


export default function EventList({event, selectEvent, deleteEvents}){
return(
    <div>
    {event.map(event=>{
        return(

            <EventItem event={event} key={event.id}  selectEvent={selectEvent} deleteEvents={deleteEvents} />
        )
    })}
        
    </div>
)
}