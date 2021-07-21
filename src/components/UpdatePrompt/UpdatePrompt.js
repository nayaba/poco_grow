import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import SolidButton from '../shared/SolidButton'

const UpdatePrompt = props => {
  const [prompt, setPrompt] = useState([])
  const [updated, setUpdated] = useState(false)

  const styles = {
    fontSize: '1em',
    color: 'White'
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const { match } = props
    axios(`${apiUrl}/prompt/${match.params.id}/`)
      .then(res => {
        setPrompt(res.data.prompt)
        console.log('res in UpdatePrompt: ', res)
      })
      .catch(console.error)
    return (prompt, updated, setUpdated)
  }, [])

  const onSubmit = (data, user) => {
    event.preventDefault()
    console.log('onSubmit data: ', data)
    const { match } = props
    axios({
      url: `${apiUrl}/prompt/${match.params.id}/`,
      method: 'PATCH',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setUpdated(true)
        console.log('prompt after axios: ', prompt)
        console.log('setUpdated after axios: ', setUpdated)
      })
      .catch(console.error)
  }

  if (updated) {
    const { match } = props
    return <Redirect to={`/prompt/${match.params.id}`} />
  }

  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-3 col-12 font-weight-bold">
      Change your prompt:
      </div>
      <div className="mt-3 d-flex justify-content-center mt-3 col-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder={prompt.content}
            {...register('prompt.content', { required: true })} />
          {errors.prompt && <p>Prompt is required</p>}
          <SolidButton type="submit" style={styles} className="ml-1">Submit</SolidButton>
        </form>
      </div>
    </Fragment>
  )
}

export default withRouter(UpdatePrompt)
