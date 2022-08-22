

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";

import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/shared/AboutIconLink";

import {FeedBackProvider} from './context/FeedbackContext'

function App() {
  
  



  return (
    <FeedBackProvider>
    <Router>
      <Header text="Feedbacks Application" />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackStats />
                <FeedbackForm />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    
    </Router>
    </FeedBackProvider>
  );
}

export default App;
