const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://khanh:2010@cluster0.dsclb.mongodb.net/test',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failed!');
    }
}

module.exports = {connect}