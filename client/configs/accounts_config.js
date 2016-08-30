export default function ({ FlowRouter, Accounts }) {
  Accounts.config({
    sendVerificationEmail: false,
    forbidClientAccountCreation: true,
  });
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
    loginPath: '/login',
    onSignedInHook: () => FlowRouter.go('/inventory/manage'),
    onSignedOutHook: () => FlowRouter.go('/')
  });
}
