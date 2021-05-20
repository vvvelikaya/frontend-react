import React from 'react'
import './userInfo.scss'

function UserPersonalInfo(props) {
    return (
        <div className="user-info">
            <form action="">
                <h3>ПEРСОНАЛЬНАЯ ІНФОРМАЦІЯ</h3>
                <div className="user-info__data">
                    <div>
                        <label for="firstName">Ім'я: </label>
                        <input type="text" name="firstName" placeholder="Ім'я" />
                    </div>
                    <div>
                        <label for="lastName">Прізвище: </label>
                        <input type="text" name="lastName" placeholder="Прізвище" />
                    </div>
                </div>
                <div className="user-info__data-split">
                    <div >
                        <label for="date">Дата народження: </label>
                        <input type="date" name="date" />
                    </div>
                    <div>
                        <label for="gender">Стать: </label>
                        <input type="text" name="gender" placeholder="Жіноча" />
                    </div>
                    <div></div>
                    <div>
                        <label for="cinema">Улюблений кінотеатр: </label>
                        <input type="text" name="сinema" placeholder="Планета кіно" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserPersonalInfo