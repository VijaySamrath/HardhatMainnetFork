// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DemoToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("DemoToken", "DTK") {
        
    }


    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function totalSupply() public view virtual override returns (uint256) {
        return totalSupply();

    }

    function burn(address account , uint256 amount) public virtual {

        _burn (account , amount);

    }
    function transfer(address recipient , uint256 amount) public virtual override returns(bool){
        super.transfer( recipient , amount);
    

    }
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return allowance(owner,spender);

    }
    function transferOwnership(address newOwner) public virtual override onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }



}