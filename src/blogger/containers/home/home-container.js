import React, { Component, Fragment } from 'react'
import $ from "jquery";
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'

import AboutmeComponent         from 'blogger/components/aboutme/aboutme-component'
import CareerSummaryComponent   from 'blogger/components/career-summary/career-summary-component'
import InterviewComponent       from 'blogger/components/interview/interview-component'
import CycleBgQuoteComponent    from 'blogger/components/quotes/cycle-bg-quote-component'
import BuildingBgQuoteComponent from 'blogger/components/quotes/building-bg-quote-component'
import FooterComponent          from 'blogger/components/footer/footer-component'

class HomeContainer extends Component {

    componentDidMount = () => {
        const parallaxContainer = $('.parallax')
        M.Parallax.init(parallaxContainer);
    }

    render() {
        return (
            <Fragment>
                <AboutmeComponent />
                <CareerSummaryComponent />
                <CycleBgQuoteComponent />
                <InterviewComponent {...this.props} />
                <BuildingBgQuoteComponent />
                <FooterComponent />
            </Fragment>)
    }
}
export default HomeContainer
