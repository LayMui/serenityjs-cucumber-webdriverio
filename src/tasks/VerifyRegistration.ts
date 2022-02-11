
import { Ensure, includes } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { isVisible, Text, Wait } from '@serenity-js/webdriverio'
import { AlertMessage } from '../page-objects/AlertMessage'
import { RegisterForm } from '../page-objects/RegisterForm'


export class VerifyRegistration {
    private static hasSuccessMessage = () =>
      Task.where(
        `#actor verifies that registration success is present`,
      //  Wait.until(RegisterForm​​.registrationSuccessMessage(), isVisible()),
        Wait.until(AlertMessage.called('Registration successful'), isVisible()),
      )
  
   
    static succeeded = () =>
      Task.where(
        `#actor verifies that authentication has succeeded`,
        VerifyRegistration.hasSuccessMessage(),
        Ensure.that(Text.of(RegisterForm.registrationSuccessMessage()), includes('Registration successful')),

      )


      
}