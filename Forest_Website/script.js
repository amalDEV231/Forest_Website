function validate() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('msg');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        errorMessage.style.color="red"; 
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.color="red"; 
    } else {
        errorMessage.textContent = 'Login Completed';
        errorMessage.style.color="white";   
    }
}
