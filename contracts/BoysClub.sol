// SPDX-License-Identifier: MIT


pragma solidity 0.8.20;
import "./Context.sol";
import "./IERC20.sol";
import "./ERC20.sol";
import "./Ownable.sol";



////BoysClub .sol

contract  BoysClub  is ERC20,Ownable{
    constructor() ERC20("Boys Club", "BoysClub") {
        _mint( msg.sender, 6900000000000 * 10 ** decimals());
    }


}