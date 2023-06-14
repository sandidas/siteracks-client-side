// db.js

import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
