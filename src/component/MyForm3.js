import React, { useState } from 'react';

const MyForm3 = () => {
  const [expiration, setExpiration] = useState('');

  const handleExpirationChange = (event) => {
    const { value } = event.target;
    // Remove any non-digit characters from the input value
    const cleanedValue = value.replace(/\D/g, '');

    // Format the cleaned value as XX/XX
    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i += 2) {
      formattedValue += cleanedValue.slice(i, i + 2) + '/';
    }
    formattedValue = formattedValue.slice(0, formattedValue.length - 1);

    setExpiration(formattedValue);
  };

  const isExpirationValid = /^\d{2}\/\d{2}$/.test(expiration);

  return (
    <form>
      <div className="col-md-3">
        <label htmlFor="cc-expiration" className="form-label">
          Expiration
        </label>
        <input
          type="text"
          className={`form-control ${isExpirationValid ? '' : 'is-invalid'}`}
          id="cc-expiration"
          placeholder=""
          required
          value={expiration}
          onInput={handleExpirationChange}
        />
        {!isExpirationValid && (
          <div className="invalid-feedback">Please enter a valid expiration date (XX/XX).</div>
        )}
      </div>
    </form>
  );
};

export default MyForm3;
