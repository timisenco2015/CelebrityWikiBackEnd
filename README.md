# redSpaceBackEnd

## Description

 - A restful api built with NodeJS. 
 - End point for redSpaceFrontEnd. 
 - Access and process data from https://swapi.co/. Access data by calling urls from swapi.co
 - A well tested application.

## Development server

Run `node server` for a dev server. To able to use this applications, users will have to set environment variables.The environment file is also upload under this repository on github.


## Running unit tests

Run `npm test` to execute the unit tests via [Mocha](https://github.com/mochajs/mocha).


## Build Code Structure
```bash
| -- src
  |
  | -- app 
  |
    | -- apiRequest
    |
      | -- starWarsAPIRequest.js
    |
    | -- entity
    |
      | -- films.js
      |
      | -- homePlanet.js
      |
      | -- person.js
      |
      | -- species.js
    |
    | -- repo
    |
      | -- personRepo.js
    |
    | -- routes
    |
      | -- api
      |
        | -- personRoute.js
      |
    |
  | -- test 
  |
    | -- filmsTest.js
    |
    | -- homePlanetTest.js
    |
    | -- personRepoTest.js
    | 
    | -- personRouteTest.js
    |
    | -- personTest.js
    |
    | -- speciesTest.js
  |
|
  ```

## Code details
```bash
   
  - films (entity): the Films class
  
    -- methods: setTitle(title), getTitle(), setDirector(director), getDirector(), setProducers(producers), getProducers(), 
                setReleaseDate(releaseDate), getReleaseDate()
                
  - homePlanet (entity): the HomePlanet class
 
    -- methods: setTitle(title), getTitle(), setTerrain(terrain), getTerrain(), setPopulation(population), getPopulation()
 
 - person (entity): the Person class
 
    -- methods: setName(name), getName(), setHeight(height), getHeight(), setMass(mass), getMass(), setHairColor(hairColor),      
                getHairColor(), setSkinColor(skinColor), getSkinColor(), setGender(gender), getGender(),   
                 setBirthYear(birthYear), getBirthYear(), setHomePlanet(homePlanet), getHomePlanet(), setSpecies(species),     
                 getSpecies(), setFilms(films), getFilms()
                 
 - species (entity): the Species class
 
    -- methods: setName(name), getName(), setAverage(average), getAverage(), setClassification(classification), 
                getClassification(), setLanguage(language), getLanguage()
 
  - personRepo
      
      -- methods:
      
          --- people(): get person details
          
          --- homeWorld(): get person homeworld
          
          --- film(): get all films the selected featured in
          
          --- specie(): get person all species
  
  
  - routes
  
    -- api
    
      --- personRoute
      
        ---- router.get: get resource using the url provided
  
  
  - filmsTest.js: test file for Film class in entity folder
  
  - homePlanetTest.js: test file for HomePlanet class in entity folder
  
  - personTest.js: test file for Person class in entity folder
  
  - speciesTest.js: test file for Species class in entity folder
  
  - personRouteTest.js: test file for personRoute in routes/api folder
  
  - personRepoTest.js: test file for personRepo in repo folder      
         
    Well written test files using Mocha, chai, sinon, spy, assert
    
 - It uses flat-cache for caching
    
      
      
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

 
