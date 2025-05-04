import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();

mongoose.connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to auth database');
}).catch((err) => {
    console.log('Error connecting to database: ', err);
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const FinanceSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    income: {
        type: Number,
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    household: {
        type: Number,
        required: true,
    },
    living: {
        type: Number,
        required: true,
    },
    extras: {
        type: Number,
        required: true,
    },
    saved: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('users', UserSchema);
const FinanceProfile = mongoose.model('finances', FinanceSchema);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/", (req, resp) => {
    resp.send("Backend connected");
});

app.post("/register", async (req, resp) => {
    const { email } = req.body;
    const newUser = new User(req.body);
    try {
        const oldUser = await User.findOne({ email });
        if(oldUser)
        {
            resp.status(409).json({ message: "This User already exists!" });
        } else
        {
            const user = await newUser.save();
            resp.status(201).json({ message: user._id.toString() });
        }
    } catch (e) {
        resp.status(500).json({ message: "Server error", error });
    }
});

app.post("/login", async (req, resp) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if(findUser)
        {
            if(findUser.password == password)
            {
                const uid = findUser._id.toString();
                const userFinance = await FinanceProfile.findOne({uid});
                resp.status(201).json({ id: uid,
                    name: findUser.name,
                    income: userFinance.income,
                    rent: userFinance.rent,
                    household: userFinance.household,
                    living: userFinance.living,
                    extras: userFinance.extras,
                    saved: userFinance.saved,
                });
            }
            else
            {
                resp.status(400).json({ message: "The password is not correct!" });
            }
        } else {
            resp.status(409).json({ message: "The email is not registered!" });
        }
    } catch (e) {
        resp.status(500).json({ message: "Server error", error });
    }
});

const client = new OpenAI({
    apiKey: process.env.CHATGPT_API_KEY, // This is the default and can be omitted
});

app.post("/chat", async (req, res) => {
    const { messages } = req.body;
    try {
        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            instructions: 'You are an expert in financial advice.',
            input: req.body.input,
        });

        console.log(response.output_text);
        res.status(200).json(response.output_text);
    } catch (error) {
        console.error('OpenAI API Error:', error.response?.data || error.message);
        res.status(500).send('ChatGPT error');
    }
});

app.post("/profile", async (req, res) => {
    const { uid } = req.body;

    try {
        const findData = await FinanceProfile.findOneAndUpdate(
            {uid},
            {$set: req.body},
            {new: true, upsert: true}
        );
        res.status(201).json({ message: "Success" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.listen(5000, () => {
    console.log("App running on port 5000");
});