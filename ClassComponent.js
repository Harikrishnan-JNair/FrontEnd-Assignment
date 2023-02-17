import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'Hari',
        skills : 'Java'
      }
    }

    buttonClick = () => {
        this.setState({
            name : 'Deepu',
            skills : 'React'
        })
    }
    

  render() {
    return (<>
      <div>Hey I am {this.state.name}. I know {this.state.skills}.</div>
      <button onClick={this.buttonClick}>Click</button>
      </>
    )
  }
}

export default ClassComponent