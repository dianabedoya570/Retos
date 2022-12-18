# Make It Real - Single price grid component

This is a solution to the fourth project of the Make It Real course.

## Table of contents

- [Make It Real - Reto React primeros pasos (#make-it-real---Reto React primeros pasos)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

In this challenge, we have developed a gallery for Rick and Morty characters
consuming an api service

### Screenshot

![Desktop](/public/captura/RetoReact.PNG)

## My process

### Built with

- Flexbox
- Grid
- React
- Axios
- postman

### What I learned

We learned how to create a basic app with react,
and how to make an API request and use the result inside the de app.

```js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



```

Axios

```js

export default function Cards() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  });

  return (
    <div className="main">
     <h1>Characters</h1><br/>
     <section className="cards_container">
      
      {characters.map((personajeAct, pos) => {
        return <Card personaje={personajeAct} />;
      })}
    </section>
    </div>
  );
}
```
### Continued development

I will be nice to learn more about react

### Useful resources

- [React](https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) - Useful React material for begginers.
- [Axios](https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/) - Useful Axios tutorial 

## Author

- github - [Diana Bedoya](https://github.com/dianabedoya570)
- github - [Andres Pavas](https://github.com/pavas0921)

## Acknowledgments

Nice help from out mentors. Sergio and Daniel.
