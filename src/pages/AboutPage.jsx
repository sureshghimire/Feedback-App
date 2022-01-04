
import Card from '../Components/shared/Card'
import{Link} from 'react-router-dom'

function AboutPage() {
    return (
       <Card>
           <div>
           <h1>This is about page </h1>
           <p>
               <Link to='/'>Back to home</Link>
             
           </p>
           <Link to={{
               pathname:'/',
               search:'?sort=name',
               hash:'hello'
           }}>
               Link 2: Back to Home 
               With Query params,
               With hash
           </Link>
           </div>
           
       </Card>
    )
}

export default AboutPage
