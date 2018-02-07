import React from 'react'
import request from 'superagent'
import Dictionary from './Dictionary'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      word: '',
      definition: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (evt) {
    this.setState({
      word: evt.target.value
    })
  }

  handleClick () {
    request
      .get('https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + this.state.word)
      .set('X-Mashape-Key', 'Qu3tBSCgrsmshntpgRMoMd3NN6zmp1sVKVQjsnNJIWXjdnl2XI')
      .set('Accept', 'text/plain')
      .then((res) => {
        this.setState({
          definition: res.body.list
        }) 
      })
  }

  render () {
    return (
      <div>
        <h1>Urban Dictionary</h1>
        <form>
          <label>word:
            <input name='term' onChange={this.handleChange} value={this.state.word}/>
          </label>
          <button type='button' onClick={this.handleClick}>Define</button>
        </form>
        {this.state.definition && <Dictionary data={this.state.definition} />}

      </div>
    )
  }
}

export default App
