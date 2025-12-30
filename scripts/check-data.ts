import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('MONGODB_URI is missing');
    process.exit(1);
}

const ProductSchema = new mongoose.Schema({
    name: String
}, { strict: false });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Product = mongoose.models.Product || mongoose.model<any>('Product', ProductSchema);

async function checkData() {
    try {
        await mongoose.connect(uri!);
        console.log('Connected.');
        const count = await Product.countDocuments();
        console.log('Product Count:', count);
        if (count > 0) {
            const one = await Product.findOne();
            console.log('First Product:', one?.name); 
        }
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}
checkData();
