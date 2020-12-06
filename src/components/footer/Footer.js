import React from 'react';
import './footer.css';
import footerStore1 from '../../assets/img/featured1.png';
import footerStore2 from '../../assets/img/featured2.png';

const Footer = () => {

    const footerStores = [
        {name: 'footer1', image: footerStore1},
        {name: 'footer2', image: footerStore2},
    ];

    const explores = [
        {name: 'Home'},
        {name: 'Featured'},
        {name: 'News'},
        {name: 'Subscribe'},
    ];

    const ourServices = [
        {name: 'Pricing'},
        {name: 'Free Shipping'},
        {name: 'Gift Card'},
    ];

    const socialMedias = [
        {className: 'bx bxl-facebook-square'},
        {className: 'bx bxl-instagram-alt'},
        {className: 'bx bxl-twitter'},
    ];

    return (
        <>
            <footer className="footer section">
                <div className="footer__container bd-grid">
                    <div className="footer__box">
                        <h3 className="footer__title">TOKO</h3>
                        <p className="footer__deal">Product Store</p>
                        {
                            footerStores.map(footerStore => 
                                <a key={footerStore.name} href="#">
                                    <img src={footerStore.image} alt={footerStore.name} className="footer__store"/>
                                </a>
                            )
                        }
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            {
                                explores.map(explore => 
                                    <li key={explore.name}>
                                        <a href="#"  className="footer__link">{explore.name}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">OUR SERVICES</h3>
                        <ul>
                            {
                                ourServices.map(ourService => 
                                    <li key={ourService.name}>
                                        <a href="#"  className="footer__link">{ourService.name}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">FOLLOW</h3>
                        <ul>
                            {
                                socialMedias.map(socialMedia => 
                                    <a href="#" key={socialMedia.className}  className="footer__social">
                                        <i className={socialMedia.className} ></i>
                                    </a>
                                )
                            }
                        </ul>
                    </div>

                </div>    
                
                <p className="footer__copy">&#169; 2020 copyright all right reserved</p>  
            </footer>  
        </>
    )
}

export default Footer
