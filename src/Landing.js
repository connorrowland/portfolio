import React from "react";

import LandingIllustration from "./assets/images/Connor-Rowland-Illustration.png";
import HeadlessCMSIllustration from "./assets/images/Modular-CMS.png";
import DesignSystemsIllustration from "./assets/images/Design-Systems.png";
import DigitalProductsIllustration from "./assets/images/Digital-Products.png";
import "./assets/app.scss";
import "./Landing.scss";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing__Header">
        <div className="Landing__Header-Text">
          <p>Connor Rowland</p>
          <h1 className="Landing__Header-Main-Text">
            I’m an engineer who cares deeply about design
          </h1>
          <p>
            I combine a background in technology with expertise in design to
            modernize products aesthetically and functionally.
          </p>
        </div>
        <img
          className="Landing__Header-Illo"
          alt="Connor Rowland Illustration"
          src={LandingIllustration}
        />
      </div>
      <div className="Landing__Header-About">
        <h2 className="Landing__Header-About-Heading">
          I’ve worked for companies that are revolutionizing the way people
          work, creating holistic digital products for start-ups, and fighting
          the gender wealth gap.
        </h2>

        <h2 className="Landing__Header-About-Heading">
          I’ve found that applying a design-focused mindset to engineering for
          these businesses has greatly improved collaboration, work efficiency,
          and end user experiences.
        </h2>
      </div>
      <div className="Landing__Use-Cases">
        <h2 className="Landing__Use-Case-Heading">
          These are specific areas I focus on where I've found my approach to
          engineering has excelled the most
        </h2>
        <div className="Landing__Use-Case">
          <div className="Landing__Use-Case-Illo-Container">
            <img
              className="Landing__Use-Case-Illo"
              alt="Modular CMS"
              src={HeadlessCMSIllustration}
            />
          </div>
          <div className="Landing__Use-Case-Text-Container">
            <h3 className="Landing__Use-Case-Title">
              Modular websites powered by a headless CMS
            </h3>
            <p className="Landing__Use-Case-Subtitle">
              I help SaaS companies scale up their websites to be resuable in
              code, design, and content, helping them stay in line with their
              expanding workforce and customer base.
            </p>
          </div>
        </div>
        <div className="Landing__Use-Case">
          <div className="Landing__Use-Case-Illo-Container">
            <img
              className="Landing__Use-Case-Illo"
              alt="Digital Products"
              src={DigitalProductsIllustration}
            />
          </div>
          <div className="Landing__Use-Case-Text-Container">
            <h3 className="Landing__Use-Case-Title">
              Digital products that people love to use
            </h3>
            <p className="Landing__Use-Case-Subtitle">
              I actively contribute to the architecting, research, and
              implementation of human-centric digital experiences.
            </p>
          </div>
        </div>
        <div className="Landing__Use-Case">
          <div className="Landing__Use-Case-Illo-Container">
            <img
              className="Landing__Use-Case-Illo"
              alt="Design Systems"
              src={DesignSystemsIllustration}
            />
          </div>
          <div className="Landing__Use-Case-Text-Container">
            <h3 className="Landing__Use-Case-Title">
              Design systems that scale gracefully
            </h3>
            <p className="Landing__Use-Case-Subtitle">
              Through a refined three-step process for architecting,
              implementing, and socializing design systems, I help enterprise
              teams create efficient ways of building user interfaces.
            </p>
          </div>
        </div>
      </div>
      <div className="Landing__Header-About Landing__Header-About-Questions">
        <h2 className="Landing__Questions-Heading">
          Have any questions?
          <br /> These are some common ones I hear
        </h2>
        <div className="Landing__Question">
          <h3>What types of companies have you worked for?</h3>
          <p>
            I currently work for a large, enterprise software company called
            UiPath. I also have experience working on smaller teams for a
            robo-investor, Ellevest, as well as digital agency, Alden Wolf.
          </p>
        </div>
        <div className="Landing__Question">
          <h3>How long have you been doing this type of work?</h3>
          <p>
            I’ve been working for {new Date().getFullYear() - 2015} years as a
            Software Engineer focusing on front end work.
          </p>
        </div>

        <div className="Landing__Question">
          <h3>Why bring design and engineering together?</h3>
          <p>
            I believe that fostering empathy between design and engineering
            leads to better products. I empathize with design's mission to
            create consistent, usable solutions that improve people's lives. I
            also see the value of cultivating engineering efficiencies. I think
            bridging these two goals together creates a more harmonious team
            experience and end product.
          </p>
        </div>
      </div>
      <div className="Landing__End">
        <div className="Landing__End--Inner">
          <h2>
            Thanks for stopping by. If you’re interested in talking more, feel
            free to{" "}
            <a href="mailto:connor.rowland34@gmail.com">
              reach out to me and say hi
            </a>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
