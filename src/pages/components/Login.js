import Formsy from 'formsy-react'
import React from 'react'
import MyInput from './MyInput'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = { canSubmit: false }

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.goToHomepage = this.goToHomepage.bind(this)
  }

  disableButton () {
    this.setState({ canSubmit: false })
  }

  enableButton () {
    this.setState({ canSubmit: true })
  }

  goToHomepage (token) {
    this.props.goToHomepage(token)
  }

  submit (model) {
    const fetchAsyncA = async () =>
      fetch('http://dylanviaud.me/login', {
        method: 'post',
        mode: 'cors',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(model)
      })
        .then(response => {
          if (!response.ok) {
            alert('Utilisateur non existant')
            throw Error('User unknown')
          }
          return response
        })
        .then(response => response.json())
        .then(responseData => {
          return responseData
        })
        .catch(error => console.warn(error))
    let token = fetchAsyncA()
    token.then(value => {
      if (value) {
        this.goToHomepage(value.token)
      }
    })
  }

  render () {
    return (
      <Formsy
        className='login-form'
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <div className='sign-in-htm'>
          <MyInput
            title='Pseudo *'
            value='azer'
            name='pseudo'
            validations='isAlphanumeric,minLength:3,maxLength:20'
            validationErrors={{
              isAlphanumeric: 'Le pseudo ne peut pas contenir de caractère spéciaux.',
              maxLength: 'Le pseudo est trop long.',
              minLength: 'Le pseudo est trop court.'
            }}
            type='text'
            required
          />

          <MyInput
            name='mdp'
            title='Mots de passe *'
            value='Azerty123/'
            type='password'
            validations={{
              matchRegexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]).{8,}$/
            }}
            validationErrors={{
              matchRegexp:
                'Le mots de passe doit avoir au minimum une lettre majuscule, un chiffre,' +
                'un caractère spécial et avoir plus de 8 caractères.'
            }}
            required
          />
          <div className='group'>
            <button className='button' type='submit' disabled={!this.state.canSubmit}>
              Se connecter
            </button>
          </div>
        </div>
      </Formsy>
    )
  }
}
