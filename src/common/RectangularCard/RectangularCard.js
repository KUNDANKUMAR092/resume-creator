import './RectangularCard.css';
import {Card} from 'react-bootstrap';

function RectangularCard({imgIcon,yearStart,yearEnd,cardHeading,cardSubHeading }) {
    return ( 
        <>
            <Card className='rectangularCard_sec'>
                <div class="educard_img">
                    <img src={imgIcon} alt="" />
                </div>
                <div class="education_details">
                    <h6 >{yearStart} - {yearEnd}</h6>
                    <h4 >{cardHeading}</h4>
                    <h5 >{cardSubHeading}</h5>
                </div>
            </Card>
        </>
     );
}

export default RectangularCard;