import { DataTable, Given, Then, When } from "@cucumber/cucumber";
import { Actor, actorInTheSpotlight, Check } from "@serenity-js/core";
import { isVisible, Navigate } from "@serenity-js/webdriverio";
import { LoginForm } from "../page-objects/LoginForm";
import { Registration } from "../tasks/Registration";
import { VerifyRegistration } from "../tasks/VerifyRegistration";

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} is at the login system', async (actor: Actor) =>
    await actor.attemptsTo(
        Navigate.to('https://laymui-login-project.vercel.app/'),
    )
);

When('{pronoun} register using the following particulars', async (actor: Actor,table: DataTable) => {

    const firstname = table.hashes()[0].firstname
    const lastname = table.hashes()[0].lastname
    const username = table.hashes()[0].username
    const password = table.hashes()[0].password
    await actor.attemptsTo(
        Check.whether(LoginForm.registerButton(), isVisible()).
        andIfSo(Registration.using(firstname, lastname, username, password))
       
    )
});

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see that registration has succeeded/, async () =>
    await actorInTheSpotlight().attemptsTo(
       VerifyRegistration.succeeded()
    )
    
)

