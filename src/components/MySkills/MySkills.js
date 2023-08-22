import { Row, Col} from 'react-bootstrap';
import ProgressBars from '../../common/ProgressBars/ProgressBars';
import './MySkill.css'
import TopicHeading from '../../common/TopicHeading/TopicHeading';
import SmallSquareCard from './../../common/SmallSquareCard/SmallSquareCard';
import HTMLLogo from './../../assets/img/html.6a342d61.svg';
import CSSLogo from './../../assets/img/css.43b6f4bd.svg';
import JavascriptLogo from './../../assets/img/javascript.e9360603.svg';
import reactLogo from './../../assets/img/react.2b6a0717.svg';
import DjangoLogo from './../../assets/img/django.d51a8aa4.svg';
import FastifyLogo from './../../assets/img/fastify.1b930a41.svg';
import BlenderLogo from './../../assets/img/blender.b96901d1.svg';
import FigmaLogo from './../../assets/img/figma.1cd44608.svg';

function MySkills() {
    return ( 
        <>
            <div className='paddingTop4rem'>
                <Row>
                    <Col>
                        <TopicHeading headingText={'Skills'} RightSideFlag={'center'} />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <div className='mySkills_body'>
                            <div className='slide_track'>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={HTMLLogo} LogoName='HTML' progress={'90'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={CSSLogo} LogoName='CSS' progress={'80'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={JavascriptLogo} LogoName='JavaScript' progress={'70'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={reactLogo} LogoName='React' progress={'60'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={DjangoLogo} LogoName='Django' progress={'50'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={FastifyLogo} LogoName='Fastify' progress={'40'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={BlenderLogo} LogoName='Blender' progress={'30'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={FigmaLogo} LogoName='Figma' progress={'20'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={HTMLLogo} LogoName='HTML' progress={'90'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={CSSLogo} LogoName='CSS' progress={'80'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={JavascriptLogo} LogoName='JavaScript' progress={'70'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={reactLogo} LogoName='React' progress={'60'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={DjangoLogo} LogoName='Django' progress={'50'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={FastifyLogo} LogoName='Fastify' progress={'40'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={BlenderLogo} LogoName='Blender' progress={'30'} />
                                </div>
                                <div class="slide">
                                    <SmallSquareCard MySkillsLogo={FigmaLogo} LogoName='Figma' progress={'20'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                        </div>
                        <div class="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
     );
}

export default MySkills;