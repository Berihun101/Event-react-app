import React, { useState } from "react"
import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import EventForm from "./EventForm"
import { sampleData } from "../EventInfo"

function EventDashboard({formOpen, setFormOpen}){
    
    return(
        <Grid>
            <Grid.Column width={11}>
                <EventList event={sampleData} />
            </Grid.Column>
            <Grid.Column width={5}>
            {formOpen && <EventForm setFormOpen={setFormOpen}  /> } 
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard