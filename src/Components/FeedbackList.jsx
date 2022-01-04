import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";

import { Motion, AnimatePresence, motion } from "framer-motion";

function FeedbackList() {

  const {feedback} = useContext(FeedBackContext)
  

  if (!feedback || feedback.length === 0) {
    return <p>No data yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity: 0}}
          >     
          <FeedbackItem
            item={item}
            key={item.id}
            //handleDelete={() => {console.log(`Id From FeedbackItem container`, item.id);}}
            //handleDelete={handleDelete} //using useContext instead
          />
          </motion.div>

        ))}
      </AnimatePresence>
    </div>
  );

  //----------- Without Animation
  // return (
  //   <div className="feedback-list">
  //     {feedbackItems.map((item) => (
  //       <FeedbackItem
  //         item={item}
  //         key={item.id}
  //         //handleDelete={() => {console.log(`Id From FeedbackItem container`, item.id);}}
  //         handleDelete ={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
