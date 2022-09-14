// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 favoriteNumber;

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people;

    // bool hasFavoriteNumber = true;
    // string favoriteNumberString = "Five";
    // int256 favoriteInt = -5;
    // address myAddress = 0xa8EC796eE75B04af1223445c587588181CEb56CD;
    // bytes32 favoritesBytes = "cat";

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}

// contract address 0xd9145CCE52D386f254917e481eB44e9943F39138
