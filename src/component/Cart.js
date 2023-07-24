import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';
import MyForm3 from './MyForm3';
import WithLabelExample2 from './WithLabelExample2';

const totalSteps = 5; // Adjust this value based on the total number of steps in your form

export default function Cart() {
  const [confirmationStatus, setConfirmationStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    // Add validation or logic for moving to the next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCheckout(); // If on the last step, proceed to checkout
    }
  };

  const handleCheckout = () => {
    const confirmed = window.confirm("Are you sure you want to proceed with the payment?");
    if (confirmed) {
      // Add code to handle the payment and checkout logic here
      setConfirmationStatus("Payment confirmed!");
      setCurrentStep(totalSteps); // Update the step to the last step (100% progress)
    } else {
      setConfirmationStatus("Payment canceled!");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calculate the progress percentage based on the current step
  const calculateProgress = () => {
    return Math.round((currentStep / totalSteps) * 100);
  };

  return (
    <>
    <WithLabelExample2/>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead">We hope to see you back and we Hope our products please you.</p>
          </div>

          <div className="row g-5">
         
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input type="text" className="form-control" id="username" placeholder="Username" required />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <MyForm2/>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="same-address" />
                  <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="save-info" />
                  <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-body-secondary">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <MyForm3/>

                  <MyForm/>
                </div>

                <hr className="my-4" />
                
                <button
            className="w-100 btn btn-primary btn-lg"
            type="button"
            onClick={handleCheckout}
          >
            Continue to checkout
          </button>
          {confirmationStatus && <p>{confirmationStatus}</p>}
              </form>
            </div>
          </div>
          
        </main>

        <footer className="my-5 pt-5 text-body-secondary text-center text-small">
          <p className="mb-1">© 2017–2023 Company Name</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}
