import React from "react"
import { Link } from "react-router-dom"
import {  Dropdown, Image, Menu } from "semantic-ui-react"

export default function SignInMenu({signOutHandler}){
   
    return(
        <Menu.Item position="right" >
        <Image avatar spaced="right" src="/assets/user.png" />
        <Dropdown pointing='top left' text="Berihun">
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/createEvent' content="Create an event" icon="plus" />
            <Dropdown.Item  content="Profile" icon='user' />
            <Dropdown.Item onClick={signOutHandler}  content="Sigin out" icon="power" />
        </Dropdown.Menu>
        </Dropdown>
         </Menu.Item>
    )
}