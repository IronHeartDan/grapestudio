import "./App.css";
import logo from "./logo.svg";
import asset_one from "./asset_one.svg";
import asset_two from "./asset_two.svg";

import s_offer_asset from "./s_offer_asset.jpg";

import contactUs from "./contactUs.svg";

import Wave from "./wave.svg";
import mWave from "./mWave.svg";
import slogan from "./Slogan.png";
import card_asset_1 from "./web.svg";
import card_asset_2 from "./webd.svg";
import card_asset_3 from "./custom.svg";
import card_asset_4 from "./content.svg";
import card_asset_5 from "./graphics.svg";
import card_asset_6 from "./app.svg";

import process_asset_1 from "./process_asset_1.svg";
import process_asset_2 from "./process_asset_2.svg";
import process_asset_3 from "./process_asset_3.svg";
import process_asset_4 from "./process_asset_4.svg";
import process_asset_5 from "./process_asset_5.svg";
import process_asset_6 from "./process_asset_6.svg";

import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CancelIcon from "@material-ui/icons/Cancel";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Modules

import TermsAndCondition from "./TermsAndCondition";
import Disclaimer from "./Disclaimer";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  const [scrollTopState, setScrollTop] = useState(false);
  const [scoutState, setScoute] = useState(0);
  const [cFromState, setcFrom] = useState(false);
  const [mMenu, setmMenu] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
  //   document.documentElement
  //     .requestFullscreen()
  //     .then(() => {
  //       window.screen.orientation
  //         .lock("portrait")
  //         .then(() => {
  //           alert("Locked");
  //         })
  //         .catch((e) => {
  //           alert(e);
  //         });
  //     })
  //     .catch((e) => console.log(e));
  // });

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
    <Router>
      <Switch>
        <Route path="/" exact>
          <div
            className="app"
            onScroll={onScroll}
            style={{ overflow: mMenu ? "hidden" : "auto" }}
          >
            <h1 style={{ display: "none" }} className="orientation">
              Turn Your Device By 90 Degrees
            </h1>
            {/* Contact us */}
            <div
              className={cFromState ? "contactUs expandContactUs" : "contactUs"}
              style={{
                transform: scrollTopState
                  ? "translateY(-70px)"
                  : "translateY(0px)",
              }}
            >
              {cFromState ? (
                <>
                  <div>
                    <img src={logo} alt="logo" className="contactLogo" />
                    <Button
                      onClick={() => {
                        setcFrom(false);
                      }}
                      className="contactClose"
                    >
                      <CancelIcon />
                    </Button>
                    <img
                      src={contactUs}
                      alt="contactUs"
                      className="contactAsset"
                    />
                    <div>
                      <h1>Welcome To,</h1>
                      <h1>Grape Studio Enterprise</h1>
                    </div>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p>How Can We Help You?</p>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                      <textarea
                        name="detail"
                        id="detail"
                        placeholder="How can we help?*"
                      ></textarea>
                      <button type="submit">SUBMIT</button>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setcFrom(true);
                    }}
                  >
                    <ChatBubbleIcon />
                  </Button>
                </>
              )}
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
                  <a href="/">Home</a>
                  <a href="/">Services</a>
                  <a href="/">About us</a>
                  <a href="/">Industries</a>
                  <a href="/">Careers</a>
                </nav>
                <div
                  className="menu"
                  style={{
                    position: mMenu ? "absolute" : "unset",
                    top: mMenu ? "0" : "unset",
                    right: mMenu ? "0" : "unset",
                    width: mMenu ? "100vw" : "64px",
                    height: mMenu ? "100vh" : "59px",
                    backdropFilter: mMenu ? "blur(50px)" : "unset",
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
                  {mMenu ? (
                    <>
                      <nav>
                        <a href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="/">About us</a>
                        <a href="/">Industries</a>
                        <a href="/">Careers</a>
                      </nav>
                    </>
                  ) : (
                    <></>
                  )}
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
              <img src={s_offer_asset} alt="s_offer_asset" />
              <div>
                <h1>What We Do? </h1>
              </div>
              <div>
                <div className="offer_anim_card" id="0">
                  <img src={card_asset_1} alt="card" />
                  <div>
                    <h1>Web | Mobile App Design</h1>
                    <ul>
                      <li>Highly proficient in web/mobile app designing.</li>
                      <li>
                        Offering interactive UI & UX designs for your Mobile
                        applications/Websites.
                      </li>
                      <li>
                        Following professional procedures while designing your
                        respective web/Mobile app.
                      </li>
                      <li>Ensuring timely delivery of orders.</li>
                      <li>
                        Using creative tools to maximize user interactions.
                      </li>
                      <li> Hiring professional UI/UX designers.</li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="1">
                  <img src={card_asset_2} alt="card" />
                  <div>
                    <h1>Website development</h1>
                    <ul>
                      <li> Highly proficient in website development.</li>
                      <li>
                        Conducting innovative tactic while building
                        static/dynamic websites.
                      </li>
                      <li>
                        Hiring passionate and dedicated individuals to ensure
                        smooth development.
                      </li>
                      <li>Developing dynamic/static websites from scratch.</li>
                      <li>Providing better user interactive interface.</li>
                      <li>
                        Constructing wide sets of websites ranging from
                        (Personal, Photo sharing, writer/author, informative,
                        ecommerce).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="2">
                  <img src={card_asset_3} alt="card" />
                  <h1>Three</h1>
                </div>
                <div className="offer_anim_card" id="3">
                  <img src={card_asset_4} alt="card" />
                  <h1>Four</h1>
                </div>
                <div className="offer_anim_card" id="4">
                  <img src={card_asset_5} alt="card" />
                  <div>
                    <h1>Graphic designing</h1>
                    <ul>
                      <li>Highly proficient in Graphic designing.</li>
                      <li>
                        <strong>Logo designing:-</strong> ➔ A team of
                        experienced logo designers providing services from basic
                        and complex logo designs for small scale businesses to
                        big enterprising corporations.
                      </li>
                      <li>
                        <strong>Business cards designing:-</strong> ➔ Adding
                        life to your business cards by using creative and
                        professional designing methods while developing them.
                      </li>
                      <li>
                        <strong>Social media posts designing:- </strong>{" "}
                        ➔Providing interactive post designs for engaging more
                        audiences.
                      </li>
                      <li>
                        <strong>Business Flyer designing:-</strong> ➔ Creating
                        your own professional business flyer designs allowing
                        you to express the story of your case. Whether it’s for
                        business, promoting, fundraisers etc
                      </li>
                      <li>
                        Ensuring timely delivery of each and every design.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="5">
                  <img src={card_asset_6} alt="card" />
                  <div>
                    <h1>Mobile App development</h1>
                    <ul>
                      <li> Highly proficient in Android app development.</li>
                      <li>
                        Hiring passionate and dedicated developers to produce
                        the best results.
                      </li>
                      <li>
                        Showcasing innovative and enthusiastic approach while
                        building android apps
                      </li>
                      <li>
                        Working with existing and updated technologies for
                        secure and sturdy app development.
                      </li>
                      <li>
                        Providing steady and satisfactory result to our clients.
                      </li>
                      <li>Delivering with exceptional punctuality.</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                      onClick={() =>
                        scoutState !== 1 ? setScoute(1) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
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
                      onClick={() =>
                        scoutState !== 2 ? setScoute(2) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
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
                      onClick={() =>
                        scoutState !== 3 ? setScoute(3) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
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
                      onClick={() =>
                        scoutState !== 4 ? setScoute(4) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
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
                      onClick={() =>
                        scoutState !== 5 ? setScoute(5) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
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
                      onClick={() =>
                        scoutState !== 6 ? setScoute(6) : setScoute(0)
                      }
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur magni soluta, quis, impedit accusantium, sapiente
                    ipsam similique delectus doloribus expedita vel quia ullam
                    at tempora! Minima sequi, tenetur dignissimos exercitationem
                    eius odit alias eligendi magni repellendus eaque
                    voluptatibus voluptatem officiis aliquam non molestiae
                    numquam delectus expedita quod ratione. Vitae, eligendi!
                  </p>
                </div>
              </div>
            </section>
            <section className="s_about">
              <div>
                <h1>About Us</h1>
                <p>
                  We are the grapes studio! A team of software development,
                  website development, mobile apps development, and graphic
                  designing professionals, whose main objective is to interface
                  individuals and society by taking care of their confound
                  issues through technology by complying with our safe standards
                  as our prime focus. Our team applies its wide-ranging
                  experience to offer a full set of services from custom
                  software development to ongoing maintenance and support to
                  achieve long-term objectives. While there are various software
                  solution companies with passable execution of arrangements for
                  documentation and other measures. Our company stratagem’s this
                  dilemma by offering full documentation with secure code and
                  design configuration measures. Catering to your requirements
                  is at the heart of what we do.
                </p>
              </div>
              <div>
                <img src={asset_two} alt="" />
              </div>
            </section>
            <section className="s_process">
              <div>
                <h1>Our Process Model</h1>
              </div>
              <div>
                <div className="ball">
                  <img src={process_asset_1} alt="" />
                </div>
                <div className="ball">
                  <img src={process_asset_2} alt="" />
                </div>
                <div className="ball">
                  <img src={process_asset_3} alt="" />
                </div>
                <div className="ball">
                  <img src={process_asset_4} alt="" />
                </div>
                <div className="ball">
                  <img src={process_asset_5} alt="" />
                </div>
                <div className="ball">
                  <img src={process_asset_6} alt="" />
                </div>
              </div>
            </section>
            <footer>
              <div>
                <Link to="/privacy_policy">Privacy Policy</Link>

                <span>|</span>
                <Link to="/disclaimer">Disclaimer</Link>

                <span>|</span>
                <Link to="/terms_and_conditions">Terms And Conditions</Link>
              </div>
              <p>Copyright © Grape Studio Enterprise</p>
            </footer>
          </div>
        </Route>
        <Route path="/privacy_policy" exact>
          <PrivacyPolicy />
        </Route>
        <Route path="/disclaimer" exact>
          <Disclaimer />
        </Route>
        <Route path="/terms_and_conditions" exact>
          <TermsAndCondition />
        </Route>
        <Route>
          <div className="not_Found">
            <h1>Error : 404</h1>
            <h1>Page Not Found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
