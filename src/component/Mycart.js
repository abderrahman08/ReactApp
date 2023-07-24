import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import CartProgress from './CartProgress';
import WithLabelExample from './WithLabelExample';

export default function Mycart() {
    const { cartItems, removeFromCart } = useCart();
    const [progress, setProgress] = useState(0); // State to manage the progress
  
    const totalPrice = cartItems.reduce((total, item) => {
      const priceNumeric = parseFloat(item.price.replace('$', '').replace(',', ''));
      return total + priceNumeric;
    }, 0);

  const cartStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid var(--bs-border-color)',
    borderRadius: 'var(--bs-border-radius)',
    backgroundColor: 'var(--bs-secondary-bg)',
    color: 'var(--bs-body-color)',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'var(--bs-danger)',
    color: 'var(--bs-light)',
    border: 'none',
    padding: '5px 10px',
    borderRadius: 'var(--bs-border-radius-sm)',
    cursor: 'pointer',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'var(--bs-light)', 
    backgroundColor: 'var(--bs-primary)',
    padding: '10px 20px',
    borderRadius: 'var(--bs-border-radius)',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    minwidth: '150px',
    maxWidth: '350px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const footerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '10px',
    alignItems: 'center',
  };

  const Total = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'beige',
    padding: '10px',
    borderRadius: 'var(--bs-border-radius)',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    minWidth: '150px',
    maxWidth: '350px',
    margin: 'auto', 
  };
  const handleProceedToPayment = () => {
    // Your logic to handle proceeding to payment
    // ...

    // Set progress to 50 when proceeding to payment
    setProgress(50);
  };

    return (
        <><WithLabelExample /><div style={cartStyle}>
            {/* Add the progress bar */}
            <CartProgress progress={progress} />

            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                            {item.name} {item.price}{' '}- <button style={buttonStyle} onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p style={Total}>Total Price: ${totalPrice.toFixed(2)}</p>
            <div style={footerStyle}>
                <Link to="/product" style={linkStyle}>Back to Products</Link>
                {/* Update the onClick handler */}
                <Link to="/cart" style={linkStyle} onClick={handleProceedToPayment}>
                    Proceed to Payment
                </Link>
            </div>
        </div></>
      );
    }