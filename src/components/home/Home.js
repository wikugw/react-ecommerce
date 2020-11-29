import React from 'react'
import './home.css'
import homeBG from '../../assets/img/home.jpg';

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-grid">
          <div className="home__data">
            <h1 className="home__title">NEW <br /><span>ARRIVALS</span></h1>
            <a href="#featured" className="button">GO SHOPPING</a>
          </div>

          <img alt="home-image" src={homeBG} className="home__img" />
        </div>
      </section>
    </>
  )
}

export default Home
