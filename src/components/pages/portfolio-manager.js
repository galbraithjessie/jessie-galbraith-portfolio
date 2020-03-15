import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [] 
        };
    }

    getPortfolioItems() {
        axios.get('https://jessiegalbraith.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
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
                  <h1>Portfolio Form</h1>
              </div>

              <div className="right-column">
                <PortfolioSidebarList data={this.state.portfolioItems}/>
              </div>
          </div>
       );
   }
}