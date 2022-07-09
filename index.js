const mineflayer = require('mineflayer')

function createBot () {
    const bot = mineflayer.createBot({
    host: "camio.aternos.me",
    port: "15874",
    username: "ELADMINDELSERVER",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/reginster ELADMINDELSERVER ELADMINDELSERVER')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      target = bot.players[username].entity
      let entity
      switch (message) {
        case ';start':
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Spawned JEJE Chiteado')
        })
        bot.on('death', function() {
          bot.chat('I died, respawning')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}

createBot()

setInterval(function(str1, str2) {
  console.log(str1 + " " + str2);
   createBot()
}, 27000, "Hello.", "How are you?");


