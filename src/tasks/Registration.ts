import { Task } from '@serenity-js/core';
import { Ensure } from '@serenity-js/assertions';
import { Click, Enter, isVisible } from '@serenity-js/webdriverio';
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
export const Registration = {
    using: (firstname: string, lastname: string, username: string, password: string) =>
        Task.where(`#actor register with ${ username }`,
            Ensure.that(LoginForm.registerButton(), isVisible()),
            Click.on(LoginForm.registerButton()),
            Ensure.that(RegisterForm.firstNameField(), isVisible()),
            Enter.theValue(firstname).into(RegisterForm.firstNameField()),
            Enter.theValue(lastname).into(RegisterForm.lastNameField()),
            Enter.theValue(username).into(RegisterForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(RegisterForm.registerButton()),
        ),
}
