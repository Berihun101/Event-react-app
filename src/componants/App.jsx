
import React from "react"
import EventDashboard from './EventDashboard'
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";


function App() {
  return <div>
  <NavBar />
  <Container className="main">
  <EventDashboard />
  </Container>

    
  </div>
}

export default App;
