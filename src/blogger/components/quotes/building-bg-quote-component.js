import React, {Component} from 'react'

class BuildingBgQuoteComponent extends Component {
    render(){
        return(
            <div className="parallax-container center valign-wrapper">
                <div className="parallax">
                    <img 
                        alt="I love to do programming not because I get paid or get adulation by the public, but because it is fun to program." 
                        src="assets/parallax/full-stack-building-colors.jpeg?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=" />
                </div>

                <div className="container grey lighten-4">
                    <div className="d-flex justify-content-center m-4">
                        <h5 style={{margin: '2rem'}}>"I love to do programming not because I get paid or get adulation by the public, but because it is fun to program."</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildingBgQuoteComponent
