import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';

/*
* Componente de Menu. Recebe como prop um objeto com as chaves link e 
name, que correspondem ao título do LI e o link de redirecionamento 
*/

const Menu = ({menuOptions}) => {
let nome = "nome"
  

    return (
   <>
     <Navbar className='nav-menu-principal'>
        <Container>
        <Nav className="me-auto">

            {
                menuOptions.map((option)=>(
                    <Nav.Link href={option.link}>{option.name}</Nav.Link>
                ))
            }
          </Nav>
        </Container>

    </Navbar>
   </>
    )
}

export default Menu;