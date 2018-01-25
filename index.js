const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const path = require('path');




mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    // maxAge allows the cookie to last for 30 days
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/authroutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  // express will serve up production assets like main.js file or main.css
app.use(express.static('client/build'));

  // express will serve up the index.html file if it doesnt recognize the route

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
