import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const UpdatePrompt = props => {
  const [prompt, setPrompt] = useState([])
  const [updated, setUpdated] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const { match } = props
    axios(`${apiUrl}/prompt/${match.params.id}`)
      .then(res => {
        setPrompt(res.data.prompt)
        console.log('res in UpdatePrompt: ', res)
      })
      .catch(console.error)
    return (prompt, updated, setUpdated)
  }, [])

  const onSubmit = data => {
    event.preventDefault()
    console.log('onSubimt data: ', data)
    const { match } = props
    axios({
      url: `${apiUrl}/prompt/${match.params.id}/`,
      method: 'PATCH',
      data: {
        prompt: { data }
      }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    const { match } = props
    return <Redirect to={`/prompts/${match.params.id}`} />
  }

  return (
    <Fragment>
      <div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Change your prompt</label>
          <input
            placeholder={prompt.content}
            {...register('prompt', { required: true })} />
          {errors.prompt && <p>Prompt is required</p>}
          <input type="submit" />
        </form>
      </div>
    </Fragment>
  )
}

export default withRouter(UpdatePrompt)

// <Link to={cancelPath}>
//   <button>Cancel</button>
// </Link>

// <form onSubmit={handleSubmit(onSubmit)}>
//   <label>Change your prompt</label>
//   <input
//     type="text"
//     placeholder={prompt.content}
//     name="prompt"
//     ref={register}
//   />
//   <input type="submit" />
// </form>
