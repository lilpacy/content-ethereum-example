/* SPDX-License-Identifier: MIT */
pragma solidity ^0.8.0;

import "./Control.sol";

import "./Roles.sol";


abstract contract ManagerRole is Control {
    using Roles for Roles.Role;

    event ManagerAdded(address indexed account);
    event ManagerRemoved(address indexed account);

    Roles.Role private managers;

    constructor() {
        _addManager(msg.sender);
    }

    modifier onlyManager() {
        require(isManager(msg.sender));
        _;
    }

    function isManager(address account) public view returns (bool) {
        return managers.has(account);
    }

    function addManager(address account) public onlyOwner {
        _addManager(account);
    }

    function renounceManager(address account) public onlyOwner {
        _removeManager(account);
    }

    function _addManager(address account) internal {
        managers.add(account);
        emit ManagerAdded(account);
    }

    function _removeManager(address account) internal {
        managers.remove(account);
        emit ManagerRemoved(account);
    }
}
