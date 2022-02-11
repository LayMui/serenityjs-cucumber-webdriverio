import { equals } from '@serenity-js/assertions';
import { Question } from '@serenity-js/core';
import { by, Target, Text } from '@serenity-js/webdriverio';
import { Element } from 'webdriverio';

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class LoginMessage {
  static inTag = () => Target.all('logged in message').located(by.tagName('p'))

  /**
   * Note how I pick an element which text matches `name` without having to use XPath
   * See: https://janmolak.com/xpath-is-dead-anpm dvanced-web-element-locators-with-serenity-js-2-25-0-66145ad248d4
   *
   * @param name
   */
  static called = (name: string): Question<Promise<Element<'async'>>> =>
    LoginMessage.inTag().where(Text, equals(name)).first()
}