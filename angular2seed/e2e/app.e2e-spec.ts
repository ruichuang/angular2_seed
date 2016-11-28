import { DholdPage } from './app.po';

describe('dhold App', function() {
  let page: DholdPage;

  beforeEach(() => {
    page = new DholdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dh works!');
  });
});
