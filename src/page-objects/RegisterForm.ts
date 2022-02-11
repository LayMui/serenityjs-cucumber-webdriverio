import { by, Target } from '@serenity-js/webdriverio'

export const RegisterForm = {
  firstNameField: () =>
    Target.the('firstname field').located(
      by.css('input[data-testid=firstname]')
    ),

  lastNameField: () =>
    Target.the('lastname field').located(
      by.css('input[data-testid=lastname]')
    ),

   usernameField: () =>
    Target.the('username field').located(
      by.css('input[data-testid=username]')
    ),

  passwordField: () =>
    Target.the('password field').located(
      by.css('input[data-testid=password]')
    ),

  registerButton: () =>
    Target.the('register button').located(
      by.css('button[data-testid=register]')
    ),

  cancelButton: () =>
    Target.the('cancel button').located(
      by.css('button[data-testid=cancel]')
    ),

    registrationSuccessMessage: () =>
    Target.the('alert message').located(
      by.css('div[data-testid=alert]')
    ),


    

}