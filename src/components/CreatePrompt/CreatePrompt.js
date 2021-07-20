import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const CreatePrompt = props => {
  const [prompt, setPrompt] = useState([])
  const [created, setCreated] = useState(false)

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
    return (prompt, created, setCreated)
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
      .then(() => {
        setCreated(true)
        console.log('prompt after axios: ', prompt)
        console.log('setUpdated after axios: ', setCreated)
      })
      .catch(console.error)
  }

  if (created) {
    const { match } = props
    return <Redirect to={`/prompts/${match.params.id}`} />
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
