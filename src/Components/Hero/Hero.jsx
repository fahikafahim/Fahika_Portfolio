import React from "react";
import "./../Hero/Hero.css";

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
          <img src="./assets/R.png" alt="React Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon2" }}>
          <img src="./assets/python.png" alt="Python Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon3" }}>
          <img src="./assets/html.png" alt="HTML Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon4" }}>
          <img src="./assets/css.png" alt="CSS Logo" />
        </div>
        <img className="hero-img" src="./assets/img3.jpeg" alt="Main Hero Image" />
        <div className="tech-icon" style={{ gridArea: "icon5" }}>
          <img src="./assets/js.webp" alt="JavaScript Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon6" }}>
          <img src="./assets/c.png" alt="C# Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon7" }}>
          <img src="./assets/alpine.png" alt="Alpine Logo" />
        </div>
        <div className="tech-icon" style={{ gridArea: "icon8" }}>
          <img src="./assets/git.jpeg" alt="Git Logo" />
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
