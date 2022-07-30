import { useState } from "react";
import image1 from '../../assets/img/testimonial-2.jpg';
import image2 from '../../assets/img/testimonial-4.jpg';

const Slider = () => { 
    const [images,setImages] = useState([
        {
          url : image1,
          id: 1},
        {
          url: image2,
         id: 2
        }
    ])
    return ( 
        <div className="main-1">
            <div className="overlay-1">
            </div>
            <div className="section-icons" style={{height: '500px'}}>
              <div style={{display: 'flex',justifyContent: 'space-evenly', width: '100%', height: '100%'}}>
                <div>
                  {
                    images.map((image) => {
                      return (
                         <div >
                            <div><img src={image.url}  alt={prop.altname} style={styleImage} /></div>
                            <div>
                              <h3>Xavi Alonso</h3>
                              <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                              <div style={{fontSize: '100px', borderRadius: '50%'}}>..</div>
                            </div>
                         </div> 
                      )
                    })
                  }
                </div>
              </div>
            </div>
        </div>
    );
}

export default Slider;

const prop = {
  altname : 'image'
}

const styleImage = {
  borderRadius : '50%',
  width: '150px',
  height: '150px'
}