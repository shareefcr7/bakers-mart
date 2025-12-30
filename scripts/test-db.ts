
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const uri = process.env.MONGODB_URI;
console.log('Testing connection to:', uri ? uri.replace(/:([^:@]+)@/, ':****@') : 'undefined');

if (!uri) {
    console.error('MONGODB_URI is missing');
    process.exit(1);
}

async function testConnection() {
    try {
        console.log('Connecting...');
        await mongoose.connect(uri!);
        console.log('Successfully connected to MongoDB!');
        console.log('Connection state:', mongoose.connection.readyState);
        await mongoose.disconnect();
        process.exit(0);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Connection Failed:', message);
        if ((err as Error).name === 'MongooseServerSelectionError') {
            console.error('Hint: Check your IP Whitelist in MongoDB Atlas.');
        }
        process.exit(1);
    }
}

testConnection();
