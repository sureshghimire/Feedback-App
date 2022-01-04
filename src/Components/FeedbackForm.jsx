import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./shared/RatingSelect";

import { useContext, useState, useEffect } from "react";
import FeedBackContext from "../context/FeedbackContext";

function FeedbackForm() {

  
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const {addFeedback, feedbackEdit,updateFeedback} = useContext(FeedBackContext)
  useEffect(()=>{
    
    if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if ((text !== null) & (text.trim().length < 10)) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e)=>{
      e.preventDefault()

      if(text.trim().length>10){
          const newFeedback ={
              text,
              rating
          }
        

          if(feedbackEdit.edit ===true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
          }else{

            addFeedback(newFeedback)
          //console.log(newFeedback)
          }
          

          //clear form after passing value to handleAdd
          setText('')
      }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate our service with use?</h4>
        <RatingSelect
          select={(rating) => {
            setRating(rating); /** console.log(rating) */
          }}
        />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
