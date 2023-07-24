import { Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import React, { useContext, useState } from 'react';
import  products  from './Product'; // Assuming you have a separate file with the product data

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <a className="navbar-brand" href="/">
            FLYYYHIGH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="stat.html">
                  <Link to="/stat">Learn More</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Discussion.html">
                  <Link to="/Discuss">Discussion</Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="navbarDropdown">
                    <Link to="/Product">Shop</Link>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="all" onClick={handleCategoryChange}>
                      All Products
                    </Dropdown.Item>
                    <Dropdown.Item value="bestseller" onClick={handleCategoryChange}>
                      Bestsellers
                    </Dropdown.Item>
                    <Dropdown.Item value="newarrival" onClick={handleCategoryChange}>
                      New Arrivals
                    </Dropdown.Item>
                    <Dropdown.Item value="men" onClick={handleCategoryChange}>
                      Men
                    </Dropdown.Item>
                    <Dropdown.Item value="women" onClick={handleCategoryChange}>
                      Women
                    </Dropdown.Item>
                    <Dropdown.Item value="kids" onClick={handleCategoryChange}>
                      Kids
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-dark" to="/Mycart" role="button">
                <i className="bi-cart-fill me-1"></i> Cart ({cartItems.length})
              </Link>
            </form>
          </div>
        </Container>
      </nav>
    </header>
  );
}
