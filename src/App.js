import './App.css';
import {Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import services from './resources/services.png'
import headshot from './resources/headshot.png'
import yelp from './resources/YelpLogoAugust2021.jpg'
import Figure from 'react-bootstrap/Figure'




import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width, height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



function App() {
    const { height, width } = useWindowDimensions();
    var mapWidth = 0;
    if (width <= 280){
        mapWidth = 280;
    }
    else {
        mapWidth = Math.min(600, width*0.75);
    }
    return (
    <div className="App">
        <div className='Head'>
            <header className="App-header">
                <div className='headerText'>
                    AVERAGE JOE AUTO REPAIR
                </div>
            </header>
            <div className='contact-info'>
                <Container fluid="md">
                    <Row xs={1} lg={2} xl={4}>
                        <Col className="contactInfoGrid">1001 W. Bradley Champaign IL, 61821</Col>
                        <Col className="contactInfoGrid">M-Th, 9-5:30, Friday 9-5</Col>
                        <Col className="contactInfoGrid">217-390-5900</Col>
                        <Col className="contactInfoGrid">info@averagejoeauto.com</Col>
                    </Row>
                </Container>
            </div>
        </div>
        <div className='Body'>
            <div className='bodycontent'>
            <Container fluid>
                <Row xs={1} md={2}>
                    <Col>
                        <div className='image-content'>
                        <Figure> 
                            <Figure.Image
                                alt="veryprofessionalheadshot"
                                src={headshot}/>
                            <Figure.Caption bsPrefix="figure-caption">Owner-Operator: "Joe"</Figure.Caption>
                        </Figure>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-content">
                        <Figure>
                            <Figure.Image
                                alt="servicesperformed"
                                src={services}/>
                        </Figure>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='text-content'>
                    Average Joe Auto Repair is located in Champaign, IL. We have 35 years experience. 
                    From oil changes to engine repair, our services are affordable and reliable. 
                    We even offer snow removal services. Call today and let us show you why friends and family 
                    recommend us!
                    </div>
                </Row>
                <Row xs={1}>
                    <Col>
                    <div className='image-content'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3050.6793482624057!2d-88.2623554!3d40.1271488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd1f4471e1e7b%3A0xb46cee265a5bc325!2sAverage%20Joe%20Auto%20Repair!5e0!3m2!1sen!2sus!4v1669067121241!5m2!1sen!2sus" 
                                width={mapWidth} 
                                height={mapWidth} 
                                title='maptoShop'>
                        </iframe>
                    </div>
                    </Col>
                </Row>
                <Row>
                <div className='text-content'>
                    Click below to read our reviews on Yelp!
                </div>
                </Row>
                <Row>
                    <div className='image-content'>
                    <a href='https://www.yelp.com/biz/average-joe-auto-repair-champaign-2'>
                        <Figure>
                            <Figure.Image   alt="yelpLogoLink" 
                                            src={yelp} 
                                            rounded='true'
                                            width={Math.max(width*0.25, 220)}
                                            height={height*0.4}/>
                        </Figure>
                    </a>
                    </div>
                </Row>
            </Container>
            </div>
        </div>
    </div>
  );
}


// information request






export default App;
