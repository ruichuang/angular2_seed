import { browser, element, by } from 'protractor';

export class DholdPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dh-root h1')).getText();
  }
}
