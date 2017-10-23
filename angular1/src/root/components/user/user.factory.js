function UserFactory($http, $window, AuthFactory, UserAPI) {

  function extractUserID(token) {
    var payload = token.split('.')[1];
    payload = $window.atob(payload);
    payload = JSON.parse(payload);

    return payload.data;
  }

  function getUser() {
    var config,
        credentials = getUserAndToken(),
        url = UserAPI.getByID;

    if (credentials) {
      config = {
        headers: {
          Authorization: 'JWT ' + credentials.token
        }
      };

      url = UserAPI.getByID.concat(credentials.userID);

      return $http.get(url, config)
        .then(function(response) {
          return response.data.data
        });
    } else {
      return null;
    }
  }

  function getUserAndToken() {
    var token = AuthFactory.getJWT(),
        userAndToken,
        userID;

    if (token) {
      userID = extractUserID(token);
      userAndToken = { userID: userID, token: token };
    }

    return userAndToken;
  }

  return {
    getUser: getUser
  }
}

module.exports = UserFactory;
