import React from 'react';
import './Popup.css';

const Popup = ({name, username, email, phone, addElement, handleInputChange }) => {

    return (
       <div className="popup-div" >
            <div className="b-popup">
                <div className="b-popup-content">
                    Enter new user data
                    <form onSubmit={ addElement }>
                        <label>
                            Enter name:
                            <input
                                name="name"
                                type="text"
                                value={ name }
                                onChange={ (e)=> handleInputChange(e) } />
                        </label>
                        <label>
                            Enter username:
                            <input
                                name="username"
                                type="text"
                                value={ username }
                                onChange={ (e)=> handleInputChange(e) } />
                        </label>
                        <label>
                            Enter email:
                            <input
                                name="email"
                                type="text"
                                value={ email }
                                onChange={ (e)=> handleInputChange(e) } />
                        </label>
                        <label>
                            Enter phone:
                            <input
                                name="phone"
                                type="text"
                                value={ phone }
                                onChange={ (e)=> handleInputChange(e) } />
                        </label>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>
            </div>
       </div>
    )
};

export default Popup;