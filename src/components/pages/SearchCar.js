import '../../components/css/Style.css'
import Car from '../js/scrolls/Car';
import Hero from '../../components/js/scrolls/Hero';


const SearchCar = () =>{
  return (
    <div className="body">
      <Hero isButtonShow={false} />
      <Car />
    </div>
  );
}

export default SearchCar;