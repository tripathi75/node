npm init --yes
npm install express
npm install mongodb
npm install nodemon

node app.js

open localhost:3000 in explorer

Now lets try to inport this project in AWS
But first lets create a new repo in GIT, so that we can create pipeline in AWS.
created https://github.com/tripathi75/node

Now on command prompt:

git init
git status
npx gitignore node
git status

git add . 
git status

git config --global user.email "tripathi75@yahoo.com"
git config --global user.name "Amitabh Tripathi"

git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/tripathi75/node.git
git push -u origin master

create elastic beanstalk application
create environment (nodejs) -> http://node-env.eba-k3nkmbn4.ap-south-1.elasticbeanstalk.com/


AWS dashboard -> code pipeline
- Use git repo
- use beanstalk project created above
- use node-env created above


update the port in AWS
- Elastic beanstalk -> node-env -> configuration -> software -> modify -> environment properties -> port 8081 

App URL -> http://node-env.eba-k3nkmbn4.ap-south-1.elasticbeanstalk.com/ 

To commit new file again

- git add app.js
- git commit -m "message"
- git push origin


Stop EC2 instance once done