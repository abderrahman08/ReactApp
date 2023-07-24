import React, { useState } from 'react';

const MyForm = () => {
  const [cvv, setCvv] = useState('');

  const handleCvvChange = (event) => {
    const { value } = event.target;
    // Remove any non-digit characters from the input value
    const cleanedValue = value.replace(/\D/g, '');
    setCvv(cleanedValue);
  };

  const isCvvValid = cvv.match(/^\d{3}$/);

  return (
    <form>
      <div className="col-md-3">
        <label htmlFor="cc-cvv" className="form-label">
          CVV
        </label>
        <input
          type="text"
          className={`form-control ${isCvvValid ? '' : 'is-invalid'}`}
          id="cc-cvv"
          placeholder=""
          required
          value={cvv}
          onInput={handleCvvChange}
        />
        {!isCvvValid && (
          <div className="invalid-feedback">CVV must be exactly 3 digits</div>
        )}
      </div>
    </form>
  );
};

export default MyForm;
