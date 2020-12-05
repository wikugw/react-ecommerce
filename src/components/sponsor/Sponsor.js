import React from 'react';
import './sponsor.css';
import logo1 from '../../assets/img/women1.png';
import logo2 from '../../assets/img/women2.png';
import logo3 from '../../assets/img/women3.png';
import logo4 from '../../assets/img/women4.png';

const Sponsor = () => {

  const sponsors = [
    {name: 'logo1', image: logo1},
    {name: 'logo2', image: logo2},
    {name: 'logo3', image: logo3},
    {name: 'logo4', image: logo4},
  ];

  return (
    <>
      <section className="sponsors section">
        <div className="sponsors__container bd-grid">
          {
            sponsors.map(sponsor => 
              <div key={sponsor.name} className="sponsors__logo">
                <img src={sponsor.image} alt={sponsor.name} />
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Sponsor