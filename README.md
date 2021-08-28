

![image](https://user-images.githubusercontent.com/77154511/126058990-bc0927a8-469a-424f-a538-d8d3eea549a1.png)



<!-- IOTA Treasury Governance Info Thread -->
# IOTA Treasury Governance Info Thread

The involved community members hope to give the community in this thread the most recent updates and info on how the IOTA community approaches and develops the upcoming vote for or against a community-controlled governance structure.
And we also hope to inform a broader part of the community about the ongoing discussion and actions and invite everyone to participate and get actively involved in this important topic.


<!-- GENERAL INFORMATION AND HISTORY OF THE TOKENS -->
## General Information and history of the Tokens:


With the launch of the Chrysalis Network, the community has been offered the option to decide, if unclaimed tokens from the initial crowd sale and some network upgrades in 2017 in which users needed to claim their funds after the upgrade that have not been claimed until today, should be released into a status where the IOTA community takes control over those funds. 
The node operators had 2 options with the launch of Chrysalis: 

- [ ] Choose to keep everything as it was before **(IOTA AS Fork)** 
- [ ] Give the community the chance to decide the further usage of those funds **(IOTA Chrysalis Mainnet)**.

 Not a single user or node operator has taken the chance of IOTA AS and so the IOTA community now has 2 options to choose from and continue. Read the details about this topic in the following BlogPosts from IF:
 
https://blog.iota.org/unclaimed-tokens-community-treasury-and-iota-as-faq/

https://blog.iota.org/iota-community-treasury-and-genesis-validation/

Shortly after the Chrysalis update and those BlogPosts, the IOTA Community in the Discord Server started to discuss this topic intensively and a huge amount of members have since then been actively involved in the process of developing a solution to give the whole IOTA community a voice and make a vote possible. 
It is important to mention that this is a purely community-driven initiative and the IOTA Foundation is not actively leading those discussions. The IOTA Foundation has offered support in technical questions and administration and will always support community driven initiatives, is available whenever asked to do this, but otherwise will not actively drive this process in any direction. 
We as a community appreciate this, seeing the big responsibility and the big chance that goes hand in hand here.

### **The following resources have been created since then and are available to inform yourself and take part in the ongoing process:**

- [ ] **Github Repository** - here we started a more focussed discussion on topics initially - this Github Repo will also be used to host an overview about the ongoing initiatives neededed for a voting mechanism - we want everything to be open source and transparent:
https://github.com/iota-community/Community-Governance/discussions
A second repository focussing on the specifications of the tech and the real software development is this one:
https://github.com/iota-community/treasury

- [ ] **IOTA Discord Channels:**
We created 3 channels where daily ongoing discussions about the topics are happening. This is the current main place to get involved and participate. Please use the invite 
https://dicord.iota.org and join the channels 
* **#governance-discussion**
* **#voting-tech**
* **#governance-vission**
            Use the !rank function and rank yourself !governance to receive notifications 

- [ ] **Google Drive folder:**
A loose collection of papers, docs, articles. and other drafts created by several community members can be found here in this public folder:
https://drive.google.com/drive/folders/1hCyYobDhQlLrTvOROuY0woy7sAq-qL7x?usp=sharing
It contains technical ideas, proposals for possible voting and Treasury solutions, Articles, researches, and summaries of our weekly meetings. 

- [ ] **Weekly / 2 weekly Community meetings in Discord.**
We have established to meet and do live chats about all ongoing developments in the project now on a 2 weekly basis. We meet every second Thursday in the IOTA Discord #General-voice Channel to exchange our thoughts and move forward in the process.
Find the meeting notes here:

https://github.com/iota-community/Community-Governance/tree/main/meetings

A Large number of community members have taken part in those discussions and calls and we have successfully made some decisions on how the first vote should be approached.


<!-- THIS IS THE CURRENT STATE OF THE PROJECT COMMUNITY VOTE ON THE UNCLAIMED TREASURY TOKENS -->
## This is the current state of the project “Community Vote on the unclaimed Treasury Tokens”:

### **General Vote Info for the first vote**

The community will have 2 clear defined options of what should happen to the tokens and these two options will be the votable options in the first vote:
- [ ] **Build:** The Tokens will be made available and handled over into the control of a system that is governed by the IOTA community to support and fund projects and developments in the IOTA Ecosystem. This system needs to be built first before the tokens can be moved into the control of this system.
- [ ] **Burn:** The tokens will stay removed from the IOTA network and can never be created or used again in the IOTA DLT.

The above-stated vote should happen as soon as possible, but not before IOTA Ledger integration is available and Major Exchanges like Binance have opened Withdrawals for IOTA again

- [ ] **The voting weight will be related to the IOTA tokens a user holds. 1 IOTA = 1 Vote** To gain the maximum weight, voters will need to hold the tokens on an address for a defined time. Only holding it on that address for the full defined voting time builds 100% voting weight.

- [ ]  **100% of all valid votes** is defined as the amount of IOTA tokens successfully migrated into the chrysalis network at the milestone when the vote-counting period ends.**

- [ ]  **Minimum total participation** is not required to create a legit and binding vote outcome - only the amount of valid casted votes will be used to determine the result.

- [ ]  **The winner** will be the option that receives the simple majority of all valid votes

- [ ] Should an **error in the code** be exposed during or after the decision which has been proven exploited to influence the outcome, the vote is invalid and has to be repeated after the error has been removed from the code.

- [ ]  **Should the outcome of the vote be a draw**, the community will set up a second vote with the same conditions as the first one

- [ ]  **The vote will be made available in the Firefly Wallet** for users, in a system developed by the community with technical support and backing of the IF

- [ ]  **Counting will be done in a Hornet node plugin**. Node owners will be able to implement this plugin and validate the voting process.
- [ ]  

<!-- Treasury Website -->
## Treasury Website

The participating community members have decided to build a Website as o single point of information for voters. This Website will show all relevant informations about the vote, will display totorials and guides how to vote and will display the full Referendum.
The Website is currently under construction.
 
The domain choosen by the community members is: [IOTATreasury.org](https:iotatreasury.org)

Contributions regarding Design and Branding are requested and welcome! Get in contact in the IOTA Discord in the #governance-dsicussion channel please.


<!-- THE VOTING MECHANISM -->
## The Voting mechanism:

IOTA holders will receive an updated version of the Firefly Wallet with an implemented option to vote. Votes are related to the balance of a user. 100 Mi = 100 million votes

### **The Vote will be separated into different phases**

- [ ] **Commencing:** timeframe where users are invited to cast a vote and are free to change the vote at any time without consequences. Should be long enough to give anyone the chance to vote without a rush and to get all information. Not yet finally decided how long it will be.

- [ ] **Holding:** timeframe in which votes need to be held on addresses to reach the full weight. Tokens can be moved, but moving them will lead to Votes not longer beeing counted until they are used again in a new vote. This will lead to a percentage of the full voting weight building in relation to holding time. Only Votes that are held from the beginning till the end of the holding period reach the full voting weight. The holding time also still needs to be defined finally by the community.

- [ ] **Ending:** After the defined voting End-milestone the votes will get counted by a software plugin and the vote outcome will be published. This software will be implemented in the Hornet nodes and every node owner can activate this and validate the count with the own node

Users have a time frame before the counting of votes starts to declare their vote. During this timeframe, they can always change the vote without any consequences on the outcome. 
This timeframe has not yet been finally decided, but the agreement is that it should be long enough to give anyone the chance to vote so something like 1-2 weeks seems sufficient.

### This is the proposed Voting flow for a user:


![Chrysalis Vote Flow-Vote Flow UI Firefly](https://user-images.githubusercontent.com/77154511/131206679-99264e76-5410-4a73-a2b1-c8b08948640b.png)


### This is how a user will cast a valid vote:
 
 - [ ] After Profile login in Firefly, a voting option is available.
 
 - [ ] The user will be able to decide exactly which amount of Votes (derived from token balance) should be used in the vote (the user can click/unclick all Wallets of the profile)
 
 - [ ] After the amount of Votes is chosen, the user must now decide for which option the vote should count - Burn or Build
 
 - [ ] The user unlocks the vote with the Stronghold password and confirms the decision

**Firefly initiates the following logic:** 

 - [ ] Every selected Wallet sends a transaction that inherits the amount of Votes = IOTA Tokens choosen by the voter to itself. If the wallet contains several addresses, the amount will be selcted from those addresses to match. Addresses send tokens to the itself.
 
 - [ ] As an indexation Payload of this Transactions, the opinion (Burn / Build) will be attached as Data in the message payload

-  [ ] With this system, the user is always in control of the funds. All IOTA Tokens will stay in the wallet of the user and are not moved out of the control of the owner. If the owner can hold the tokens over the defined timeframe on the addresses, the vote weight counts full. If the owner decides to move the tokens earlier they will not count full, but the time the tokens have been used to vote will be taken as a percentage of the full voting power (7 days holding of 10 days total holding period will count 70%)

Detailed current specification (still workk in progress) to find here:

https://github.com/iota-community/treasury/blob/main/specifications/chrysalis-referendum-rfc.md


### This is how a user can change a vote:

- [ ]  **During commencing time:** open the voting menu and initiate a new vote as described above. The old vote will be removed and the new one initiated

- [ ]  **During the holding period:** Initiating a normal transaction with tokens that are currently used to vote will remove the Indexation Data payload together with the tokens from the UTXO. The voting plugin will recognize this change with the next milestone and stop accumulating the votes for this address. To use a different amount of votes now, the user has to initiate a new vote as descibed above.

- [ ]  **During the holding period:** Users can always add tokens into the vote that are not currently used by initiating the voting process for those addresses. The tokens will then be counted from the next milestone on and so will reach also a percentage of the full weight (starting on day 7 of 10 will create only 30% total voting power for those tokens)

- [ ]  **Changing the opinion:** A user can also change the Opinion of the vote during the holding period. Therefore the process can be initiated to “change opinion” and the tokens will be sent again, but now with the opposite opinion in the Data payload. From the next milestone on, the Votes will accumulate weight for the new opinion, but the opinion weight that has been accumulated until the change has happened will still count for the first opinion. So if a user would change the opinion exactly at “halftime” of the vote with an unchanged token amount, both opinions would accumulate exactly 50% weight and therefore result in an effective 0 - summ vote count at the end of the holding time.


The community has started to create some first graphical layouts of how this could look in Firefly and the designs can be found here:

https://drive.google.com/drive/folders/1-7aTuapYyWR7pp3PzIyCvPa_kFDbn9Ko?usp=sharing

![image](https://user-images.githubusercontent.com/77154511/126248484-ea68b1bc-708b-4676-99ba-efbaa65a6d8a.png)

The IF Design Division has also created further refined ideas regarding the User experience, some ides are here:

![Dashboard-1 Acc](https://user-images.githubusercontent.com/77154511/129312921-ac2006ab-31a0-47fc-8261-a8c558de2245.png)
![Dashboard-1 Acc (1)](https://user-images.githubusercontent.com/77154511/129312946-f27015cd-6027-4f7a-8e67-17986ff51fd2.png)
![Dashboard-1 Acc (2)](https://user-images.githubusercontent.com/77154511/129312972-f1cf2008-acf8-4430-ab9c-9076a075c67b.png)

### Using Github to create, discuss, approve and publish proposals

The involved community members envision IOTA’s Community Governance Github repository to be utilized for proposal management. This will serve as a staging area for proposals prior to their final submission to the community nodes and Firefly.

Github is considered a trustworthy source and provides a very secure environment for proposals at this stage.

This method should be sufficient for our initial rollout as we await the release of ISCP.

The benefits of this approach are that it provides enough transparency into the process and allows everyone to participate.

![Github proposal](https://user-images.githubusercontent.com/77154511/131207054-a6d488f1-ccce-46c2-8e2c-dd7c8576f404.png)


### This is how votes will be counted:

- [ ]  **A plugin/extension of the Hornet Node Software** can be activated in every hornet node. Nodes that do not delete (prune) messages during the full voting period (commencing&holding) will be able to produce the results.
- [ ]  The node starts observing the ledger for UTXO’s with one of the opinions Data (Burn/Build) in the indexation Data Payload of addresses.

- [ ] **The plugin keeps track of all those UTXO’s** and adds new ones as soon as they appear in the ledger or removes them from the count as soon as they disappear. 

- [ ]  **Counting** happens from the defined “start - milestone” till the defined “end - milestone”

- [ ]  As a **new milestone is issued every 10 seconds** - this gives an extremely exact counting as every change in opinions or balances will be recognized in a 10 seconds time frame.

- [ ] **After the defined end-milestone**, the plugin produces an output with all observed UTXO’s, balances, Indexation Payloads per milestone, and the final result as an accumulation of that milestone data.

### This is a flow diagram of the process:

**General Flow:**

![Chrysalis Vote Flow-Token-voting](https://user-images.githubusercontent.com/77154511/131207101-37e62b4d-1afd-420a-b234-06d201079912.png)


**Detailed Flow with counting:**

![image](https://user-images.githubusercontent.com/77154511/126058419-cc167490-5543-41b5-a175-3a3d5d57d9d7.png)


**Special cases:**

![image](https://user-images.githubusercontent.com/77154511/126058430-05fe328e-6c48-4f88-bc6f-b9c37a1f58d1.png)


### **Core development Team**

We will form a Project Team of members that dedicate full time / part time to start building the needed software and bring the project forward. Some community developers have applied to take this task, and we are open to more contributors.


---


<!-- COMMUNITY-GOVERNANCE -->
## Community-Governance

This repo is setup to gather and focuss discusions regarding the proposed installement of a community governance over the funds that are currently in the community treasury of the IOTA Chrysalis Main - Network.

It is created as an open place to exchange thoughts, form working groups, explore topics and create different approaches about this complicated topic. Every discussion and action here will be transparent and open source and free for everyone to contribute.

<!-- CONTRIBUTING -->
## Contributing

Main go-to point for everyone that wants to contribute will be the "Discussions" Tab 

https://github.com/iota-community/Community-Governance/discussions 

where we did put up some topics to keep the talk a bit more specific in a forum style. So opinions can be better formulated and will stay visible and easily found.
If you have a topic to discuss please check it it fits under one of the main topics (voting power, voting proposals, ...) and add it as a comment there to avoid the forum spreading out over to many threads.

This should not be a place of disputes over the past or the actions that lead to the fork, but of constructive forward thinking working. Critical questioning of everything that happens here is welcome and encouraged, but spam or toxic behaviour will not bring us forward and so should not be a part of this repo here.


Basic and starting point of this proccess is the anouncement made by the IOTA Foundation in this blog-post 

https://blog.iota.org/iota-community-treasury-and-genesis-validation/ 

and the clarification blog-post 

https://blog.iota.org/unclaimed-tokens-community-treasury-and-iota-as-faq/

Goal will be to propose a voting mechanism and votable options to the community what should happen to this Tokens.
It might also be used to develop ideas and processes how a possible community governed use of those funds can be established, if the community comes to a vote and decides to establish such a system.

The nature of Github Repos allows us to have a verifiable track of all changes and to make it possible for everyone to contribute to the project by issuing commits and pull request.

Have a look at [CONTRIBUTING](.github/CONTRIBUTING.md).

---

<!-- CONTACT -->
## Contact

Currently Maintainers of this Repo:

Adamkundrat - https://github.com/adamkundrat

WernerDerChamp - https://github.com/WernerderChamp

Phyloiota - https://github.com/Phyloiota

Antonio Nardella - https://github.com/antonionardella

If you want to contibute as a Maintainer please get in touch!

This repo is part of the Organisation "IOTA community" https://github.com/iota-community on Github.

