import React from 'react'
import './App.css'
import FileUpload from './components/FileUpload/FileUpload'
import logo from './images/AIS_Logo2.png'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
<div>
<div className="navigation">
        <a href="http://localhost/Learners_Login/first.php" className="nav-link">Home</a>
        <a href="http://localhost/Learners_Login/coursepage.php" className="nav-link">Cources</a>
        <a href="http://localhost:5173/" className="nav-link">Quiz</a>
        <a href="#" className="nav-link">Tutorial Feedback Submission</a>

      </div>
  <br/><br/>
  
  <div className='header-container'>
    
  <img src={logo} alt="AIS Logo" className="logo-image"/>
  
<h1 className="company-name">AIS Learning</h1>


</div>

    <div className='container'>  
      <FileUpload />
    </div>
<br/><br/>


<div class='button-container'>

    <a href="http://localhost:3000/"><button type="button" class="btn btn-primary">Next Submission</button></a>
    <a href="http://localhost/Learners_Login/Thanking.php"><button type="button" class="btn btn-success">Finish Submission</button></a>
    
    </div>
    
</div>


  )
}

export default App