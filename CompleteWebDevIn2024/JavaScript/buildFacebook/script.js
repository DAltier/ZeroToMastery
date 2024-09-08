var database = [
  {
    username: 'andrei',
    password: 'supersecret',
  },
  {
    username: 'sally',
    password: '123',
  },
  {
    username: 'ingrid',
    password: '777',
  },
];

var newsFeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning!',
  },
  {
    username: 'Sally',
    timeline: 'Javascript is so cool!',
  },
  {
    username: 'Mitch',
    timeline: 'Javascript is pretty cool!',
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (username === database[i].username && password === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong credentials');
  }
}

signIn(userNamePrompt, passwordPrompt);
