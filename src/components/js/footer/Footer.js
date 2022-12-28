import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import icon_facebook from '../../../media/icon_facebook.png';
import icon_instagram from '../../../media/icon_instagram.png';
import icon_twitter from '../../../media/icon_twitter.png';
import icon_mail from '../../../media/icon_mail.png';
import icon_twitch from '../../../media/icon_twitch.png';
import logo from '../../../media/logo.png';



function Footer ()  {
    return (

        <footer className="footer" id="footer">
            <Container>
                <Row>
                    <Col md={3} sm={6} xs={6} className='address' >
                    <ul>
                    <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                    <li>binarcarrental@gmail.com</li>
                    <li>081-233-334-808</li>
                    </ul>
                    </Col>
                    <Col md={3} sm={6} xs={6} className='nav' >
                    <ul>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#why-us">Why Us</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    </ul>
                    </Col>
                    <Col md={3} sm={6} xs={6} className='sosmed' >
                    <p>Connect with us</p>
                    <img as='a' src={icon_facebook} alt="icon"/>
                    <img as='a'src={icon_instagram} alt="icon"/>
                    <img src={icon_twitter} alt="icon"/>
                    <img src={icon_mail} alt="icon"/>
                    <img src={icon_twitch} alt="icon"/>
                    </Col>
                    <Col md={3} sm={6} xs={6} className='copyright' >
                    <p>Copyright Binar 2022</p>
                    <img src={logo} alt="logo"/>
                    </Col>

                </Row>
            </Container>
        </footer>

    )
}

export default Footer