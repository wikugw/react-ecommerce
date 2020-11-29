import React from 'react';
import './collection.css';
import manBackpack from '../../assets/img/manBackpack.jpg';
import womanBackpack from '../../assets/img/womanBackpack.jpg'

const Collection = () => {
  return (
    <>
      <section className="collection section">
        <div className="collection__container bd-grid">

          <div className="collection__box">
            <img src={manBackpack} className="collection__img" />
            <div className="collection__data">
              <h2 class="collection__title">
                <span className="collection__subtitle">
                  Men <br /> Backpack
                </span>
              </h2>
              <a href="#" className="collection__view">View collection</a>
            </div>
          </div>

          <div className="collection__box">
            <div className="collection__data">
              <h2 class="collection__title">
                <span className="collection__subtitle">
                  Women  <br /> Backpack
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
