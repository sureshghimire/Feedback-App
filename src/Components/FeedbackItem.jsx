import Card from "./shared/Card"
//import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";

function FeedbackItem({item, handleDelete}) { 
    const {deleteFeedback, editFeedback} = useContext(FeedBackContext)
  
    return (
        
        <Card>
            <button onClick={()=>deleteFeedback(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
                <FaEdit color="green" />
            </button>
            <div className="num-display">Rating:{item.rating}</div>
            <div className="text-display">{item.text}</div>
            
        </Card>

        
    )
}

// FeedbackItem.propTypes = {
//     item: PropTypes.object.isRequired
// }
export default FeedbackItem


