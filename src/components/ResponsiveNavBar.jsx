import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ResponsiveNavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href='/'>Vincent Deam</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/' color='yellow'>Home</Nav.Link>
                <Nav.Link href='/contact' >Contact</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default ResponsiveNavBar;