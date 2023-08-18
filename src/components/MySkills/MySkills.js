import { Row, Col, Card} from 'react-bootstrap';
import ProgressBars from '../../common/ProgressBars/ProgressBars';
import './MySkill.css'
function MySkills() {
    return ( 
        <>
            <Row>
                <Col>
                    <h6>My Skills</h6>
                </Col>
            </Row>
            <Card className='card_box_shadow'>
                <Card.Body>
                    <Row>
                        <Col className='d-flex align-items-center mb-2'>
                            <div className='margin_right_10 skills_text'>HTML</div> 
                            <div className='flex-grow-1'><ProgressBars now={99} /></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center mb-2'>
                            <div className='margin_right_10 skills_text'>CSS</div> 
                            <div className='flex-grow-1'><ProgressBars now={99} /></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center mb-2'>
                            <div className='margin_right_10 skills_text'>Bootstrap</div> 
                            <div className='flex-grow-1'><ProgressBars now={90} /></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center mb-2'>
                            <div className='margin_right_10 skills_text'>JavaScript</div> 
                            <div className='flex-grow-1'><ProgressBars now={80} /></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <div className='margin_right_10 skills_text'>React Js</div> 
                            <div className='flex-grow-1'><ProgressBars now={75} /></div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
     );
}

export default MySkills;