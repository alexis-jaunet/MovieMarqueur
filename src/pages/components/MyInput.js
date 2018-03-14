import React from 'react'
import { propTypes, withFormsy } from 'formsy-react'

class MyInput extends React.Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue ({ currentTarget }) {
    this.props.setValue(currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'])
  }

  render () {
    const className = `form-group ${this.props.className} ${this.props.showRequired() ? 'required' : ''} ${
      this.props.showError() ? 'error' : ''
    }`

    const errorMessage = this.props.getErrorMessage()

    return (
      <div className='group'>
        <label htmlFor={this.props.name} className='label'>
          {this.props.title}
        </label>
        <input
          onChange={this.changeValue}
          name={this.props.name}
          type={this.props.type || 'text'}
          value={this.props.getValue() || ''}
          className='input'
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    )
  }
}

MyInput.propTypes = {
  ...propTypes
}

export default withFormsy(MyInput)
