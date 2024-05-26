function RandomIDGenerator(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

const randomString = RandomIDGenerator(25);

function changeURL(randomString) {
    let returnUrl = window.location.href; 
    history.pushState({}, 'Login - How to Own a Dragon', '/login?returnTo=' + encodeURIComponent(returnUrl) + '&randomID=' + randomString);
}

function createLoginPage() {

    let LoginPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head style="background-color: rgb(26, 26, 26);">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="language" content="English">
            <meta name="author" content="How to Own a Dragon">
            <title>Login - How to Own a Dragon</title>
            <link rel="icon" href="Assets/Logo/Logo.png" type="image/png">
        </head>
        <body style="background-color: rgb(26, 26, 26);">

        </body>
        </html>
    `;

    document.write(LoginPage);

    changeURL(randomString);
}
