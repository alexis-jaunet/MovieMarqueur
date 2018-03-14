import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.goToConnexion = this.goToConnexion.bind(this)
    this.goToHomepage = this.goToHomepage.bind(this)
    this.removeToken = this.removeToken.bind(this)
  }

  goToConnexion () {
    this.props.renderConnexion()
  }

  goToHomepage () {
    this.props.renderHomepage(this.props.token)
  }

  removeToken () {
    this.props.renderHomepage('')
  }

  render () {
    console.log(`Token : ${this.props.token}`)
    if (this.props.token) {
      return (
        <div className={'header'}>
          <img className='img-logo' src={require('./logo.png')} onClick={this.goToHomepage} />
          <button className='btn-inscription-connexion' onClick={this.removeToken}>
            Déconnexion
          </button>
          <div className='separator' />
        </div>
      )
    }
    return (
      <div className={'header'}>
        <img className='img-logo' src={require('./logo.png')} onClick={this.goToHomepage} />
        <button className='btn-inscription-connexion' onClick={this.goToConnexion}>
          Inscription/Connexion
        </button>
        <div className='separator' />
      </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('root'))
export default Header
