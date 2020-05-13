import textInputPage from '../pages/textInput.page';

describe('Text Input Spec', function() {
  before(function() {
    textInputPage.open();
  });

  it('Change button text with chai', function() {
    console.log(textInputPage.getButtonText());
    textInputPage.updateButtonText('My Special Name');
    expect(textInputPage.getButtonText()).eql('My Special Name');
  });
});

