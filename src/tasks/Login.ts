import { Duration, Task } from '@serenity-js/core';
import { Ensure } from '@serenity-js/assertions';
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio';
import { LoginForm } from '../page-objects/LoginForm';
import { RegisterForm } from '../page-objects/RegisterForm';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor performs three activities:
 * - enter firstname, lastname, username
 * - enter password
 * - click on the register button
 *
 * This sequence of activities together means to "register"
 */
export const Login = {
  using: (username: string, password: string) =>
    Task.where(
      `#actor login with ${username}`,
      Wait.upTo(Duration.ofMilliseconds(50000)).until(
        LoginForm.usernameField(),
        isVisible()
      ),
      Enter.theValue(username).into(LoginForm.usernameField()),
      Enter.theValue(password).into(LoginForm.passwordField()),
      Click.on(LoginForm.loginButton())
    ),
}
