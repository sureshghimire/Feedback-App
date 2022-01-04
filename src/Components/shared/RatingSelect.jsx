import{useState, useContext, useEffect} from 'react'
import FeedBackContext from '../../context/FeedbackContext';

function RatingSelect({select}) {
  const [selected, setSelected] = useState();

  const {feedbackEdit} = useContext(FeedBackContext)
  

  useEffect(()=>{
    setSelected(feedbackEdit.item.rating)
  },[feedbackEdit])

  

  
  const handleChange =(e)=>{

    // + is there to change the e string to number
      //console.log(typeof +e.currentTarget.value)

      setSelected(+e.currentTarget.value)
      select(+e.currentTarget.value)
      
  }

 
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value={1}
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>

      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value={2}
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>

      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value={3}
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="3">3</label>
      </li>

    </ul>
  );
}

export default RatingSelect;
