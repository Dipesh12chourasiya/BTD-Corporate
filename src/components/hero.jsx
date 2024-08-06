import Carousel from 'react-bootstrap/Carousel';
import AppAbout from './about';
import AppProducts from './products';
import AppServices from './services';
import AppContact from './contact';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero3.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/croo.jpg'),
  },
]

function AppHero() {
  return (
    <div>
      <section id="home" className="hero-block" >
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />          
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
      
      {/* About Component */}
      <AppAbout />
      <AppServices />
      <AppContact />
    </div>
  );
}

export default AppHero;