import { KierkegaardWorksPage } from './app.po';

describe('kierkegaard-works App', function() {
  let page: KierkegaardWorksPage;

  beforeEach(() => {
    page = new KierkegaardWorksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
