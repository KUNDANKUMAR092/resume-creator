import './MyExperience.css';
import { Row, Col} from 'react-bootstrap';
import TopicHeading from '../../common/TopicHeading/TopicHeading';
import RectangularCard  from "../../common/RectangularCard/RectangularCard";
import educationIcon from './../../assets/img/eduImgWhite.ae822784.svg';
import eduOrange from './../../assets/img/expOrange.9383b2df.svg';

function MyProjectExperience() {
    return ( 
        <>
            <div className='paddingTop4rem'>
                <Row>
                    <Col>
                        <TopicHeading headingText={'Experience'} RightSideFlag={'right_side_text'} />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div className='education_body'>
                            <div class="education_image">
                                <img src={eduOrange} alt="" />
                            </div>
                            <div className='experience_description'>
                                <RectangularCard imgIcon={educationIcon} yearStart={'2007'} yearEnd={'2008'} cardHeading={'matriculation'} cardSubHeading={'Okhariya High School , Okhariya'} />
                                <RectangularCard imgIcon={educationIcon} yearStart={'2007'} yearEnd={'2008'} cardHeading={'matriculation'} cardSubHeading={'Okhariya High School , Okhariya'} />
                                <RectangularCard imgIcon={educationIcon} yearStart={'2007'} yearEnd={'2008'} cardHeading={'matriculation'} cardSubHeading={'Okhariya High School , Okhariya'} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
     );
}

export default MyProjectExperience;