import React from 'react'
import EventItem from './EventItem'


export default function EventList({event}){
return(
    <div>
    {event.map(event=>{
        return(

            <EventItem event={event} key={event.id} />
        )
    })}
        
    </div>
)
}