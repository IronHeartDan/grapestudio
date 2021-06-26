import "./App.css";
import logo from "./logo.svg";
import asset_one from "./asset_one.svg";
import wave from "./wave.svg";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useEffect, useState } from "react";

function App() {
  const [scrollTopState, setScrollTop] = useState(false);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setScrollTop(true);
      console.log("sjdkajsbd");
    } else {
      setScrollTop(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
  };

  const magic = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      let animType = "none";
      switch (index) {
        case 0:
          animType = "PopBottom";
          break;
        case 1:
          animType = "PopBottom";
          break;
      }
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `${animType} ease 1s 0s`;
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.animation = "none";
      }
    });
  });

  const offerMagic = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      let offer_anim_cards = document.querySelectorAll(".offer_anim_card");
      offer_anim_cards.forEach((card, index) => {
        switch (index) {
          case 0:
            card.style.animation =
              " magix 3s 0s forwards ease, one 1s 18s forwards ease,card 0s 18s forwards ease";
            break;
          case 1:
            card.style.animation =
              "magix 5s 2s forwards ease, two 1s 18.5s forwards ease,card 0s 18s forwards ease";
            break;
          case 2:
            card.style.animation =
              "magix 5s 5s forwards ease, three 1s 19s forwards ease,card 0s 18s forwards ease";
            break;
          case 3:
            card.style.animation =
              " magix 5s 8s forwards ease, four 1s 19.5s forwards ease,card 0s 18s forwards ease";
            break;
          case 4:
            card.style.animation =
              " magix 5s 11s forwards ease, five 1s 20s forwards ease,card 0s 18s forwards ease";
            break;
          case 5:
            card.style.animation =
              "magix 5s 14s forwards ease, six 0.5s 20.5s forwards ease,card 0s 18s forwards ease";
            break;

          default:
            break;
        }
      });
    }
  });

  useEffect(() => {
    // For Anim
    let elements = document.querySelectorAll(".anim");
    elements.forEach((element) => {
      magic.observe(element);
    });

    // For anim_offer
    offerMagic.observe(document.querySelector(".anim_offer"));
  }, [magic]);

  return (
    <div className="app">
      <div
        className="scrollToTop"
        style={{
          opacity: scrollTopState ? "1" : "0",
          transform: scrollTopState ? "scale(1)" : "scale(0)",
        }}
      >
        <Button onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </Button>
      </div>

      {/* main */}

      <section className="s_main">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <a href="#">Contact us</a>
          <a href="#">Get Started</a>
          <a href="#">About us</a>
          <a href="#">Portfolio</a>
          <a href="#">Sign Up</a>
        </nav>
        <div className="slogan_con anim">
          <h1>Passionate You </h1>
          <h1>With Technopowering</h1>
          <h1> Your Security</h1>
        </div>

        <img src={asset_one} alt="Asset" className="asset_one" />
        <Button>Get Started!</Button>
        <img src={wave} alt="wave" className="wave" />
      </section>

      {/* main */}
      <section className="s_offer">
        <div>
          <h1>What We Offer ?</h1>
          <div className="anim_offer">
            <div className="offer_anim_card">
              <img src={asset_one} alt="" />
              <h6>Mobile App development</h6>
            </div>
            <div className="offer_anim_card">
              <h6>Website development</h6>
            </div>
            <div className="offer_anim_card">
              <h6>Web/ Mobile App design</h6>
            </div>
            <div className="offer_anim_card">
              <h6>Graphic designing</h6>
            </div>
            <div className="offer_anim_card">
              <h6>Five</h6>
            </div>
            <div className="offer_anim_card">
              <h6>Six</h6>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <section className="s_scouting"></section>
    </div>
  );
}

export default App;
