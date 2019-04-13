import React, {Component, Fragment} from 'react'

class SidebarComponent extends Component {
    render(){
        return(
            <Fragment>
                <div id="sideBar" className="border-right">
                    <div>I am sidebar</div>
                </div>
            </Fragment>
        )
    }
}
export default SidebarComponent