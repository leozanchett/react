import React from 'react';

export class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         password: '123',
         authorized: false
      };
      this.authorize = this.authorize.bind(this);
   }

   authorize(e) {
      const password = e.target.querySelector('input[type="password"]').value;
      const auth = password == this.state.password;
      this.setState({
         authorized: auth
      });
   }

   render() {
      const login = (
         <form action="#" onSubmit={this.authorize}>
            <input type='password' placeholder='Password'>
            </input>
            <input type='submit'>
            </input>
         </form>
      );

      const contactInfo = (
         <ul>
            <li>
               client@example.com
            </li>
            <li>
               555.555.5555
            </li>
         </ul>
      );

      return (
         <div id="authorization">
            {this.state.authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
            {this.state.authorized ? contactInfo : login}
         </div>
      );
   }
}