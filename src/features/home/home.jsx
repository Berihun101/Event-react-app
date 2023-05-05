import React from "react"
import { useNavigate } from "react-router-dom";

import { Button, Container, Header, Icon, Image, Segment } from "semantic-ui-react";

function HomePage(){
    const navigate=useNavigate()
    return(
        <Segment inverted textAlign="center" vertical className="masterHead">
       <Container>
        <Header inverted as={'h1'}>
            <Image size="massive" src='/assets/logo.png' style={{marginBottom:12}}/>
            Re-events
            </Header>
            <Button onClick={()=>{navigate('/events')}} size="huge" inverted>
            Get Started
            <Icon name="right arrow" />
            </Button>
           
       
       </Container>
        </Segment>
    )
}

export default HomePage;