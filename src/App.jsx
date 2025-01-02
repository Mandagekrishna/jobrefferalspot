import { useState } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Components/HOME/Home'
import InternshipList from './Components/INTERNSHIPS/InternshipList'
import InternshipDetailsPage from './Components/INTERNSHIPS/InternshipDetailsPage'
import JobsList from './Components/EXPERIENCED_JOBS/ExperiencedJobsList'
import ExperiencedJobsDetails from './Components/EXPERIENCED_JOBS/ExperiencedJobsDetails'
import FreshersJobsList from './Components/FRESHERS_JOBS/FreshersJobsList'
import FreshersJobsDetails from './Components/FRESHERS_JOBS/FreshersJobsDetails'
import WalkInDriveJobsList from './Components/WALK_IN_DRIVES/WalkInDriveJobsList'
import WalkInDriveJobsDetails from './Components/WALK_IN_DRIVES/WalkInDriveJobsDetails'

// import style from './Styles/App.module.css'
// import Introduction from './Components/Introduction'

function App() {


  return (
    <>
      <Router>
   
    <Nav></Nav>
    <p style={{color:'red'}}> Site is in development phase</p>

       
   
                
    
   

      <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Internships' element={<InternshipList></InternshipList>}></Route>
            <Route path='/InternshipDetailsPage/:id' element={<InternshipDetailsPage></InternshipDetailsPage>}></Route>

            <Route path='/ExperiencedJobs' element={<JobsList></JobsList>}></Route>
            <Route path='/ExperiencedJobsDetailsPage/:id' element={<ExperiencedJobsDetails/>}></Route>

            <Route path='/WalkInDriveJobsList' element={<WalkInDriveJobsList/>}></Route>
            <Route path='/WalkInDriveJobsetails/:id' element={<WalkInDriveJobsDetails/>}></Route>

            <Route path='/FreshersJobsList' element={<FreshersJobsList/>}></Route>
            <Route path='/FreshersJobsDetails/:id' element={<FreshersJobsDetails/>}></Route>


            

      </Routes>        
      </Router>
    </>
  )
}

export default App
