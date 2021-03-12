import React from 'react';
import { LinkButton, Logo, Nav } from './styled-components';

export default function NavBar(props) {
  return (
    <Nav>
        <Logo/>
       {props.menus.map(menu =>{
           return <LinkButton>{menu}</LinkButton>
       })}
    </Nav>
  );
}
