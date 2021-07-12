import "./App.css";
import logo from "./assets/logo.svg";
import asset_one from "./assets/asset_one.svg";
import asset_two from "./assets/asset_two.svg";

import contactUs from "./assets/contactUs.svg";
import asset_whatsapp from "./assets/asset_whatsapp.png";
import asset_instagram from "./assets/asset_instagram.png";
import asset_facebook from "./assets/asset_facebook.png";
import asset_linkedin from "./assets/asset_linkedin.png";

import slogan from "./assets/Slogan.png";
import card_asset_1 from "./assets/web.svg";
import card_asset_2 from "./assets/webd.svg";
import card_asset_3 from "./assets/asset_appDesign.svg";
import card_asset_4 from "./assets/content.svg";
import card_asset_5 from "./assets/graphics.svg";
import card_asset_6 from "./assets/app.svg";

import process_asset_1 from "./assets/process_asset_1.svg";
import process_asset_2 from "./assets/process_asset_2.svg";
import process_asset_3 from "./assets/process_asset_3.svg";
import process_asset_4 from "./assets/process_asset_4.svg";
import process_asset_5 from "./assets/process_asset_5.svg";
import process_asset_6 from "./assets/process_asset_6.svg";

import industries_asset_2 from "./assets/industries_asset_2.svg";

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

  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
    document
      .querySelector(":root")
      .style.setProperty("--fvh", window.innerHeight / 100 + "px");
    window.addEventListener("resize", () => {
      document
        .querySelector(":root")
        .style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  }, []);

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
                transform:
                  scrollTopState && cFromState
                    ? "translateY(0px)"
                    : scrollTopState
                    ? "translateY(-70px)"
                    : "translateY(0px)",
              }}
            >
              {cFromState ? (
                <>
                  <div>
                    <Button
                      onClick={() => {
                        setcFrom(false);
                      }}
                      className="contactClose"
                    >
                      <CancelIcon />
                    </Button>
                    <div>
                      <img
                        loading="lazy"
                        src={contactUs}
                        alt="contactUs"
                        className="contactAsset"
                      />
                      <img
                        src={asset_whatsapp}
                        alt="whatsapp"
                        className="asset_whatsapp"
                      />
                      <img
                        src={asset_facebook}
                        alt="facebook"
                        className="asset_facebook"
                      />
                      <img
                        src={asset_linkedin}
                        alt="linkedin"
                        className="asset_linkedin"
                      />
                      <img
                        src={asset_instagram}
                        alt="instagram"
                        className="asset_instagram"
                      />
                    </div>
                    <div>
                      <h1>Welcome To,</h1>
                      <h1>Grape Studio Enterprise</h1>
                    </div>
                  </div>
                  <div>
                    <p>How Can We Help You?</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onCopy={(event) => event.preventDefault()}
                        onCut={(event) => event.preventDefault()}
                        onPaste={(event) => event.preventDefault()}
                        onKeyDown={(event) =>
                          event.keyCode === 8 ||
                          event.keyCode === 32 ||
                          (event.keyCode >= 65 && event.keyCode <= 122)
                            ? ""
                            : event.preventDefault()
                        }
                        placeholder="Name"
                        {...register("name", {
                          required: true,
                          type: "email",
                        })}
                        style={{
                          boxShadow: errors.name ? "0 0 2px 2px red" : "none",
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onCopy={(event) => event.preventDefault()}
                        onCut={(event) => event.preventDefault()}
                        onPaste={(event) => event.preventDefault()}
                        placeholder="Email"
                        {...register("email", { required: true })}
                        style={{
                          boxShadow: errors.email ? "0 0 2px 2px red" : "none",
                        }}
                      />
                      <textarea
                        name="detail"
                        id="detail"
                        maxLength="250"
                        onCopy={(event) => event.preventDefault()}
                        onCut={(event) => event.preventDefault()}
                        onPaste={(event) => event.preventDefault()}
                        placeholder="How can we help?*"
                        {...register("detail", {
                          required: true,
                          maxLength: "500",
                        })}
                        style={{
                          boxShadow: errors.detail ? "0 0 2px 2px red" : "none",
                        }}
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
                <Link to="/">
                  <img loading="lazy" src={logo} alt="logo" />
                </Link>

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
                    height: mMenu ? "calc(100 * var(--vh))" : "59px",
                    backdropFilter: mMenu ? "blur(50px)" : "unset",
                    WebkitBackdropFilter: mMenu ? "blur(50px)" : "unset",
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
                  <img loading="lazy" src={asset_one} alt="asset_one" />
                </div>
                <div>
                  <img loading="lazy" src={slogan} alt="slogan" />
                  <a href="/" className="main_btn">
                    Get Started
                  </a>
                </div>
              </div>
              {/* <img loading="lazy" src={Wave} alt="Wave" className="Wave" />
              <img loading="lazy" src={mWave} alt="mWave" className="mWave" /> */}
            </section>

            {/* main */}

            {/* s_offer */}

            <section className="s_offer">
              <div>
                <h1>What We Do? </h1>
              </div>
              <div>
                <div className="offer_anim_card" id="0">
                  <img loading="lazy" src={card_asset_6} alt="card" />
                  <div>
                    <h1>Mobile App development</h1>
                    <ul>
                      <li>Highly proficient in Android app development.</li>
                      <li>
                        Hiring passionate and dedicated developers to produce
                        the best results.
                      </li>
                      <li>
                        Showcasing an innovative and enthusiastic approach while
                        building android apps.
                      </li>
                      <li>
                        Working with existing and updated technologies for
                        secure and sturdy app development.
                      </li>
                      <li>
                        Providing steady and satisfactory results to our
                        clients.
                      </li>
                      <li>Delivering with exceptional punctuality.</li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="1">
                  <img loading="lazy" src={card_asset_1} alt="card" />
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
                  <img loading="lazy" src={card_asset_2} alt="card" />

                  <div>
                    <h1>Web design</h1>
                    <ul>
                      <li>Highly proficient in web designing.</li>
                      <li>
                        Offering interactive UI & UX designs for your Websites.
                      </li>
                      <li>
                        Following professional procedures while designing your
                        respective website.
                      </li>
                      <li>Ensuring timely delivery of orders.</li>
                      <li>
                        Using creative tools to maximize user interactions.
                      </li>
                      <li>Hiring professional UI/UX designers.</li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="3">
                  <img loading="lazy" src={card_asset_3} alt="card" />
                  <div>
                    <h1>Mobile App design</h1>
                    <ul>
                      <li>Highly proficient in mobile app designing.</li>
                      <li>
                        Offering interactive UI & UX designs for your Mobile
                        applications.
                      </li>
                      <li>
                        Following professional procedures while designing your
                        respective Mobile app.
                      </li>
                      <li>Ensuring timely delivery of orders.</li>
                      <li>
                        Using creative tools to maximize user interactions.
                      </li>
                      <li>Hiring professional UI/UX designers.</li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="4">
                  <img loading="lazy" src={card_asset_5} alt="card" />
                  <div>
                    <h1>Graphic designing</h1>
                    <ul>
                      <li>Highly proficient in Graphic designing.</li>
                      <li>
                        Our company offers a variety of services in graphic
                        designing that are listed below.
                      </li>
                      <li>Logo|Social media posts designing.</li>
                      <li>Business cards|Flyer designing.</li>
                      <li>
                        Ensuring timely delivery of each and every design.
                      </li>
                      <li>More preferable to have UI|UX knowledge.</li>
                    </ul>
                  </div>
                </div>
                <div className="offer_anim_card" id="5">
                  <img loading="lazy" src={card_asset_4} alt="card" />
                  <div>
                    <h1> Content Writing</h1>
                    <ul>
                      <li>Maintaining consistent quality of work.</li>
                      <li>
                        Our writers have qualifications in the fields they write
                        about and are trained experts.
                      </li>
                      <li>Adept in meeting your strict deadlines.</li>
                      <li>Always available for ongoing communication. </li>
                      <li>
                        Delivering engaging content as per customer’s request.{" "}
                      </li>
                      <li>Open for customer’s feedback.</li>
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
                  <h1>Flutter</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description :</h1>
                    <p>
                      We at GSE are hiring a unique developer position that will
                      allow you to not only expand your capabilities, but also
                      build equity in a unique adventure startup.
                    </p>
                    <h1>Your responsibilities will include : </h1>
                    <ul>
                      <li>Maintain existing codebases.</li>
                      <li>
                        Design and implement new app modules based on the
                        product requirements using Flutter framework.
                      </li>
                      <li>
                        Should build reusable code and libraries for future use.
                      </li>
                      <li>
                        Debug existing apps components, fix issues and avoid
                        regressions.
                      </li>
                      <li>
                        Optimize application for maximum speed and scalability.
                      </li>
                      <li>Follow the company guidelines and best practices.</li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
                <div style={{ height: scoutState === 2 ? "150px" : "0" }}>
                  <h1>Website</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description : </h1>
                    <p>
                      We at GSE are looking for a skilled web developer who will
                      be responsible for developing and/or designing websites
                      for our company. You will be working alongside a team of
                      other developers in creating, maintaining, and updating
                      our websites.
                    </p>
                    <h1>Your responsibilities will include :</h1>
                    <ul>
                      <li>
                        Should know HTML, CSS, JavaScript, PHP and other
                        relevant web design coding languages.
                      </li>
                      <li>
                        Experience with database systems such as SQL or NoSQL.
                      </li>
                      <li>
                        Must implement contingency plans in case the website
                        goes down.
                      </li>
                      <li>
                        Should focus on maintaining and expanding/enhancing the
                        website once built.
                      </li>
                      <li>
                        Engage with other members of their team to ascertain the
                        kind of information the site should contain.
                      </li>
                      <li>
                        Should be responsible for carrying out quality test and
                        troubleshoot the website and/or its applications in
                        various browsers.
                      </li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
                <div style={{ height: scoutState === 3 ? "150px" : "0" }}>
                  <h1>Graphic Designer</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description:</h1>
                    <p>
                      We are looking for a highly talented, driven and flexible
                      graphic designer with a proven record of delivering
                      creative and innovative design solutions.
                    </p>
                    <h1>Your responsibilities will include</h1>
                    <ul>
                      <li>
                        Responsible for creating exciting materials as well as
                        design solutions that have high visual impact.
                      </li>
                      <li>
                        Creating edgy and fashionable designs overseeing the
                        visual expression of a client’s brand.
                      </li>
                      <li>
                        Should manage design projects from brief to the end.
                      </li>
                      <li>Should be proficient in UI/UX design.</li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
                <div style={{ height: scoutState === 4 ? "150px" : "0" }}>
                  <h1>React Native</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description : </h1>
                    <p>
                      We at GSE are looking for a React Native developer
                      interested in building performant mobile apps on both the
                      iOS and Android platforms.
                    </p>
                    <h1>Your responsibilities will include : </h1>
                    <ul>
                      <li>
                        Should diagnose, fix bugs and performance bottlenecks
                        for performance that feels native.
                      </li>
                      <li>
                        Build pixel-perfect, buttery smooth UIs across both
                        mobile platforms.
                      </li>
                      <li>
                        Must leverage native APIs for deep integrations with
                        both platforms.
                      </li>
                      <li>
                        Maintain code and write automated tests to ensure the
                        product is of the highest quality.
                      </li>
                      <li>Follow the company guidelines and best practices.</li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
                <div style={{ height: scoutState === 5 ? "150px" : "0" }}>
                  <h1>Backend developer</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description:</h1>
                    <p>
                      We are looking for backend developers that are responsible
                      for creating and maintaining technology at the back end of
                      a website.
                    </p>
                    <h1>Your responsibilities will include:-</h1>
                    <ul>
                      <li>Writing high-quality codes.</li>
                      <li>Building and maintaining web applications.</li>
                      <li>
                        Assessing the efficiency and speed of current
                        applications.
                      </li>
                      <li>Must be proficient in Firebase or MySQL, MongoDB.</li>
                      <li>
                        Should be adept focus on troubleshooting and debugging.
                      </li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
                <div style={{ height: scoutState === 6 ? "150px" : "0" }}>
                  <h1>Business Development Executive</h1>
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
                  <div className="s_scoutingDetails">
                    <h1>Job Description :</h1>
                    <p>
                      We at GSE are looking for a Business development executive
                      who will be concerned with improving and growing our
                      business, by establishing and developing relationships
                      with customers, suppliers and other partners.
                    </p>
                    <h1>Your responsibilities will include :</h1>
                    <ul>
                      <li>
                        Must seek out the appropriate contact in an
                        organisation.
                      </li>
                      <li>
                        Meet with customers/clients face to face or over the
                        phone.
                      </li>
                      <li>
                        Understand the needs of our customers and be able to
                        respond effectively with a plan of how to fulfil them.
                      </li>
                      <li>
                        Should have a good understanding of the business
                        services and be able to advise others about them.
                      </li>
                      <li>
                        Should have a good understanding of the business
                        services and be able to advise others about them.
                      </li>
                      <li>Follow the company guidelines and best practices.</li>
                    </ul>
                    <h1>Send Your Resume to hr@grapestudioenterprise.in</h1>
                  </div>
                </div>
              </div>
            </section>
            <section className="s_about">
              <div>
                <h1>What We Are About</h1>
                <p>
                  We are A team of professionals, whose main objective is to
                  interface with individuals by taking care of their confounded
                  issues through technology by remembering our safety standards
                  as a prime focus. Catering to your requirements is at the
                  heart of what we do.
                </p>
              </div>
              <div>
                <img loading="lazy" src={asset_two} alt="" />
              </div>
            </section>
            <section className="s_industries">
              <div>
                <h1>Industries</h1>
                <h1>we work with : </h1>
                <ul>
                  <li>Public Sector</li>
                  <li>Private Sector</li>
                  <li>Corporate Sector</li>
                </ul>
              </div>
              <div>
                <img src={industries_asset_2} alt="industries_asset_2" />
              </div>
            </section>
            <section className="s_process">
              <div>
                <h1>Our Process Model</h1>
              </div>
              <div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_1} alt="" />
                </div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_2} alt="" />
                </div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_3} alt="" />
                </div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_4} alt="" />
                </div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_5} alt="" />
                </div>
                <div className="ball">
                  <img loading="lazy" src={process_asset_6} alt="" />
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
