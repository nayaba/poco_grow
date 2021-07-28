import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from './../AutoDismissAlert/messages'
// import SolidButton from '../shared/SolidButton'

const UpdatePrompt = props => {
  const [prompt, setPrompt] = useState({ content: '' })
  const [updated, setUpdated] = useState(false)

  // const styles = {
  //   fontSize: '1em',
  //   color: 'White'
  // }

  useEffect(() => {
    const { match, user } = props
    axios({
      url: `${apiUrl}/prompt/${match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(res => {
        setPrompt(res.data.prompt)
      })
      .catch(() => props.msgAlert({
        heading: 'Failed to find prompt',
        message: messages.promptShowFailure,
        variant: 'danger'
      }))
    return (prompt, updated, setUpdated)
  }, [])

  const handleChange = event => {
    event.persist()

    setPrompt(prevPrompt => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedPrompt = Object.assign({}, prevPrompt, updatedField)
      return editedPrompt
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { match, user } = props
    axios({
      url: `${apiUrl}/prompt/${match.params.id}/`,
      method: 'PATCH',
      data: { prompt },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${user.token}`
      }
    })
      .then(() => {
        setUpdated(true)
      })
      .then(() => props.msgAlert({
        heading: 'Successfully updated prompt!',
        message: messages.promptUpdateSuccess,
        variant: 'success'
      }))
      .catch(() => props.msgAlert({
        heading: 'Failed to update prompt',
        message: messages.promptUpdateFailure,
        variant: 'danger'
      }))
  }

  if (updated) {
    const { match } = props
    return <Redirect to={`/prompt/${match.params.id}`} />
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-3 col-12 font-weight-bold">
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

export default withRouter(UpdatePrompt)
