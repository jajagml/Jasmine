/*Page model for Computers Page*/
class ComputersPage{
    /*CONSTRUCTOR
    Special method of class for initializing and creating object for the class.
    Provide custom initialization that must be done before any other methods can be called 
    to instantiated object.
    ex this.name = "" 
    For this POM, constructors will be used for the page elements*/
    constructor() 
    { 
        //-----------------------------------------------------------------------------------//        
        // $ - shorthand locator for element [tag.class]
        this.Header = $("a.fill");
        // same with the first element but using the link text instead
        this.HeaderLink = element(by.linkText('Computer database')); 
        // same with the first one but using xPath instead
        this.HeaderXpath = element(by.xpath("//a[@class='fill']"));    

        //-----------------------------------------------------------------------------------//
        // using the shorthand locator [tags]
        this.Title = $('section h1');

        //-----------------------------------------------------------------------------------//
        // using the Id
        this.FilterBox = element(by.id('searchbox'));
        // same with the first element using the name
        this.FilterBoxName = element(by.name('f'));

        //-----------------------------------------------------------------------------------//
        // using shorthand locator [Id]
        this.FilterButton = $('[id="searchsubmit"]');  
        
        //-----------------------------------------------------------------------------------//
        // using shorthand locator [#Id]
        this.AddButton = $("#add");
        // same with the first element using the partialLinkText
        this.AddButtonLink = element(by.partialLinkText('Add a'));

        //-----------------------------------------------------------------------------------//
        // shorthand locator for array elements
        this.tableHeader = $$('table th');
        // operation used for array elements
        this.tableHeaderElementAll = element.all(by.css('table th'));

        this.tableRow = $$('tbody tr');


    }

    /*Locator Functions and Actions*/

    // get the text of the Header
    GetHeaderText = () => {
        return this.Header.getText();
    }

    //  get the text of the Header via xPath
    GetHeaderTextViaXpath = () => {
        return this.HeaderXpath.getText();
    }

    // click the Header Link
    ClickHeaderLink = () => {
        this.HeaderLink.click();
    }

    // Get the text of the Title
    GetTitleText = () => {
        return this.Title.getText();
    }

    // returns the total number of computers found
    TotalNumberOfComputersFound = () => {
        let title = this.Title.getText();
        let numChar = title.split(" computers found");
        let num = parseInt(numChar);

        return num;
    }

    // Filter the computer name via Id element
    FilterComputer = async(computerName) => {
        await this.FilterBox.sendKeys(computerName);
    }

    // click the filter button
    ClickFilter = async() => {
        await this.FilterButton.click();
    }

    // check if the button is enable
    IsFilterByNameEnabled = () => {
        return this.FilterButton.isEnabled();
    }    

    // Click the Add New Computer via button
    ClickAddNewComputer = () => {
        this.AddButton.click();
    }

    // check if the button is enable
    IsAddANewComputerEnabled = () => {
        return this.AddButton.isEnabled();
    }    

    // get the list of table headers
    GetTableHeaders = () => {
        return this.tableHeader.getText();
    }

    // get random computer name from the current list
    GetRandomComputerName = async() => {
        let trNum = await this.tableRow.count();
        let trRandom = Math.floor(Math.random() * trNum); 

        return await this.tableRow.get(trRandom).$$('td').first().getText();
    }

    // get all computer name from the current list
    GetAllComputerNameFromTheList = async() => {
        let trNum = await this.tableRow.count();
        let returnList = [];

        for(let i = 0; i < trNum; i++)
        {
            returnList.push(await this.tableRow.get(i).$$('td').first().getText());
        }

        return returnList;
    }

    // verify filter results
    VerifyFilterResults = async (compName, compNameList) => {
        let returnBool = false;        

        for(let i = 0; i < await compNameList.length; i++)
        {
            if(compNameList[i].includes(compName))
            {
                returnBool = true;
            }
            else 
            {
                returnBool = false;
            }
        }

        return returnBool;
    }
}
module.exports = ComputersPage;