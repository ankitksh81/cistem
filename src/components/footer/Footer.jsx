import React,{ Component} from 'react';
import git from './Github.png';
import "./Footer.css";

function Footer(){
      return (
          <div>
              <div className="Footer">
                  <a href="https://www.freepik.com/vectors/law" id="Attribution">Illustration credits: Freepik.com</a>
                  <a href="https://github.com/sharananurag998/cistem" id="gitLink"><img src={git} id="gitIcon"/></a>
              </div>
          </div>
      );
}
export default Footer;