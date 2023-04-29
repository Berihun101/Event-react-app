import React from "react"
import { Button, Container, Image, Menu } from "semantic-ui-react"



export default function NavBar({setFormOpen}){
    function clickHandler(){
        setFormOpen(true)
    }
    return(
        <Menu fixed="top" inverted  >
            <Container>
                <Menu>
                <Image size="tiny" src='./assets/logo.png' />
                </Menu>
                <Menu.Item name="Event" />
                <Menu.Item>
                    <Button onClick={clickHandler} inverted color="blue">New event</Button>
                </Menu.Item>
                <Menu.Item position="right" >
                    <Button basic inverted style={{marginRight:20}} >Login</Button>
                    <Button basic inverted  >Register</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}