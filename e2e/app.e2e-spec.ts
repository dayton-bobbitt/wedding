import { NgWeddingPage } from './app.po';

describe('ng-wedding App', () => {
  let page: NgWeddingPage;

  beforeEach(() => {
    page = new NgWeddingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
