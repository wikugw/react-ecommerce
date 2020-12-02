import React from 'react';
import './newsLetter.css';

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter section" id="subscribed">
        <div className="newsletter__container bd-grid">
          <div className="newsletter__subscribe">
            <h2 className="section-title">OUR NEWSLETTER</h2>
            <p className="newsletter__description">
              Promotion new products and sales. Directly to your
            </p>

            <form className="newsletter__form">
              <input type="email" className="newsletter__input" placeholder="Enter your email" />
              <a href="#" className="button">SUBSCRIBE</a>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsLetter
