import React, { useState, useEffect, useContext } from 'react';
import { Dropdown, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useCart } from './CartContext';
import CartProgress from './CartProgress';


export default function Product({ name, category,price }) {
  const products = [
    { id: 1, name: 'Product 1 BEST', category: 'bestseller', price: ' $80.00' },
    { id: 2, name: 'Product 2 MEN', category: 'men', price: '$50.00' },
    { id: 3, name: 'Product 3 Women', category: 'women', price: '$60.00' },
    { id: 4, name: 'Product 4 KIDS', category: 'kids', price: '$30.00' },
    { id: 5, name: 'Product 5 NEW', category: 'newarrival', price: '$120.00' },
    
    // Add more products here with different categories
  ];
  const progress = 25;
    localStorage.setItem('progress', progress.toString());

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    setSelectedCategory(categoryParam || '');
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== 'all'
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  const generateProductCard = (product) => {
    let priceOrMessage = '';
    switch (product.category) {
      case 'bestseller':
        priceOrMessage = `$80.00`;
        break;
      case 'newarrival':
        priceOrMessage = '$120';
        break;
      case 'men':
        priceOrMessage = '$50.00';
        break;
      case 'women':
        priceOrMessage = '$60.00';
        break;
      case 'kids':
        priceOrMessage = '$30.00';
        break;
      default:
        priceOrMessage = 'Price not available';
        break;
    }

    return (
      
      <Col key={product.name} className="mb-5">
        <Card className="h-100">
          {product.category === 'bestseller' && (
            <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
              on sale
            </div>
          )}
          <Card.Img variant="top" src="https://us.123rf.com/450wm/serezniy/serezniy2301/serezniy230120991/196808174-rack-with-colorful-t-shirts-near-lilac-wall-closeup.jpg?ver=6" alt="..." />
          <Card.Body className="p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{product.name}</h5>
              {priceOrMessage}
            </div>
          </Card.Body>
          <Card.Footer className="p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <Button variant="outline-dark" className="mt-auto" onClick={() => handleAddToCart(product)}>

                Add To Cart
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <main className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <select id="category" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">All Categories</option>
                <option value="bestseller">Bestsellers</option>
                <option value="newarrival">New Arrivals</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
              <label htmlFor="category">Filter by Category</label>
            </div>
          </div>
        </div>
        <div id="product-list" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {filteredProducts.map((product) => generateProductCard(product))}
        </div>
      </main>
    </>
  );
}
