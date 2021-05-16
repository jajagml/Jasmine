// AAA pattern
// test data
// note this is not angular

// successful add computer 
// cancel add computer
let BasePage = require('../page/BasePage');
let ComputersPage = require('../page/ComputersPage');
let AddNewComputerPage = require('../page/AddNewComputerPage');


describe('Verify Add New Computer functionality',() => {
    
    it('Test Case 1: Add new computer',async() => {
        const basePage = new BasePage();
        const computersPage = new ComputersPage();
        const addNewComputerPage = new AddNewComputerPage();
  
        let url = 'https://computer-database.gatling.io/computers';
        let name = 'XY 2011';
        let intro = '2011-01-01';
        let discontinued = '2013-12-31';
        let company = 'ASUS';

        basePage.Get(url); 
        computersPage.ClickAddNewComputer();

        await addNewComputerPage.InputComputerName(name);
        await addNewComputerPage.InputIntroduced(intro);
        await addNewComputerPage.InputDiscontinued(discontinued);
        await addNewComputerPage.ChooseCompany(company);
        await addNewComputerPage.ClickCreateButton();

    });

    it('Test Case 2: Verify Cancel when add new computer',async() => {
        const basePage = new BasePage();
        const computersPage = new ComputersPage();
        const addNewComputerPage = new AddNewComputerPage();

        let url = 'https://computer-database.gatling.io/computers';

        basePage.Get(url); 
        computersPage.ClickAddNewComputer();

        await addNewComputerPage.ClickCancelButton();
    });
});
