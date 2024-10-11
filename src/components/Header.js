import ParticlesBg from "particles-bg";
import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">
            Show Navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide Navigation">
            Hide Navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li className="current">
              <a className="smoothscroll" href="#home">
                About
              </a>
            </li>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Resume
              </a>
            </li>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade botton>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade botton duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <Fade botton duration={2000}>
              <ul className="social">
                <a href={linkedin} className="button btn project-btn">
                  <i className="fa fa-book"></i>Linkedin
                </a>
                <a href={github} className="button btn project-btn">
                  <i className="fa fa-book"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
