import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMenu.css';


function HeaderMenu() {
  
  return (
    <Navbar  expand="lg" className="navbar">
      <Container fluid >
        <Navbar.Brand  id="navar-brand" href="/" >
          My Photobook
        </Navbar.Brand>
        <div className="price-checkout">
          <div className="price-checkout-value">
            Price = 500 Sek
          </div>
          <Button link="/checkout">Checkout</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
