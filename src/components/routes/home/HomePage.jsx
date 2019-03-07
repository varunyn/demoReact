import React from 'react';
import Header from 'components/ui/Header/Header';
// import '../home/carousel.min.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import style from './style.scss';

import slide from '../../../assets/images/architecture/01.png';
import arch1 from '../../../assets/images/architecture/02.png';

const jsonFile1 = require('../../../assets/JSON/microservices-devops.json');
// const images = [
//   {
//     thumbnail: `${PREFIX_URL}4v.jpg`,
//     original: `${PREFIX_URL}4v.jpg`,
//     description: 'Render custom slides within the gallery',
//   },
//   {
//     original: `${PREFIX_URL}image_set_default.jpg`,
//     thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
//   },
//   {
//     original: `${PREFIX_URL}1.jpg`,
//     thumbnail: `${PREFIX_URL}1t.jpg`,
//     description: 'Custom class for slides & thumbnails',
//   },
// ];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "Section": "Intro",
    "Title": "",
    "SubTitle": "",
    "Text": "This workshop will walk you through the Software Development Lifecycle (SDLC) for a Cloud Native project that will create and use several Microservices. Throughout our journey, we will assume roles inside a fictitious company called Alpha Office and perform the actions of each persona as we progress through the DevOps lifecycle.",
    "Image": "01.png",
    "Link": "https://oracle.github.io/learning-library/workshops/microservices-devops/",
    "Video": "",
    "Poster": ""
    };
  }

  getData() {
    var jsonData = [];

    // console.log(jsonFile.default)
    fetch(jsonFile1)
      .then(data => data.json())
      .then(data => {
        // data.workshop_content.map((slide, _id) => {

        //     Section: {slide.Section}
        //     Title: {slide.Title}
        //     SubTitle: {slide.SubTitle}
        //     Text: {slide.Text}
        //     Image:{slide.Image}
        //     Link: {slide.Link}
        //     Video:{slide.Video}
        //     Poster:{slide.Poster}
        //   });
          jsonData = data.workshop_content.slice(0);
          console.log(jsonData)
          this.buildContent(jsonData)
        });
  }
  buildContent(data) {
    
  }
  render() {

  return (
    <div className={style.bodyHeight}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.carousel}>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          swipeable={true}
          dynamicHeight={false}
          showStatus={false}
          useKeyboardArrows={true}
        >
          <div className={style.body}>
            <img src={slide} className={style.imgCenter} />
            <p className="legend">Legend 1</p>
          </div>
          <div className={style.body}>
            <img src={arch1} className={style.imgCenter} />
            <p className="legend">Legend 1</p>
          </div>
          <div className={style.body}>
            <img src={slide} />
            <p className="legend">Legend 1</p>
          </div>
          {/* <div>
                <img src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/image_set_default.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg" />
                    <p className="legend">Legend 3</p>
                </div> */}
        </Carousel>
        {this.getData()}
      </div>
    </div>
  );
  }
}

// export default function HomePage() {
// }
