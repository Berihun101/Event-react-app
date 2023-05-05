import { Grid } from "semantic-ui-react";
import React from "react"
import EventDetailedHeader from "./eventDetailedHeader";
import EventDetailedInfo from "./eventDetailedInfo";
import EventDetailedChat from "./eventDetailedChat";
import EventDetailedSideBar from "./eventDetailedSideBar";

function EventDetailed(){
    return(
        <>
        <Grid>
            <Grid.Column width={10}>
          <EventDetailedHeader />
          <EventDetailedInfo />
          <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSideBar />
            </Grid.Column>
        </Grid>
        </>
    )
}

export default EventDetailed;