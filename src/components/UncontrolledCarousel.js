import { Carousel, Container } from 'react-bootstrap';

function UncontrolledCarousel() {
  return (
    <Container>
    <Carousel className="mb-32">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photo_2022-07-05_19-11-06.jpg"
          width="800"
          height='600'
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photo_2022-07-05_19-11-24.jpg"
          alt="Second slide"
          width="800"
          height="600"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photo_2022-07-05_19-11-48.jpg"
          alt="Third slide"
          width="800"
          height="600"
        />

       
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default UncontrolledCarousel;