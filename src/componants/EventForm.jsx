import cuid from 'cuid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
export default function EventForm({setFormOpen, createEvent , selectdEvent, updateEvent}){
      const intialValues =  selectdEvent ??  {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
  
    const [values, setValues]=useState(intialValues)
 function inputHandler(event){
 const {name, value}=event.target
    
  setValues({...values, [name]:value})
 
 }
 function SubmitHandler(){
    selectdEvent ? updateEvent({...selectdEvent, ...values}) :
createEvent({...values, id:cuid(), hostedBy:'Bob', hostPhotoURL:'../assets/user.png', attendees:[]})
setFormOpen(false)
 }
    return(
        <Segment>
        <Header content='Create a new event' />
            <Form onSubmit={SubmitHandler}>
                <Form.Field>
                    <input onChange={inputHandler} name='title' value={values.title} type='text' placeholder='Event name'></input>
                </Form.Field>
                <Form.Field>
                    <input onChange={inputHandler} name='description' value={values.description} type='text' placeholder='Description of an event'></input>
                </Form.Field>
                <Form.Field>
                    <input onChange={inputHandler} name='city' value={values.city} type='text' placeholder='city'></input>
                </Form.Field>
                <Form.Field>
                    <input onChange={inputHandler} name='venue' value={values.venue} type='text' placeholder='venue'></input>
                </Form.Field>
                <Form.Field>
                    <input onChange={inputHandler} name='date' type='date' value={values.date} placeholder='Date'></input>
                </Form.Field>
                <Segment clearing basic>
                <Button floated='left' positive content='Submit' type='submit' />
                <Button as={Link} to='/events' floated='right'  negative content='Cancel' type='submit' />
                </Segment>
                
                </Form>
        </Segment>
    )
}