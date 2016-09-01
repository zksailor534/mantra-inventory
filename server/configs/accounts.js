import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const users = [
  {
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Nate', last: 'Greene' },
    },
    roles: [ 'admin' ],
  },
];

export default function () {
  Accounts.config({
    sendVerificationEmail: false,
    forbidClientAccountCreation: true,
  });
  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}
