import React, {Component} from 'react'
import './NavBar.css'

export default class NavBar extends Component {

    render(){
        return(
            <div className>
                <div className='header'>
                 <button className='header-text'>Start Bootstrap</button>
                 <div className='header-button-container'>
                     <button className='header-button'>About</button>
                        <button className='header-button'>Contacts</button>
                     <button className='header-button'>Project</button>
                    </div>
                </div>

            </div>
        )
    }
}