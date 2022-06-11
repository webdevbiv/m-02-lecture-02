import React, { Component } from 'react';
import s from './ProfileForm.module.css';

export default class ProfileForm extends Component {
    render() {
        return (
            <div>Test

                <form action="">
                    <div className={s.row}>
                        <div>
                            <lablel className={s.label}>First Name</lablel>
                            <input type='text' name='firstName' />
                        </div>
                        <div>
                            <lablel className={s.label}>Last Name</lablel>
                            <input type='text' name='lastName' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}