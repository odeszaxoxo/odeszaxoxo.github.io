/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5mof9y9', 'template_fdpj6cm', e.target, 'user_WwW71MpIgpEWwYVb1LbuA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({[event.target.name]: value});
    }

    render() {
        return (
            <div className="section s-contact l-outer-width l-inner-padding" id="contact">
                <div className="s-contact__content">
                    <div className="s-contact__left">
                        <h1>
                            <span>Contact</span>
                        </h1>
                        <div className="s-contact__description">
                            <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                        </div>
                    </div>
                    <div className="s-contact__right">
                    <form onSubmit={this.handleSubmit}>
                        <div class="contact-modal__inputs">
                            <div className="contact-modal__info">
                                <div className="contact-modal__input">
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                                </div>
                                <div className="contact-modal__input">
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                                </div>
                            </div>
                            <div className="contact-modal__textarea">
                                <textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message"/>
                            </div>
                        </div>  
                        <div className="contact-modal__buttons">
                            <input type="submit" className="contact-modal__button button"value="Send message"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
