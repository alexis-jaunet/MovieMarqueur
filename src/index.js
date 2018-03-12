import './pages/header/Header.css'
import './pages/Homepage.css'
import './pages/Connexion.css'
import './pages/Inscription.css'
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
            movies: [],
            query: '',
            page: 'homepage'
        }

        this.renderHomepage = this.renderHomepage.bind(this)
        this.renderConnexion = this.renderConnexion.bind(this)
        this.renderInscription = this.renderInscription.bind(this)
        this.renderDescription = this.renderDescription.bind(this)
    }

    renderHomepage() {
        this.setState({
            page: 'homepage'
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

    renderDescription() {
        this.setState({
            page: 'description'
        })
    }

    render() {
        if (this.state.page === 'connexion') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} />
                    <Connexion renderInscription={this.renderInscription} />
                </div>
            )
        }
        if (this.state.page === 'inscription') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} />
                    <Inscription renderConnexion={this.renderConnexion} />
                </div>
            )
        }
        if (this.state.page === 'description') {
            return (
                <div>
                    <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} />
                    <Description />
                </div>
            )
        }

        return (
            <div>
                <Header renderConnexion={this.renderConnexion} renderHomepage={this.renderHomepage} />
                <Homepage renderDescription={this.renderDescription} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
