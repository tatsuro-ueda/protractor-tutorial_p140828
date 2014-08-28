describe('AngularJSホームページ', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('履歴がある', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);
    expect(history.last().getText()).toContain('1 + 2');
    //expect(history.first().getText()).toContain('foo'); // これはまちがい！
    expect(history.first().getText()).toContain('3 + 4');

    add(5, 6);

    //expect(history.count()).toEqual(0); // これはまちがい！
    expect(history.count()).toEqual(3);
  });
});