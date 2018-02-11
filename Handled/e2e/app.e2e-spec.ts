import { HandledPage } from './app.po';

describe('handled App', () => {
  let page: HandledPage;

  beforeEach(() => {
    page = new HandledPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
