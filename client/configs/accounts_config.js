export default function ({ FlowRouter, Accounts }) {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
    loginPath: '/login',
    onSignedInHook: () => FlowRouter.go('/inventory/manage'),
    onSignedOutHook: () => FlowRouter.go('/')
  });
}
