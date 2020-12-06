import React from 'react';
import './newArrival.css';
import new1 from '../../assets/img/new1.png';

const NewArrival = () => {

  const newArrivals = [
    { name: 'arrival1', image: new1 },
    { name: 'arrival2', image: new1 },
    { name: 'arrival3', image: new1 },
    { name: 'arrival4', image: new1 },
    { name: 'arrival5', image: new1 },
    { name: 'arrival6', image: new1 },
  ];
  return (
    <>
      <section className="new section" id="new">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <a className="section-all" href="#">View All</a>

        <div className="new__container bd-grid">
          {
            newArrivals.map(newArrival =>
              <div key={newArrival.name} className="new__box">
                <img src={newArrival.image} alt={newArrival.name} className="new__img" />

                <div className="new__link">
                  <a href="#" className="button">VIEW PRODUCT</a>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default NewArrival
