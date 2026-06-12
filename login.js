// Login Feature - Working Code
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password && password.length >= 8;
}

function login(email, password) {
  if (!validateEmail(email)) {
    return { success: false, message: 'Invalid email format' };
  }
  if (!validatePassword(password)) {
    return { success: false, message: 'Password must be at least 8 characters' };
  }
  return { success: true, message: 'Login successful', user: email };
}

module.exports = { login, validateEmail, validatePassword };
