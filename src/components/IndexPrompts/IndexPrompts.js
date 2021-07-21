import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

import { Link } from 'react-router-dom'

function IndexPrompts (props) {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompt/`)
      .then(res => setPrompts(res.data.prompt))
      .catch('error: ', console.error)
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
