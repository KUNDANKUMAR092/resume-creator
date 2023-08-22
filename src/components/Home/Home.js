import {Container ,Row, Col} from 'react-bootstrap';
import Banner from './../Banner/Banner';
import WhoIAm from './../Who_I_Am/WhoIAm';

import MySkills from '../MySkills/MySkills';
import MyDegrees from '../MyDegrees/MyDegrees';
import MyLanguage from '../MyLanguage/MyLanguage';
import MyExperience from '../MyExperience/MyExperience';
import MyProject from './../MyProject/MyProject';
import Contact from './../Contact/Contact';

import './Home.css';


function Home() {
    const editTrue = window.location.pathname !== "/edit" ? true : false;

    return ( 
        <>
            {editTrue ? <Banner /> : ""}
            
            <Container>
                <WhoIAm />
                <MySkills />
                <MyDegrees />
                <MyExperience />
                <MyProject />
            </Container>
        </>
     );
}

export default Home;