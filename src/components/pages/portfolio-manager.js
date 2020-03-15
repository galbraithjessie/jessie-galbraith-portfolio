import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [] 
        };

        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleSuccesfulFormSubmission = this.handleSuccesfulFormSubmission.bind(this);
    }

    handleSuccesfulFormSubmission(portfolioItem) {
        //TODO
        // update the portfolioItems state
        // and add the portfolioItem to the list
    }

    handleFormSubmissionError(error) {
        console.log('handleFormSubmissionError error', error);
        
    }

    getPortfolioItems() {
        axios.get('https://jessiegalbraith.devcamp.space/portfolio/portfolio_items', { withCredentials: true })
        .then(response => {
          // handle success
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
        })
        .catch(error => {
        // handle error
        console.log(error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

   render() {
       return(
          <div className="portfolio-manager-wrapper">
              <div className="left-column">
                  <PortfolioForm
                    handleSuccesfulFormSubmission={this.handleSuccesfulFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                  />
              </div>

              <div className="right-column">
                <PortfolioSidebarList data={this.state.portfolioItems}/>
              </div>
          </div>
       );
   }
}