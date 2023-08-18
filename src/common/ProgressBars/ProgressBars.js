import ProgressBar from 'react-bootstrap/ProgressBar'; 
import './ProgressBars.css';

function ProgressBars({now}) {
    return ( 
        <ProgressBar striped now={now} label={`${now}%`} />
     );
}

export default ProgressBars;