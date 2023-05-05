import React from "react"
import { Button, Image, Menu } from "semantic-ui-react"

export default function SignOutMenu({setAuthnticated}){
    return(
            <Menu.Item position="right" >
            <Button onClick={()=>{setAuthnticated(true)}} basic inverted style={{marginRight:20}} >Login</Button>
            <Button basic inverted  >Register</Button>
             </Menu.Item>
    )
}