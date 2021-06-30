import "./App.css";
import logo from "./logo.svg";
import asset_one from "./asset_one.svg";
import Wave from "./wave.svg";
import mWave from "./mWave.svg";
import slogan from "./Slogan.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CancelIcon from "@material-ui/icons/Cancel";
import { useEffect, useState } from "react";

function App() {
  const [scrollTopState, setScrollTop] = useState(false);
  const [offersState, setOffer] = useState(0);
  const [scoutState, setScoute] = useState(0);
  const [cFromState, setcFrom] = useState(false);
  const [mMenu, setmMenu] = useState(false);

  const onScroll = (e) => {
    if (e.target.scrollTop > 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const scrollToTop = () => {
    document.querySelector(".app").scrollTop = 0;
  };

  // useEffect(() => {
  //   console.log("UseEffect");
  //   const magic = new IntersectionObserver((entries) => {
  //     entries.forEach((entry, index) => {
  //       let animType = "none";
  //       switch (index) {
  //         case 0:
  //           animType = "PopBottom";
  //           break;
  //         case 1:
  //           animType = "PopBottom";
  //           break;
  //         default:
  //           animType = "PopBottom";
  //       }
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.style.animation = `${animType} ease 1s 0s`;
  //         entry.target.style.opacity = "1";
  //       } else {
  //         entry.target.style.animation = "none";
  //       }
  //     });
  //   });
  //   // For Anim
  //   let elements = document.querySelectorAll(".anim");
  //   elements.forEach((element) => {
  //     magic.observe(element);
  //   });

  //   const offerMagic = new IntersectionObserver((entries) => {
  //     console.log("djbfsdj");
  //     if (entries[0].intersectionRatio > 0) {
  //       let offer_anim_cards = document.querySelectorAll(".offer_anim_card");
  //       offer_anim_cards.forEach((card, ci) => {
  //         switch (ci) {
  //           case 0:
  //             card.style.animation =
  //               " magix 3s 0s forwards ease, one 1s 18s forwards ease,card 0s 18s forwards ease";
  //             break;
  //           case 1:
  //             card.style.animation =
  //               "magix 5s 2s forwards ease, two 1s 18.5s forwards ease,card 0s 18s forwards ease";
  //             break;
  //           case 2:
  //             card.style.animation =
  //               "magix 5s 5s forwards ease, three 1s 19s forwards ease,card 0s 18s forwards ease";
  //             break;
  //           case 3:
  //             card.style.animation =
  //               " magix 5s 8s forwards ease, four 1s 19.5s forwards ease,card 0s 18s forwards ease";
  //             break;
  //           case 4:
  //             card.style.animation =
  //               " magix 5s 11s forwards ease, five 1s 20s forwards ease,card 0s 18s forwards ease";
  //             break;
  //           case 5:
  //             card.style.animation =
  //               "magix 5s 14s forwards ease, six 0.5s 20.5s forwards ease,card 0s 18s forwards ease";
  //             break;

  //           default:
  //             break;
  //         }
  //       });
  //     }
  //   });

  //   // For anim_offer
  //   let oE = document.querySelector(".anim_offer");
  //   offerMagic.observe(oE);
  // });

  return (
    <div className="app" onScroll={onScroll}>
      {/* Contact us */}
      <div
        className={cFromState ? "contactUs expandContactUs" : "contactUs"}
        style={{
          transform: scrollTopState ? "translateY(-70px)" : "translateY(0px)",
        }}
      >
        <Button
          style={{
            position: cFromState ? "absolute" : "unset",
            top: cFromState ? "0" : "unset",
            right: cFromState ? "0" : "unset",
            color: cFromState ? "white" : "unset",
          }}
          onClick={() => {
            cFromState ? setcFrom(false) : setcFrom(true);
          }}
        >
          {cFromState ? <CancelIcon /> : <ChatBubbleIcon />}
        </Button>
      </div>

      {/* Contact us */}

      {/* scrollToTop */}

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

      {/* scrollToTop */}

      {/* main */}

      <section className="s_main">
        <header>
          <img src={logo} alt="logo" />
          <nav>
            <a href="/">Contact us</a>
            <a href="/">Get Started</a>
            <a href="/">About us</a>
            <a href="/">Portfolio</a>
            <a href="/">Sign Up</a>
          </nav>
          <div
            className="menu"
            style={{
              position: mMenu ? "absolute" : "unset",
              top: mMenu ? "0" : "unset",
              right: mMenu ? "0" : "unset",
              width: mMenu ? "100vw" : "64px",
              height: mMenu ? "100vh" : "59px",
              backdropFilter: mMenu ? "blur(5px)" : "unset",
              boxShadow: mMenu ? " 0 0 10px 0 black" : "unset",
            }}
          >
            <Button
              onClick={() => {
                mMenu ? setmMenu(false) : setmMenu(true);
              }}
            >
              {mMenu ? <CancelIcon /> : <MenuIcon />}
            </Button>
          </div>
        </header>
        <div className="main_con">
          <div>
            <img src={asset_one} alt="asset_one" />
          </div>
          <div>
            <img src={slogan} alt="slogan" />
            <a href="/" className="main_btn">
              Get Started
            </a>
          </div>
        </div>
        <img src={Wave} alt="Wave" className="Wave" />
        <img src={mWave} alt="mWave" className="mWave" />
      </section>

      {/* main */}

      {/* s_offer */}

      <section className="s_offer">
        <div className="offer_anim_card" id="0">
          <h1>One</h1>
        </div>
        <div className="offer_anim_card" id="1">
          <h1>Two</h1>
        </div>
        <div className="offer_anim_card" id="2">
          <h1>Three</h1>
        </div>
        <div className="offer_anim_card" id="3">
          <h1>Four</h1>
        </div>
        <div className="offer_anim_card" id="4">
          <h1>Five</h1>
        </div>
        <div className="offer_anim_card" id="5">
          <h1>Six</h1>
        </div>
        {/* <div className="offer_anim_card" id="6">
          <h1>Seven</h1>
        </div> */}
      </section>

      {/* s_offer */}

      <section className="s_scouting">
        <h1>What We Are Scouting For?</h1>
        <div>
          <div style={{ height: scoutState === 1 ? "150px" : "0" }}>
            <h1>One</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 1
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 1 ? setScoute(1) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
          <div style={{ height: scoutState === 2 ? "150px" : "0" }}>
            <h1>Two</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 2
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 2 ? setScoute(2) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
          <div style={{ height: scoutState === 3 ? "150px" : "0" }}>
            <h1>Three</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 3
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 3 ? setScoute(3) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
          <div style={{ height: scoutState === 4 ? "150px" : "0" }}>
            <h1>Four</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 4
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 4 ? setScoute(4) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
          <div style={{ height: scoutState === 5 ? "150px" : "0" }}>
            <h1>Five</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 5
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 5 ? setScoute(5) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
          <div style={{ height: scoutState === 6 ? "150px" : "0" }}>
            <h1>Six</h1>
            <div
              className="expand"
              style={{
                transform:
                  scoutState === 6
                    ? "translate(-120%, -60%) rotate(180deg)"
                    : "translate(-120%, -60%)",
              }}
            >
              <Button
                onClick={() => (scoutState !== 6 ? setScoute(6) : setScoute(0))}
              >
                <ExpandMoreIcon />
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur magni soluta, quis, impedit accusantium, sapiente ipsam
              similique delectus doloribus expedita vel quia ullam at tempora!
              Minima sequi, tenetur dignissimos exercitationem eius odit alias
              eligendi magni repellendus eaque voluptatibus voluptatem officiis
              aliquam non molestiae numquam delectus expedita quod ratione.
              Vitae, eligendi!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Disclaimer</a>
          <span>|</span>
          <a href="/">Terms And Conditions</a>
        </div>
        <p>Copyright © Grape Studio Enterprise</p>
      </footer>
    </div>
  );
}

export default App;
