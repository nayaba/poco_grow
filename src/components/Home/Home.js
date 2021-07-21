import React from 'react'
import SolidButton from '../shared/SolidButton'
import OutlineButton from '../shared/OutlineButton'
import { Link } from 'react-router-dom'

const Home = () => {
  const homeStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundSize: 'cover',

    backgroundPosition: 'center',

    height: '40vh',

    color: 'Gray',

    textAlign: 'center'
  }

  return (
    <div style={homeStyles}>
      <div>
        <div className="d-flex justify-content-center row">
          <div className="display-4 title d-flex justify-content-center mt-3 col-12">
          Welcome to Poco Grow
          </div>
          <div className="d-inline-flex justify-content-center mt-3 mr-4 ml-4 col-6">
          Poco a poco is an Itialian phrase used as a direction in music, when the music is mean to be crescendoing gradually. It literally means little by little.  Here at Poco Grow, you are encouraged to grow little by little by through gratitude, journaling, and small acts of courage.
          </div>
        </div>
        <div className="mt-3">
          <Link to='/prompt'>
            <SolidButton
              secondaryColor='White'
            >Start Journaling</SolidButton>
          </Link>
          <Link to='/sign-up'>
            <OutlineButton
              primaryColor='#ffafcc'
              secondaryColor='White'
              className="ml-1"
            >Sign Up</OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
