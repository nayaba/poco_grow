## Poco Grow

Poco grow is a community driven journaling hub, centered around self-help and self-healing.  Join the Poco Grow community to get started using the app.  Once signed up, you can use the Poco Grow app to look through an index of inspiring journal prompts and even create some prompts of your own!  Simply click on the "Prompts" link in the navigation bar to see all user-created prompts.  Then click on "Create your own prompt" to add one of your own.  If you'd like to edit your prompt, simply click on it to open a page with "delete prompt" and "edit" options.  Happy journaling, and remember to grow little by little!

### Visit the Poco Grow App:
[View the Poco Grow App](https://nayaba.github.io/poco_grow/#/)

### View the deployed API:
[View on Heroku](https://poco-grow.herokuapp.com/)

### View the API repo:
[View the API](https://github.com/nayaba/poco_grow_api)

### Technology Stack
React & Django

### Unsolved Issues
- Would like to implement react-hooks-forms but thus far am unable to successfully deploy using them

### Planning, Process, and Problem-Solving Strategy
When planning this app I knew I wanted to create a community-driven hub for self-help with a focus on personal, hand written journaling as the primary tool.  As you'll notice with the user stories down below, I have a big vision for this app, so the first, and I think biggest hurdle for me to overcome was determining a **true** minimum viable product.  I had to cut a lot away in order to get started!

I started working with Django to create a simple backend consisting of a user and a single resource: a journal prompt.  It is worth noting here that I had some difficulty in deciding whether this should be the only resource, or if I should indeed create an option for **responses** to the journal prompts.  Ultimately I reviewed my mission for the app and determined that it is in the best interest of the user to write their journal responses down in a **physical** journal, as one of the goals of Poco Grow is to achieve personal balance between the analog and the digital in each member's life.

I wrote the frontend with React, using Hooks for the first time.  This is where I encountered many more problems than I anticipated, and found myself in many one-on-one's or group meetings with my peers for assistance and feedback.  The biggest problem I encountered with React Hooks was in implementing react-hooks-forms.  They were incredibly elegant forms in development, but I encountered so many problems deploying my client with these forms that I reverted back to plain-old html forms.  Luckily, I was able to maintain the same level of functionality, with a slightly less elegant solution.

### A catalog of routes (paths and methods) that the API expects.
| HTTP Method	| URL Path    | Action  | CRUD   |
| ----------- | ----------- | -----   | ------ |
| GET	        | /prompt     | index   | Read   |
| GET         | /prompt/:id | show    | Read   |
| POST	      | /prompt     | create  | Create |
| PATCH       |	/prompt/:id | update  | Update |
| DELETE	    | /prompt/:id | destroy | Delete |

### User Stories
User:
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.

Resource:
- As an unregistered user, I would like to see all journal prompts.
- As a signed in user, I would like to create journal prompts.
- As a signed in user, I would like to see only my journal prompts.
- As a signed in user, I would like to update my journal prompts.
- As a signed in user, I would like to delete my journal prompts.
- As a signed in user, I would like to create a private response to anyone's journal prompt.
- As a signed in user, I would like to note my mood after journaling.
- As a signed in user, I would like to update my journal response.
- As a signed in user, I would like to delete my journal response.

Stretch Goals:
- As a signed in user, I would like to see my journaling frequency (how many times I journaled this week)
- As a signed in user, I would like to set a journaling goal (ex: 3 times per week)
- As a signed in user, I would like to see a graph of my moods compared with journaling frequency.
- As a signed in user, I would like to create a collection of my favorite prompts.
- As a signed in user, I would like to "like" or "heart" a prompt
- As a signed in user, I would like to see how often my prompts are chosen for response
- As a signed in user, I would like to see how often my prompts are "liked"


### Wireframes
Before sign in:
![unregistered user](https://i.imgur.com/g08AouC.png)

After sign in:
![signed in user](https://i.imgur.com/1bb7MF1.png)


### Entity-Relationship Diagram
![ERD](https://i.imgur.com/rQHTWPz.png)
