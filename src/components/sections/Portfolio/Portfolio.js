/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import data from '../../../data/portfolioItems.json';
import PortfolioItem from '../../PortfolioItem/PortfolioItem';


class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numbers: [1, 2, 2, 2, 3, 3, 4, 4, 4, 4], 
            categoryId: null,
            filteredItems: []
        }
    }

    handleClick = (categoryId) => {
        let filteredItems = [];
        if (categoryId === 0) {
            filteredItems = data.portfolioItems;
        } else {
            filteredItems = data.portfolioItems.filter(dataItem => dataItem.categoryId === categoryId);
        }
        this.setState({categoryId: categoryId, filteredItems : filteredItems});
    }

    render() {
        return (
            <div className="section s-portfolio l-outer-width l-inner-padding" id="portfolio">
                <h1>
                    <span>Portfolio</span>
                </h1>
                <div className="s-portfolio__content">
                    <ul>
                        <li>
                            <a onClick={() => this.handleClick(0)}>All</a>
                        </li>
                        <li>
                            <a onClick={() => this.handleClick(1)}>Web</a>
                        </li>
                        <li>
                            <a onClick={() => this.handleClick(2)}>Front</a>
                        </li>
                        <li>
                            <a onClick={() => this.handleClick(3)}>Mobile</a>
                        </li>
                        <li>
                            <a onClick={() => this.handleClick(4)}>Practice</a>
                        </li>
                    </ul>
                    <div class="l-row-7xl l-row-desk-xl l-row-mob-sm  l-row-mb-7xl l-row-mb-desk-xl l-row-mb-mob-sm">
                        {this.state.categoryId === null ? 
                            data.portfolioItems.map((dataItem) => 
                                <div class="l-col-6 l-col-tab-8 l-col-mob-12 u-d-flex">
                                    <PortfolioItem item={dataItem}></PortfolioItem>
                                </div>
                            ) :  this.state.filteredItems.map((item) => 
                                <div class="l-col-6 l-col-tab-8 l-col-mob-12 u-d-flex">
                                    <PortfolioItem item={item}></PortfolioItem>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
