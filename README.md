# _The New Yorker_ Technical Test (Emma Mansell)

Welcome to my technical test! This is a simple React app that renders a front-end client and interacts with NewsAPI. 

## Setting it up

You will need [nvm](https://github.com/creationix/nvm) and [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

You will also need to get your own API key from [NewsAPI](https://newsapi.org/).
Add a 'config.js' file in [/src](/src). The contents of this file should just be your API key:

**src/config.js:**
```
export const API_KEY = "yourkey";
```


Once that's set up and you're in the repo, run:

```
nvm use
npm install
npm run start
```

The site should run locally at http://localhost:8080/.

## What's included
The site displays a nav bar, a footer, and cards for each story that include an image, title, and description. Each story links to itself on [The New Yorker](newyorker.com), and the byline links to the author's contributor page. The site is mobile responsive, and designed in Material UI.  

I also added [pagination](https://www.npmjs.com/package/react-paginate).

## Next steps
Given more time to work on this, I would add a search bar, functionality to the links in the nav bar, and testing. I would also tighten up the styling across the board and break down the main page of the app into more distinct components. 
