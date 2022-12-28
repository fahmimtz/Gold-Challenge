import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Group from '../../../media/Group.png';
import services from '../../../media/img_service.png';

function Services ()  {
    return (
        <section className="services" id="services">
            <Container>
                <Row className='justify-content-center' >
                    <Col lg={6} md={10}>
                        <img src={services} alt="services"/>
                    </Col>
                    <Col lg={6} md={10}>
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga 
                            lebih murah dibandingkan yang lain, kondisi mobil baru, serta 
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, 
                            meeting, dll.
                        </p>

                        <div className="services-list">
                            <img src={Group} alt="icon"/>
                            <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                        </div>
                        <div className="services-list">
                            <img src={Group} alt="icon"/>
                            <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                        </div>
                        <div class="services-list">
                            <img src={Group} alt="icon"/>
                            <span>Sewa Mobil Jangka Panjang Bulanan</span>
                        </div>
                        <div class="services-list">
                            <img src={Group} alt="icon"/>
                            <span>Gratis Antar - Jemput Mobil di Bandara</span>
                        </div>
                        <div class="services-list">
                            <img src={Group} alt="icon"/>
                            <span>Layanan Airport Transfer / Drop In Out</span>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>

    )
}

export default Services