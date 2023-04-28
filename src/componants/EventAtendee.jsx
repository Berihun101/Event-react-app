import React from 'react'
import { Image, List } from 'semantic-ui-react'

export default function EventAtendee({atendees}){
return(
    <List.Item>
     <Image circular size='mini' src={atendees.photoURL} />
    </List.Item>
)
}