import React from 'react'
import { Button, Icon, Item, ItemContent, List, Segment } from 'semantic-ui-react'
import EventAtendee from './EventAtendee'
import { Link } from 'react-router-dom';

export default function EventItem({event, selectEvent, deleteEvents}){
    return(
       <Segment.Group >
      <Segment>
        <Item.Group>
           <Item>
            <Item.Image circular size='tiny' src={event.hostPhotoURL} />
            <ItemContent>
                <Item.Header  content={event.title} />
                <Item.Description content={event.description}></Item.Description>
            </ItemContent>
           </Item>
            
        </Item.Group>
      </Segment>
      <Segment>
        <span>
            <Icon name={'clock'}/>{event.date}
            <Icon name='marker'/>{event.city}
        </span>
      </Segment>
      <Segment className='attendee' >
      <List horizontal>
      {event.attendees.map(atendee =>(
        <EventAtendee atendees={atendee} />
      ))}
      </List>
        
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
      <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='view' />
        <Button onClick={()=>{deleteEvents(event.id);}} color='red' floated='right' content='Delete' />
      </Segment>
       </Segment.Group>
    )
}