import ProgressBar from 'react-bootstrap/ProgressBar'; 
import './ProgressBars.css';

function ProgressBars({progress}) {
    return ( 
        <ProgressBar striped now={progress} label={`${progress}%`} />
     );
}

export default ProgressBars;