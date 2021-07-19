import React, { useState, useEffect, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

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
    return <Redirect to='/prompts'/>
  }

  return (
    <Fragment>
      <p>{prompt.content}</p>
      <button onClick={destroy}>Delete Prompt</button>
      <Link to={`/prompts/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to ="/prompts">Back to all prompts</Link>
    </Fragment>
  )
}

export default withRouter(ShowPrompt)
