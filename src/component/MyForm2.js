import React, { useState } from 'react';

const MyForm2 = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <form>
      <div className="col-12">
        <label htmlFor="email" className="form-label">
          Email <span className="text-body-secondary">(necessary)</span>
        </label>
        <input
          type="email"
          className={`form-control ${isEmailValid ? '' : 'is-invalid'}`}
          id="email"
          placeholder="you@example.com"
          value={email}
          onInput={handleEmailChange}
        />
        {!isEmailValid && (
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        )}
      </div>
    </form>
  );
};

export default MyForm2;
