import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'

import IndexPrompts from './components/IndexPrompts/IndexPrompts'
import ShowPrompt from './components/ShowPrompt/ShowPrompt'
import UpdatePrompt from './components/UpdatePrompt/UpdatePrompt'
import CreatePrompt from './components/CreatePrompt/CreatePrompt'
import Home from './components/Home/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route excat path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          <Route user={user} exact path='/prompt' render={() => (
            <IndexPrompts msgAlert={this.msgAlert} user={user} setUser={this.setUser} />
          )} />
          <Route user={user} exact path='/prompt/:id' render={() => (
            <ShowPrompt msgAlert={this.msgAlert} user={user} setUser={this.setUser} />
          )} />
          <Route user={user} exact path='/prompt/:id/edit' render={() => (
            <UpdatePrompt msgAlert={this.msgAlert} user={user} setUser={this.setUser} />
          )} />
          <Route user={user} exact path='/create-prompt' render={() => (
            <CreatePrompt msgAlert={this.msgAlert} user={user} setUser={this.setUser} />
          )} />

          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
        <Route exact path='/' component={Home} />
      </Fragment>
    )
  }
}

export default App
