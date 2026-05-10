const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Aise code likhna matlab jindgi narak
app.get('/login', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        
        // Yeh request handle ki jaegi from public folder
        <link rel="stylesheet" href="style.css" />
        </head>
        <body>

        <div class="login-container">
            <form class="login-form">
            <h2>Login</h2>

            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button type="submit">Login</button>

            <p class="signup-text">
                Don't have an account? <a href="#">Sign Up</a>
            </p>
            </form>
        </div>

        </body>
        </html>
    `)
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});