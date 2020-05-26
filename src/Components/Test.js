import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        var name = 'Vinayak'
    }
    render() {
        return (
            <div>
                <h4 id='ajit_id'>
                    Class Component
                </h4>
                <h1>
                    Hello
                </h1>
            </div>
        )
    }
}

export default Test
