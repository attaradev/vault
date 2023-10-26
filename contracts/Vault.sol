// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract Vault {
    mapping(bytes4 => string) private _data;
    address public owner = msg.sender;

    event PIIAdded(bytes4 key, string value);
    event PIIRemoved(bytes4 key);
    event PIIViewed(bytes4 key);
    event PIIUpdated(bytes4 key, string value);

    modifier onlyOwner() {
        require(msg.sender == owner, "Vault: caller is not the owner");
        _;
    }

    function addPII(bytes4 key, string memory value) public onlyOwner {
        _data[key] = value;
        emit PIIAdded(key, value);
    }

    function getPII(bytes4 key) public view returns (string memory) {
        return _data[key];
    }

    function removePII(bytes4 key) public onlyOwner {
        delete _data[key];
        emit PIIRemoved(key);
    }

    function updatePII(bytes4 key, string memory value) public onlyOwner {
        _data[key] = value;
        emit PIIUpdated(key, value);
    }

    function getPIIList(
        bytes4[] memory keys
    ) public view onlyOwner returns (string[] memory) {
        string[] memory values = new string[](keys.length);
        for (uint i = 0; i < keys.length; i++) {
            values[i] = _data[keys[i]];
        }
        return values;
    }
}
