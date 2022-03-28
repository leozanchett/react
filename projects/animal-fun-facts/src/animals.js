const animals = {
    dolphin: {
      image: 'https://www.thoughtco.com/thmb/AvVf2u-2pJZC0aQD-kUlv2ESZD4=/5120x2880/smart/filters:no_upscale()/atlantic-bottlenose-dolphin--jumping-high-during-a-dolphin-training-demonstration-154724035-59ce93949abed50011352530.jpg',
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
      image: 'https://www.collinsdictionary.com/images/full/lobster_107132279.jpg',
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Purple_and_Orange_Starfish_on_the_Beach_%282884079538%29.jpg',
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
  };

  export let hide;
  const hideFacts = () =>{
    hide = !hide;
    let doc = document.getElementById('background');
    console.log(doc);
    doc.hidden = hide;
  };

  export const imgArrayAnimais =  () => { 
    const animalArray = [];
    for(const anm in animals ){
        animalArray.push(
        <img
            onClick={displayFacts}
            key={anm}
            className='animal'
            alt={anm}
            src={animals[anm].image}
            aria-label={anm}
            role='button'/>
        );
    };
    return animalArray;
}

const displayFacts = (e) => {
  const fact = animals[e.target.alt].facts[Math.floor(Math.random() * 3)];
  document.getElementById('fact').innerHTML = fact;
  hideFacts();
}