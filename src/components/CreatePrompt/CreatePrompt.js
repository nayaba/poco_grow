import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const CreatePrompt = props => {
  const [prompt, setPrompt] = useState([])
  const [createdId, setCreatedId] = useState('')
  // let createdId

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    axios(`${apiUrl}/prompt/`)
      .then(res => {
        setPrompt(res.data.prompt)
        console.log('res in CreatePrompt: ', res)
      })
      .catch(console.error)
    return (prompt, setCreatedId)
  }, [])

  const onSubmit = (data, user) => {
    event.preventDefault()
    console.log('onSubmit data: ', data)
    axios({
      url: `${apiUrl}/prompt/`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => setCreatedId(res.data.id))
      .catch(console.error)
  }

  if (createdId) {
    // const { match } = props
    return <Redirect to={`/prompt/${createdId}`} />
  }

  return (
    <Fragment>
      <div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Create a prompt</label>
          <input
            placeholder='badass prompt goes here'
            {...register('prompt.content', { required: true })} />
          {errors.prompt && <p>Prompt is required</p>}
          <input type="submit" />
        </form>
      </div>
    </Fragment>
  )
}

export default withRouter(CreatePrompt)
