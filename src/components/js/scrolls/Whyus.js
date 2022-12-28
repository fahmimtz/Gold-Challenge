import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import icon_price from '../../../media/icon_price.png';
import icon_complete from '../../../media/icon_complete.png';
import icon_24hrs from '../../../media/icon_24hrs.png';
import icon_professional from '../../../media/icon_professional.png';



function Whyus ()  {
    return (
        <section className="why-us" id="why-us">
            <Container>
                <Row>
                    <Col>
                    <h3>Why Us?</h3>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                    </Col>
                </Row>

                <Row>
                
                <Col xl={3} lg={4} md={6} sm={12} className='mb-4'>
                    <Card>
                        <Card.Body>
                        <img className='card-title' src={icon_complete} alt="icon"/>
                            <Card.Subtitle as='h6'>Mobil Lengkap</Card.Subtitle>
                            <Card.Text as='p'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className='mb-4'>
                    <Card>
                        <Card.Body>
                        <img className='card-title' src={icon_price} alt="icon"/>
                            <Card.Subtitle as='h6'>Harga Murah</Card.Subtitle>
                            <Card.Text as='p'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className='mb-4'>
                    <Card>
                        <Card.Body>
                        <img className='card-title' src={icon_24hrs} alt="icon"/>
                            <Card.Subtitle as='h6'>Layanan 24 Jam</Card.Subtitle>
                            <Card.Text as='p'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className='mb-4'>
                    <Card>
                        <Card.Body>
                        <img className='card-title' src={icon_professional} alt="icon"/>
                            <Card.Subtitle as='h6'>Sopir Profesional</Card.Subtitle>
                            <Card.Text as='p'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                </Row>
            </Container>
        </section>

    )
}

export default Whyus