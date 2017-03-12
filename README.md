# Email Stub Redux
Originally forked from **xolvio:email-stub**

Stores emails so that they can be referenced by test suite. 

## Why
Primarily forked this as I was occassionally receiving inconsistent results when interogatting multiple emails, switching to storing them in an ES6 Map, ensures the order.  Secondly, like many others, I run chimp with [tmeasday:acceptance-test-driver](https://github.com/tmeasday/acceptance-test-driver), which means meteor is in test mode, and therefore needed to switch this package from `debugOnly` to `testOnly`.

### Thank you
Much respect to xolvio for all the great work they've done on this and packages like it.


## Getting started
Assuming you've already got chimp setup and running with the acceptance test runner mentioned above, go ahead and add this package, and follow the original usage instructions below.

### Installation

`meteor add pushplaybang:email-stub-redux`


### Usage

Run a through your app manually, or using integration / end-to-end tests and
emails that are sent from your app will be captured wherever `Email.send` is
used, such as accounts for verifying emails.

Set up
```javascript
Meteor.call('emailStub/stub');

// or running with Chimp
server.call('emailStub/stub');
```

Retrieve emails
```javascript
Meteor.call('emailStub/getEmails', function(e, emails) {
  console.log(emails);
});

// or running with Chimp
let emails = server.call('emailStub/getEmails');
```

Assuming two emails were sent, the code above would show:

```
[
 {
   _id: "ACZqWmLejePo9zQQD",
   from: "Xolv.io <no-reply@xolv.io>",
   to: "user@example.com"
   subject: "Please verify your email address",
   text: "Hello Someone,↵↵To verify your account email, simply click the link below.↵↵http://localhost:3000/#/verify-email/m_3n4CbgeESDGaugJ656RoqJRj5PlCjk0Cm43PU3aEN↵↵Thanks.↵"
 },
 {
   _id: "2aY6FkWRcbcr8RxL7",
   from: "Xolv.io <no-reply@xolv.io>",
   to: "user@example.com"
   subject: "Another email",
   text: "with different content"
 }
]
```

In your code, you can then do assertions like:

```javascript
  emails[0].subject.should.be('Please verify your email address');
```

Another use for testing is to extract the verification link like this:

```javascript

  // grab the verification link
  var verificationLink = emails[0].text.match(/(http|https|www)\S+/)[0];

  // then use something like xolvio:webdriver to visit the URL like a user would
  browser.url(verificationLink)
```

This package is a `testOnly` package and will only be used when developing
locally.

### Testing lifecycle
Set up
```javascript
Meteor.call('emailStub/stub');
```

Reset collection
```javascript
Meteor.call('emailStub/reset');
```

Restore and remove stub
```javascript
Meteor.call('emailStub/restore');
```
