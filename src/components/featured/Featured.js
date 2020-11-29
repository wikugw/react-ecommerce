import React from 'react';
import './featured.css';

import featured1 from '../../assets/img/featured1.png';
import featured2 from '../../assets/img/featured2.png';
import featured3 from '../../assets/img/featured3.png';

const Featured = () => {

  const featuredProducts = [
    { name: 'Sepatu Merah', image: featured1, price: 1000000 },
    { name: 'Sepatu Item', image: featured2, price: 1200000 },
    { name: 'Sepatu Abu', image: featured3, price: 900000 },
    { name: 'Sepatu Merah Niek', image: featured1, price: 1000000 },
  ];

  return (
    <>
      <section className="featured section" id="featured">
        <h2 className="section-title">FEATURED PRODUCTS</h2>
        <a href="#" className="section-all">View All</a>

        {
          featuredProducts.map(featured =>
            <div key={featured.name} className="featured__container bd-grid">
              <div className="featured__product">
                <div className="featured__box">
                  <div className="featured__new">NEW</div>
                  <img alt={featured.name} src={featured.image} className="featured__img" />
                </div>

                <div className="featured__data">
                  <h3 className="featured__name">{featured.name}</h3>
                  <span className="featured__price">Rp. {featured.price},-</span>
                </div>

              </div>
            </div>
          )
        }
      </section>
    </>
  )
}

export default Featured
