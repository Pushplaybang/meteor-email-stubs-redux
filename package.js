Package.describe({
  name: 'pushplaybang:email-stub-redux',
  version: '0.3.0',
  summary: 'Allows you to inspect sent emails and assert on their content.',
  git: 'https://github.com/Pushplaybang/meteor-email-stubs-redux',
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use('ecmascript@0.6.1');
  api.use(['email'], 'server');
  api.addFiles('email.js', 'server');
});
