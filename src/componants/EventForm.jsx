import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

export default function EventForm({setFormOpen}){

    return(
        <Segment>
        <Header content='Create new an event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event name'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description of an event'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='city'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='venue'></input>
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date'></input>
                </Form.Field>
                <Segment clearing basic>
                <Button floated='left' positive content='Submit' type='submit' />
                <Button onClick={()=>{setFormOpen(false)}} floated='right'  negative content='Cancel' type='submit' />
                </Segment>
                
                </Form>
        </Segment>
    )
}