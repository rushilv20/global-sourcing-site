import React from 'react';
import '../styles/Home.css';  // Ensure this path is correct

const Home = () => {
  return (
    <div className="home">
      <div className="carousel">
        {/* Carousel implementation */}
      </div>
      <div className="vision-mission">
        <h2>Vision</h2>
        <p>To be the premier global sourcing company, fostering talent, inspiring innovation & loyalty, and using our resources for good.</p>
        <h2>Our Mission</h2>
        <p>Pursue excellence from the ideation, sourcing and delivery of innovative products while exceeding expectations through the service of our team, partners, and community.</p>
      </div>
      <div className="why-sourcing">
        <h2>Why use a sourcing company?</h2>
        <p>
          Sourcing companies import goods from other countries, and specialize in processes, systems, and industry knowledge. They have immense experience, and know how to serve their customers and protect their rights.
          As representatives of their customer, they ensure smooth transactions throughout. Competitive pricing and cost factors make sourcing companies a preferred resource, as well as their ability to manage risks and maintain costs to ensure ultimate customer satisfaction. 
          They are liable for managing the full importing process efficiently.
        </p>
      </div>
      <div className="submit-product">
        <h2>Got a product that you'd like to ship? Let Umiya Exports help you.</h2>
        <button><a href="/submit-product">Submit a Product Idea</a></button>
      </div>
      <div className="sections">
        <div className="section">
          <img src="/images/sourcing.jpg" alt="Sourcing" />
          <div>
            <h3>Sourcing</h3>
            <p>Umiya Exports spent years cultivating strong relationships with a wide array of APEC manufacturers...</p>
          </div>
        </div>
        <div className="section">
          <img src="/images/importing.jpg" alt="Importing" />
          <div>
            <h3>Importing</h3>
            <p>Once your products are ready to leave the manufacturing source, we make sure they get to you safely...</p>
          </div>
        </div>
        <div className="section">
          <img src="/images/supply-chain.jpg" alt="Supply Chain" />
          <div>
            <h3>Supply Chain</h3>
            <p>Managing your supply chain effectively ensures timely delivery and optimal inventory management...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
