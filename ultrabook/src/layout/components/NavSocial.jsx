import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Button, InputGroup, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faSearch, faCommentDots, faBell, faWrench } from '@fortawesome/free-solid-svg-icons';

function NavSocial() {
    return (
        <Navbar bg="light" expand="md" fixed="top" className="py-3" style={{ background: 'var(--bs-white)' }}>
            <Container>
                <FontAwesomeIcon icon={faCloudShowersHeavy} style={{ fontSize: '34px', marginRight: '20px', color: 'var(--bs-primary)' }} />
                <InputGroup style={{ height: '57px', marginTop: '0px', width: '266px' }}>
                    <FormControl type="text" style={{ height: '38px', background: '#efefef' }} placeholder="Pesquisar.." />
                    <Button variant="primary"><FontAwesomeIcon icon={faSearch} /></Button>
                </InputGroup>
                <Navbar.Toggle aria-controls="navcol-2" />
                <Navbar.Collapse id="navcol-2">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="active">Home</Nav.Link>
                        <NavDropdown title="Páginas" id="nav-dropdown">
                            <NavDropdown.Item href="albuns.html">Albuns</NavDropdown.Item>
                            <NavDropdown.Item href="celebrações.html">Celebrações</NavDropdown.Item>
                            <NavDropdown.Item href="mensagens.html">Mensagens</NavDropdown.Item>
                            {/* Other dropdown items */}
                        </NavDropdown>
                        <NavDropdown title="Conta" id="nav-dropdown">
                            <NavDropdown.Item href="#">Criar uma página</NavDropdown.Item>
                            <NavDropdown.Item href="configuracoes.html">Configurações</NavDropdown.Item>
                            <NavDropdown.Item href="notificacoes.html">Notificações</NavDropdown.Item>
                            {/* Other dropdown items */}
                        </NavDropdown>
                    </Nav>
                    <Button variant="primary" className="ms-md-2" href="#" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faCommentDots} /></Button>
                    <Button variant="primary" className="ms-md-2" href="#" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faBell} /></Button>
                    <Button variant="primary" className="ms-md-2" href="#" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faWrench} /></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavSocial;
