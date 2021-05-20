import React from 'react'
import { Octokit } from '@octokit/core'
import UserContacts from '../components/userInfo/UserContacts'
import UserPersonalInfo from '../components/userInfo/UserPersonalInfo'

class UserInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: []
        }
    }

    async componentDidMount() {
        try {
            const octokit = new Octokit()
            
            const { data } = await octokit.request('GET /users/vvvelikaya')
            this.setState({
                userInfo: data
            })
            console.log(this.state.userInfo)
        } catch (e) {
            return new Error("x");
        }
    }

    render() {
        return (
            <div>
                <UserContacts data={this.state.userInfo} />
                <UserPersonalInfo data={this.state.userInfo} />
            </div>
        )
    }
}

export default UserInfo