import React from 'react'
import './userInfo.scss'

function UserContacts(props) {
    return (
        <div className="user-info">
            <h2>{props.data.name}</h2>
            <form action="">
                <h3>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                <div className="user-info__data">
                    <div>
                        <label for="email">Email: </label>
                        <input type="text" name="email" placeholder="Email" value={props.data.email} />
                    </div>
                    <div>
                        <label for="tel">Телефон: </label>
                        <input type="tel" name="tel" placeholder="+380(__)___-__-__" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserContacts