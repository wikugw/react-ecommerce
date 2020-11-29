import React from 'react';
import './collection.css';
import manBackpack from '../../assets/img/collection1.png';
import womanBackpack from '../../assets/img/collection2.png'

const Collection = () => {
  return (
    <>
      <section className="collection section">
        <div className="collection__container bd-grid">

          <div className="collection__box">
            <img src={manBackpack} className="collection__img" />
            <div className="collection__data">
              <h2 className="collection__title">
                <span className="collection__subtitle">
                  Men <br /> Sneakers
                </span>
              </h2>
              <a href="#" className="collection__view">View collection</a>
            </div>
          </div>

          <div className="collection__box">
            <div className="collection__data">
              <h2 className="collection__title">
                <span className="collection__subtitle">
                  Women  <br /> Sneakers
                </span>
              </h2>
              <a href="#" className="collection__view">View collection</a>
            </div>
            <img src={womanBackpack} className="collection__img" />
          </div>


        </div>
      </section>
    </>
  )
}

export default Collection
