const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("TOKEN TEST", async function () {
    async function deploy() {
       

       
        const DemoToken = await hre.ethers.getContractFactory("DemoToken");
        demoToken = await DemoToken.deploy();
      
        await demoToken.deployed();
      
        console.log("DemoToken deployed to:", demoToken.address);
    }

    before("Before", async () => {
        accounts = await ethers.getSigners();
        await deploy();

    })

     it("should Token name be", async () => {
        // let TokenName
        try {
            tokenName = await demoToken.name();
        } catch (error) {
            console.log(error)
        }
        console.log("TokenName: ", tokenName);
        expect(tokenName).to.equal("DemoToken");

    })
    
    

    it("Symbol check", async () => {
        try {
            tokenSymbol = await demoToken.symbol();

        } catch (error) {
            console.log(error)
        }

        console.log("TokenSymbol ==>", tokenSymbol);
        expect(tokenSymbol).to.equal("DTK");

    });
  })
