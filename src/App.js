import "./App.css";
import logo from "./logo.svg";
import asset_one from "./asset_one.svg";
import wave from "./wave.svg";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useEffect, useState } from "react";

function App() {
  const [scrollTopState, setScrollTop] = useState(false);
  const [offersState, setOffer] = useState(0);

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
    entries.forEach((entry, index) => {
      console.log(index);
      switch (index) {
        case 0:
          if (entry.intersectionRatio > 0) {
            let offer_anim_cards =
              document.querySelectorAll(".offer_anim_card");
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
          break;

        case 1:
          console.log(entry.intersectionRatio);
          let anim_offer_con_one =
            document.getElementById("anim_offer_con_one");
          if (entry.intersectionRatio > 0) {
            anim_offer_con_one.style.background =
              "linear-gradient(120deg, #161f6d, #565ea5)";
          } else {
            anim_offer_con_one.style.background = "unset";
          }
          break;

        default:
          break;
      }
    });
  });

  useEffect(() => {
    // For Anim
    let elements = document.querySelectorAll(".anim");
    elements.forEach((element) => {
      magic.observe(element);
    });

    // For anim_offer
    elements = document.querySelectorAll(".anim_offer");
    elements.forEach((o_anim) => {
      offerMagic.observe(o_anim);
    });
  }, [magic]);

  return (
    <div className="app" onScroll={onScroll}>
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

      {/* s_offer */}

      <section className="s_offer">
        <div className="anim_offer" id="anim_offer_con_one">
          <h1>What We Offer ?</h1>
          <div className="anim_offer">
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
                  break;
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
                  break;
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
                  break;
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
                  break;
                case 5:
                  return (
                    <>
                      <h1>Five</h1>
                      <ul>
                        <li>Five</li>
                      </ul>
                    </>
                  );
                  break;
                case 6:
                  return (
                    <>
                      <h1>Six</h1>
                      <ul>
                        <li> Six</li>
                      </ul>
                    </>
                  );
                  break;

                default:
                  return <></>;
                  break;
              }
            })()}
          </div>
        </div>
      </section>

      {/* s_offer */}

      <section className="s_scouting">
        <h1>What We Are Scouting For?</h1>
        <div>
          <div>
            <h1>One</h1>
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
          <div>
            <h1>Two</h1>
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
          <div>
            <h1>Three</h1>
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
          <div>
            <h1>Four</h1>
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
          <div>
            <h1>Five</h1>
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
          <div>
            <h1>Six</h1>
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
        <a href="">Privacy Policy</a>
        <a href="">Disclaimer</a>
        <a href="">Terms And Conditions</a>
        <span>Copyright © Grape Studio</span>
      </footer>
    </div>
  );
}

export default App;
