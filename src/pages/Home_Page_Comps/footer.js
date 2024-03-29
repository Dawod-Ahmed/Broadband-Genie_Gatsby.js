import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect } from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <>
      <div className='footer-background d-flex justify-content-center'>
        <section className='footer-container'>
          <div className='footer-section'>
            <div className='footer-main  d-flex'>
              <div className='f-left-parent'>
                <Link to='/' className='f-img-link'>
                  {/* <img
                    src="https://www.broadbandgenie.co.uk/img/kazaam/logos/bbg-white.svg"
                    className="f-img"
                    alt="img-not-found"
                  /> */}

                  <StaticImage
                    src='../../images/footerLogo.png'
                    className='f-img'
                    placeholder='blurred'
                    alt='img'
                  />

                  <p className='f-copyight'>© Genie Ventures Ltd </p>
                </Link>
              </div>

              <div className='f-right-parent d-flex text-white'>
                <div className='f-detail'>
                  <p className='f-detail-header'>Broadband Genie</p>
                  <ul className='f-detail-ul'>
                    <li className='f-detail-li'>
                      <a href='#' className='f-detail-link'>
                        About us
                      </a>
                    </li>
                    <li className='f-detail-li'>
                      <a href='#' className='f-detail-link'>
                        Sitemap
                      </a>
                    </li>
                    <li className='f-detail-li'>
                      <a href='#' className='f-detail-link'>
                        Press
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='f-detail'>
                  <p className='f-detail-header'>Privacy</p>
                  <ul className='f-detail-ul'>
                    <li className='f-detail-li '>
                      <a href='#'>Terms &amp; Conditions</a>
                    </li>
                    <li className='f-detail-li '>
                      <a href='#'>Privacy Policy</a>
                    </li>
                    <li className='f-detail-li '>
                      <a href='#'>Cookies policy</a>
                    </li>
                  </ul>
                </div>

                <div className='f-detail'>
                  <p className='f-detail-header'>Support</p>
                  <ul className='f-detail-ul'>
                    <li className='f-detail-li  '>
                      <a href='#'>Contact us</a>
                    </li>
                    <li className='f-detail-li '>
                      <a href='#'>Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
