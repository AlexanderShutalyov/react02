import React from 'react';
import { users } from '../user';
import UserCard from '../UserCard/UserCard';
import Popup from "../Popup/Popup";

class UserCardsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            userData: users,
            showPopup: false,
            name: '',
            username: '',
            email: '',
            phone: ''
        };

        this.addElement = this.addElement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    removeElement(index) {
       users.splice(index, 1);
       this.setState({userData: users})
    }

    addElement(event) {
        event.preventDefault();
        users.push({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone
        });
        this.setState({
            userData: users,
            showPopup: false,
            name: '',
            username: '',
            email: '',
            phone: ''
        })
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { userData } = this.state;
        const { showPopup } = this.state;
        return(
            <React.Fragment>
                <div>
                <button onClick={ ()=> this.setState({showPopup: !showPopup}) }>Add new user</button>
                    { showPopup === true ? <Popup {...this.state} addElement={this.addElement} handleInputChange={this.handleInputChange}/> : ''}
                </div>
                { userData.map((props, index) => (
                    <UserCard {...props} key={index} removeElement={this.removeElement} currentIndex={index} />
                ))}
            </React.Fragment>
        )
    }
}

export default UserCardsWrapper;
