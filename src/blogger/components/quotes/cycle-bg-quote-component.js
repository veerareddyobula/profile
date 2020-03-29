import React, {Component} from 'react'

class CycleBgQuoteComponent extends Component {
    render(){
        return(
            <div className="parallax-container center valign-wrapper">
                <div className="parallax">
                    <img 
                        alt="Without requirements or design, programming is the art of adding bugs to an empty text file." 
                        src="assets/parallax/vintage_bicycle_in_the_storm-wallpaper-960x540.jpg?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=" />
                </div>

                <div className="container deep-orange darken-1">
                    <div className="d-flex justify-content-center m-4">
                        <h5 style={{margin: '2rem'}}>"Without requirements or design, programming is the art of adding bugs to an empty text file."</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default CycleBgQuoteComponent
