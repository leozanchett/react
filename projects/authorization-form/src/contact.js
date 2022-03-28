import React from 'react';

export class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         password: 'swordfish',
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
      return (
         <div id="authorization">
            { this.state.authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
            <ul>
               <li>
                  client@example.com
               </li>
               <li>
                  555.555.5555
               </li>
            </ul>
         </div>
      );
   }
}