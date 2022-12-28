import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';


function Cta ()  {
    return (
        <section className="cta-banner" id="cta-banner">
            <Container>
                <div className='cta-bg'>
                    <Row className='text-center'>
                        <div className="col-12">
                            <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <a href="#" className="btn btn-get-cta">Mulai Sewa Mobil Sekarang</a>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>

    )
}

export default Cta