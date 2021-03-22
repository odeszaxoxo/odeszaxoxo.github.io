/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component, useState } from 'react'; 

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpened: false,
        }
    }

    openModal = () => {
        this.setState({isModalOpened: true});
    }

    closeModal = () => {
        this.setState({isModalOpened: false});
    }
    
    render () {
        return (
            <div className="portfolio-item">
                <div className="portfolio-item__image" onClick={this.openModal}>
                    <img src={this.props.item.imageMain} alt={this.props.item.imageMain}/>
                </div>
                <div className="portfolio-item__content">
                    <div className="portfolio-item__title">
                        <h2>{this.props.item.name}</h2>
                    </div>
                    <div className="portfolio-item__date">
                        <p>{this.props.item.date}</p>
                    </div>
                </div>
                {this.state.isModalOpened ? 
                <div className="portfolio-item__backdrop">
                    <div className="portfolio-item__modal">
                        <div className="portfolio-item__title">
                            <h1>{this.props.item.name}</h1>
                        </div>
                        <div className="portfolio-item__description">
                            <p>{this.props.item.description}</p>
                        </div>
                        <p className="portfolio-item__info">
                            <span>Stack</span>
                            <span>{this.props.item.stack}</span>
                        </p>
                        <p className="portfolio-item__info">
                            <span>Date</span>
                            <span>{this.props.item.date}</span>
                        </p>
                        {this.props.item.images.length ? 
                            this.props.item.images.map((image) =>
                                <img alt={image} src={image}/>
                            ) : null
                        }
                        <div className="portfolio-item__buttons">
                            <a className="button" href="https://vk.com/" rel="noreferrer" target="_blank">Visit website</a>
                            <button className="button _outline" onClick={this.closeModal}>Back to cv</button>
                        </div>
                    </div> 
                </div> : null}
            </div>
        );
    }
}

export default PortfolioItem;
