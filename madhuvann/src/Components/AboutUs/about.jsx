import React from "react";
import "./aboutUs.css";
import BIRD from "../Assets/birda.png";
// import EARTH from "../Assets/eartha.png";
import HOLO from "../Assets/holoa.png";
import MADH from "../Assets/madha.png";
import Eartha from "../Assets/eartha.png";
import Navbar from "../homepage/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="desktop">
        <div className="overlap-group">
          <p className="welcome-to-madhuvann">
            <text class="welcome ">Welcome to MadhuVann,</text> where innovation
            meets conservation in a groundbreaking exploration of the natural
            world. Our virtual zoo leverages cutting-edge holographic technology
            to transport you into an immersive and educational experience like
            no other. Here&#39;s a glimpse into who we are:
          </p>
          <div className="text-wrapper-1">
            <div className="mission">
              <h1 class="headAbout">Our Mission</h1>
              <div className="ourmission">
                <p className="text-wrapper">
                  At MadhuVann, our mission is to bridge the gap between
                  technology and wildlife conservation. We believe that by
                  combining state-of-the-art holographic displays with in-depth
                  information about endangered, extinct, and vulnerable species,
                  we can inspire a new era of understanding and appreciation for
                  the diverse life forms that share our planet.
                </p>
                <img
                  className="gsu-wildlife-center"
                  alt="Gsu wildlife center"
                  src={MADH}
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-2">
            <h1 class="headAbout">The Holographic Experience</h1>
            <div className="holo">
              <div class="textholo">
                <img
                  className="environment-earth"
                  alt="Environment earth"
                  src={HOLO}
                />
                <p className="text">
                  Step into a realm where reality and technology converge. Our
                  holographic exhibits provide an unprecedented opportunity to
                  witness majestic creatures in their natural habitats. From the
                  powerful movements of endangered big cats to the delicate
                  flutters of butterflies on the brink of extinction, every
                  holographic encounter is designed to leave you in awe of the
                  beauty and diversity of the animal and plant kingdom.
                </p>
              </div>
            </div>
          </div>
          <h1 class="headAbout">Imapct of our website</h1>
          <div className="text-wrapper-3">
            <img className="output" alt="Output" src={BIRD} />
            <p>
              MadhuVann is committed to making a positive impact on the world.
              We actively support and collaborate with global conservation
              organizations to fund projects aimed at protecting endangered
              species, restoring habitats, and raising awareness about the
              importance of biodiversity.
            </p>
          </div>
          <div className="text-wrapper-4">
            <p className="textzoo">
              <span className="span">
                Our virtual zoo isn&#39;t just about entertainment; it&#39;s
                about education. Explore our educational videos designed for all
                ages, providing in-depth information about wildlife
                conservation, ecology, and the role each individual can play in
                preserving our planet.
                <br />
              </span>
            </p>
          </div>
          <div className="text-wrapper-5">
            <p className="text">
              <span className="span">
                Join us on a journey of discovery and enlightenment at
                MadhuVann. Together, let&#39;s celebrate the wonders of the
                natural world and work towards a future where every species can
                thrive.
              </span>
            </p>
            <img className="element" alt="Element" src={Eartha} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
