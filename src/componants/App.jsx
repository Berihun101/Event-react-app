
import React, {useState} from "react"
import EventDashboard from './EventDashboard'
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";


function App() {
  const [formOpen, setFormOpen]=useState(false);
  return <div>
  <NavBar setFormOpen={setFormOpen} />
  <Container className="main">
  <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
  </Container>

    
  </div>
}

export default App;
