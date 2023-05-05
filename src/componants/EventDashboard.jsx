import React, { useState } from "react"
import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import { sampleData } from "../EventInfo"

function EventDashboard(){
    const [event, setEvent]=useState(sampleData)
   
   
    // function createEventHandler(e){
    //     setEvent([...event, e])
        
    // }
    // function handleUpdatedItem(updatedEvent){
    //     setEvent(event.map(ev => ev.id === updatedEvent.id ? updatedEvent : ev ))
    //   }
      function handleDeleteEvent(deleteEvent){
        setEvent(event.filter(ev => ev.id !== deleteEvent))
      }
    
    return(
        
        <Grid>
            <Grid.Column width={11}>
                <EventList event={event}  deleteEvents={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={5}>
            <h1>Filter select</h1> 
            </Grid.Column>
            
        </Grid>
    )
}

export default EventDashboard