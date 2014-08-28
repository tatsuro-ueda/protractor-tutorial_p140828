describe('AngularJSホームページ', function() {
  it('タイトルを持つ', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});