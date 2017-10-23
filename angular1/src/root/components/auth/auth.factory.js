function AuthFactory($http, $localStorage, $rootScope, $window, AuthAPI) {
  var errorMap = {
      signUp: {
        '001': 'The email you entered is taken.',
        '002': 'The username you entered is taken.',
        '003': 'The phone number you entered is already registered.',
        '004': 'Your information has already been registered.'
      },
      login: {
        '001': 'The username or password you entered is incorrect.',
        '002': 'Your account has not been verified.',
        '003': 'Your account has been banned.'
      },
      '401': 'The reset code you provided is invalid.',
      '503': 'There was an error changing your password. Please try again.',
      fallback: 'An error occured processing your request. Please try again.',
      verify: 'There was an error verifying your account. Please try again.'
    },
    storage = $localStorage.uSTADIUM;

  function checkValidity(token) {
    var payload = token.split('.')[1];
    payload = $window.atob(payload);
    payload = JSON.parse(payload);

    token = isExpired(payload) ? logout() : token;

    return token;
  }

  function errorHandler(error, formType) {
    var errorMessage, errorType;

    error = error.data.code || error.status;

    if (errorMap.hasOwnProperty(formType)) {
      errorType = errorMap[formType];
      if (errorType.hasOwnProperty(error)) {
        errorMessage = errorType[error];
      } else {
        errorMessage = errorMap[error] || errorMap['fallback'];
      }
    } else {
      errorMessage = errorMap[error] || errorMap['fallback'];
    }

    return errorMessage;
  }

  function forgotPassword(user) {
    // api requires email parameter to be all lowercase
    if (user.email) { user.email = user.email.toLowerCase(); }
    return $http.post(AuthAPI.forgotPassword, user)
      .then(function(response) {
        return response;
      });
  }

  function getJWT() {
    var token = storage.token || null,
        validToken;

    validToken = token ? checkValidity(token) : null;
    return validToken;
  }

  function isExpired(payload) {
    return Date.now() / 10000 > payload.exp;
  }

  function logIn(user) {
    return $http.post(AuthAPI.logIn, user)
      .then(function(response) {
        setCredentials(response.data.data.token);
        return response;
      });
  }

  function logout() {
    delete storage.token;
    $rootScope.$broadcast('user_state_change', null);
    // return null to indicate token no longer exists
    return null;
  }

  function resetPassword(user) {
    return $http.post(AuthAPI.resetPassword, user)
      .then(function(response) {
        setCredentials(response.data.data.token);
        return response;
      });
  }

  function successHandler() {
    var success = 'Success! You should receive a verification code shortly.';
    return success;
  }

  function setCredentials(token) {
    storage.token = token;
    $rootScope.$broadcast('user_state_change', true);
  }

  function signUp(user) {
    // api requires email parameter to be all lowercase
    user.email = user.email.toLowerCase();
    return $http.post(AuthAPI.signUp, user)
      .then(function(response) {
        return response;
      });

  }

  function verify(user) {
    // api requires email parameter to be all lowercase
    user.email = user.email.toLowerCase();
    return $http.post(AuthAPI.verify, user)
      .then(function(response) {
        setCredentials(response.data.token);
      });
  }



  return {
    errorHandler: errorHandler,
    forgotPassword: forgotPassword,
    getJWT: getJWT,
    login: logIn,
    logout: logout,
    resetPassword: resetPassword,
    signUp: signUp,
    successHandler: successHandler,
    verify: verify
  }
}

module.exports = AuthFactory;
