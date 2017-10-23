function AuthConfig(ngIntlTelInputProvider) {

  ngIntlTelInputProvider.set({
    defaultCountry: 'auto',
    preferredCountries: ['us', 'gb'],
    autoFormat: true,
    autoPlaceholder: true
  });

}

module.exports = AuthConfig;
