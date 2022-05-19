const mongoose = require('mongoose');
db_name = "project_manager"

mongoose.connect(`mongodb+srv://root:root@clustermay.awgd7.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to DB'))
    .catch(err=> console.log(`There was an error: ${err}`));