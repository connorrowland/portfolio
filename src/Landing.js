import React from 'react';
import UiPath from './assets/images/landing_logos/UiPath.png';
import AW from './assets/images/landing_logos/AW.png';
import CurateMobile from './assets/images/landing_logos/Curate-Mobile.png';
import Ellevest from './assets/images/landing_logos/Ellevest.png';
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
        <h1>Hello, I’m Connor Rowland.</h1>
        <h1 className="Bold">I’m a Front End Software Engineer.</h1>
        <p>I believe in connecting design and engineering together to create rich, on-brand digital experiences.</p>
      </div>

      <div className="Landing__For-Who">
        <div className="Landing__For-Engineers">
          <div className="Landing__For-Who-Inner">
            <div className="Landing__For-Who-Text">
              <h2 className="Bold">For engineers</h2>
              <p>I undertand your need for reusability and efficiency. I build tools to foster both of those things, creating things like component libraries, style guides you can install easily, and hand off processes that create less assumptions.</p>
            </div>
          </div>
        </div>
        <div className="Landing__For-Designers">
          <div className="Landing__For-Who-Inner">
            <div className="Landing__For-Who-Text">
              <h2 className="Bold">For designers</h2>
              <p>I partner with you to help define more efficient solutions, validate your interfaces, and implement your design systems to help you deliver powerful experiences. I empathize with your vision to create experiences that are consistent, simple, and beautiful.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Landing__Right-Now">
        <div className="Landing__Right-Now-Inner">
          <h1>Right now, I work for <span className="Bold">UiPath</span>, where I work closely with product and marketing to ensure we apply our brand consistently across our suite of products</h1>
        </div>
      </div>

      <div className="Landing__Header-Companies">
        <p className="Landing__Header-Companies-Heading">Here are some of the companies I've worked with</p>
        <div className="Landing__Header-Company-Logos">
          {renderLogos()}
        </div>
      </div>

      <div className="Landing__Questions-Container">
        <h1 className="Landing__Questions-Heading">These are some common questions about my work that I’ve come across:</h1>
        <div className="Landing__Question">
          <h2 className="Bold">How long have you been doing this for?</h2>
          <p>I’ve been working as a Software Engineer focusing on front end work for about 5 years.</p>
        </div>
        <div className="Landing__Question">
          <h2 className="Bold">What types of teams have you worked on?</h2>
          <p>Right now, I work on a subset of a large engineering team. In the past I've worked for small teams too, as well as on my own in self-employment work.</p>
        </div>
        <div className="Landing__Question">
          <h2 className="Bold">Why bring design and engineering together?</h2>
          <p>I think there's an issue where design and engineering are isolated from each other within an organization, but their work still depends on one another. I think digital experiences can be designed beautifully, but they’ll ultimately fall short if their implementation isn’t executed mindfully of design. What I’ve found is that more collaboration between design and engineering mitigates this issue, and enables a product to perform better.</p>
        </div>
        <div className="Landing__Question">
          <h2 className="Bold">How did you get involved in both design and engineering?</h2>
          <p>I owe my exposure to both fields to my self-employment work. Throughout my  career as an engineer, I've gotten to take on supplementary work doing both design and engineering for new web products. Doing so allowed me to see how a connected design/development process could benefit the product as well as those designing/building it.</p>
        </div>
      </div>
      <div className="Landing__End">
        <div className="Landing__End--Inner">
          <h1 className="White">
            If you’d like to get in touch,<br/> feel free to <a href="mailto:connor.rowland34@gmail.com" className="Dark-Mode">email me</a>.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
