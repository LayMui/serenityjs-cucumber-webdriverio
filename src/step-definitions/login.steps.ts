import { DataTable, Given, Then, When } from "@cucumber/cucumber";
import { Actor, Check } from "@serenity-js/core";
import { isVisible, Navigate } from "@serenity-js/webdriverio";
import { LoginForm } from "../page-objects/LoginForm";
import { Login } from "../tasks/Login";
import { Registration } from "../tasks/Registration";
import { VerifyLogin } from "../tasks/VerifyLogin";


/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given(
  '{actor} has registered',
  async (actor: Actor, table: DataTable) => {
       const firstname = table.hashes()[0].firstname
       const lastname = table.hashes()[0].lastname
       const username = table.hashes()[0].username
       const password = table.hashes()[0].password

    await actor.attemptsTo(
      Navigate.to('https://laymui-login-project.vercel.app/'),
        Registration.using(firstname, lastname, username, password))
    }
)

When('{pronoun} login', async (actor: Actor, table: DataTable) => {
  const username = table.hashes()[0].username
  const password = table.hashes()[0].password
  await actor.attemptsTo(
       Login.using(username, password)
    )
})

Then(
  '{pronoun} should see that login has succeeded',
  async (actor: Actor) =>
    await actor.attemptsTo(
      VerifyLogin.succeeded("You're logged in with Vue + Vuex & JWT!!")
    )
)

