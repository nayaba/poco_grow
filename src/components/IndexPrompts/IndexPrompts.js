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
      <Link to={`/prompts/${prompt.id}`}>{prompt.content}</Link>
    </li>
  ))

  return (
    <div>
      <h3>Prompts</h3>
      <ul>
        {promptLinks}
      </ul>
    </div>
  )
}

export default IndexPrompts
