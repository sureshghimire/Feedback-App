import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext()


export const FeedBackProvider=({children})=>{
    const [feedback, setFeedback ] = useState([
        {
            id: 2,
            text: 'This is sample rating 1',
            rating: 3
        },{
          id: 9,
          text: 'This is sample rating 2',
          rating: 1
      },
      {
        id: 6,
        text: 'This is sample rating 3',
        rating: 2
    }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
      
    })

  

    const deleteFeedback = (id) => {
        //adding confirm window
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    
        //testing
        //console.log(`App Container, id: ${id}`)
      };


      // Add Feedback Function
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback);
    
        //since we can't directly add new feedback to existing array so create a copy and add
        setFeedback([newFeedback, ...feedback]);
      };


      //Set item to be updated
      const editFeedback =(item)=>{
        setFeedbackEdit({
          item,
          edit: true
        })
      }

        //update feedback 
        const updateFeedback =(id, updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}: item))
        }

    return <FeedBackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
        }}>
        {children}
    </FeedBackContext.Provider>

}

export default FeedBackContext