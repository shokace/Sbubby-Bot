const botconfig = require("./botconfig.json");
const Discord = require("discord.js"); //requires secret key

const bot = new Discord.Client({disableEveryone: true});

const filename = "dump.txt";
const MAX_ELEMENTS = 100;


bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`); 
	bot.user.setActivity("on McNaldos");		//set activity for everyone to see
	var PythonShell = require('python-shell');	//runs the python script to pull urls
	
	PythonShell.run('sbubby_reddit_bot.py', function (err) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
	});
});




bot.on("message", async message => {
	if(message.author.bot) return;
	//if(message.channel.type === "dm") return;
	

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	
	if(cmd === `${prefix}sbubby`){
		
		var rand_int = Math.floor((Math.random() * MAX_ELEMENTS) + 1); //random number generator
		try
		{
			var fileContents = fs.readFileSync("dump.txt"); //try to open filename "dump.txt"
		}
		catch (err) {
				console.log("\ndump.txt does not exist or is corrupted/empty!\n");
				// Here you get the error when the file was not found,
				// but you also get any other error
		}
        var lines = require('fs').readFileSync(filename, 'ascii')
            .split('\n');
			
		var random_url = lines[rand_int].toString();	//make sure lines are in strings
		random_url = random_url.slice(0,-1); //slice out null terminator
		console.log(random_url);

		message.channel.send(random_url); //send random url
			
			
	}

});

bot.login(botconfig.token); //login with token