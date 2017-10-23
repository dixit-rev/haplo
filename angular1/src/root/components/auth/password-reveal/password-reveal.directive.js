function passwordReveal() {
  return {
    restrict: 'A',
    link: function passwordRevealLink($scope, element, attributes) {
      var passwordInput = element[0],
          inputNextSibling = passwordInput.nextSibling,
          inputParent = passwordInput.parentNode,
          passwordReveal = document.createElement('a'),
          revealIcon = document.createElement('i');

      revealIcon.className = 'glyphicon glyphicon-eye-open';
      passwordReveal.className = 'password-reveal';
      passwordReveal.appendChild(revealIcon);
      inputParent.insertBefore(passwordReveal, inputNextSibling);

      function toggleReveal() {
        if (passwordInput.value.length) {
          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
          } else {
            passwordInput.type = 'password';
          }
        }
      }

      passwordReveal.addEventListener('click', function revealClick(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleReveal();
      }, false)
    }
  };
}

module.exports = passwordReveal;
