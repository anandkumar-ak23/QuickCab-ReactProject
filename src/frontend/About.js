import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="card-left">
          <h1>About QuickCab</h1>
        </div>
        <div className="card-right">
          <p>
            Welcome to QuickCab, your go-to solution for hassle-free cab booking! We are committed to making
            transportation convenient, safe, and accessible for everyone.
            </p>
        </div>
      </div>

      <div className="why-quickcab-card">
        <div className="card-left">
          <h2>Why QuickCab?</h2>
        </div>
        <div className="card-right">
          <ul>
            <li><strong>User-Friendly Interface</strong>: Our platform is designed to offer you an effortless cab-booking experience, from selecting your destination to tracking your ride.</li>
            <li><strong>Safe and Reliable</strong>: We prioritize your safety and ensure that our drivers are professional, vetted, and trained for a seamless journey.</li>
            <li><strong>Efficient and Affordable</strong>: QuickCab is committed to providing affordable rides without compromising on quality.</li>
          </ul>
        </div>
      </div>

    
    </div>
  );
};

export default About;
