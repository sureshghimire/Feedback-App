//import PropTypes from 'prop-types';     // No Longer need this
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const{feedback} = useContext(FeedBackContext)

    let average = (feedback.reduce((acc, cur)=>{
        return acc+cur.rating

    },0)/feedback.length)

    //set average value to 2 decimals and replace single if 0 after decimal
    average = average.toFixed(2)
    return (
        <div className="feedback-stats">
            <h3>Total Reviews: {feedback.length}</h3>
            <h3>Average: {isNaN(average)?0: average}</h3>
            
        </div>
    )
}


// No Longer need this since feedback is coming from the FeedbackContext  using useContext hook
// Keep it for future use
// FeedbackStats.propTypes={
//     feedback: PropTypes.array.isRequired
// }
export default FeedbackStats
