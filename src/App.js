import React, {Component} from 'react'
import './components/Reset.css'
import './App.css'
import NavBar from './components/NavBar'

export default class App extends Component {


  render(){
    return(
      <div className='background'>
        <NavBar/>
        <div className='main-content'>
          <h1 className='grayscale'>GRAYSCALE</h1>
          <h2 className='about-grayscale'>A free, responsive, one page Bootstrap theme <br/>created by Start Bootstrap.</h2>
        </div>
        <button className='get-started'>get started</button>
      </div>
      
    )
  }
}
