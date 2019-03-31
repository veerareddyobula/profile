import React, { Component, Fragment } from 'react'

export const DashboardGrid = ({ notebooks, handleAddNewBook }) => {
    return (
        <Fragment>
            <div id="notebooksDashboard">
                <div className="dashboardHeader">
                    <div>
                        <button className="btn btn-wave blue darken-3 text-white mb-2" onClick={handleAddNewBook}>Add New Book</button>
                    </div>
                </div>
                <div className="dashboardGridRow">
                    <span className="heading">#</span>
                    <span className="heading">NoteBook Title</span>
                    <span className="heading">Description</span>
                    <span className="heading">Created On</span>
                    <span className="heading">Last Updated On</span>
                    <span className="heading"></span>
                    {
                        notebooks.map((entity, index) => {
                            return (
                                <Fragment>
                                    <span>{index}</span>
                                    <span>{entity.title}</span>
                                    <span>{entity.description}</span>
                                    <span>{entity.createdOn}</span>
                                    <span>{entity.lastUpdatedOn}</span>
                                    <span></span>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
