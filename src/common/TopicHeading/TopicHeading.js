import './TopicHeading.css';

function TopicHeading({headingText, RightSideFlag}) {
    return ( 
        <>
            <h2 className={`topic_heading_text ${RightSideFlag}`}>{headingText}</h2>
        </>
     );
}

export default TopicHeading;