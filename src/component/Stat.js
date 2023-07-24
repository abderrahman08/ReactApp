import React from 'react';
    const faqContainerStyle = {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      maxWidth: '1200px',
      margin: '0 auto',
    };

export default function Stat() {
  return (
    <><> <div
          style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
          }}
      >
          <div className="container">
            <h1>Some Relevant Numbers and Stats</h1>
              <div className="row">
                  {/* First Column */}
                  <div className="col-md-6 d-flex flex-column align-items-center">

                      {/* Earnings (Monthly) Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-primary shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                      Best Seller Category(summer)
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">kids</div>
                              </div>
                          </div>
                      </div>

                      {/* Earnings (Annual) Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-success shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                      clients (Annual)
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                              </div>
                          </div>
                      </div>

                      {/* Tasks Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-info shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">clients back</div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div
                                                  className="progress-bar bg-info"
                                                  role="progressbar"
                                                  style={{ width: '50%' }}
                                                  aria-valuenow={50}
                                                  aria-valuemin={0}
                                                  aria-valuemax={100}
                                              ></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Pending Requests Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-warning shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                      sale per year
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">6</div>
                              </div>
                          </div>
                      </div>

                  </div>

                  {/* Second Column */}
                  <div className="col-md-6 d-flex flex-column align-items-center">

                      {/* Earnings (Monthly) Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-primary shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                      next sale
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">08/09</div>
                              </div>
                          </div>
                      </div>

                      {/* Earnings (Annual) Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-success shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                      last sale
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">08/04</div>
                              </div>
                          </div>
                      </div>

                      {/* Tasks Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-info shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">delivery within 3 days</div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div
                                                  className="progress-bar bg-info"
                                                  role="progressbar"
                                                  style={{ width: '50%' }}
                                                  aria-valuenow={50}
                                                  aria-valuemin={0}
                                                  aria-valuemax={100}
                                              ></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Pending Requests Card Example */}
                      <div className="col-xl-3 col-md-6 mb-4">
                          <div className="card border-left-warning shadow h-100 py-2">
                              <div className="card-body">
                                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                      Color of The season
                                  </div>
                                  <div className="h5 mb-0 font-weight-bold text-gray-800">Yellow</div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
          </div>
      </div>
      </>
      <div style={faqContainerStyle}>
        <h1>
            Policy And FAQ
        </h1>
        <p>
        Q: How can I place an order?
        </p>
        <p>
A: To place an order, simply browse our website, select the desired items, and add them to your shopping cart. Proceed to checkout, provide the necessary shipping and payment information, and confirm your order.
<p>
Q: What payment methods do you accept?
</p>
<p>
A: We accept various payment methods, including credit/debit cards (Visa, MasterCard, etc.), PayPal, and sometimes other online payment gateways. Please check our checkout page for available options.
</p>
<p>
Q: How can I track my order?
</p>
<p>
A: Once your order is shipped, we will provide you with a tracking number and a link to track your package's delivery status. You can use this information to monitor your order's progress.</p>
</p>
<p>
Q: What is your shipping policy?
</p>
<p>
A: Our shipping policy includes information about shipping rates, delivery times, and any applicable restrictions or international shipping options. We strive to deliver your orders as quickly and efficiently as possible.
</p>
<p>
Q: Do you offer international shipping?
</p>
<p>
A: Yes, we do offer international shipping to many countries. During the checkout process, you can select your country to view available shipping options and costs.
</p>
<p>
Q: Can I return or exchange a product?
</p>
<p>
A: Yes, we have a return and exchange policy that allows you to return products within a specified time frame if you are not satisfied with your purchase. Please review our Return Policy for detailed information on the process and any exceptions.
</p>
<p>
Q: How long does it take to process returns and issue refunds?
</p>
<p>
A: Once we receive your returned item, our team will inspect it, and if it meets our return criteria, we will process your refund within [X] business days. Refunds are typically issued using the same payment method used for the original purchase.
</p>
<p>
Q: What if the product I received is damaged or defective?
</p>
<p>
A: We apologize for any inconvenience caused. If you received a damaged or defective product, please contact our customer support team within [X] days of receiving the item, and we will arrange a replacement or issue a refund.
</p>
<p>
Q: Is my personal information secure on your website?
</p>
<p>
A: Yes, we take data security seriously. Our website uses industry-standard encryption protocols to protect your personal and payment information. For more details, please review our Privacy Policy.
</p>
<p>
Q: How can I contact customer support?
</p>
<p>
A: You can reach our customer support team through [email, phone number, live chat, contact form, etc.]. We are available [business hours] to assist you with any inquiries or concerns.
        </p>
        
        </div>
        </>
  );
};
