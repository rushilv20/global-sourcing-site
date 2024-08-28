import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';

const carouselItems = [
  {
    title: "Casting",
    description: "Casting is a manufacturing process in which a liquid material is poured into a mold containing a hollow cavity of the desired shape and then allowed to solidify. The solidified part is known as a casting, which is ejected or broken out of the mold to complete the process. This method is widely used for producing complex shapes that would be difficult or uneconomical to make by other methods.",
    image: "/images/Casting.webp"
  },
  {
    title: "Forging",
    description: "Forging is a manufacturing process involving the shaping of metal using localized compressive forces. The blows are delivered with a hammer (often a power hammer) or a die. Forging is often classified according to the temperature at which it is performed: cold forging, warm forging, or hot forging. Forged parts are known for their superior mechanical properties and are typically used in high-stress applications.",
    image: "/images/Forging.webp"
  },
  {
    title: "Machining",
    description: "Machining is a process in which a piece of raw material is cut into a desired final shape and size by a controlled material-removal process. The operations that have this common theme are collectively called subtractive manufacturing, in contrast to additive manufacturing. Machining is part of the manufacture of many metal products, but it can also be used on materials such as wood, plastic, ceramic, and composites.",
    image: "/images/Machining.webp"
  },
  {
    title: "Fabrication",
    description: "Fabrication is the process of constructing products by combining typically standardized parts using one or more individual processes. Examples include cutting, bending, welding, forming, and assembling to create a final product. Fabrication is used for the production of complex assemblies and structures.",
    image: "/images/Fabrication.jpg"
  },
  {
    title: "Injection Molding",
    description: "Injection molding is a manufacturing process for producing parts by injecting molten material into a mold. It can be performed with a host of materials mainly including metals (for which the process is called die-casting), glasses, elastomers, confections, and most commonly thermoplastic and thermosetting polymers. The material for the part is fed into a heated barrel, mixed, and forced into a mold cavity where it cools and hardens to the configuration of the cavity.",
    image: "/images/InjectionMolding.webp"
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showStatus={false}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="content">
        <section>
          <h2>Vision</h2>
          <p>To be the premier global sourcing company, fostering talent, inspiring innovation & loyalty, and using our resources for good.</p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>Pursue excellence from the ideation, sourcing and delivery of innovative products while exceeding expectations through the service of our team, partners and community.</p>
        </section>
        <section>
          <h2>Why use a sourcing company?</h2>
          <p>Sourcing companies import goods from other countries, and specialize in processes, systems, and industry knowledge. They have immense experience, and know how to serve their customers and protect their rights. As representatives of their customer, they ensure smooth transactions throughout. Competitive pricing and cost factors make sourcing companies a preferred resource, as well as their ability to manage risks and maintain costs to ensure ultimate customer satisfaction. They are liable for managing the full importing process efficiently.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
