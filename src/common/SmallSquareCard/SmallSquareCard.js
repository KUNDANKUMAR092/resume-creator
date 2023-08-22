import './SmallSquareCard.css';
import ProgressBars from './../ProgressBars/ProgressBars';

function SmallSquareCard({MySkillsLogo, LogoName, progress}) {
    return ( 
        <>
            <div className='small_square_box'>
                <img src={MySkillsLogo} alt="HTML" />
                <h3>{LogoName}</h3>
                <ProgressBars progress={progress} />
            </div>
        </>
     );
}

export default SmallSquareCard;