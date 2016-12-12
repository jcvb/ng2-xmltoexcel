import { Ng2XmltoexcelPage } from './app.po';

describe('ng2-xmltoexcel App', function() {
  let page: Ng2XmltoexcelPage;

  beforeEach(() => {
    page = new Ng2XmltoexcelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
