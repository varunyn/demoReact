import React from 'react';
import Header from 'components/ui/Header/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';


const images = [
  {
    thumbnail: `${PREFIX_URL}4v.jpg`,
    original: `${PREFIX_URL}4v.jpg`,
    description: 'Render custom slides within the gallery'
  },
  {
    original: `${PREFIX_URL}image_set_default.jpg`,
    thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
  },
  {
    original: `${PREFIX_URL}1.jpg`,
    thumbnail: `${PREFIX_URL}1t.jpg`,
    description: 'Custom class for slides & thumbnails'
  },
]

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      {/* <Images></Images> */}
      
      <Carousel showThumbs= {false} showIndicators ={false} swipeable={true}>
                <div>
                    <img src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/image_set_default.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      </div>
    </div>
  );
}
