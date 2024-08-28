import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/SubmitProduct.css';

const SubmitProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="submit-product-page">
      <h1>Submit Your Product</h1>
      <p>You’ve already developed a product, found a market for it, and built a proven business model around it. Congratulations on your business success! Now, it’s time to maximize efficiency and save some money in the process. With no obligation, we’ll assess your sourcing costs to pinpoint the best paths forward for your business.</p>
      <p>Tell us a bit about your business below. Our experts will dive into your production and manufacturing to see how GPSOURCES can enhance your company’s sourcing.</p>
      {!submitted ? (
        <form className="submit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="productName" placeholder="Product Name / Idea" value={formData.productName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="productDescription" placeholder="Describe your product" value={formData.productDescription} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      ) : (
        <p>We will contact you soon!</p>
      )}
    </div>
  );
};

export default SubmitProduct;
