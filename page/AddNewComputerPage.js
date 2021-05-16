const { browser } = require("protractor");

class AddNewComputerPage
{
    constructor()
    {
        this.EC = protractor.ExpectedConditions;
        this.ComputerNameTextBox = $('#name');
        this.IntroducedTextBox = $('#introduced');
        this.DiscontinuedTextBox = $('#discontinued');
        this.CompanyDropDown = $('#company');
        this.CompanyOptions  = $$('#company option');
        this.CreateButton = $("[class='btn primary']");
        this.CancelButton = $('a.btn');     
    }

    InputComputerName = async(name) => {
        await this.ComputerNameTextBox.sendKeys(name);
    }

    InputIntroduced = async(date) => {
        await this.IntroducedTextBox.sendKeys(date);
    }

    InputDiscontinued = async(date) => {
        await this.DiscontinuedTextBox.sendKeys(date);
    }

    ChooseCompany = async(company) => {
        await this.CompanyOptions.each(function(elem, index) {
            elem.getText().then(function(text) {
                if(text.includes(company))
                {
                    elem.click();
                }
            });
        });

        browser.sleep(3000);
    }

    ClickCreateButton = async() => {
        await this.CreateButton.click();
    }

    ClickCancelButton = async() => {
        await this.CancelButton.click();
    }
}
module.exports = AddNewComputerPage;