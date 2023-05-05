  ///////////////////////////////////////////////
import React from "react"
import EventDashboard from './EventDashboard'
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../features/home/home";
import EventDetailed from "../event/eventDetailed";
import EventForm from "./EventForm";


function App() {
  return <div>
   <Routes>
   <Route exact path="/" element={<HomePage />} />
   <Route exact path={'/*'} element={ <>
 <NavBar  />
  <Container className="main">
  <Routes>
  <Route exact path="/events" element={<EventDashboard />} />
  <Route exact  path="/events/:id" loader={(param)=>{return(param.id)}} element={<EventDetailed />} />
  <Route path="/createEvent" element={<EventForm />} />
  </Routes>
  </Container>
  </>} />
   </Routes>
   
   
   
   
   
 

    
  </div>
}

export default App;
