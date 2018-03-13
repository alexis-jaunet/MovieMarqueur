import './pages/header/Header.css'
import './pages/Homepage.css'
import './pages/Connexion-Inscription.css'
import './pages/Description.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './pages/header/Header'
import Homepage from './pages/Homepage'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Description from './pages/Description'

// CLASSE PRINCIPALE
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: '',
            movies: [],
            query: '',
            page: 'homepage',
            id: ''
        }

        this.renderHomepage = this.renderHomepage.bind(this)
        this.renderConnexion = this.renderConnexion.bind(this)
        this.renderInscription = this.renderInscription.bind(this)
        this.renderDescription = this.renderDescription.bind(this)
    }

    renderHomepage(token) {
        this.setState({
            page: 'homepage',
            token: token
        })
    }

    renderConnexion() {
        this.setState({
            page: 'connexion'
        })
    }

    renderInscription() {
        this.setState({
            page: 'inscription'
        })
    }

    renderDescription(token, id) {
        this.setState({
            page: 'description',
            id: id,
            token: token
        })
    }

    render() {
        if (this.state.page == 'connexion') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} token={this.state.token} />
                    <Connexion renderInscription={this.renderInscription} renderHomepage={this.renderHomepage} />
                </div>
            )
        }
        if (this.state.page == 'inscription') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} token={this.state.token} />
                    <Inscription renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} />
                </div>
            )
        }
        if (this.state.page == 'description') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} token={this.state.token} />
                    <Description token={this.state.token} id={this.state.id}/>
                </div>
            )
        }

        return (
            <div>
                <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} token={this.state.token} />
                <Homepage renderDescription={this.renderDescription} token={this.state.token} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
