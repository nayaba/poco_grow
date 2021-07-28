import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from './../AutoDismissAlert/messages'

import { Link } from 'react-router-dom'

function IndexPrompts (props) {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    const { user } = props
    axios({
      url: `${apiUrl}/prompt/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(res => setPrompts(res.data.prompt))
      .then(() => props.msgAlert({
        heading: 'Successfully retrieved prompts!',
        message: messages.promptIndexSuccess,
        variant: 'success'
      }))
      .catch(() => props.msgAlert({
        heading: 'Failed to retrieve prompts',
        message: messages.promptIndexFailure,
        variant: 'danger'
      }))
  }, [])

  const promptLinks = prompts.map(prompt => (
    <li key={prompt.id}>
      <Link to={`/prompt/${prompt.id}`}>{prompt.content}</Link>
    </li>
  ))

  return (
    <div>
      <h3 className="mt-3">Prompts</h3>
      <Link to='/create-prompt/'>Create your own prompt!</Link>
      <ul>
        {promptLinks}
      </ul>
    </div>
  )
}

export default IndexPrompts
