const mongoose = require('mongoose');
db_name = "project_manager"

mongoose.connect(/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to DB'))
    .catch(err=> console.log(`There was an error: ${err}`));
