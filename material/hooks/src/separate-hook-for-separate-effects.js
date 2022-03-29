import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch-social-media';

export default function SocialNetwork() {
   const [menu, setMenu] = useState(null);
   useEffect(() => {
      get('/menu').then((response) => setMenu(response.data));
   }, []);

   const [newsFeed, setNewsFeed] = useState(null);
   useEffect(() => {
      get('/news-feed').then((response) => setNewsFeed(response.data));
   });

   const [friends, setFriends] = useState(null);
   useEffect(() => {
      get('/friends').then((response) => setFriends(response.data));
   });

   const Menu = () => {
      return (
         !menu ? <p>Loading..</p> : (
            <nav>
               {menu.map((menuItem) => (
                  <button key={menuItem}>{menuItem}</button>
               ))}
            </nav>
         )
      )
   };

   const Feed = () => {
      return (
         !newsFeed ? <p>Loading..</p> : (
            <section>
               {newsFeed.map(({ id, title, message, imgSrc }) => (
                  <article key={id}>
                     <h3>{title}</h3>
                     <p>{message}</p>
                     <img src={imgSrc} alt='' />
                  </article>
               ))}
            </section>
         )
      )
   }

   const Friends = () => {
      return (
         !friends ? <p>Loading..</p> : (
            <aside>
               <ul>
                  {friends
                     .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                     .map(({ id, name, isOnline }) => (
                        <li key={id} className={isOnline ? 'online' : 'offline'}>
                           {name}
                        </li>
                     ))}
               </ul>
            </aside>
         )
      )
   }


   return (
      <div className='App'>
         <h1>My Network</h1>
         <Menu />
         <div className='content'>
            <Feed />
            <Friends />
         </div>
      </div>
   );
}
