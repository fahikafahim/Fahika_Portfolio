import React from "react";
import "./../Hero/Hero.css";

// Importing images
import ReactLogo from "./../../assets/R.png";
import PythonLogo from "./../../assets/python.png";
import HTMLLogo from "./../../assets/html.png";
import CSSLogo from "./../../assets/css.png";
import HeroImage from "./../../assets/img3.jpeg";
import JSLogo from "./../../assets/js.webp";
import CSharpLogo from "./../../assets/c.png";
import AlpineLogo from "./../../assets/alpine.png";
import GitLogo from "./../../assets/git.jpeg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Crafting Digital Experiences That Captivate</h2>
        <p>
          Dedicated Frontend Developer | Bringing Ideas to Life with Intuitive
          and Visually Striking Web Solutions
        </p>
      </div>
      <div className="hero-img-container">
        <div className="tech-icon" style={{ gridArea: "icon1" }}>
          <img src={ReactLogo} alt="React Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon2" }}>
          <img src={PythonLogo} alt="Python Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon3" }}>
          <img src={HTMLLogo} alt="HTML Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon4" }}>
          <img src={CSSLogo} alt="CSS Logo" />
        </div>
        <img className="hero-img" src={HeroImage} alt="Main Hero Image" />
        <div className="tech-icon" style={{ gridArea: "icon5" }}>
          <img src={JSLogo} alt="JavaScript Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon6" }}>
          <img src={CSharpLogo} alt="C# Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon7" }}>
          <img src={AlpineLogo} alt="Alpine Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon8" }}>
          <img src={GitLogo} alt="Git Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;















// import React from "react";
// import "./../Hero/Hero.css";
// const Hero = () => {
//   return (
//     <section className="hero-container">
//       <div className="content">
//         <h2>Crafting Digital Experiences That Captivate</h2>
//         <p>
//           Dedicated Frontend Developer | Bringing Ideas to Life with Intuitive
//           and Visually Striking Web Solutions
//         </p>
//       </div>
//       <div className="hero-img">
//         <div className="tech-icon">
//           <img src="./../assets/R.png" alt="" />
//         </div>
//         <div className="tech-icon">
//           <img src="./../assets/python.png" alt="" />
//         </div>
       
//         <img src="./../assets/img02.png" alt="" />
        
//         <div className="tech-icon">
//           <img src="./../assets/html.png" alt="" />
//         </div>
//         <div className="tech-icon">
//           <img src="./../assets/css.png" alt="" />
//         </div>
//         <div className="tech-icon">
//           <img src="./../assets/js.webp" alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
