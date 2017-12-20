import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.onClickBUTO = this.onClickBUTO.bind(this)
  }

  onClickBUTO() {
    fetch('/ocnu.json', {
      'Content-Type': 'application/json'
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then((json) => {
        this.setState(json)
      })
      .catch((err) => {
        console.error('err', err)
        this.setState({
          o: null,
          c: null,
          n: null,
          u: null
        })
      })
  }

  render() {
    console.log('render', this.state)
    const { o, c, n, u } = this.state ? this.state : {}
    const visualize = ocnu => <div style={{ width: ocnu ? ocnu.nagasa : 0, height: 60, backgroundColor: ocnu ? ocnu.color : 'white' }}>{ocnu ? ocnu.name : 'none'}</div>
    return (
      <div>
        Appですよ
        <button onClick={this.onClickBUTO}>fetch!</button>
        <div>
          {JSON.stringify(this.state)}
          {visualize(o)}
          {visualize(c)}
          {visualize(n)}
          {visualize(u)}
        </div>
      </div>
    )
  }
}

export default App
