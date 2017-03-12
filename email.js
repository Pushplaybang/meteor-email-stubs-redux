import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

const emailStub = {
  collection: new Map(),
  stub() {
    Email.__send = Email.send;
    Email.send = options => emailStub.collection.set(emailStub.collection.size, options);
  },
  restore() {
    Email.send = Email.__send;
  },
  reset() {
    return emailStub.collection.clear();
  },
  getEmails() {
    return Array.from(emailStub.collection.values());
  },
};

// register methods with DDP
Meteor.methods({
  'emailStub/stub': emailStub.stub,
  'emailStub/restore': emailStub.restore,
  'emailStub/reset': emailStub.reset,
  'emailStub/getEmails': emailStub.getEmails,
});
