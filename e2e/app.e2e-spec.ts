import { LingAngularBookPage } from './app.po';

describe('ling-angular-book App', () => {
  let page: LingAngularBookPage;

  beforeEach(() => {
    page = new LingAngularBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
