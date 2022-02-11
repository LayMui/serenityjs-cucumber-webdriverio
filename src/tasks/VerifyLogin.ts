import { Ensure, includes } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { isVisible, Text, Wait } from '@serenity-js/webdriverio'
import { LoginForm } from '../page-objects/LoginForm'
import { LoginMessage } from '../page-objects/LoginMessage'
import { RegisterForm } from '../page-objects/RegisterForm'
import { VerifyRegistration } from './VerifyRegistration'

export class VerifyLogin {
  private static hasSuccessMessage = (message: string) =>
    Task.where(
      `#actor verifies that registration success is present`,
      //  Wait.until(RegisterForm​​.registrationSuccessMessage(), isVisible()),
      Wait.until(LoginMessage.called(message), isVisible())
    )

  static succeeded = (message: string) =>
    Task.where(
      `#actor verifies that authentication has succeeded`,
      VerifyLogin.hasSuccessMessage(message),
      Ensure.that(
        Text.of(LoginForm.LoggedInSuccessMessage()),
        includes(message)
      )
    )
}
