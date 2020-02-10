# YOOBIC London Dev Hiring Project
## The toc
 + [The vision](#the-vision)
 + [The big picture](#the-big-picture)
 + [The ask](#the-ask)
 + [The spec](#the-spec)
 + [The setup](#the-setup)
 + [The git tips](#the-git-tips)
 + [The designs](#the-designs)
 + [The guides](#the-guides)
 + [The lifeline](#the-lifeline)

## The vision
Hi, thanks your interest in YOOBIC and for agreeing to take on this small project. This will help us get to know you and your skills a bit better, and will hopefully be more fun and more useful than coding on a whiteboard.

We want you to build a a small demo app in [ionic](https://ionicframework.com/). We're using ionic internally at YOOBIC to build a version of our mobile app for legacy devices, and a lot of the work in this role is going to be about building ionic2 app components.

We understand that this is probably a brand new framework to you; you're probably going to need to take some of the time to learn it. That's actually entirely the point. The JavaScript world is constantly evolving and here at YOOBIC we put a lot of our efforts into evolving along with it. We're constantly learning and we want to see that you can too. In fact if you already have experience building projects in Ionic or Angular7 let us know! We'd love to take a look and we'll talk about what we'd like you to do instead.

>***Nota bene***

>1) Ionic4 is has been recently released and it may have some bugs and kinks to be worked out. This means your app likely will too. If that's the case, it's fine. We're going to be looking more at how you built it than at what you built. Moreover, if you can't make it work, or you're struggling to finish in a reasonable amount of time, again: don't sweat it. We want to see what you've learned; if you don't have time to build all of it, then feel free sketch out the missing pieces and tell us how you'd build them and wire it all together. 

>2) We intend this to be an engaging learning opportunity for you. Have fun with it! If you are feeling comfortable and want to up the challenge, go beyond the spec. However, please try to hit the targets in the spec before going overboard. We're going to want to see what you've done with the core pieces first. We want to be able to see your whole app as well as review your code when we do our follow-up interview, so we advise you don't waste time adding what we're not going to get to see.

## The big picture
(We want you to build this)

![wireframes](https://cloud.githubusercontent.com/assets/1513265/15188880/a24de426-17b0-11e6-82fd-252b59b9c8d3.png)

## The ask
Actually we want you to build is what you see above with a slight change. Instead of building the CHAT view as you see above, we want a DETAIL view that show you the details of one of the items from the MASTER LIST. Here the items are presented as missions, but they don't have to be in your app. You can make them Heroes *á la* the [Angular2 Quickstart](https://angular.io/docs/ts/latest/quickstart.html) or use the [Star Wars API](http://www.swapi.co) to present Star Wars characters, or really anything you want. Have fun with it, but keep in mind that we're really interested in how you build the guts of the app, moreso than the views and UX elements themselves. Feel free to use minimal or boiler-plate style designs, or if you're really keen you can try to replicate ours (see [The designs](#the-designs) below). If you find yourself with extra time on your hands and are having fun, go ahead and add a chat view, or other interesting views. The views aren't the key piece we're interested in here, but they are a way to showcase some of your other abilities/creativity.

## The spec
#### Views
View | Description | Desired behavio(u)r
--- | --- | ---
**Sign-in** | A sign-in view. Needs username and password inputs as well as a sign-in button. Make the password field hide any characters that get entered. | The input boxes should take text input, and the sign-in button should work. On a basic level, just have the sign-in button take you directly to the Master List. The actual sign-in process is fine to mock. Of course, we'd love your app to have some logic inside it's own service with a User entity etc., but add that on a second pass after you've finished the rest of the app. Both versions are completely acceptable for this spec. 
**Menu** | Make a side menu with some nav links. *(Hint: ionic2 has a menu ui component you should probably use.)* For the links, use the ones in the [wireframe](#the-big-picture), or  make up your own. | Make at least one link work to take you to the master list view and another work to take you to the sign-in. The rest can be disabled, link to the same view, or just left dead. The user should have a way of opening the menu from every view except the sign-in, and when opened the menu should push the current view out of the way. Opening the menu should not change the current view unless the user clicks one of the nav links.
**Master List** | This should be a list of item cards. *(H: Also ionic2 ui components)*. We don't want these to be hard-coded somewhere, we want them to be populated from some kind of store/backend. The cards for the items can look like what you want, but they need to be able to display a `picture`, a `title`, and `some details or text` from the item. Feel free to add some elements to the cards, e.g. upvote/downvote-buttons or badges, but they aren't at all necessary. | The list should scroll, don't worry about making it infinite. Build a service to retrieve the cards. Don't focus too much on the store itself (you can just use an open data API like the [Star Wars API](http://www.swapi.co)). Instead focus on the service that retreives the data from the store and turns them into interactive item card components. **This service is one of the main things we're interested in so it's okay to spend some time getting it right,** ***but don't be afraid to move on if you get too stuck.*** Clicking a card should take the user to the detail view for that card's item. 
**Detail** | This is a detail view for the item selected. It is primarily just a bigger version of the item's card from the master list view. It should display the picture from the card, but the picture should bigger. It should have the title, but bigger. It should have the details from the card, but more or all of them. Include a button that takes you back to the master list view. | The detail view doesn't really need a lot of interactive elements, other than the back button (and the menu). If you added interactive buttons on the cards in the master list view, go ahead and add the same here, probably as bar buttons after the detailed body information. 
***Chat (Bonus)*** | *If and only if you have free time and really feel the need to show off, take your best shot at making a chat view too.* | *Be warned, since we're looking at logic and services more than views, we're going to expect your chat to be somewhat functional.*

#### Language
You can build the app in typescript or javascript (ES6). We recommend trying typescript, since much of the documentation for anular2 & ionic2 out there is in typescript. However, if you prefer and/or are just more comfortable in javascript, we're cool with either one. 


## The setup
If you've read through the ionic2 & angular2 docs thoroughly and want to try to roll your own from scratch, feel free, but we recommend against it. Most of the work is boilerplate and not particularly interesting. Plus, [ionic's cli](https://ionicframework.com/docs/installation/cli) includes a tutorial that will walk you through building the basics of building your app's skeleton.

Follow with ionic2's [Getting Started](https://ionicframework.com/docs/building/starting). Do the [installation](https://ionicframework.com/docs/installation/cli), and then follow the [tutorial](https://ionicframework.com/docs/angular/your-first-app). Once you've done that you'll have most of the functional app and the views you need. Building the services will be the next step.

## The git tips

>**Git Tip 1**: *Commit early, commit often.* While it's okay if you miss some stuff, it'll help us greatly in reviewing your project if you try to commit regularly using git. We recommend doing an initial commit immediately after finishing the tutorial, in case you need to start over from there.

>**Git Tip 2**: *Clear commit messages.* The better your commit messages, the better your `git log`. While you're not likely to take a lot of breaks in the middle of working on the project, this will make it easier to understand what you thought happened when you made that commit a few hours ago. Feel free to whatever style of commit messages you prefer or are most comfortable  for this project, as long as it's clear and understandable. The best commit message guidelines we've encountered (and the one we use at YOOBIC) are from the [Angular/Angular Contrib Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

<!-- TODO: The link below is broken, it needs to be fixed but I don't know how! -->
<!-- ## The designs
You can check out our [style guide](https://app.frontify.com/d/GEu6ejIkiL3x/yoobic-style-guide) for color ideas if you don't have your own. Also if you're really keen you can try to replicate our app's designs. Take a look at the images in the [Current Designs](current-designs) folder in this repo. -->

## The guides
##### Ionic
 + [Docs](http://ionicframework.com/docs/)
 + [Building apps with Ionic 2](http://adamdbradley.github.io/building-with-ionic2/#/)
 + [Ionic Conference App (complete ionic2 example app)](https://github.com/driftyco/ionic-conference-app)

##### Angular2
 + [Docs](https://angular.io/docs/)
 + [5-minute Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
 + [Tutorial](https://angular.io/docs/ts/latest/tutorial/)
 + [Awesome Angular2](https://github.com/AngularClass/awesome-angular2)

##### Typescript
 + [Official Tutorial](https://www.typescriptlang.org/docs/tutorial.html)
 + [Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
 + [TypeStrong's typescript workshop](https://github.com/TypeStrong/learn-typescript)

## The lifeline
If you're done, desperate, or just want to chat about the project, get in touch with me at my yoobic.com email address, estrickland@ (please tag/preface the subject with `[hiring-project]`). I can answer any questions you might have or schedule time for a skype chat to help you out if you get stuck. Don't hesitate to ask for help if you need it, but please try it on your own first even if you think you didn't get it. You probably understood more than you thought. Asking for help won't be held against you, but don't use me as a crutch.

### GOOD LUCK!
