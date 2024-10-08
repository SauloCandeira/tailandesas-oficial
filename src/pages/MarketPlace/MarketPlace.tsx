import React from 'react';
import './MarketPlace.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Home.css
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import headerImg from './../../assets/img/header.png';

import bannerImg1 from './../../assets/img/banner-1.png';
import bannerImg2 from './../../assets/img/banner-2.png';
import bannerImg3 from './../../assets/img/banner-3.png';
import bannerImg4 from './../../assets/img/banner-4.png';
import bannerImg5 from './../../assets/img/banner-5.png';
import bannerImg6 from './../../assets/img/banner-6.png';
import bannerImg7 from './../../assets/img/banner-7.png';
import bannerImg8 from './../../assets/img/banner-8.png';



const MarketPlace: React.FC = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn?.querySelector("i");

    // Menu toggle
    if (menuBtn && navLinks && menuBtnIcon) {
      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
      });

      navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
      });
    }

    // ScrollReveal options
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    // ScrollReveal animations
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 1500,
    });

    const banner = document.querySelector(".banner__container");
    if (banner) {
      const bannerContent = Array.from(banner.children);
      bannerContent.forEach((item) => {
        const duplicateNode = item.cloneNode(true) as HTMLElement;
        duplicateNode.setAttribute("aria-hidden", "true");
        banner.appendChild(duplicateNode);
      });
    }

    ScrollReveal().reveal(".arrival__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".sale__image img", {
      ...scrollRevealOption,
      origin: "left",
    });
    ScrollReveal().reveal(".sale__content h2", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".sale__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".sale__content h4", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".sale__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".favourite__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    return () => {
      // Cleanup event listeners on unmount
      if (menuBtn) {
        menuBtn.removeEventListener("click", () => {});
      }
      if (navLinks) {
        navLinks.removeEventListener("click", () => {});
      }
    };
  }, []);




  return (
    <div>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">FASHION</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li><a href="#catalogue">CATALOGUE</a></li>
          <li><a href="#fashion">FASHION</a></li>
          <li><a href="#favourite">FAVOURITE</a></li>
          <li><a href="#lifestyle">LIFESTYLE</a></li>
          <li>
            <button className="btn">SIGN UP</button>
          </li>
        </ul>
      </nav>

      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <h1>
              <span>LET'S</span>
              <br />
              EXPLORE
              <br />
              <span>UNIQUE</span>
              <br />
              CLOTHES.
            </h1>
            <p>Live for influential and innovative fashion!</p>
            <div className="header__btns">
              <button className="btn">Shop Now</button>
            </div>
          </div>
          <div className="header__image">
            <img src={headerImg}/>
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="banner__container">
          <img src={bannerImg1} alt="banner" />
          <img src={bannerImg2} alt="banner" />
          <img src={bannerImg3} alt="banner" />
          <img src={bannerImg4} alt="banner" />
          <img src={bannerImg5} alt="banner" />
          <img src={bannerImg6} alt="banner" />
          <img src={bannerImg7} alt="banner" />
          <img src={bannerImg8} alt="banner" />

        </div>
      </section>

      <section className="section__container arrival__container" id="catalogue">
        <h2 className="section__header">NEW ARRIVALS</h2>
        <div className="arrival__grid">
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-1.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Hoodies & Sweatshirts</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-2.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Coats & Parkas</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-3.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Tees & T-Shirt</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </div>
      </section>

      <section className="sale" id="fashion">
        <div className="section__container sale__container">
          <div className="sale__image">
            <img src="assets/sale.png" alt="sale" />
          </div>
          <div className="sale__content">
            <h2><span>PAYDAY</span><br />SALE NOW</h2>
            <p>
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <h4>1 July - 10 July 2024</h4>
            <p>*Terms and conditions apply</p>
            <div className="sale__btn">
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container favourite__container" id="favourite">
        <h2 className="section__header">YOUNG'S FAVOURITE</h2>
        <div className="favourite__grid">
          <div className="favourite__card">
            <div className="favourite__image">
              <img src="assets/favourite-1.jpg" alt="favourite" />
            </div>
            <div className="favourite__content">
              <div>
                <h4>Trending on Instagram</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="favourite__card">
            <div className="favourite__image">
              <img src="assets/favourite-2.jpg" alt="favourite" />
            </div>
            <div className="favourite__content">
              <div>
                <h4>All under $40</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container download__container" id="lifestyle">
        <div className="download__image">
          <img src="assets/download.png" alt="download" />
        </div>
        <div className="download__content">
          <h2 className="section__header">DOWNLOAD APP & GET THE VOUCHER!</h2>
          <p>
            Get 30% off for first transaction using our new mobile app for now.
          </p>
          <div className="download__links">
            <a href="#">
              <img src="assets/apple.png" alt="apple" />
            </a>
            <a href="#">
              <img src="assets/google.png" alt="google" />
            </a>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="section__container promo__container">
          <h2 className="section__header">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h2>
          <p>Type your email down below and be young wild generation</p>
          <form action="/">
            <input type="text" placeholder="Add your email here" />
            <button className="btn">SEND</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="#">FASHION</a>
            </div>
            <p>Complete your style with awesome clothes from us.</p>
            <ul className="footer__socials">
              <li>
                <a href="#"><i className="ri-facebook-fill"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-instagram-line"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-twitter-fill"></i></a>
              </li>
              <li>
                <a href="#"><i className="ri-linkedin-fill"></i></a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Affiliate</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MarketPlace;
