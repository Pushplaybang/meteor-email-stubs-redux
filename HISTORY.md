# 0.3.0

* Forked from https://github.com/xolvio/meteor-email-stub/blob/master/email.js
* updated to es6
* replaced collection with a Map to ensure order of entries returned
* set to `testOnly` instead of `debugOnly`

#0.2.0

* Renamed the package to xolvio:email-stub to match meteor package name
* Stubbing no longer happens automatically, it has to be called with a meteor method

#0.1.0

* Overrides Meteor's `Email.send` and collects emails into a collection
