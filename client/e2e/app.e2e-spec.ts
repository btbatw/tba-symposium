import { FccTwitchtvPage } from './app.po';

describe('fcc-twitchtv App', () => {
  let page: FccTwitchtvPage;

  beforeEach(() => {
    page = new FccTwitchtvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
