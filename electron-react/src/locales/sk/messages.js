/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),i=s[0],v0=!s[1];if(ord)return"other";return n==1&&v0?"one":i>=2&&i<=4&&v0?"few":!v0?"many":"other"}},messages:{"AddressCard.address":"Adresa","AddressCard.copy":"Kop\xEDrova\u0165","AddressCard.newAddress":"Nov\xE1 adresa","AddressCard.title":"Adresa pr\xEDjemcu","Application.closing":"Zatv\xE1ra sa uzol a server","Application.connectingToWallet":"Prip\xE1janie k pe\u0148a\u017Eenke","Application.loggingIn":"Prihlasovanie","BalanceCard.balance":"Zostatok","BalanceCard.pendingBalance":"Nespracovan\xFD zostatok","BalanceCard.pendingBalanceTooltip":"Toto je s\xFA\u010Det prich\xE1dzaj\xFAcich a odch\xE1dzaj\xFAcich nespracovan\xFDch transakci\xED (e\u0161te nie s\xFA zahrnut\xE9 do blockchainu). To nezah\u0155\u0148a odmeny za \u0165a\u017Ebu.","BalanceCard.pendingChange":"Nespracovan\xE9 zmeny","BalanceCard.pendingChangeTooltip":"Toto je nespracovan\xE1 zmena. S\xFA to mince, ktor\xE9 ste si poslali, ale zatia\u013E neboli spracovan\xE9.","BalanceCard.pendingFarmingRewards":"Nespracovan\xE9 odmeny za \u0165a\u017Ebu","BalanceCard.pendingFarmingRewardsTooltip":"Toto je celkov\xE1 suma ned\xE1vno z\xEDskan\xFDch \u0165a\u017Eiarskych odmien, ktor\xE9 boli potvrden\xE9, ale zatia\u013E nie s\xFA vyplatite\u013En\xE9. Odmeny za \u0165a\u017Eenie s\xFA zmrazen\xE9 na 200 blokov.","BalanceCard.pendingTotalBalance":"Celkov\xFD nespracovan\xFD zostatok","BalanceCard.pendingTotalBalanceTooltip":"Toto je celkov\xFD zostatok + nespracovan\xFD zostatok alebo to, ak\xFD bude v\xE1\u0161 zostatok po potvrden\xED v\u0161etk\xFDch nespracovan\xFDch transakci\xED.","BalanceCard.spendableBalance":"Disponibiln\xFD zostatok","BalanceCard.spendableBalanceTooltip":"Toto je mno\u017Estvo Chia, ktor\xE9 m\xF4\u017Eete v s\xFA\u010Dasnosti pou\u017Ei\u0165 na uskuto\u010Dnenie transakci\xED. Nezah\u0155\u0148a nespracovan\xE9 \u0165a\u017Eiarske odmeny, nespracovan\xE9 prich\xE1dzaj\xFAce transakcie a Chia, ktor\xFA ste pr\xE1ve minuli, ale e\u0161te nie su v blockchaine.","BalanceCard.totalBalance":"Celkov\xFD zostatok","BalanceCard.totalBalanceTooltip":"Toto je celkov\xE9 mno\u017Estvo Chia v blockchaine v LCA bloku (najnov\u0161\xED spolo\u010Dn\xFD predok), ktor\xFD je kontrolovan\xFD va\u0161imi s\xFAkromn\xFDmi k\u013E\xFA\u010Dmi. Zah\u0155\u0148a odmeny za zmrazen\xE9 \u0165a\u017Eenie, ale nie nespracovan\xE9 prich\xE1dzaj\xFAce a odch\xE1dzaj\xFAce transakcie.","BalanceCard.viewPendingBalances":"Zobrazit nespracovan\xE9 zostatky","Block.blockVDFIterations":"Block VDF iter\xE1cii","Block.blockVDFIterationsTooltip":"Celkov\xFD po\u010Det VDF (overite\u013En\xE1 funkcia oneskorenia) alebo d\xF4kaz o \u010Dasov\xFDch iter\xE1ci\xE1ch v tomto bloku.","Block.coinbaseAmount":"Mno\u017Estvo coinbase","Block.coinbaseAmountTooltip":"Blokov\xE1 Chia odmena, ide do poolu (alebo \u0165a\u017Eenia, ak sa nepou\u017E\xEDva pool)","Block.coinbasePuzzleHash":"Coinbase adresa","Block.description":function(a){return["Block na poz\xEDcii ",a("0")," v Chia blockchaine"]},"Block.difficulty":"Zlo\u017Eitos\u0165","Block.feesAmount":"Mno\u017Estvo odmeny","Block.feesAmountTooltip":"Celkov\xE9 poplatky v tomto bloku id\xFA \u0165a\u017Eiarovy","Block.feesPuzzleHash":"Fees Puzzle Hash","Block.headerHash":"Poradie hlavi\u010Dky","Block.height":"Poradie","Block.plotId":"Id po\u013Ea","Block.plotIdTooltip":"Semienko pou\u017Eit\xE9 na vytvorenie po\u013Ea, z\xE1le\u017E\xED to na pk poolu a pk po\u013Ea","Block.plotPublicKey":"Verejn\xFD k\u013E\xFA\u010D po\u013Ea","Block.poolPublicKey":"Verejn\xFD k\u013E\xFA\u010D poolu","Block.previousBlock":"Predch\xE1dzaj\xFAci blok","Block.proofOfSpaceSize":"D\xF4kaz o ve\u013Ekosti priestoru","Block.timestamp":"\u010Casov\xE1 zna\u010Dka","Block.timestampTooltip":"Toto je \u010Das, kedy \u0165a\u017Eiar vytvoril blok, a to e\u0161te predt\xFDm, ako bol finalizovan\xFD s d\xF4kaz o \u010Dase","Block.title":"Bloky","Block.totalVDFIterations":"Celkov\xFD po\u010Det iter\xE1ci\xED VDF","Block.totalVDFIterationsTooltip":"The total number of VDF (verifiable delay function) or proof of time iterations on the whole chain up to this block.","Block.transactionsFilterHash":"Transactions Filter Hash","Block.transactionsGeneratorHash":"Transactions Generator Hash","Block.weight":"Velkos\u0165","Block.weightTooltip":"Velkos\u0165 je celkov\xE1 pridan\xE1 obtia\u017Enos\u0165 v\u0161etk\xFDch blokov a\u017E po tento","BlocksCard.expectedFinishTime":"O\u010Dak\xE1van\xFD \u010Das dokon\u010Denia","BlocksCard.headerHash":"Poradie hlavi\u010Dky","BlocksCard.height":"Poradie","BlocksCard.timeCreated":"\u010Cas vytvorenia","BlocksCard.title":"Bloky","CCListItems.title":"Mo\u017Enosti coloured minc\xED","Challenges.bestEstimate":"Najlep\u0161\xED odhad","Challenges.challengeHash":"Hash v\xFDzvy","Challenges.height":"Poradie","Challenges.numberOfProofs":"Po\u010Det d\xF4kazov","Challenges.title":"V\xFDzvy","ColourCard.colour":"Colour:","ColourCard.nickname":"Prez\xFDvka","ColourCard.rename":"Premenova\u0165","ColourCard.title":"Colour Info","ColouredAddressCard.address":"Adresa","ColouredAddressCard.copy":"Kop\xEDrova\u0165","ColouredAddressCard.newAddress":"Nov\xE1 adresa","ColouredAddressCard.title":"Adresa pr\xEDjemcu","ColouredBalanceCard.spendableBalance":"Disponibiln\xFD zostatok","ColouredBalanceCard.title":"Zostatok","ColouredBalanceCard.totalBalance":"Celkov\xFD zostatok","ColouredBalanceCard.viewPendingBalances":"Zobrazi\u0165 nespracovan\xE9 zostatky ...","ColouredHistoryCard.title":"Hist\xF3ria","ColouredSendCard.address":"Adresa","ColouredSendCard.amount":"Suma","ColouredSendCard.farm":"\u0164a\u017Ei\u0165","ColouredSendCard.fee":"Poplatok","ColouredSendCard.send":"Odosla\u0165","ColouredSendCard.title":"Vytvori\u0165 transakciu","ColouredTransactionTable.amount":"Suma","ColouredTransactionTable.confirmed":"Potvrden\xE9","ColouredTransactionTable.date":"D\xE1tum","ColouredTransactionTable.fee":"Poplatok","ColouredTransactionTable.incoming":"Prich\xE1dzaj\xFAce","ColouredTransactionTable.noPreviousTransactions":"\u017Diadne predch\xE1dzaj\xFAce transakcie","ColouredTransactionTable.outgoing":"Odch\xE1dzaj\xFAce","ColouredTransactionTable.pending":"Sprac\xFAva sa","ColouredTransactionTable.status":"Stav","ColouredTransactionTable.to":"Pr\xEDjemca","ColouredTransactionTable.type":"Typ","Connections.connect":"Pripoji\u0165","Connections.connectToOtherPeersTitle":"Pripoji\u0165 k in\xFDm uzlom","Connections.connected":"Pripojen\xE9","Connections.connectionType":"Typ pripojenia","Connections.delete":"Zmaza\u0165","Connections.ipAddress":"IP Adresa","Connections.ipAddressHost":"IP Adresa / host","Connections.lastMessage":"Posledn\xE1 spr\xE1va","Connections.nodeId":"Id uzlu","Connections.port":"Port","Connections.title":"Pripojenia","Connections.upDown":"Odoslan\xE9/Stiahnut\xE9","CreateExistingCCWallet.colourString":"Colour String","CreateExistingCCWallet.create":"Vytvori\u0165","CreateExistingCCWallet.enterValidFee":"Pros\xEDm zadajte poplatok","CreateExistingCCWallet.fee":"Poplatok","CreateExistingCCWallet.title":"Vytvori\u0165 pe\u0148a\u017Eenku pre colour","CreateNewCCWallet.amount":"Suma","CreateNewCCWallet.create":"Vytvori\u0165","CreateNewCCWallet.enterValidAmount":"Pros\xEDm zadajte sumu","CreateNewCCWallet.enterValidFee":"Pros\xEDm zadajte poplatok","CreateNewCCWallet.fee":"Poplatok","CreateNewCCWallet.generateNewColour":"Vytvori\u0165 novy colour","CreateOffer.add":"Prida\u0165","CreateOffer.addTradePair":"Pros\xEDm pridajte obchodn\xFD p\xE1r","CreateOffer.amount":"Suma","CreateOffer.availableOnlyFromElectron":"T\xE1to mo\u017Enos\u0165 je dostupn\xE1 iba z Electron aplik\xE1cie","CreateOffer.buyOrSell":"K\xFApi\u0165 alebo preda\u0165","CreateOffer.cancel":"Zru\u0161i\u0165","CreateOffer.colour":"Colour","CreateOffer.save":"Ulo\u017Ei\u0165","CreateOffer.selectAmount":"Pros\xEDm vyberte sumu","CreateOffer.selectBuyOrSell":"Pros\xEDm vyberte k\xFApi\u0165 alebo preda\u0165","CreateOffer.selectCoinType":"Pros\xEDm vyberte typ mince","CreateOffer.title":"Vytvorte obchodn\xFA ponuku","CreatePlot.colour":"Colour","CreatePlot.create":"Vytvori\u0165","CreatePlot.description":"Pomocou tohto n\xE1stroja m\xF4\u017Eete vytv\xE1ra\u0165 polia, ktor\xE9 s\xFA alokovan\xE9 na va\u0161om pevnom disku a sl\xFA\u017Eia na \u0165a\u017Ebu a zar\xE1banie Chia. Po\u010Das vytv\xE1rania s\xFAborov pol\xED sa vytv\xE1raj\xFA aj do\u010Dasn\xE9 s\xFAbory, ktor\xE9 s\xFA va\u010D\u0161ie ako ve\u013Ekos\u0165 kone\u010Dn\xFDch s\xFAborov pol\xED, tak\u017Ee sa uistite, \u017Ee m\xE1te dostatok miesta. Sk\xFAste pou\u017Ei\u0165 r\xFDchly disk ako SSD pre do\u010Dasn\xE9 s\xFAbory a na v\xFDsledn\xFD adres\xE1r ve\u013Ek\xFD pomal\xFD pevn\xFD disk (napr\xEDklad extern\xFD pevn\xFD disk).","CreatePlot.numberOfBuckets":"Po\u010Det sektorov","CreatePlot.numberOfBucketsDescription":"0 automaticky vyberie po\u010Det sektorov","CreatePlot.numberOfThreads":"Po\u010Det vl\xE1kien","CreatePlot.plotCount":"Po\u010Det plotov","CreatePlot.plotSize":"Ve\u013Ekos\u0165 plotu","CreatePlot.ramMaxUsage":"Maxim\xE1lne vyu\u017Eitie RAM","CreatePlot.ramMaxUsageDescription":"Viac pam\xE4te mierne zvy\u0161uje r\xFDchlos\u0165","CreatePlot.specifyFinalDirectory":"Zadajte do\u010Dasn\xFD a cie\u013Eov\xFD adres\xE1r","CreatePlot.stripeSize":"Ve\u013Ekos\u0165 sektora","CreatePlot.title":"Vytvori\u0165 pole","CreateRLAdminWallet.amountForInitialCoin":"Po\u010Diato\u010Dn\xE1 suma","CreateRLAdminWallet.create":"Vytvori\u0165","CreateRLAdminWallet.createRateLimitedAdminWallet":"Create Rate Limited Admin Wallet","CreateRLAdminWallet.enterValidInitialCoin":"Pros\xEDm zadajte platn\xFA po\u010Diato\u010Dn\xFA sumu","CreateRLAdminWallet.enterValidNumericFee":"Pros\xEDm zadajte platn\xFD poplatok","CreateRLAdminWallet.enterValidNumericInterval":"Pros\xEDm zadajte platn\xFA d\u013A\u017Eku intervalu","CreateRLAdminWallet.enterValidPubkey":"Zadajte platn\xFD verejn\xFD k\u013E\xFA\u010D","CreateRLAdminWallet.enterValidSpendableAmount":"Zadajte platn\xFD disponibiln\xFD zostatok","CreateRLAdminWallet.fee":"Poplatok","CreateRLAdminWallet.initialAmount":"Po\u010Diato\u010Dn\xE1 suma","CreateRLAdminWallet.interval":"Interval","CreateRLAdminWallet.pubkey":"Verejn\xFD k\u013E\xFA\u010D","CreateRLAdminWallet.spendableAmount":"Disponibiln\xFD zostatok","CreateRLAdminWallet.spendableAmountPerInterval":"Disponibiln\xE1 suma na interval","CreateRLAdminWallet.spendingIntervalLength":"D\u013A\u017Eka disponibiln\xE9ho intervalu (po\u010Det blokov)","CreateRLAdminWallet.userPubkey":"Pou\u017E\xEDvate\u013Eov verejn\xFD k\u013E\xFA\u010D","CreateRLUserWallet.create":"Vytvori\u0165","CreateRLUserWallet.description":"Initialize a Rate Limited User Wallet:","CreateRLUserWallet.title":"Create Rate Limited User Wallet","CreateWallet.addWallet":"Prida\u0165 pe\u0148a\u017Eenku","DashboardSideBar.farm":"\u0164a\u017Eba","DashboardSideBar.home":"Domov","DashboardSideBar.keys":"K\u013E\xFA\u010De","DashboardSideBar.plot":"Polia","DashboardSideBar.trade":"Obchod","DashboardSideBar.wallets":"Pe\u0148a\u017Eenky","DeleteAllKeys.back":"Zru\u0161i\u0165","DeleteAllKeys.delete":"Zmaza\u0165","DeleteAllKeys.description":"Po stla\u010Den\xED tla\u010Disla zmaza\u0165 odstr\xE1ni\u0165e natrvalo v\u0161etk\xFD k\u013E\xFA\u010De z po\u010D\xEDta\u010Da. Uistite sa, \u017Ee m\xE1te z\xE1lohu. Ste si ist\xFD, \u017Ee chcete pokra\u010Dova\u0165?","DeleteAllKeys.title":"Zmaza\u0165 v\u0161etky k\u013E\xFA\u010De","Farmer.title":"\u0164a\u017Eba","FarmerStatus.connected":"Pripojen\xE9","FarmerStatus.connectionStatus":"Stav pripojenia","FarmerStatus.lastHeightFarmed":"Posledn\xE1 vy\u0165a\u017Een\xE1 poz\xEDcia","FarmerStatus.noBlocksFarmedYet":"\u017Diadne bloky zatia\u013E neboli vy\u0165a\u017Een\xE9","FarmerStatus.notConnected":"Nepripojen\xE9","FarmerStatus.title":"Stav \u0165a\u017Eenia","FarmerStatus.totalChiaFarmed":"Celkov\xE1 vy\u0165a\u017Een\xE1 chia","FarmerStatus.totalSizeOfLocalPlots":"Celkov\xE1 ve\u013Ekos\u0165 lok\xE1lnych pol\xED","FullNode.title":"V\u0161etky uzly","FullNodeStatus.title":"Stav v\u0161etk\xFDch uzlov","HistoryCard.title":"Hist\xF3ria","LocaleToggle.helpToTranslate":"Pom\xF4c\u0165 s prekladom","MainWalletList.colouredCoin":"Coloured Coin","MainWalletList.createAdminWallet":"Vytvori\u0165 pe\u0148a\u017Eenku pre spr\xE1vcu","MainWalletList.createNewColouredCoin":"Create new coloured coin","MainWalletList.createUserWallet":"Vytvori\u0165 pe\u0148a\u017Eenku pre pou\u017E\xEDvate\u013Ea","MainWalletList.createWalletForExistingColour":"Create wallet for existing colour","MainWalletList.rateLimited":"Rate Limited","MainWalletList.title":"Vyberte typ pe\u0148a\u017Eenky","OfferDropView.dragAndDropOfferFile":"S\xFAbor s ponukami presu\u0148te tu","OfferDropView.title":"Zobrazi\u0165 ponuku","OfferRow.buy":"K\xFApi\u0165","OfferRow.sell":"Preda\u0165","OfferView.accept":"Akceptova\u0165","OfferView.cancel":"Zru\u0161i\u0165","OfferView.title":"Ponuka","PendingTrades.title":"Vytvoren\xE9 ponuky","Plots.back":"Nasp\xE4\u0165","Plots.delete":"Zmaza\u0165","Plots.deleteAllKeys":"Zmaza\u0165 v\u0161etky k\u013E\xFA\u010De","Plots.deleteAllKeysDescription":"Naozaj chcete odstr\xE1ni\u0165 pole? Pole nie je mo\u017En\xE9 z\xEDska\u0165 sp\xE4\u0165.","Plots.deletePlotsDescription":"Pozor, tieto polia sa odstr\xE1nia nav\u017Edy. Skontrolujte, \u010Di s\xFA pam\xE4\u0165ov\xE9 zariadenia spr\xE1vne pripojen\xE9.","Plots.failedToOpenPlots":"Nepodarilo sa otvori\u0165 (neplatn\xE9 polia)","Plots.failedToOpenPlotsDescription":"Tieto polia s\xFA neplatn\xE9, asi ich budete chcie\u0165 odstr\xE1ni\u0165 nav\u017Edy.","Plots.filename":"N\xE1zov s\xFAboru","Plots.managePlotDirectories":"Spravova\u0165 adres\xE1re pol\xED","Plots.notFoundPlots":"Polia sa nena\u0161li","Plots.plotId":"Id po\u013Ea","Plots.plotPk":"Pk po\u013Ea","Plots.poolPk":"Pk poolu","Plots.refreshPlots":"Aktualizova\u0165 polia","Plots.size":"Velkos\u0165","Plots.title":"Polia","Plotter.title":"Pole","PlotterFinalLocation.availableOnlyFromElectron":"T\xE1to mo\u017Enos\u0165 je dostupn\xE1 iba z Electron aplik\xE1cie","PlotterFinalLocation.finalFolderLocation":"Cie\u013Eov\xFD adres\xE1r","PlotterFinalLocation.select":"Vybra\u0165","PlotterProgress.cancel":"Zru\u0161i\u0165","PlotterProgress.clearLog":"Zmaza\u0165 z\xE1znamy","PlotterProgress.plottingStoppedSuccesfully":"Vytv\xE1ranie pol\xED sa \xFAspe\u0161ne zastavilo.","PlotterProgress.title":"Aktu\xE1lny stav","PlotterWorkLocation.availableOnlyFromElectron":"T\xE1to mo\u017Enos\u0165 je dostupn\xE1 iba z Electron aplik\xE1cie","PlotterWorkLocation.select":"Vybra\u0165","PlotterWorkLocation.temporaryFolderLocation":"Do\u010Dasn\xFD adres\xE1r","RLBalanceCard.pendingBalance":"Nespracovan\xFD zostatok","RLBalanceCard.pendingChange":"Nespracovan\xE9 zmeny","RLBalanceCard.pendingTotalBalance":"Celkov\xFD nespracovan\xFD zostatok","RLBalanceCard.spendableBalance":"Disponibiln\xFD zostatok","RLBalanceCard.title":"Zostatok","RLBalanceCard.totalBalance":"Celkov\xFD zostatok","RLBalanceCard.viewPendingBalances":"Zorazi\u0165 nespracovan\xE9 zostatky","RLDetailsCard.copy":"Kop\xEDrova\u0165","RLDetailsCard.description":"Send this info packet to your Rate Limited Wallet user who must use it to complete setup of their wallet:","RLDetailsCard.infoPacket":"Info Packet","RLDetailsCard.myPubkey":"M\xF4j verejn\xFD k\u013E\xFA\u010D","RLDetailsCard.spendingInterval":function(a){return["Spending Interval (number of blocks): ",a("interval")]},"RLDetailsCard.spendingLimit":function(a){return["Spending Limit (chia per interval): ",a("0")]},"RLDetailsCard.title":"Rate Limited Info","RLHistoryCard.title":"Hist\xF3ria","RLListItems.title":"Rate Limited Options","RLSendCard.addressPuzzleHash":"Adresa","RLSendCard.amount":"Suma","RLSendCard.enter0fee":"Please enter 0 fee. Positive fees not supported yet for RL.","RLSendCard.enterValidAmount":"Pros\xEDm zadajte platn\xFA sumu","RLSendCard.enterValidFee":"Pros\xEDm zadajte platn\xFD poplatok","RLSendCard.fee":"Poplatok","RLSendCard.send":"Posla\u0165","RLSendCard.title":"Vytvori\u0165 transakciu","RLSendCard.waitForSyncing":"Pred uskuto\u010Dnen\xEDm transakcie dokon\u010Dite synchroniz\xE1ciu","RLTransactionTable.amount":"Suma","RLTransactionTable.confirmed":"Potvrden\xE9","RLTransactionTable.date":"D\xE1tum","RLTransactionTable.fee":"Poplatok","RLTransactionTable.incoming":"Prich\xE1dzaj\xFAce","RLTransactionTable.noPreviousTransactions":"\u017Diadne predch\xE1dzaj\xFAce transakcie","RLTransactionTable.outgoing":"Odch\xE1dzaj\xFAce","RLTransactionTable.pending":"Nespracovan\xE9","RLTransactionTable.status":"Stav","RLTransactionTable.to":"Pr\xEDjemca","RLTransactionTable.type":"Typ","RTIncompleteCard.copy":"Kop\xEDrova\u0165","RTIncompleteCard.description":"Send your pubkey to your Rate Limited Wallet admin:","RTIncompleteCard.description2":"When you receive the setup info packet from your admin, enter it below to complete your Rate Limited Wallet setup:","RTIncompleteCard.infoPacket":"Info Packet","RTIncompleteCard.submit":"Odosla\u0165","RTIncompleteCard.title":"Rate Limited User Wallet Setup","RTIncompleteCard.userPubkey":"Pou\u017E\xEDvate\u013Eov verejn\xFD k\u013E\xFA\u010D","SearchBlock.blockHash":"Hash bloku","SearchBlock.search":"Vyh\u013Eada\u0165","SearchBlock.title":"Vyh\u013Eada\u0165 blok pod\u013Ea hashu","SelectKey.createNewPrivateKey":"Vytvori\u0165 nov\xFD priv\xE1tny k\u013E\xFA\u010D","SelectKey.deleteAllKeys":"Zmaza\u0165 v\u0161etky k\u013E\xFA\u010De","SelectKey.importFromMnemonics":"Obnovi\u0165 z mnemotechniky (24 slov)","SelectKey.selectFingerprint":function(a){return["Priv\xE1tny k\u013E\xFA\u010D s verejn\xFDm odtla\u010Dkom ",a("fingerprint")]},"SelectKey.selectKeyCanBeBacked":"Mo\u017Enos\u0165 z\xE1lohova\u0165 pomocou mnemotechnickej pom\xF4cky","SelectKey.signInDescription":"Vitajte v Chia. Pros\xEDm prihl\xE1ste sa s existuj\xFAcim k\u013E\xFA\u010Dom, alebo si vytvorte nov\xFD.","SelectKey.signInTitle":"Prihl\xE1si\u0165 sa","SelectKey.title":"Vyberte k\u013E\xFA\u010D","SendCard.address":"Adresa","SendCard.amount":"Suma","SendCard.enterValidAddress":"Pros\xEDm zadajte platn\xFA adresu","SendCard.enterValidAmount":"Pros\xEDm zadajte platn\xFA sumu","SendCard.enterValidFee":"Pros\xEDm zadajte platn\xFD poplatok","SendCard.farm":"\u0164a\u017Ei\u0165","SendCard.fee":"Poplatok","SendCard.finishSyncingBeforeTransaction":"Pros\xEDm po\u010Dkajte na synchroniz\xE1ciu sk\xF4r ako vytvor\xEDte transakciu","SendCard.send":"Posla\u0165","SendCard.title":"Vytvori\u0165 transakciu","StatusCard.connections":"pripojenia:","StatusCard.height":"poz\xEDcia:","StatusCard.status":"stav:","StatusCard.synced":"synchronizovan\xE9","StatusCard.syncing":"synchronizuje sa","StatusCard.title":"Stav","StatusItem.connectionStatus":"Stav pripojenia","StatusItem.connectionStatusConnected":"Pripojen\xE9","StatusItem.connectionStatusNotConnected":"Nepripojen\xE9","StatusItem.difficulty":"Zlo\u017Eitos\u0165","StatusItem.estimatedNetworkSpace":"Odhadovan\xE1 velkos\u0165 siete","StatusItem.estimatedNetworkSpaceTooltip":"Odhadovan\xFD s\xFA\u010Det v\u0161etk\xE9ho obsaden\xE9ho miesta na disku v\u0161etk\xFDch \u0165a\u017Eiarov v sieti","StatusItem.iterationsPerSecond":"Iter\xE1cii za sekundu","StatusItem.iterationsPerSecondTooltip":"Odhadovan\xFD d\xF4kaz \u010Dasovej r\xFDchlosti najr\xFDchlej\u0161ieho timelorda v sieti.","StatusItem.lcaBlockHeight":"Poz\xEDcia LCA bloku","StatusItem.lcaTime":"LCA \u010Das","StatusItem.lcaTimeTooltip":"This is the time of the latest common ancestor, which is a block ancestor of all tip blocks. Note that the full node keeps track of up to three tips at each height.","StatusItem.maxTipBlockHeight":"Max Tip Block Height","StatusItem.minIterations":"Minumum iter\xE1cii","StatusItem.status":"Stav","StatusItem.statusNotConnected":"Nepripojen\xE9","StatusItem.statusSynced":"synchronizovan\xE9","StatusItem.statusSyncedTooltip":"This node is fully caught up and validating the network","StatusItem.statusTooltip":"The node is syncing, which means it is downloading blocks from other nodes, to reach the latest block in the chain","StatusItem.statusValue":function(a){return["Synchroniz\xE1cia ",a("progress"),"/",a("tip")]},"TradeDetail.acceptedAtTime":"Akceptovan\xE9 o","TradeDetail.acceptedAtTimeTooltip":"Indicated what time this offer was accepted","TradeDetail.cancel":"Zru\u0161i\u0165","TradeDetail.cancelAndSpend":"Cancel and Spend","TradeDetail.coins":"Mince:","TradeDetail.confirmedAtBlock":"Potvrden\xE9 v kloku:","TradeDetail.confirmedAtBlockTooltip":"This trade was included on blockchain at this block height","TradeDetail.createdAt":"Vytvoren\xE9 o","TradeDetail.createdAtTooltip":"Time this trade was created at this time","TradeDetail.createdByUs":"Vytvoren\xE9 nami:","TradeDetail.createdByUsTooltip":"Indicated if this offer was created by us","TradeDetail.no":"Nie","TradeDetail.notAcceptedYet":"Zatia\u013E neakcteptovan\xE9","TradeDetail.notConfirmedYet":"Zatia\u013E nepotvrden\xE9","TradeDetail.status":"Stav:","TradeDetail.statusTooltip":"Current trade status","TradeDetail.title":"Detaily obchodu","TradeDetail.tradeId":"Id obchodu:","TradeDetail.tradeIdTooltip":"Unique identifier","TradeDetail.yes":"\xC1no","TradeList.amount":"Suma","TradeList.colour":"Colour","TradeList.side":"Strana","TradeManager.createTrade":"Vytvori\u0165 ponuku","TradeManager.title":"Obchodovanie","TradeManager.tradeOverview":"Preh\u013Ead pon\xFAk","TradeManager.viewTrade":"Zobrazi\u0165 ponuku","TradeOfferRow.buy":"K\xFApi\u0165","TradeOfferRow.sell":"Preda\u0165","TradeOverviewTable.tradesShowUpHere":"Ponuky sa zobrazia tu","TradeOverviewTableHeader.date":"D\xE1tum","TradeOverviewTableHeader.status":"Stav","TradeOverviewTableHeader.tradeId":"Id ponuky","TradingHistory.title":"Hist\xF3ria pon\xFAk","TransactionTable.amount":"Suma","TransactionTable.confirmedAtHeight":function(a){return["Potvrden\xE9 na poz\xEDcii ",a("0")]},"TransactionTable.date":"D\xE1tum","TransactionTable.fee":"Poplatok","TransactionTable.incoming":"Prich\xE1dzaj\xFAci","TransactionTable.outgoing":"Odch\xE1dzaj\xFAci","TransactionTable.pending":"Pending","TransactionTable.status":"Stav","TransactionTable.to":"Pr\xEDjemca","TransactionTable.type":"Typ","WalletAdd.description":"Vitajte! Pre z\xE1lohovanie va\u0161ej pe\u0148a\u017Eenky sa pou\u017E\xEDvaj\xFA nasleduj\xFAce slov\xE1. Bez nich strat\xEDte pr\xEDstup k svojej pe\u0148a\u017Eenke, chr\xE1\u0148te ich! Zap\xED\u0161te si ka\u017Ed\xE9 slovo spolu s \u010D\xEDslom poradia ved\u013Ea nich. (Poradie je d\xF4le\u017Eit\xE9)","WalletAdd.next":"\u010Ealej","WalletAdd.title":"Prida\u0165 pe\u0148a\u017Eenku","WalletImport.description":"Zadaj 24 slov v presnom porad\xED, ktor\xE9 si si ulo\u017Eil pre obnovu tvojej Chia pe\u0148a\u017Eenky.","WalletImport.next":"\u010Ealej","WalletImport.title":"Obnovi\u0165 pe\u0148a\u017Eenku pomocou mnemotechnick\xE9 pom\xF4cky","WalletItem.ccWallet":"CC pe\u0148a\u017Eenka","WalletItem.chiaWallet":"Chia pe\u0148a\u017Eenka","WalletItem.rlWallet":"RL pe\u0148a\u017Eenka","WalletStatusCard.connections":"spojenia:","WalletStatusCard.height":"poz\xEDcia:","WalletStatusCard.status":"stav:","WalletStatusCard.synced":"synchronizovan\xE9","WalletStatusCard.syncing":"synchronizuje sa","WalletStatusCard.title":"Stav","Wallets.title":"Pe\u0148a\u017Eenky"}};