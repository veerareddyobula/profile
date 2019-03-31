import React, { Component, Fragment } from 'react'
import { DashboardGrid } from './../components/dashboard-grid/dashboard-grid'

class DashboardContainer extends Component {

    state = {
        notebooks:[]
    }

    handleAddNewBook = () => {
        
    }

    render() {
        const {notebooks} = this.state
        return (
            <Fragment>
                <div className="container">
                    <DashboardGrid notebooks={notebooks} handleAddNewBook={this.handleAddNewBook} />
                </div>
            </Fragment>
        )
    }
}

export default DashboardContainer