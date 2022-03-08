# triviaGame
Trivia Game pulling from the https://opentdb.com/ API. Our goal was to get practice with Redux and working with databases, particularly Mongo-DB. 

Some Added Functionality includes: Logging in as a user, creating a user, selecting a category to answer questions within, implementing a points system and lives that are updated based on answer inputs from user, and an end screen to take users back to the beginning of the application.

Incomplete Functionality: Loading a saved game: At the moment, we have the ability to save a game and load the game, but if we lose the game and decide to restart, the previous saved game loads. Additionally, when a different user logs in, the game is loaded with another user's save state. Countdown Timer: We planned on implementing a countdown timer per question, but were not able to get that functionality up and running. Win & Restart: We did not implement the win scenario, so there has to be a screen built out for that and for the ability to restart the game at any point

Stretch Functionality:  OAuth implementation: we attempted to add Oauth as indicated through our branch, but we decided to abandon it. Also this is a SPA, so Oauth might be tricky. Highest Score: Keeping track of high scores across users Progressive Difficulty: If a user answers a given amount of questions in a certain difficulty, fetch questions at a difficulty above that. Trivia database has easy, medium, and hard as difficulties. **note some categories do not have all the difficulties** 
