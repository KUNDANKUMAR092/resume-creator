import './WhoIAm.css';
import orangeTheme_girl from './../../assets/img/orangeTheme_girl.svg'
import {Container} from 'react-bootstrap';
import TopicHeading from './../../common/TopicHeading/TopicHeading';


function WhoIAm() {
    return ( 
        <>
            <div className='who_i_am_container paddingTop4rem'>
                <div className="line-styling">
                    <div className="style-circle"></div>
                    <div className="style-circle"></div>
                    <div className="style-line"></div>
                </div>
                <div className="about_body paddingTop4rem">
                    <div className="about_description">
                        <TopicHeading headingText={'Who I am'} />
                        <p >My name's Kundan Kumar. I'm a Senior Software Engineer and developer based in Mantra Labs.<br /><br /> During the day I work as a lead developer at a local agency and in the evening I  work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas. </p>
                    </div>
                    <div className="about_img">
                        <img src={orangeTheme_girl} alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default WhoIAm;