import React from "react"
import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import EventForm from "./EventForm"
import { sampleData } from "../EventInfo"

function EventDashboard(){
    return(
        <Grid>
            <Grid.Column width={11}>
                <EventList event={sampleData} />
            </Grid.Column>
            <Grid.Column width={5}>
                <EventForm />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard