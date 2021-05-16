let BasePage = require('../page/BasePage');
let ComputersPage = require('../page/ComputersPage');

describe('Verify elements and filter functionality in ComputersPage',() => {

   it('Test case 1: Verify elements',() => {
      const basePage = new BasePage();
      const computersPage = new ComputersPage();

      let url = 'https://computer-database.gatling.io/computers';
      let pageHeader = 'Computer database';
      let tableHeaders = ['Computer name','Introduced','Discontinued','Company'];
      
      basePage.Get(url);  
            
      // Verification of Header element via  tag.class and xPath
      expect(computersPage.GetHeaderText()).toBe(pageHeader);      
      expect(computersPage.GetHeaderTextViaXpath()).toBe(pageHeader);      
      
      // Verification of the expected Url
      computersPage.ClickHeaderLink();
      expect(basePage.GetCurrentUrl()).toEqual(url);

      // Verification of the table headers using shorthand locator for array elements
      expect(computersPage.GetTableHeaders()).toEqual(tableHeaders);

      // verification if the buttons are enabled
      expect(computersPage.IsFilterByNameEnabled()).toBe(true);
      expect(computersPage.IsAddANewComputerEnabled()).toBe(true);
   });

   it('Test case 2: Verify filter functionality', async() => {
      const basePage = new BasePage();
      const computersPage = new ComputersPage();

      let url = 'https://computer-database.gatling.io/computers';      
      let computerName;
      let computerNameList = [];

      basePage.Get(url); 

      // filter computer name
      computerName = await computersPage.GetRandomComputerName();
      await computersPage.FilterComputer(computerName);
      await computersPage.ClickFilter();
      
      // Verification of filter results
      computerNameList = await computersPage.GetAllComputerNameFromTheList();
      expect(await computersPage.VerifyFilterResults(computerName, computerNameList)).toBe(true);   

   });

});