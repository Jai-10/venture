import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loadingDone: false
        }
    }



    removeLoadingPage = () => {
        if (this.state.loadingDone === false) {
            this.setState({ loadingDone: true })
        } else {
            this.setState({ loadingDone: false })
        }
    }


    fadeOut = () => {
        document.querySelector('.loading-text').style.opacity = "0"
        document.querySelector('.loading-text').style.marginTop = "-10px"
    }
    fadeIn = () => {
        document.querySelector('.loading-text').style.opacity = "1"
        document.querySelector('.loading-text').style.marginTop = "0"
    }





    render() {

        setTimeout(() => this.fadeOut(), 1800)
        setTimeout( () => {
            document.querySelector('.loading-text').textContent = "travelling is fun 1"
        }, 2400)
        setTimeout(() => this.fadeIn(), 3000)
        setTimeout(() => this.fadeOut(), 3700)
        setTimeout( () => {
            document.querySelector('.loading-text').textContent = "travelling is fun 2"
        }, 4300)
        setTimeout(() => this.fadeIn(), 4800)
        setTimeout(() => this.fadeOut(), 5400)
        setTimeout( () => {
            document.querySelector('.loading-text').textContent = "travelling is fun 3"
        }, 6000)
        setTimeout(() => this.fadeIn(), 6700)
        setTimeout(() => this.fadeOut(), 7100)
        setTimeout(() => {            
            document.querySelector('.loading-container button').style.opacity = "1"
        }, 8000)
            

        return (
            <div className='loading-container'
                style={{
                    top: `${this.state.loadingDone===false ? "0%" : "-100%" }`
                }}
            >

                <h1 className='loading-text'> loading </h1>

                <button onClick={this.removeLoadingPage}> Enter site </button>

            </div>
        )
    }
}
    
export default Loading