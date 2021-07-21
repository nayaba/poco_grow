import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import SolidButton from '../shared/SolidButton'
import OutlineButton from '../shared/OutlineButton'

const ShowPrompt = (props) => {
  const [prompt, setPrompt] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const { match } = props
    axios(`${apiUrl}/prompt/${match.params.id}`)
      .then(res => {
        setPrompt(res.data.prompt)
        console.log('res in ShowPrompt: ', res)
      })
      .then()
      .catch(console.error)
  }, [])

  const destroy = () => {
    const { match } = props
    axios({
      url: `${apiUrl}/prompt/${match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!prompt) {
    return <p>Loading...</p>
  }

  // { pathname: '/prompts', state: { msg: 'Prompt successfully deleted!' } }
  if (deleted) {
    return <Redirect to='/prompt'/>
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center row">
        <div className="display-4 title d-flex justify-content-center mt-3 col-12">
          <div className="mt-3 d-flex justify-content-center mt-3 col-12">
            <p>{prompt.content}</p>
          </div>
        </div>
        <SolidButton
          secondaryColor='White'
          onClick={destroy}
        >Delete Prompt</SolidButton>
        <Link to={`/prompt/${props.match.params.id}/edit`}>
          <OutlineButton
            primaryColor='#ffafcc'
            secondaryColor='White'
            className="ml-1"
          >Edit</OutlineButton>
        </Link>
        <div className="mt-3 d-flex justify-content-center mt-3 col-12">
          <Link to ="/prompt">Back to all prompts</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(ShowPrompt)

// <Fragment>
//   <p>{prompt.content}</p>
//   <button onClick={destroy}>Delete Prompt</button>
//   <Link to={`/prompt/${props.match.params.id}/edit`}>
//     <button>Edit</button>
//   </Link>
//   <Link to ="/prompt">Back to all prompts</Link>
// </Fragment>
