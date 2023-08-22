import './MyLanguage.css';
import { Row, Col, Card} from 'react-bootstrap';

function MyLanguage() {
    return ( 
        <>
            <Row>
                <Col>
                    <h6>My Language</h6>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Card className='card_box_shadow'>
                        <Card.Body>
                            <Row>
                                <Col className='d-flex align-items-center mb-2'>
                                    <div className='margin_right_10 skills_text'>HTML</div> 
                                    <div className='flex-grow-1'></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex align-items-center mb-2'>
                                    <div className='margin_right_10 skills_text'>CSS</div> 
                                    <div className='flex-grow-1'></div>
                                </Col>
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
     );
}

export default MyLanguage;