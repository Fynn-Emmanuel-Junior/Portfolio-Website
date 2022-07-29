import Logo from "./Logo";
import Navbar from "./Navbar";
import About  from "../About/About";
import Services from "../Services/Services";
import Portfolio from '../Portfolio/Portfolio';
import { FaCheck,FaClipboardList,FaUserFriends,FaAward } from "react-icons/fa";
export default function Home() {
    return (
        <div style={{width:'100%',height:'700px', position: 'relative'}}>

            <div className='Header' style={{width: '100%', height: '100%', position: 'relative'}}>
                <div className="overlay">
                </div>

                <div className="header-container" style={{width: '80%', display: 'flex', justifyContent: 'space-between', margin: 'auto',position: 'relative', top: '20px'}}>
                <Logo />
                <Navbar /> 
                </div>

                <div className="header-text">
                  <p>I am Morgan Freeman</p>
                  <p className="text">Freelancer</p>
                </div>
            </div>

          <About />
          <Services />

          <div className="main-1">
            <div className="overlay-1">
            </div>
            <div className="section-icons">
              <div style={{display: 'flex',justifyContent: 'space-evenly', width: '100%'}}>
                <div className="icon-container">
                  <FaCheck  className="icon" />
                  <div className="icons">
                    <h3 className="heading">450</h3>
                    <p>WORKS COMPLETED</p>
                  </div>
                </div> 
                <div className="icon-container">
                  <FaClipboardList  className="icon"/>
                  <div className="icons">
                    <h3 className="heading">25</h3>
                    <p>YEARS OF EXPERINECE</p>
                  </div>
                </div>
                <div className="icon-container">
                  <FaUserFriends className="icon"/>
                  <div className="icons">
                    <h3 className="heading">550</h3>
                    <p>TOTAL CLIENTS</p>
                  </div>
                </div> 
                <div className="icon-container">
                  <FaAward className="icon"/>
                  <div className="icons">
                    <h3 className="heading">48</h3>
                    <p>AWARD WON</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Portfolio />

        </div>
    )
}