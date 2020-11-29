import React from 'react';
import './collection.css';
import manBackpack from '../../assets/img/collection1.png';
import womanBackpack from '../../assets/img/collection2.png'

const Collection = () => {

  const collections = [
    { gender: 'men', image: manBackpack },
    { gender: 'women', image: womanBackpack }
  ];

  return (
    <>
      <section className="collection section">
        <div className="collection__container bd-grid">
          {
            collections.map(collection =>
              <div key={`${collection.name}-collection`} className="collection__box">
                {collection.image === manBackpack && <img alt={collection.name} src={collection.image} className="collection__img" />}
                <div className="collection__data">
                  <h2 className="collection__title">
                    <span className="collection__subtitle">
                      {collection.gender} <br /> Sneakers
                  </span>
                  </h2>
                  <a href="#" className="collection__view">View collection</a>
                </div>
                {collection.image === womanBackpack && <img alt={collection.name} src={collection.image} className="collection__img" />}
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Collection
