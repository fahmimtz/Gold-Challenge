import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import { Row , Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import img_car from '../../../media/img_car.png';
import { Link } from "react-router-dom";


function Hero (props)  {
  return (
    <section className="hero py-5" id="hero">
      <Container>
        <Row>
        <Col lg={6} md={12} className="align-self-center mt-5">
          <h2 className='pb-3'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu) </h2>
          
          <p className='pb-3'>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu 
          untuk sewa mobil selama 24 jam.
          </p>
          {
             props.isButtonShow ? (
              <div className="btn-cari-mobil">
                <Link to="/SearchCar">
                <Button style={{ backgroundColor: '#5CB85F' }}>Mulai Sewa Mobil</Button>
                </Link>
              </div>
               ):null
          }
  
        </Col>
        <Col lg={6} md={12} className="align-self-center mt-5">
            <div class="hero-img">      
                <img src={img_car} alt="hero images"/>
            </div>
        </Col>


        </Row>
      </Container> 
    </section>
  )
}

export default Hero