// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FakeToken is ERC20 {
    // contract FakeToken is inheriting ERC20 which is the pre-built contract from Openzeppelin repository. 

    uint constant _initialSupply = 10000 * (10 ** 18);
    constructor() ERC20("FakeToken", "FT"){
        // This constructor is written in ERC20.sol taking two inputs (string memory name_, string memory symbol_)

        _mint(msg.sender, _initialSupply);
    }
}