import React, { useState, useEffect } from 'react';

export default function Counter() {
   const [clickCount, setClickCount] = useState(0);

   // your code here
   const increment = () => {
      setClickCount((prev) => prev + 1);
   }

   useEffect(() => {
      document.addEventListener('mousedown', increment);
      /*
         Cada vez que nosso componente é renderizado, nosso efeito é chamado, adicionando
         outro ouvinte de evento. Com apenas alguns cliques e renderizações, anexamos muitos
         ouvintes de eventos ao DOM! Precisamos limpar depois de nós mesmos!
      */
      return () => {
         document.removeEventListener('mousedown', increment);
      };
       
   })

   return (
      <h1>Document Clicks: {clickCount}</h1>
   );
}

