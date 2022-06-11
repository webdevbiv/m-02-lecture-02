import React, { Component } from 'react';
import s from './ProfileForm.module.css';

export default class ProfileForm extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        const { firstName, lastName } = this.state;
        console.log(this.state);
        return (
            <div>
                <div>Test</div>
                <form onSubmit={this.onSubmit}>
                    <div className={s.row}>
                        <div>
                            <label className={s.label}>First Name</label>
                            <input
                                value={firstName}
                                type='text'
                                name='firstName'
                                onChange={this.onChange}
                            />
                        </div>
                        <div className={s.marginLeft}>
                            <label className={s.label}>Last Name</label>
                            <input
                                value={lastName}
                                type='text'
                                name='lastName'
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <button type='submit' className={s.button}>Save Profile</button>
                </form>
            </div>
        )
    }
}