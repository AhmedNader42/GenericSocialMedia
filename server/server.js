import config from '../config/config';
import app from './express';
import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to ${config.mongoUri}`);
});
app.listen(config.port, (err) => {
    if (err) {
        console.log(`SERVER START ERROR : ${err}`);
    }
    console.info(`Server started on port ${config.port}`);
});
