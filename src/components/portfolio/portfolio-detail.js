import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);


  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://jessiegalbraith.devcamp.space/portfolio/portfolio_items${this.props.match.params.slug}`,
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItem", error);
      });
  }

  render() {
    return (
      <div>
        <h2> {this.props.match.params.slug}</h2>
      </div>
    );
  }
}
