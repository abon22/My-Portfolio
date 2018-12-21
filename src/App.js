import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WOW from 'wowjs';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {

  componentDidMount() {
    new WOW.WOW().init();

    (function () {
      var posY;
      var image = document.getElementById('parallax');;
      function paralax() {
        posY = window.pageYOffset;
        image.style.top = posY * 0.9 + 'px';
      }
      window.addEventListener('scroll', paralax);
    })();
  }

  render() {
    return (
      <div>

        <header className="clearfix" id="home">
          <nav className="navbar navbar-default navbar-fixed-top" id="nav">
            <div className="container">
              <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav social-list">
                  <li><a href="https://github.com/akholod" target="_blank"><i className="fa fa-github fa-2x" title="GitHub" aria-hidden="true"></i>
                  </a></li>
                  <li><a href="https://codepen.io/akholod/#" target="_blank"><i className="fa fa-codepen fa-2x" title="Code Pen" aria-hidden="true"></i>
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/andrey-kokhanevich-800814b5" target="_blank"><i className="fa fa-linkedin fa-2x" title="LinkedIn" aria-hidden="true"></i>
                  </a></li>
                  <li><a href="#fb"><i className="fa fa-facebook fa-2x" title="Facebook" aria-hidden="true"></i>
                  </a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li data-elem="parallax"><a href="#home">HOME</a></li>
                  <li data-elem="about"><a href="#about">ABOUT</a></li>
                  <li data-elem="works"><a href="#works">WORKS</a></li>
                  <li data-elem="skills"><a href="#skills">SKILLS</a></li>
                  <li data-elem="contacts"><a href="#contacts">CONTACTS</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="banner parallax scroll" id="parallax" >
            <div className="container">
              <div className="row">
                <div className="col-md-offset-4 col-md-8 col-sm-12  banner-content">
                  <h3>full stack web developer</h3>
                  <h1>
                    Personal portfolio webpage
                        </h1>
                  <h3>Lito B Abon Jr</h3>
                </div>
              </div>
              <div className="row">
                <img src="http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/scroll_zpsga4ggudw.png" alt="" className="image-responsive center-block scroll-down" />
              </div>
            </div>
          </div>

        </header>


        <section className="about scroll" id="about">
          <div className="container">
            <div className="row">
              <div className="text-center about-content">
                <h2>Hi there!</h2>
                <img src="/about_me_edited.JPG" alt="about me" className="image-responsive img-circle img-thumbnail center-block" />
                <p className="about-text">My name is Andrew, I am from Kharkiv, Ukraine. And I'm a beginner full stack web developer, currently I have some experience with HTML&Bootstrap, CSS&LESS, JS&Jquery, NodeJS&PHP. Now I practice in the development of web applications, and some frameworks like Angular, React etc. I want to learn more and utilize my skills in the field of Information Technology and to help solve real world challenges. I use: Git, Gulp, Bower, Npm, PhpStorm,Photoshop and Google).
                    </p>
              </div>
            </div>
          </div>
        </section>




        <section className="works scroll" id="works">
          <div className="container">
            <h2 className="text-center">
              Portfolio projects
              </h2>


            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <a href="https://codepen.io/akholod/full/GqWwPM/" target="_blank">
                  <div className="block wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.15s">
                    <div className="works-thumb" id="work-1"></div>
                    <div className="works-caption">FreeCodeCamp Twitch TV App</div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <a href="https://akholod.github.io/weather-app/" target="_blank">
                  <div className="block wow fadeInDown" data-wow-duration=".8s" data-wow-delay="0.3s">
                    <div className="works-thumb" id="work-2"></div>
                    <div className="works-caption">Watch local weather app</div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <a href="https://codepen.io/akholod/full/YqopEQ/" target="_blank">
                  <div className="block wow fadeInDown" data-wow-duration=".8s" data-wow-delay="0.45s">
                    <div className="works-thumb" id="work-3"></div>
                    <div className="works-caption">FreeCodeCamp tribute page</div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <a href="https://codepen.io/akholod/full/gMLpMw/" target="_blank">
                  <div className="block wow fadeInDown" data-wow-duration=".8s" data-wow-delay="0.6s">
                    <div className="works-thumb" id="work-4"></div>
                    <div className="works-caption">Wikipedia search app</div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <a href="https://codepen.io/akholod/full/ZOWQQj/" target="_blank">
                  <div className="block wow fadeInDown" data-wow-duration=".8s" data-wow-delay="0.75s">
                    <div className="works-thumb" id="work-5"></div>
                    <div className="works-caption">Random quote generator</div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="block wow fadeInDown" data-wow-duration=".8s" data-wow-delay="0.9s">
                  <div className="works-thumb" id="work-6"></div>
                  <a href="#">
                    <div className="works-caption">Photo blog</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills scroll" id="skills">
          <div className="container">
            <h2>Skills and proficiency</h2>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">

                <div className="skills-thumb wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0s">
                  <img src="http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/logo-JavaScript_zpsxsolx7zw.jpg" alt="Java Script logo" className="img-responsive img-thumbnail center-block" />
                  <h3>Thumbnail label</h3>
                  <p>.....</p>
                </div>

              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="skills-thumb wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <img src="http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/html5_zpsoeisyvyy.jpg" alt="HTML logo" className="img-responsive img-thumbnail center-block" />
                  <h3>Thumbnail label</h3>
                  <p>.....</p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="skills-thumb wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  <img src="http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/php_zpssuxxuxsb.jpg" alt="PHP logo" className="img-responsive img-thumbnail center-block" />
                  <h3>Thumbnail label</h3>
                  <p>.....</p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="skills-thumb wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.6s">
                  <img src="http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/gulpBowerNpm_zps6s6f6vyi.jpg" alt="Web tools logo" className="img-responsive img-thumbnail center-block" />
                  <h3>Thumbnail label</h3>
                  <p>.....</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="social-footer text-center scroll" id="contacts">
          <div className="container">
            <h2>Social links</h2>
            <ul className="social-list">
              <li><a href="https://github.com/akholod" target="_blank"><i className="fa fa-github fa-3x" title="GitHub" aria-hidden="true"></i>
              </a></li>
              <li><a href="https://codepen.io/akholod/#" target="_blank"><i className="fa fa-codepen fa-3x" title="Code Pen" aria-hidden="true"></i>
              </a></li>
              <li> <a href="https://www.linkedin.com/in/andrey-kokhanevich-800814b5" target="_blank"><i className="fa fa-linkedin fa-3x" title="LinkedIn" aria-hidden="true"></i>
              </a></li>
              <li> <a href="#fb"><i className="fa fa-facebook fa-3x" title="Facebook" aria-hidden="true"></i>
              </a></li>
            </ul>
          </div>
        </section>


        <footer>
          <div className="container">
            <h2 className="text-center">Get in touch</h2>
            <div className="row contact">
              <div className="col-md-6 text-right">
                <div className="contacts-data">
                  <h3>Ready to hire me?</h3>
                  <a href="#" className="btn btn-default transparent">Get in touch <i className="fa fa-arrow-right button-icon"></i></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contacts-data">
                  <i className="fa fa-paper-plane fa-2x"></i>
                  <span className="contact-text">andrey.kokhanevich@gmail.com</span>
                </div>
                <div className="contacts-data">
                  <i className="fa fa-phone fa-2x"></i>
                  <span className="contact-text">+380992404527</span>
                </div>
                <div className="contacts-data">
                  <i className="fa fa-skype fa-2x"></i>
                  <span className="contact-text">andrey.kokhanevich</span>
                </div>
              </div>
            </div>
            <p className="text-center">
              ALL RIGHTS RESERVED. 2016
            </p>
          </div>
        </footer>

      </div>


    );
  }
}

export default App;
