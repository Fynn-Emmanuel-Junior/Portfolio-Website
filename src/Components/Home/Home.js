import Logo from "./Logo";
import Navbar from "./Navbar";
import About  from "../About/About";
import Services from "../Services/Services";
import {FaCheck,FaClipBoardList} from "react-icons";
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
                <div className="header-text" style={{position: 'relative', fontSize: '70px', textAlign: 'center'}}>
                  <p>I am Morgan Freeman</p>
                  <p className="text" style={{fontSize: '50px', marginTop: '10px', borderRight: '2px solid #fff'}}>Freelancer</p>
                </div>
            </div>
          <About />
          <Services />
          <div className="main-1" style={{width: '100%', height: '350px'}}>
            <div className="overlay-1">
            </div>
            <div className="section-icons">

            </div>
          </div>
        </div>
    )
}