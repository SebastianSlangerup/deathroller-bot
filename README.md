# What is this for?
This is a Discord bot made to let two users duel each other in every WoW raiders favorite past time... deathrolling!
### What is death-rolling?
Death-rolling is essentially gambling. You start by rolling a random number from a bet (e.g. 1000 gold).
The next person then rolls a random number from the value that you just rolled. The game continues like this until
someone hits 1, in which case they lose and have to pay the other person.

An example of a game would look like this:
```
User 1) /roll 10000
result: 4359
User 2) /roll 4359
result: 320
User 1) /roll 320
result: 100
User 2) /roll 100
result: 4
User 1) /roll 4
result: 1
User 1 lost the match
```

# Installation process

1) Clone the repository: `git clone git@github.com:SebastianSlangerup/deathroller-bot.git`
2) Copy the example file: `cp config.example.json config.json`
3) Fill in the `config.json` file with the relevant values
4) Run `npm run deploy` to publish the commands to your Discord server
5) Run `npm run start` to start the bot

# Disclaimer
This bot is made purely for fun. By making this bot, I do not condone in the act of gambling, or motivate others to gamble.
