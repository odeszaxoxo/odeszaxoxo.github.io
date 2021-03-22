/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import emailjs from 'emailjs-com';

class Modal extends React.Component {
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
        this.props.closeModal();
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({[event.target.name]: value});
    }

    render() {

        if (!this.props.show) {
            return null;
        }

        return (
            <div className="contact-modal__backdrop">
                <div className="contact-modal__content">
                    <h1>Let's work together</h1>
                    <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
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
                            <button className="contact-modal__button button _outline" onClick={this.props.closeModal}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;
