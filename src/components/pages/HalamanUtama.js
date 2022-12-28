import '../../components/css/Style.css'
import Hero from '../../components/js/scrolls/Hero';
import Services from '../../components/js/scrolls/Services';
import Whyus from '../../components/js/scrolls/Whyus';
import Testimonial from '../../components/js/scrolls/Testimonial';
import Cta from '../../components/js/scrolls/Cta';
import Faq from '../../components/js/scrolls/Faq';


const HalamanUtama = () =>{
  return (
    <div className="body">
      <Hero isButtonShow={true} />
      <Services />
      <Whyus />
      <Testimonial />
      <Cta />   
      <Faq />
  
    </div>
  );
}

export default HalamanUtama;