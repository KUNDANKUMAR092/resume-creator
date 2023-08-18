import Banner from './../Banner/Banner';
import {Container ,Row, Col} from 'react-bootstrap';
import MySkills from '../MySkills/MySkills';
import MyDegrees from '../MyDegrees/MyDegrees';
import MyLanguage from '../MyLanguage/MyLanguage';
import MyProjectExperience from '../MyProjectExperience/MyProjectExperience';

import './Home.css';


function Home() {
    return ( 
        <>
            <Banner />
            <section className='sub_body_sec'>
                <Container>
                    <Row>
                        <Col xs={6} className='mb-3'>
                            <MySkills/>
                        </Col>
                        <Col xs={6} className='mb-3'>
                            <MyDegrees />
                        </Col>
                        <Col xs={6}>
                            <MyLanguage />
                        </Col>
                        <Col xs={6}>
                            <MyProjectExperience />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
     );
}

export default Home;