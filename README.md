### 1st WEBSITE USING MEAN STACK
Code done by me following this series: [MEAN Stack front to back](https://www.youtube.com/playlist?list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ)  
**Note**: there are some differences from the tutorial code due to my personal style and me fixing some bugs.

#### Progress:
- [x] Basic backend with ExpressJs and NodeJs
- [x] Connect to database using Mongodb and mongoose
- [x] User registration
- [x] Authentication with json web token (jwt)
- [x] Initialize Angular with Angular-cli
- [x] Basic app-routing.module
- [x] Complete Register component with input validation
- [x] Register component sends POST request to backend to register user into database
- [x] Complete Login component
- [x] Login component sends POST request to backend to retrieve and store auth token
- [x] Complete Authorization using jwt
- [x] Implement AuthGuard with jwt authorization
- [x] Finish and successfully build to production!

#### How to get setup:
1. Have NodeJs and NPM installed
2. Have Mongodb installed
3. Clone this github repo
4. Run ```npm start``` from the cloned folder to get set up.
5. Have angular-cli installed by running ```npm install -g angular-cli```
6. Run ```ng serve``` from sub-folder 'angular' to get angular set up.

#### How to run after setup:
1. In one terminal, run ```npm service mongod start``` to start mongodb
2. In one terminal, run ```npm start``` from cloned folder
3. In one terminal, run ```ng serve``` from angular sub-folder
4. Go to localhost:4200

#### How to build angular to production:
1. run ```ng build``` from angular sub-folder
2. run ```npm start``` from cloned folder
3. Go to localhost:3000