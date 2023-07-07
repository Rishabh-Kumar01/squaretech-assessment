import React from "react";
import "../styles/about.css";
import img2 from "../../Assets/images/images_about/2.png";
import img3 from "../../Assets/images/images_about/3.png";
import img5 from "../../Assets/images/images_about/5.png";
import img6 from "../../Assets/images/images_about/6.png";
import img7 from "../../Assets/images/images_about/7.png";
import img8 from "../../Assets/images/images_about/8.png";
import img9 from "../../Assets/images/images_about/9.png";
import img10 from "../../Assets/images/images_about/10.png";
import img11 from "../../Assets/images/images_about/11.png";
import img12 from "../../Assets/images/images_about/12.png";
import img13 from "../../Assets/images/images_about/13.png";
import img14 from "../../Assets/images/images_about/14.png";
import img15 from "../../Assets/images/images_about/15.png";
import img16 from "../../Assets/images/images_about/16.png";
import img17 from "../../Assets/images/images_about/17.png";
import img18 from "../../Assets/images/images_about/18.png";
import img19 from "../../Assets/images/images_about/19.png";
import img20 from "../../Assets/images/images_about/20.png";
import Footer from "./footer";
import Navbar from "./navbar";
import Image from "next/image";

const About = () => {
  const coreValueCards = [
    {
      heading: "A more sustainable world for all ",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img6,
    },
    {
      heading: "Responsible company",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img12,
    },
    {
      heading: "Next-Generation service",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img13,
    },
    {
      heading: "Skill to succeed",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img14,
    },
    {
      heading: "Develop access of knowledge",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img15,
    },
    {
      heading: "Tech for good",
      body: "Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut alias.",
      img: img16,
    },
  ];
  const caseStudyCards = [
    {
      category: "HIGH TECH",
      img: img2,
    },
    {
      category: "SOFTWARE",
      img: img7,
    },
    {
      category: "SUSTAINABILITY",
      img: img8,
    },
  ];
  const aboutUsCards = [
    {
      heading: "OUR HISTORY",
    },
    {
      heading: "OUR STORY",
    },
    {
      heading: "OUR MANAGEMENT",
    },
    {
      heading: "OUR RESPONSIBILITY",
    },
  ];
  const standForCards = [
    {
      heading: "MISSION",
      img: img17,
    },
    {
      heading: "ETHICS",
      img: img18,
    },
    {
      heading: "DIVERSITY",
      img: img19,
    },
    {
      heading: "INCLUSION",
      img: img20,
    },
  ];
  const peopleCards = [
    {
      name: "Max",
      img: img3,
    },
    {
      name: "John",
      img: img9,
    },
    {
      name: "Marry",
      img: img10,
    },
    {
      name: "Marry",
      img: img11,
    },
  ];
  return (
    <div className="About">
      <Navbar />
      <div className="Home">
        <h1>About SquareTech</h1>
        <p>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita. Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita ut
          accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor
          sit amet. Quo itaque galisum vel molestias expedita.
        </p>
      </div>
      <div className="coreValue">
        <h1>Core Value of SquareTech</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="cardsection">
          {coreValueCards.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <Image
                    src={data.img}
                    width="100%"
                    height="100%"
                    alt={data.heading}
                  />
                </div>
                <div className="card-content">
                  <h5>{data.heading}</h5>
                  <br />
                  <br />
                  <p>{data.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="purposes">
        <h1>OUR PURPOSE</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="container">
          <div className="content">
            <h1>Building great futures</h1>
            <p>
              Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
              expedita ut accusantium omnis qui expedita vitae aut quibusdam
              Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
              expedita Lorem ipsum dolor sit amet. Quo itaque galisum vel
              molestias expedita ut accusantium omnis qui expedita vitae aut
              quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel
              molestias expedita
            </p>
            <div className="btn">Read More</div>
          </div>
          <div className="imgBox">
            <Image src={img5} width="100%" height="100%" alt="shot" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="caseStudy">
        <h1>CASE STUDIES</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="cardsection">
          {caseStudyCards.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <Image
                    src={data.img}
                    width="100%"
                    height="100%"
                    alt={data.heading}
                  />
                </div>
                <div className="card-content">
                  <h6>{data.category}</h6>
                  <h3>Lorem ipsum dolor sit</h3>
                  <a href="#">Read Case Study &gt; </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="aboutUs">
        <h1>Our purpose</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="cardsection">
          {aboutUsCards.map((data, index) => {
            return (
              <div className="card" key={index}>
                <h5>{data.heading}</h5>
                <p>
                  Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                  expedita ut accusantium omnis qui expedita vitae aut quibusdam
                  Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                  expedita
                </p>
                <div className="btn">Read More</div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="standFor">
        <h1>WHAT WE STAND FOR</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="cardsection">
          {aboutUsCards.map((data, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <Image
                    src={data.img}
                    width="100%"
                    height="100%"
                    alt={data.heading}
                  />
                </div>
                <div className="card-content">
                  <h5>{data.heading}</h5>
                  <p>
                    Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit
                    amet Aut alias.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="peoples">
        <h1>OUR PEOPLES</h1>
        <h5>
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </h5>
        <div className="container1">
          <h1>
            "We believe our people make the difference. we nurture their
            development,providing opportunities for learning and mutual growth."
          </h1>
          <div className="cardsection">
            {peopleCards.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <Image
                      src={data.img}
                      width="100%"
                      height="100%"
                      alt={data.heading}
                    />
                  </div>
                  <div className="card-content">
                    <h6>
                      "Lorem ipsum dolor sit amet. Quo itaque galisum vel
                      molestias expedita ut"
                    </h6>
                    <h5>-{data.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container2">
          <h1>join with us</h1>
          <p>
            "Your career is about what you want to be and who you want to be.
            It's about bringing your skills,your curiosity and your best true
            self to your work."
          </p>
          <div className="btn">Connect with us</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
