import { AngSpotifyPage } from './app.po';

describe('ang-spotify App', function() {
  let page: AngSpotifyPage;

  beforeEach(() => {
    page = new AngSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
