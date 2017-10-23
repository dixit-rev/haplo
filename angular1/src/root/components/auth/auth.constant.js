var prodUrl = 'https://ustadium-api.herokuapp.com/auth',
    devUrl = 'https://ustadium-api-dev.herokuapp.com/auth';

module.exports = {
  // POST username, password, email, phone number
  signUp: devUrl.concat('/signup'),
  // POST verification code
  verify: devUrl.concat('/verify'),
  // POST username and password
  logIn: devUrl.concat('/token'),
  //POST username phone or email
  forgotPassword: devUrl.concat('/forgot-password'),
  // POST username, code, new password
  resetPassword: devUrl.concat('/reset-forgotten-password')
};
