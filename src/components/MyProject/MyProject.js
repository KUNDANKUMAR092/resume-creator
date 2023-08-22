import SquareCard from './../../common/SquareCard/SquareCard';
import one from './../../assets/img/one.a3146128.svg';
import { Row, Col} from 'react-bootstrap';
import TopicHeading from '../../common/TopicHeading/TopicHeading';
import './MyProject.css';


function MyProject() {
    const discr1 = 'This project aims to build an employee management system that consolidates all information of a company';
    const projectLangArry = [ {"name": "React"}, {"name": "CSS"}, {"name": "Material Ui"}, ]
    return ( 
        <>
            <div className='paddingTop4rem'>
                <Row>
                    <Col>
                        <TopicHeading headingText={'Projects'} RightSideFlag={'center'} />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div className='myProject_body'>
                            <SquareCard projectName={'Employee Management'} ProjectLogo={one}  ProjectDiscription={discr1} projectLangArry={projectLangArry} />
                            <SquareCard projectName={'Employee Management'} ProjectLogo={one}  ProjectDiscription={discr1} projectLangArry={projectLangArry} />
                            <SquareCard projectName={'Employee Management'} ProjectLogo={one}  ProjectDiscription={discr1} projectLangArry={projectLangArry} />
                            <SquareCard projectName={'Employee Management'} ProjectLogo={one}  ProjectDiscription={discr1} projectLangArry={projectLangArry} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="projects--viewAll">
                            <a href="/projects">
                                <button class="jss74">View All
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="jss75" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
     );
}

export default MyProject;