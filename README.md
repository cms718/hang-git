# Welcome to Hang-Git

A hangman game to help Makers students learn git command-line. Git can often be overwhelming for the unitiated, so we looked to help those new to coding learn some git commands whilst having fun.

# Created by:
* [Charlie Slater](https://github.com/cms718)
* [Becca Parker](https://github.com/BecaLParker)
* [Jonny Kelly](https://github.com/JD-Kelly)
* [Russel Horth](https://github.com/russell-h)
* [Maria Valero](https://github.com/mvgame74)
* [Elliot Horton-Stephens](https://github.com/ells101)


## Deployment 
We deployed onto Heroku with a CI/CD pipeline using CircleCI. We set-up our CI/CD pipeline to enable automatic deployment to Heroku once our tests had passed.
You can find our game [here](https://team-hang-git.herokuapp.com/)


## Installing and running the game locally

```
git clone https://github.com/cms718/hang-git
cd hang-git
npm install
npm start
```

## Running tests

In order to run tests, from the root directory you can run:
```
npm test
```

And to see test coverage, you can run:

```
npm run test:coverage
```

## Technologies / Methodologies

We created our base repo using the command

```
npx create-react-app hang-git
```

