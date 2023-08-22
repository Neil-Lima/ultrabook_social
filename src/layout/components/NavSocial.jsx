import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Button, InputGroup, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faSearch, faCommentDots, faBell, faWrench } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function NavSocial() {
    const navigate = useNavigate();

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
                        <Nav.Link onClick={() => navigate('/')} className="active">Home</Nav.Link>
                        <NavDropdown title="Páginas" id="nav-dropdown">
                           
                            <Button variant="link" onClick={() => navigate('/celebracoes')} className="dropdown-item">Celebrações</Button>
                            <Button variant="link" onClick={() => navigate('/mensagens')} className="dropdown-item">Mensagens</Button>
                            <Button variant="link" onClick={() => navigate('/centroajuda')} className="dropdown-item">Centro Ajuda</Button>
                            <Button variant="link" onClick={() => navigate('/eventos')} className="dropdown-item">Eventos</Button>
                            <Button variant="link" onClick={() => navigate('/eventosdetalhes')} className="dropdown-item">Detalhes Eventos</Button>
                            <Button variant="link" onClick={() => navigate('/postvideo')} className="dropdown-item">Post Video</Button>
                            <Button variant="link" onClick={() => navigate('/grupo')} className="dropdown-item">Grupo</Button>
                            <Button variant="link" onClick={() => navigate('/galeria')} className="dropdown-item">Galeria</Button>
                        </NavDropdown>
                        <NavDropdown title="Conta" id="nav-dropdown">
                            <Button variant="link" onClick={() => navigate('/notificacoes')} className="dropdown-item">Notificações</Button>
                            <Button variant="link" onClick={() => navigate('/login')} className="dropdown-item">Autenticação</Button>
                            <Button variant="link" onClick={() => navigate('/chat')} className="dropdown-item">Chat</Button>
                        </NavDropdown>
                    </Nav>
                    <Button variant="primary" className="ms-md-2" onClick={() => navigate('/')} style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faCommentDots} /></Button>
                    <Button variant="primary" className="ms-md-2" onClick={() => navigate('/')} style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faBell} /></Button>
                    <Button variant="primary" className="ms-md-2" onClick={() => navigate('/')} style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faWrench} /></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavSocial;
