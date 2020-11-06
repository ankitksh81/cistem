import React,{ Component} from 'react';
import illustraton from './illus.jpg';
import "./Homepage.css";
function Homepage(){
      return (
          <div>
              <section>
                <div className="gridHolder">
                    <div className="home">         
                        <div id="hometext"> 
                            <h2>CISTEM</h2>
                            <p>A Certificate issuing and storing system.</p><br/>
                            <a href="#" id="getStarted">Get started</a>
                        </div>
                        <div><img id="pic" src={illustraton} alt=""/></div>
                    </div>
                </div>
            </section>
          </div>
      );
}
export default Homepage;