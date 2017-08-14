import { ZendDeskPage } from './app.po';

describe('zend-desk App', () => {
  let page: ZendDeskPage;

  beforeEach(() => {
    page = new ZendDeskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
