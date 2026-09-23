import React from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

export default class App extends React.Component {
  render() {
    return (
      <main className="page-shell">
        <section className="login-panel" aria-labelledby="page-title">
          <div className="panel-intro">
            <p className="eyebrow">Northstar Learning Hub</p>
            <h1 id="page-title">Welcome back</h1>
            <p className="intro-copy">
              Sign in to continue your learning journey.
            </p>
          </div>
          <LoginForm />
        </section>
      </main>
    )
  }
}