import React from 'react'
import "./Home.css"
import Product from './Product';



function Home() {
  return (
    <div className="home">
      
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/91o0sr3dGeL._SX1500_.jpg"
          alt=""
        />
      </div>
      <div className="home_row">
        <Product
          id="101"
          title=" ZEBRONICS Zeb-County Wireless Bluetooth Portable Speaker with
          Supporting Carry Handle, USB, SD Card, AUX, FM & Call Function"
          price={30.99}
          image="https://m.media-amazon.com/images/I/71rqHp17AnL._AC_UL320_.jpg"
          rating={4}
        />
        <Product
          id="102"
          title="Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking, and 100+ Cloud Watch Faces, 7 Days of extensive Battery, Deep Black, M"
          price={55.55}
          image="https://m.media-amazon.com/images/I/61jlz9FCQIL._SY450_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="103"
          title="Lenovo Tab M10 HD 2nd Gen (25.65 cm (10.1 inch), 2 GB, 32 GB, Wi-Fi) with Metallic Body and Octa core Processor"
          price={35.67}
          image="https://m.media-amazon.com/images/I/41jdvXSoeyS._SY450_.jpg"
          rating={3}
        />
        <Product
          id="104"
          title="Vector X Fizer Indoor Football Shoes (Green-Blue)"
          price={10.99}
          image="https://m.media-amazon.com/images/I/61TmYRrTwcL._UX625_.jpg"
          rating={4}
        />
        <Product
          id="105"
          title="American Tourister Ivy Polypropylene 68 cms Black Hardsided Check-in Luggage (FO1 (0) 09 002)"
          price={26.78}
          image="https://m.media-amazon.com/images/I/71oTNUSNGEL._SY879_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="106"
          title="Redmi 108 cm (43 inches) Full HD Smart LED TV | L43M6-RA (Black) (2021 Model) | With Android 11"
          price={80.88}
          image="https://m.media-amazon.com/images/I/71F0j4xzGiL._SX450_.jpg"
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home
