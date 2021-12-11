import React, { Component } from "react";
import "./Movie.css";
import moneyheists1e1img from "./images/moneyhesistso1ep1.jpg";
import moneyheists1e2img from "./images/moneyhesistso1ep2.jpg";
import moneyheists1e3img from "./images/moneyhesistso1ep3.jpg";
import moneyheists1e4img from "./images/moneyhesistso1ep4.jpg";
import moneyheists1e5img from "./images/moneyhesistso1ep5.jpg";
import moneyheists1e6img from "./images/moneyhesistso1ep6.jpg";
import moneyheists1e7img from "./images/moneyhesistso1ep7.jpg";
import moneyheists1e8img from "./images/moneyhesistso1ep8.jpg";
import moneyheists1e9img from "./images/moneyhesistso1ep9.jpg";
import moneyheists1e10img from "./images/moneyhesistso1ep10.jpg";
import moneyheists1e11img from "./images/moneyhesistso1ep11.jpg";
import moneyheists1e12img from "./images/moneyhesistso1ep12.jpg";
import moneyheists1e13img from "./images/moneyhesistso1ep13.jpg";

import moneyheists5e1img from "./images/moneyheists5e1img.jpg";
import moneyheists5e2img from "./images/moneyheists5e2img.jpg";
import moneyheists5e3img from "./images/moneyheists5e3img.jpg";
import moneyheists5e4img from "./images/moneyheists5e4img.jpg";
import moneyheists5e5img from "./images/moneyheists5e5img.jpg";
import moneyheists5e6img from "./images/moneyheists5e6img.jpg";
import moneyheists5e7img from "./images/moneyheists5e7img.jpg";
import moneyheists5e8img from "./images/moneyheists5e8img.jpg";
import moneyheists5e9img from "./images/moneyheists5e9img.jpg";
import moneyheists5e10img from "./images/moneyheists5e10img.jpg";

import squidgamesimg1 from "./images/Episode1img.jpg";
import squidgamesimg2 from "./images/Episode2img.jpg";
import squidgamesimg3 from "./images/Episode3img.jpg";
import squidgamesimg4 from "./images/Episode4img.jpg";
import squidgamesimg5 from "./images/Episode5img.jpg";
import squidgamesimg6 from "./images/Episode6img.jpg";
import squidgamesimg7 from "./images/Episode7img.jpg";
import squidgamesimg8 from "./images/Episode8img.jpg";
import squidgamesimg9 from "./images/Episode9img.jpg";

import moneyhesittrailer from "./Videos/MoneyHeistTrailer.mp4";
import moneyhesistcover from "./images/moneyhesistcover.jpg";
import moneyhesistlogo from "./images/moneyhesistlogo.png";

import squidgameslogo from "./images/text.png";
import squidgamescover from "./images/squidgamescoverimg.jpg";
import squidgamestrailer from "./Videos/Squid Game _ Official Trailer.mp4";

let data2 = [
  {
    name: "Money Hesit",
    coverphoto: moneyhesistcover,
    logo: moneyhesistlogo,
    release: "2017",
    about: "2017 | 18+ | 5 Seasons | Crime TV Shows",
    details:
      "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    starting: "Úrsula Corberó,Álvaro Morte,Itziar Ituño",
    creators: "Álex Pina",
    about2:
      "This riveting crime series won Best Drama at the International Emmy Awards, Premios Fénix and Premios Iris (plus six more Iris wins).",
    totalseasons: 5,
    trailer: moneyhesittrailer,
    trailertitle: "Money Hesit Trailer",
    season: ["season1", "season2", "season3", "season4", "season5"],
    season1: [
      {
        name: "Episode 1",
        details:
          "The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.",
        duration: "49m",
        img: moneyheists1e1img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 2",
        details:
          "Hostage negotiator Raquel makes initial contact with the Professor. One of the hostages is a crucial part of the thieves plans.",
        duration: "42m",
        img: moneyheists1e2img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 3",
        details:
          "Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.",
        duration: "52m",
        img: moneyheists1e3img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 4",
        details:
          "Raquel suffers a personal crisis with her ex. The hostages are frightened by the gunshots they overheard. The thieves argue among themselves.",
        duration: "53m",
        img: moneyheists1e4img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 5",
        details:
          "The thieves let a medical team enter the Mint, and an undercover policeman sneaks in with them. Can the Professor stay one step ahead of Raquel?",
        duration: "44m",
        img: moneyheists1e5img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 6",
        details:
          "Mónicas condition worsens. The Professor enjoys the spoils of his latest trick. Río is disturbed by news he sees on the television.",
        duration: "45m",
        img: moneyheists1e6img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 7",
        details:
          "A break in the investigation and a mistake by one of the thieves puts the Professor at serious risk of being discovered.",
        duration: "49m",
        img: moneyheists1e7img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 8",
        details:
          "Tokyo catches Alison chatting with Río and confronts her. The police suspect a spy is in their midst.",
        duration: "45m",
        img: moneyheists1e8img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 9",
        details:
          "The Professor races to stop a witness from identifying him. Berlín seeks revenge once his own name is revealed and slandered in the press.",
        duration: "44m",
        img: moneyheists1e9img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 10",
        details:
          "Raquel enters the Mint to ascertain that all of the hostages are still alive and well. Nairobi gives Alison advice.",
        duration: "56m",
        img: moneyheists1e10img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 11",
        details:
          "Ángel and Raquel question each others loyalties. Mónica makes a move on Denver. Río is faced with a difficult decision.",
        duration: "44m",
        img: moneyheists1e11img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 12",
        details:
          "Arturo continues to formulate an escape plan for a group of hostages. The Professor reveals who gave him the idea for the heist.",
        duration: "45m",
        img: moneyheists1e12img,
        video: moneyhesittrailer,
      },
      {
        name: "Episode 13",
        details:
          "The Professor meets Raquels mother under stressful circumstances. At the Mint, the thieves offer the hostages a decision: money or freedom?",
        duration: "56m",
        img: moneyheists1e13img,
        video: moneyhesittrailer,
      },
    ],
    season2: [],
    season3: [],
    season4: [],

    season5: [
      {
        name: "1. The End of the Road",
        details:
          "The Professor faces off with Sierra as Tamayo raises the stakes of the negotiations by calling the army. In the past, Berlin meets with a family member.",
        duration: "49m",
        img: moneyheists5e1img,
        video: moneyhesittrailer,
      },
      {
        name: "2. Do You Believe in Reincarnation?",
        details:
          "Arturo seizes an opportunity to fight back while escalating a personal vengeance. Lisbon makes a crucial discovery.",
        duration: "52m",
        img: moneyheists5e2img,
        video: moneyhesittrailer,
      },
      {
        name: "3. Welcome to the Spectacle of Life",
        details:
          "A betrayal and an emergency both catch Sierra by surprise. Palermo rallies the troops as the army closes in on the gang.",
        duration: "50m",
        img: moneyheists5e3img,
        video: moneyhesittrailer,
      },
      {
        name: "4. Your Place in Heaven",
        details:
          "With Helsinkis life in danger, the thieves mount a covert counter attack. Years earlier, Berlin and his son conduct their first heist together.",
        duration: "52m",
        img: moneyheists5e4img,
        video: moneyhesittrailer,
      },
      {
        name: "5. Live Many Lives",
        details:
          "While surrounded by gunfire and trapped in the kitchen, Tokyo reminisces about her first love and her initial encounter with the Professor.",
        duration: "55m",
        img: moneyheists5e5img,
        video: moneyhesittrailer,
      },
      {
        name: "6. Escape Valve",
        details:
          "Sierra takes advantage of the Professors grief and gains the upper hand. Meanwhile, the team deals with the emotional fallout of their dead friend.",
        duration: "54m",
        img: moneyheists5e6img,
        video: moneyhesittrailer,
      },
      {
        name: "7. Wishful Thinking",
        details:
          "Tamayo mounts a manhunt in his neighborhood as his foes hide. In the past, Berlin and Palermo explain how they plan on getting the gold out of the bank.",
        duration: "54m",
        img: moneyheists5e7img,
        video: moneyhesittrailer,
      },
      {
        name: "8. The Elegance Theory",
        details:
          "Tamayo hunts for the gold as the team races against the clock. Mónica worries shes having a psychotic break. Years earlier, Berlin is deceived.",
        duration: "50m",
        img: moneyheists5e8img,
        video: moneyhesittrailer,
      },
      {
        name: "9. Pillow Talk",
        details:
          "The Professor is left reeling after his tactics are used against him, and when it seems like all hope is lost, he makes a bold decision.",
        duration: "52m",
        img: moneyheists5e9img,
        video: moneyhesittrailer,
      },
      {
        name: "10. A Family Tradition",
        details:
          "With multiple lives on the line and Spains economy at stake, the Professor and Tamayo engage in one final showdown.",
        duration: "76m",
        img: moneyheists5e10img,
        video: moneyhesittrailer,
      },
    ],
  },
  {
    name: "Squid Games",
    coverphoto: squidgamescover,
    logo: squidgameslogo,
    release: "2021",
    about: "2021 | 18+ | 1 Seasons | TV Thrillers",
    details:
      "Hundreds of cash-strapped players accept a strange invitation tocompete in childrens games. Inside, a tempting prize awaits —with deadly high stakes.",
    starting: "Lee Jung-jae,Park Hae-soo,Wi Ha-jun",
    creators: "Hwang Dong-hyuk",
    about2:
      'A violent test of morality and humanity starring Lee Jung-jae ("Chief of Staff") and Park Hae-soo ("Prison Playbook").',
    totalseasons: 1,
    trailer: squidgamestrailer,
    trailertitle: "Squid Games Trailer",
    season: ["season1"],
    season1: [
      {
        name: "1. Red Light, Green Light",
        details:
          "Hoping to win easy money, a broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold.",
        duration: "60m",
        img: squidgamesimg1,
        video: squidgamestrailer,
      },
      {
        name: "2. Hell",
        details:
          "Split on whether to continue or quit, the group holds a vote. But their realities in the outside world may prove to be just as unforgiving as the game.",
        duration: "63m",
        img: squidgamesimg2,
        video: squidgamestrailer,
      },
      {
        name: "3. The Man with the Umbrella",
        details:
          "A few players enter the next round — which promises equal doses of sweet and deadly — with hidden advantages. Meanwhile, Jun-ho sneaks his way inside.",
        duration: "55m",
        img: squidgamesimg3,
        video: squidgamestrailer,
      },
      {
        name: "4. Stick to the Team",
        details:
          "As alliances form among the players, no one is safe in the dorm after lights-out. The third game challenges Gi-huns team to think strategically.",
        duration: "56m",
        img: squidgamesimg4,
        video: squidgamestrailer,
      },
      {
        name: "5. A Fair World",
        details:
          "Gi-hun and his team take turns keeping guard through the night. The masked men encounter trouble with their co-conspirators.",
        duration: "53m",
        img: squidgamesimg5,
        video: squidgamestrailer,
      },
      {
        name: "6. Gganbu",
        details:
          "Players pair off for the fourth game. Gi-hun grapples with a moral dilemma, Sang-woo chooses self-preservation and Sae-byeok shares her untold story.",
        duration: "63m",
        img: squidgamesimg6,
        video: squidgamestrailer,
      },
      {
        name: "7. VIPS",
        details:
          "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
        duration: "59m",
        img: squidgamesimg7,
        video: squidgamestrailer,
      },
      {
        name: "8. Front Man",
        details:
          "Ahead of the last round, distrust and disgust run deep among the finalists. Jun-ho makes a getaway, determined to expose the games dirty secrets.",
        duration: "33m",
        img: squidgamesimg8,
        video: squidgamestrailer,
      },
      {
        name: "9. One Lucky Day",
        details:
          "The final round presents another cruel test — but this time, how it ends depends on just one player. The games creator steps out of the shadows.",
        duration: "56m",
        img: squidgamesimg9,
        video: squidgamestrailer,
      },
    ],
  },
];
class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
    this.state = {
      show: false,
      video: "",
      videotitle: "",

      coverphoto: "",
      name: this.props.location.state,
      logo: "",
      about: "",
      details: "",
      about2: "",
      release: "",
      starting: "",
      creators: "",
      trailer: "",
      trailertitle: "",
      season: [],
      currseason: "season1",
      episodes: [],
      selected: [],
    };
  }

  seasonChange = (e) => {
    this.setState({ currseason: e });
    Object.entries(this.state.selected).map(([key, val]) =>
      key === e ? this.setState({ episodes: val }) : ""
    );
  };

  componentDidMount() {
    let selected = data2.find((e) => e.name === this.props.location.state);
    this.setState({
      selected: selected,
      coverphoto: selected.coverphoto,
      logo: selected.logo,
      about: selected.about,
      details: selected.details,
      about2: selected.about2,
      release: selected.release,
      starting: selected.starting,
      creators: selected.creators,
      trailer: selected.trailer,
      trailertitle: selected.trailertitle,
      season: selected.season,
      episodes: selected.season1,
    });
  }

  handletoggle = () => {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
  };

  watchVideo = (video, videotitle) => {
    this.setState({
      show: !this.state.show,
      video: video,
      videotitle: videotitle,
    });
  };

  render() {
    return (
      <div>
        <div style={{ background: `url(${this.state.coverphoto})` }}>
          <section className="banner">
            <div className="content">
              <img src={this.state.logo} className="textimg" />
              <h2 className="title">{this.state.name}</h2>
              <p className="text-secondary text-sm">{this.state.about}</p>
              <p>{this.state.details}</p>
              <p className="text-secondary text-sm">
                Starring:{" "}
                <span className="text-white">{this.state.starting}</span>
              </p>
              <p className="text-secondary text-sm">
                Creators:{" "}
                <span className="text-white">{this.state.creators}</span>
              </p>
              <a
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() =>
                  this.watchVideo(this.state.trailer, this.state.trailertitle)
                }
              >
                <ion-icon name="play-circle-outline"></ion-icon> Watch Trailer{" "}
              </a>
            </div>
          </section>
        </div>

        <section className="banner2">
          <div className="border-top border-bottom my-5">
            <p className="text-center text-secondary p-4 m-0">
              {this.state.about2}
            </p>
            {/* <p className="text-center text-secondary pb-2">Staff") and Park Hae-soo ("Prison Playbook").</p> */}
          </div>
          <div className="my-5 pt-5">
            <h2 className="text-white mb-3">
              Episodes{" "}
              <span className="text-secondary fs-4 fw-light">
                | {this.state.name}
              </span>
            </h2>
            {this.state.season.map((e) => (
              <a
                className={`btn btn-sm mb-3 ${
                  this.state.currseason === e ? "backgroundColour1" : ""
                }`}
                onClick={() => this.seasonChange(e)}
              >
                {" "}
                {e}
              </a>
            ))}
            <h5 className="text-white fw-bold pb-1">
              Release year: {this.state.release}
            </h5>
            <p className="text-secondary">{this.state.details}</p>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-0">
            {this.state.episodes.map((e) => (
              <div
                className="card col-md-3 cards-style p-2"
                key={e.name}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => this.watchVideo(e.video, e.name)}
              >
                <img src={e.img} className="card-img-top" alt="..." />
                <div className="card-body p-0 py-3">
                  <h6 className="d-flex justify-content-between pb-2">
                    <span className="fw-bold text-white">{e.name}</span>
                    <span className="text-secondary">{e.duration}</span>
                  </h6>
                  <p
                    className="card-text text-white"
                    style={{ fontSize: "small" }}
                  >
                    {e.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ background: "none", border: "none" }}
            >
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h5 className="modal-title" id="#staticBackdrop"></h5>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between py-2">
                  <span
                    className="text-white"
                    style={{ borderLeft: "3px solid red" }}
                  >
                    &nbsp;&nbsp;&nbsp;{this.state.videotitle}
                  </span>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={this.watchVideo}
                  ></button>
                </div>
                {this.state.show === true ? (
                  //   <YoutubeEmbed embedId={this.state.video} />
                  <div className="video-responsive">
                    <iframe
                      width="853"
                      height="480"
                      src={this.state.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cast</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Movie;
