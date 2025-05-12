
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .welcome-message {
            background-color: #808080;
            color: black;
            padding: 5px 12px;
            margin-right: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 2px solid black;
            border-radius: 10px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: bold;
        }
        .logout-btn {
            background: #666666;
            color: black;
            border: 2px solid black;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-weight: bold;
        }
        .logout-btn:hover {
            background: #555555;
        }
        .auth-buttons {
            display: flex;
            align-items: center;
        }
        .cart-box {
            margin-right: 15px;
        }
    `;
    document.head.appendChild(style);
}


function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const loginRegister = document.getElementById('loginRegister');
    const existingWelcome = document.querySelector('.welcome-message');

    if (existingWelcome) {
        existingWelcome.remove();
    }

    if (loggedInUser) {
        if (loginRegister) {
            loginRegister.style.display = 'none';
        }

        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.innerHTML = `
            Welcome, ${loggedInUser.username}!
            <button class="logout-btn" onclick="logout()">Logout</button>
        `;

        const authButtons = document.querySelector('.auth-buttons');
        if (authButtons) {
            authButtons.insertBefore(welcomeMessage, loginRegister);
        }
    } else {
        if (loginRegister) {
            loginRegister.style.display = 'flex';
        }
    }
}


function logout() {
    localStorage.removeItem('loggedInUser');
    checkLoginStatus();
    window.location.href = 'Maincode.html';
}


document.addEventListener('DOMContentLoaded', () => {
    addStyles();
    checkLoginStatus();
}); 