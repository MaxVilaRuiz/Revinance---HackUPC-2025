const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

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

const User = mongoose.model('users', UserSchema);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/", (req, resp) => {
    resp.send("Backend connected");
});

app.post("/register", async (req, resp) => {
    const { name, email, password } = req.body;
    const newUser = new User(req.body);
    try {
        const oldUser = await User.findOne({ email });
        if(oldUser)
        {
            resp.status(409).json({ message: "This User already exists!" });
        } else
        {
            const user = await newUser.save();
            resp.status(201).json({ message: "User registered" });
        }
    } catch (e) {
        resp.status(500).json({ message: "Server error", error });
    }
});

app.listen(5000, () => {
    console.log("App running on port 5000");
});