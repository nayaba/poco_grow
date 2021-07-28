import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from './../AutoDismissAlert/messages'

const CreatePrompt = props => {
  const [prompt, setPrompt] = useState({ content: '' })
  const [createdId, setCreatedId] = useState('')
  // let createdId

  const handleChange = event => {
    event.persist()

    setPrompt(prevPrompt => {
      console.log(prevPrompt)
      const updatedField = { [event.target.name]: event.target.value }
      const editedPrompt = Object.assign({}, prevPrompt, updatedField)
      return editedPrompt
    })
  }

  useEffect(() => {
    axios(`${apiUrl}/prompt/`)
      .then(res => {
        setPrompt(res.data.prompt)
        console.log('res in CreatePrompt: ', res)
      })
      .catch(console.error)
    return (prompt, setCreatedId)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/prompt/`,
      method: 'POST',
      data: { prompt },
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => setCreatedId(res.data.id))
      .then(() => props.msgAlert({
        heading: 'Successfully created a new prompt!',
        message: messages.promptCreateSuccess,
        variant: 'success'
      }))
      .catch(() => props.msgAlert({
        heading: 'Failed to create a new prompt',
        message: messages.promptCreateFailure,
        variant: 'danger'
      }))
  }

  if (createdId) {
    // const { match } = props
    return <Redirect to={`/prompt/${createdId}`} />
  }

  return (
    <Fragment>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <label>Change your prompt:</label>
          <input
            placeholder="placeholder"
            value={prompt.content}
            name="content"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

export default withRouter(CreatePrompt)
