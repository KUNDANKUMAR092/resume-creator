import './Banner.css';
import {Container ,Row, Col} from 'react-bootstrap';
import profile_pic from './../../assets/img/profile_pic.jpg';
import TextTypingAnimation from './../../common/TextTypingAnimation/TextTypingAnimation'

function Banner() {
    return (
        <section className='banner_sec'>
            <div className='banner_bg_img_sec'>
            <Container className='slidetext_sec_container'>
                <div className='slidetext_cont'>
                    <>
                        <TextTypingAnimation key="line-2" className="animation_text"
                            texts={["","Web Developer", "Full Stack Developer", "Passionate in react js", "Good learner", "Written Code 1M + Line Code", "Youtuber", "Freelancer"]}
                        />
                    </>
                </div>
                </Container>
            </div>
            <div className='banner_profile_details_sec'>
                <Container>
                    <Row>
                        <Col>
                            <div className='profile_pic'>
                                <img src={profile_pic} />
                            </div>
                        </Col>
                        <Col xs={9}>
                            <div className='profile_details_cont'>
                                <h2>Kundan Kumar</h2>
                                <h6>Senior Software Engineer</h6>
                                <Row className='row_cont'>
                                    <Col className='col_cont'>
                                        <div className='prof_details_box'>
                                            <a href=''>
                                                <span><i class="fa-solid fa-envelope"></i></span>
                                                <span>{''} kundan.singh092@gmail.com</span>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className='col_cont'>
                                        <div className='prof_details_box'>
                                            <a href=''>
                                                <span><i class="fa-solid fa-phone"></i></span>
                                                <span>{''} 8880184734</span>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className='col_cont'>
                                        <div className='prof_details_box'>
                                            <a href=''>
                                                <span><i class="fa-solid fa-location-dot"></i></span>
                                                <span>{''} Horamavu , Bangalore, 560043</span>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Banner;