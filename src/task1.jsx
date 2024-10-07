// Task 1: Code Correction

// The current implementation of the user profile component has a bug in state management. Analyze and correct the code to ensure the user's name is displayed correctly.
// Code Example:

// class UserProfile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: 'Alex' };
//     }

//     // Incorrect function
//     changeName() {
//         this.state.name = 'Charlie';
//     }

//     render() {
//         return (
//             <div>
//                 <h1>User Profile</h1>
//                 <p>Name: {this.state.name}</p>
//                 <button onClick={this.changeName}>Change Name</button>
//             </div>
//         );
//     }
// }
// Expected Outcome:

// The changeName method should correctly update the state using this.setState.
// Ensure the method is properly bound to the component.

import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this); // Bind the method
    }

    changeName() {
        this.setState({ name: 'Charlie' }); // Correctly update the state
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;