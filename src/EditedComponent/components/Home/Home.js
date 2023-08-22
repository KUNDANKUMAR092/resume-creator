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
                        <Col xs={6} >
                            <div className='mb-4'>
                                <MySkills/>
                            </div>
                            <div className='mb-4'>
                                <MyLanguage />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='mb-4'>
                                <MyDegrees />
                            </div>
                            <div className='mb-4'>
                                <MyProjectExperience />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
     );
}

export default Home;