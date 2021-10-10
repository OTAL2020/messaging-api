# Discord API Documentation
In this document, we will be showing how to

1: Creating a Discord application, Adding a bot to that application & finnaly creating a link for share your bot with other Discord guilds

## Creating your Discord Application, adding a Discord bot & setting up a link to share your bot
To make sure of the api we will need to make a Discord Applcation & a bot for our API to communicate with.

### Creating our Discord application

// discordBotMessage image here

First of all login to discord on their website, then head over to the [Application](https://discord.com/developers/applications)site.
Click on create Applications button and give your application a name, for this tutorial i will name the application DiscordAPIDocumentation
// new applicaton image

// application info image
you should be redirected to your application main minfo shown above in image, feel free to add a description or an image if wanted
after your have eddited your application as wanted, click on the bot tab to make a bot

### Creating our Discord Bot
// discordAddBot image

once you have directed yourself to the bot tab, click add bot and confirm inside the popup box to create it

// discordBotInfo

your bot will now be created and you will now see your bots infomation, feel free to add a bot image or description if you like

once your are happy with your bot infomation and image for it, head over to the Oauth2 tab inside the left side menu.

### Setting up Oauth2 link to share our bot to Discord Guilds
// discordRedirecturl Image

next we will shall add a redirect url so we can access the Oauth2 features, you may add your own url, for this example i shall use google.com

// discordOauth2example image

once a url has been added, you should see your url show up below inside the dropdown bowx below, next we shall move on to the scopes tab
check the bot box and below a new bot tab shall open, for this example we shall use the Adminstrator box for all features allowed
now if we go back to the bottom of the scopes tab, a link will have been autogenerated, 
we shall be using this link and sending it to the guild owners for them to be added your bot to there discord guild
once another guild onwer clicks this links and authorizes your bot onto their server, your bot will be added to their guild and your done

if you wish to add this example bot we made today, i will leave the link for you to add it in [DiscordAPIDocumentationBot](https://discord.com/api/oauth2/authorize?client_id=896600592691109938&permissions=8&redirect_uri=https%3A%2F%2Fwww.google.com%2F&scope=bot)