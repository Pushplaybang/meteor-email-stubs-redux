Package.describe({
  name: 'pushplaybang:email-stub-redux',
  version: '0.2.0',
  summary: 'Allows you to inspect sent emails and assert on their content.',
  git: 'https://github.com/xolvio/meteor-email-stub',
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use('ecmascript');
  api.use(['email'], 'server');
  api.addFiles('email.js', 'server');
});
