(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "italocjs";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */
         
        bot.commands.allahuCommand = {
            command: 'allahuakbar',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me ALLAHU AKBAAAAR ALLAHU AKBAAAAAAAAAAAR!!!");
                    API.sendChat("/me ALLAHU AKBAAAAR ALLAHU AKBAAAAAAAAAAAR!!!");
                     var alahunm = Math.floor((Math.random() * 10) + 1);
                    if (var > 8)
                    {
                    API.sendChat("/me SE FODEU, TOMOU BAN!!!");
                    }
                    if (var > 2 && var < 8)
                    {
                    API.sendChat("/me SE FODEU, FOI PRO ULTIMO!!!");
                    }
                    if (var > 0 && var <2)
                    {
                    API.sendChat("/me CAGAO, GANHOU FRIST!!!");
                    }
                }
            }
        };

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BOT SADAN",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 20,
        afkRemoval: true,
        maximumDc: 5,
        bouncerPlus: false,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 8,
        timeGuard: true,
        maximumSongLength: 5,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 2,
        lockskipReasons: [
            ["theme", "Bota outra - fora do tema/evento"],
            ["op", "Essa porra toca demais! porra!, HAIL SATAN"],
            ["history", "Ja tocou essa merda jumento, olha o caralho do historico, ALLAHU AKBAAR"],
            ["nsfw", "Oba, tetinhas, mas se fodeu vou pular, ALAHU AKBAAAAAAR"],
            ["erro", "Video indisponivel, como sou bonzinho, vou te jogar em 2 <3"]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 5,
        motd: "Entrem no nosso website e leia as regras/conheca a staff > http://italocjs.wix.com/panelinharadioativa",
        filterChat: true,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: "http://italocjs.wix.com/panelinharadioativa#!regras/c10fk",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://italocjs.wix.com/panelinharadioativa",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/italocjs/basicBot/master/basicBot.js", extend);

}).call(this);
