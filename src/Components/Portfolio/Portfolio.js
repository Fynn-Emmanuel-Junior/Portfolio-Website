import Image1 from './assets/img/portfolio-details-1.jpg';
import Image2 from './assets/img/portfolio-details-2.jpg'; 
import Image3 from './assets/img/portfolio-details-3.jpg';
import { HiOutlinePlus } from "react-icons/hi";

export default function Services() {
    return (
        <div className="MainContainer" style={{width: '100%',height: '500px',position: 'relative',marginTop: '120px'}}>
            <div style={{textAlign: 'center'}}>
                <h2 style={{fontSize: '50px'}}>Portfolio</h2> 
                <p></p>
            </div>
            <div style={{width: "100%",position: 'relative'}}>
                <div className="sections-1" >
                    <div className="side" >
                      <div style={{overflow: 'hidden'}}>
                        <img src={Image1} alt={prop.img1}/>
                      </div>
                      <div style={{ width: '100%'}}>
                        <div style={{width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between',alignItems: 'center', marginTop: '20px'}}>
                            <div>
                            <p style={{marginBottom: '10px', textAlign: 'justify'}}>Lorem impsum dolor </p>
                            <p > Web Design / 18 Sep. 2018 </p>
                            </div>
                            <HiOutlinePlus style={{fontSize: '30px', color: 'blue', border: '1px solid blue', borderRadius: '50%', textAlign: 'center'}} />
                        </div>
                         
                      </div>
                    </div>
                    <div className="side" >
                        <div style={{overflow: 'hidden'}}>
                            <img src={Image2} alt={prop.img2}/>
                        </div>
                        <div style={{width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between',alignItems: 'center', marginTop: '20px'}}>
                            <div>
                            <p style={{marginBottom: '10px', textAlign: 'justify'}}>Lorem impsum dolor </p>
                            <p > Web Design / 18 Sep. 2018 </p>
                            </div>
                            <HiOutlinePlus style={{fontSize: '30px', color: 'blue', border: '1px solid blue', borderRadius: '50%', textAlign: 'center'}} />
                        </div>
                    </div>
                    <div className="side">
                        <div style={{overflow: 'hidden'}}>
                            <img src={Image3} alt={prop.img3}/>
                        </div>
                        <div style={{width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between',alignItems: 'center', marginTop: '20px'}}>
                            <div>
                            <p style={{marginBottom: '10px', textAlign: 'justify'}}>Lorem impsum dolor </p>
                            <p > Web Design / 18 Sep. 2018 </p>
                            </div>
                            <HiOutlinePlus style={{fontSize: '30px', color: 'blue', border: '1px solid blue', borderRadius: '50%', textAlign: 'center'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const prop = {
    img1: 'porfolio image 1',
    img2: 'porfolio image 2',
    img3: 'portfolio image 3'
}