import React from 'react';
import UiPath from './assets/images/landing_logos/UiPath.png';
import AW from './assets/images/landing_logos/AW.png';
import CurateMobile from './assets/images/landing_logos/Curate-Mobile.png';
import Ellevest from './assets/images/landing_logos/Ellevest-Logo.png';
import Knaq from './assets/images/landing_logos/Knaq-Logo.png';
import Otherland from './assets/images/landing_logos/Otherland.png';
import PreferredReturn from './assets/images/landing_logos/Preferred-Return.png';
import ProDeal from './assets/images/landing_logos/ProDeal.png';
import Rhino from './assets/images/landing_logos/Rhino.png';
import StoryVentures from './assets/images/landing_logos/Story-Ventures.png';
import './assets/app.scss';
import './Landing.scss';

function Landing() {
  const logos = [
    {
      "size" : "MD",
      "alt" : "AW",
      "src": AW
    },
    {
      "size" : "RG",
      "alt" : "Ellevest",
      "src": Ellevest
    },
    {
      "size" : "MD",
      "alt" : "UiPath",
      "src": UiPath
    },
    {
      "size" : "RG",
      "alt" : "Otherland",
      "src": Otherland
    },
    {
      "size" : "RG",
      "alt" : "Curate Mobile",
      "src": CurateMobile
    },
    {
      "size" : "MD",
      "alt" : "Knaq",
      "src": Knaq
    },
    {
      "size" : "MD",
      "alt" : "Rhino",
      "src": Rhino
    },
    {
      "size" : "SM",
      "alt" : "Story Ventures",
      "src": StoryVentures
    },
    {
      "size" : "RG",
      "alt" : "Preferred Return",
      "src": PreferredReturn
    },
    {
      "size" : "RG",
      "alt" : "ProDeal",
      "src": ProDeal
    }
  ];

  const renderLogos = () => {
    const logo = logos.map((logo, i) => {
      return (
        <div className="Landing__Company-Logo-Container" key={i}>
          <img src={logo.src} alt={logo.alt} className={`Landing__Company-Logo Landing__Company-Logo--${logo.size}`}/>
        </div>
      )
    })
    return logo;
  }
  return (
    <div className="Landing">
      <div className="Landing__Header">
        <h1>Hello, I’m Connor.</h1>
        <h3>I'm an engineer with a goal of bringing design and engineering closer together. I believe doing so makes digital experiences better, and I love doing work that allows me to prove why.</h3>
      </div>
      <div className="Landing__Dots-Container">
        <div className="Landing__Dot Landing__Dot--Red"></div>
        <div className="Landing__Dot Landing__Dot--Blue"></div>
        <div className="Landing__Dot Landing__Dot--Yellow"></div>
      </div>
      <div className="Landing__Header-Companies">
        <p className="Landing__Header-Companies-Heading">Here are some of the companies I’ve worked with:</p>
        <div className="Landing__Header-Company-Logos">
          {renderLogos()}
        </div>
      </div>
      <div className="Landing__Questions-Container">
        <h2 className="Landing__Questions-Heading">I've come across some common questions about my work that I figured I'd answer here.</h2>
        <div className="Landing__Dots-Container">
          <div className="Landing__Dot Landing__Dot--Red"></div>
          <div className="Landing__Dot Landing__Dot--Blue"></div>
          <div className="Landing__Dot Landing__Dot--Yellow"></div>
        </div>
        <div className="Landing__Question">
          <h3 className="Bold">How long have you been doing this for?</h3>
          <p>I’ve been working as a Software Engineer focusing on front end work for about 5 years.</p>
        </div>
        <div className="Landing__Question">
          <h3 className="Bold">What types of teams have you worked on?</h3>
          <p>Right now, I work on a subset of a large engineering team. In the past I've worked for small teams too, as well as on my own in self-employment work.</p>
        </div>
        <div className="Landing__Question">
          <h3 className="Bold">Why bring design and engineering together?</h3>
          <p>I think there's an issue where design and engineering are isolated from each other within an organization, but their work still depends on one another. I think digital experiences can be designed beautifully, but they’ll ultimately fall short if their implementation isn’t executed mindfully of design. What I’ve found is that more collaboration between design and engineering mitigates this issue, and enables a product to perform better.</p>
        </div>
        <div className="Landing__Question">
          <h3 className="Bold">What kinds of things are you working on?</h3>
          <p>Most recently, I've been implementing and maintaining a component library, as well as working with designers to improve the handoff process with developers. I work for a company with a lot of different products, so my goal is to make it easy for designers and engineers to grow those products in a way reflects the brand properly and consistently.</p>
        </div>
        <div className="Landing__Question">
          <h3 className="Bold">How did you get involved in both design and engineering?</h3>
          <p>I owe my exposure to both fields to my self-employment work. Throughout my  career as an engineer, I've gotten to take on supplementary work doing both design and engineering for new web products. Doing so allowed me to see how a connected design/development process could benefit the product as well as those designing/building it.</p>
        </div>
      </div>
      <div className="Landing__End">
        <div className="Landing__End--Inner">
          <h2 className="White">
            I currently work as a Front End Engineer for UiPath.
          </h2>
          <h2 className="White">
            I also do work on my own for design-minded businesses.
          </h2>
          <h4 className="White">
            If you’re interested in working together, feel free to <a href="mailto:connor.rowland34@gmail.com" className="Dark-Mode">reach out</a>.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Landing;
