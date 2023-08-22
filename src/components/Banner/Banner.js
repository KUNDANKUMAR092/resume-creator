import './Banner.css';
import {Container ,Row, Col} from 'react-bootstrap';
import profile_pic from './../../assets/img/profile_pic.jpg';
import TextTypingAnimation from './../../common/TextTypingAnimation/TextTypingAnimation';

function Banner() {
    return (
        <section className='banner_sec'>
            <div className='banner_bg_img_sec'>
                <div className='mask'></div>
            </div>

            <Container>
                <div className="userCard">
                    <div className="pictureAndText clearfix">
                        <div className="picture">
                            <img src={profile_pic} alt="avatar" width="299" height="347" />
                        </div>
                        <div className="text">
                            <div className="profile">
                            <span className="welcome">Hello<span className="triangle"></span></span>
                            <h1><span>I'm</span> Kundan Kumar</h1>
                            {/* <p>Senior Software Engineer</p> */}
                            <div className='text_typing_cont'>
                                <TextTypingAnimation key="line-2" isBackgroudColor="white"
                                    texts={["","Web Developer", "Full Stack Developer", "Senior Software Engineer", "Passionate in react js", "Good learner", "Written 1M + Line Code", "Youtuber", "Freelancer"]}
                                />
                            </div>
                            <hr />
                            <dl className="clearfix">
                                <dt>EMAIL</dt>
                                <dd>
                                    <a href=''>kundan.singh092@gmail.com</a>
                                </dd>
                                <dt>PHONE</dt>
                                <dd> +91 <a href=''>8880184734</a></dd>
                                <dt>ADDRESS</dt>
                                <dd><a href=''>Horamavu , Bangalore, 560043</a></dd>
                            </dl>
                            </div>
                        </div>
                    </div>
                    <footer className="media">
                        <a href="#">
                            <i className="fab fa-github fa-lg"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in fa-lg"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-dribbble fa-lg"></i>
                        </a>
                    </footer>
                </div>
                <div className='userSubCard'>
                    
                </div>
            </Container>


        </section>
    );
}

export default Banner;