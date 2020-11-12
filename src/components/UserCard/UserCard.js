import React from 'react';
import './UserCard.css';

const UserCard = ({ id, name, username, email, address, company, phone, website, removeElement, currentIndex }) => {
    const cardClass = 'Card';

    return (
       <div className={cardClass}>
            <p> className="Card_subTitle">My id is: { id }</p>
            <p>Name: { name }</p>
            <p>UserName: { username }</p>
            <p>Email: { email }</p>
            <p>Phone: { phone }</p>
            <p>Website: { website }</p>
           <div>
               <p>Street: { (address && address.street) || '-'} </p>
               <p>Suite: { (address && address.suite) || '-'} </p>
               <p>City: { (address && address.city) || '-'} </p>
               <p>Zipcode: { (address && address.zipcode) || '-'} </p>
           </div>
           <div>
               <p>Name: { (company && company.name) || '-'} </p>
               <p>CatchPhrase: { (company && company.catchPhrase) || '-'} </p>
               <p>BS: { (company && company.bs) || '-'} </p>
           </div>
            <button onClick={() => removeElement(currentIndex)}>Remove User</button>
        </div>
    )
};

export default UserCard;