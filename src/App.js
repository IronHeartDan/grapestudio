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

  useEffect(() => {
    console.log("UseEffect");
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
          default:
            animType = "PopBottom";
        }
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `${animType} ease 1s 0s`;
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.animation = "none";
        }
      });
    });
    // For Anim
    let elements = document.querySelectorAll(".anim");
    elements.forEach((element) => {
      magic.observe(element);
    });

    const offerMagic = new IntersectionObserver((entries) => {
      console.log("djbfsdj");
      if (entries[0].intersectionRatio > 0) {
        let offer_anim_cards = document.querySelectorAll(".offer_anim_card");
        offer_anim_cards.forEach((card, ci) => {
          switch (ci) {
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

    // For anim_offer
    let oE = document.querySelector(".anim_offer");
    offerMagic.observe(oE);
  });

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
        <div className="anim_offer" id="anim_offer_con_one">
          <div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(1)}>
              <h6>Mobile App development</h6>
            </div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(2)}>
              <h6>Website development</h6>
            </div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(3)}>
              <h6>Web/ Mobile App design</h6>
            </div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(4)}>
              <h6>Graphic designing</h6>
            </div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(5)}>
              <h6>Five</h6>
            </div>
            <div className="offer_anim_card" onMouseOver={() => setOffer(6)}>
              <h6>Six</h6>
            </div>
          </div>
        </div>
        <div>
          <div>
            {(() => {
              switch (offersState) {
                case 1:
                  return (
                    <>
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
                          Providing steady and satisfactory result to our
                          clients.
                        </li>
                        <li>Delivering with exceptional punctuality.</li>
                      </ul>
                    </>
                  );
                case 2:
                  return (
                    <>
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
                        <li>
                          Developing dynamic/static websites from scratch.
                        </li>
                        <li>Providing better user interactive interface.</li>
                        <li>
                          Constructing wide sets of websites ranging from
                          (Personal, Photo sharing, writer/author, informative,
                          ecommerce).
                        </li>
                      </ul>
                    </>
                  );
                case 3:
                  return (
                    <>
                      <h1>Web/ Mobile App design</h1>
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
                    </>
                  );
                case 4:
                  return (
                    <>
                      <h1>Graphic designing</h1>
                      <ul>
                        <li>Highly proficient in Graphic designing.</li>
                        <li>
                          <strong>Logo designing:-</strong> ➔ A team of
                          experienced logo designers providing services from
                          basic and complex logo designs for small scale
                          businesses to big enterprising corporations.
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
                          you to express the story of your case. Whether it’s
                          for business, promoting, fundraisers etc
                        </li>
                        <li>
                          Ensuring timely delivery of each and every design.
                        </li>
                      </ul>
                    </>
                  );
                case 5:
                  return (
                    <>
                      <h1>Five</h1>
                      <ul>
                        <li>Five</li>
                      </ul>
                    </>
                  );
                case 6:
                  return (
                    <>
                      <h1>Six</h1>
                      <ul>
                        <li> Six</li>
                      </ul>
                    </>
                  );

                default:
                  return <></>;
              }
            })()}
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
        <a href="/">Privacy Policy</a>
        <span>|</span>
        <a href="/">Disclaimer</a>
        <span>|</span>
        <a href="/">Terms And Conditions</a>
        <p>Copyright © Grape Studio Enterprise</p>
      </footer>
    </div>
  );
}

export default App;
