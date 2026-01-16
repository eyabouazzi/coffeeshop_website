import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "./CozyAmbiance.css";


const CozyContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  box-shadow: 1px 1px 5px 6px #888888;

  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;
const FeatureTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-top: -4rem;
  margin-bottom: 1rem;
  color: #78350f;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for smaller screens */
    text-align: center; /* Center the title on smaller screens */
    margin-top: 0; /* Reset margin for better spacing on smaller screens */
  }
`;


function CozyAmbiance() {
  return (
    <>
    <CozyContainer>
    <FeatureTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Cozy Ambiance
        </FeatureTitle>
        <div className="card-container">
    <div className="card" >
  <img src="https://plus.unsplash.com/premium_photo-1661549768416-f2f9744fc69d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FybSUyMGVudmlyb25tZW50fGVufDB8fDB8fHww" className="card-img-top" alt="warm environment"/>
  <div className="card-body">
    <h2 >Warm Environment</h2>
    <p className="card-text">Experience the warmth and coziness of MS Cafe from the comfort of your own home. Our virtual cafe brings the inviting ambiance of a physical cafe right to your screen.</p>
  </div>
</div>
<div className="card" >
  <img src="https://images.unsplash.com/photo-1471440671318-55bdbb772f93?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Comforting sounds"/>
  <div className="card-body">
    <h2 >Comforting Sounds</h2>
     <p className="card-text">Immerse yourself in a symphony of comforting sounds with MS Cafe's online experience. Enjoy the gentle hum of background music, the soothing rustle of leaves.</p>
  </div>
</div>
<div className="card" >
  <img src="https://media.istockphoto.com/id/1130676968/photo/customer-at-a-coffee-shop-buying-fresh-coffee.jpg?s=1024x1024&w=is&k=20&c=FKfH3o--Rt66pEWLZfx5poaadUN9gDqmKkNSV5YRzRY=" className="card-img-top" alt="Delicius Offering"/>
  <div className="card-body">
  <h2 >Delicius Offerings</h2>
    <p className="card-text">Indulge in the delicious offerings of MS Cafe, all available online. From rich, aromatic coffee blends to mouthwatering pastries, our menu is crafted to satisfy your cravings.</p>
  </div>    
</div>
<div className="card" >
  <img src=" https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Personalized Service"/>
  <div className="card-body">
  <h2>Personalized Service</h2>
    <p className="card-text">At MS Cafe, personalized service is at the heart of our online experience. Our attentive staff is dedicated to catering to your individual needs, whether it's a custom coffee order or a special request.</p>
  </div>
</div>
</div>
    </CozyContainer>
  </>
  )
}

export default CozyAmbiance

