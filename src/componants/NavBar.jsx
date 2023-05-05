import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Container, Image, Menu } from "semantic-ui-react"
import SignOutMenu from "./signOutMenu"
import SignInMenu from "./signInMenu"



export default function NavBar({setFormOpen}){
    const [authnticated, setAuthnticated]=useState(false)
    const navigate=useNavigate()
    function clickHandler(){
        setFormOpen(true)
    }
    function signOutHandler(){
        setAuthnticated(false)
        navigate('/')
    }
    return(
        <Menu fixed="top" inverted  >
            <Container>
                <Menu.Item as={NavLink} to='/'>
                <Image size="mini" src='./assets/logo.png' />
                </Menu.Item>
                <Menu.Item as={NavLink} to="/events" name="Event" />
                {authnticated &&
                <Menu.Item >
                
                    <Button as={NavLink} to="/createEvent"  inverted color="blue">New event</Button>
                </Menu.Item>}
                {authnticated ? <SignInMenu signOutHandler={signOutHandler} /> : <SignOutMenu setAuthnticated={setAuthnticated} />    }
                
               
            </Container>
        </Menu>
    )
}