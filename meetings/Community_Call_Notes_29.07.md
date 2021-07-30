<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 29.07.21**




<!-- COMMUNITY - CALL AGENDA -->
### **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Submitting Proposals to Nodes - RFC by Werner
1. The question of potential linkable addresses
1. Firefly UI/UX Design work in progress
1. Community Outreach / Creating awareness in the community
1. What do we need to do next and who will do it?
1. Open-end community discussion for all of us to participate and create ideas




<!-- DISCUSSED TOPICS -->
### **Discussed Topics**

#### **How to create and submit proposals to Nodes - RFC by Werner**

Werner explained in detail the RFC document (request for comment) he created, that describes exactly which syntax structure and requirements a proposal needs to have to be submitted to a node. This process is important, so that nodes can track votes on the tangle and create valid results. In addition to the points described in this RFC the actual software that will be implemented in the hornet node to track all those votes will still need to be defined and produced - this is the scope of another RFC and the team that builds the node software.

**Key points of the RFC and the discussion**

 - The proposals can be uploaded by node owners in advance of an upcoming vote using the hornet API of their node
 - The object uploaded to the node can consist of several independent proposals to vote on, that are happening at the same time
 - Security is guaranteed through unique proposal IDs created as hash functions of the proposal object.
 - We imagine that most node operators would be able to implement the counting system. Final requirements for hardware still need to be disussed.
 - Proposals need to be submitted as Pull Requests in the community governance Github and only after approval of the community members and IF devs that have validated the correct content will be made available as a votable proposal and can be used by node owners.
 - Every proposal consists of a single question/statement and can have several options to vote on
 - Only one option per proposal can be chosen
 - A referendum is structured in 4 different phases that need to be defined (by defining the amount of milestones)
 - Counting votes is dependent on holding period of the tokens on an address and full voting power can only be reached if the tokens stay on the address the full holding period
 - Changing or moving the tokens is always possible, but will result in a reduction of voting weight according to amount of milestones the tokens have been held in the vote
 - Votes will happen using a value transaction containing the tokens of the user and an attached data field that contains the opinion. 
 - The transaction is a "send to yourself" - type transaction and therefore no tokens of the users will be spent or leave the control of the voter.
 - Several endpoints of the node are defined that can be used to receive the data of the ongoing counting.

The detailed document can be found here and comments are welcome:

https://github.com/WernerderChamp/protocol-rfcs/blob/master/text/0000-chrysalis-referendum/0000-chrysalis-referendum.md

It will be submitted to the IF, Firefly Team and community developers to check, comment and approve the solution.


#### **Potential linkable addresses in the vote**

A few people had addressed concerns about the way votes will be merged in a single process to create voting transactions. This means that users will normally choose the amount of their total wallet balance they want to use for a vote and then initiate the voting transaction. This is a simple and convenient way and should create a successful vote in a short timeframe so that the normal user gets feedback of success and does not need to worry anymore about the whole voting process.
Firefly therefore will use funds from all addresses and outputs to generate the transaction with the amount of funds the user has decided. 

If a user has funds on several addresses, these addresses will generate votes with the voting opinion in a very close timeframe together, and so the risk would be that someone could guess and link that several addresses belong to the same user. This can be a privacy concern for some users.
In the last days and also in yesterdays call the community expressed the opinion that this might not be seen as a big issue for most users and therefore we would hope to not need to create a proccess in Firefly that will create a random distribution of single votes per sibgle address from a user over a longer timeframe (which will reduce traceability, as several minutes distance between the transactions will leave  it not clear anymore if addresses belong together).
Creating such a solution will be very likely possible, but it will largely reduce user experience and create a complexity that might very much reduce voting participation. Users would need to initiate the voting process and then wait with opened and connected Firefly app a certain timeframe (1 hour/2hours?). A randomness in Firefly would then send voting transactions from all user addresses during this timeframe at random points to make it impossible to link the transactions together.
We don't want normal users to go through this long-lasting process.

Everyone that wants this extra privacy can do this process manually, by doing several votes with only fractions of the addresses that belong to the user and therefore effectively spread the votes over a timeframe that the users sees as sufficient.
We will discuss this further and if it is strongly requested maybe create an automatic function, that can be activated in a kind of "advanced voting setting" for users that really want this feature.
To put it into perspective. At the current implementation of firefly transactions this privacy is also not present. If users have funds on several addresses in a wallet and send the full wallet balance in a transaction, also all those addresses (outputs) are consumed as inputs in the transaction and therefore are directly linked together. The only added information in a vote will be the option chosen by the voter added to the addresses.

We will address this in the coming days and see what opinions arise.



#### **Outreach / Information**

We would like to create a few short video clips / graphical designs to explain the voting procedure to the users. We will outreach to talented community members if some of them would be interested to contribute.
We are also planning to create a website that displays the ongoing votes and progress of counts and the proposals to make it easy for the community to follow the progress of votes.







**We want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. We would hope for positive feedback and input from the community on all the above-discussed topics. All meetings and calls will happen in the public channels and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the IOTA voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday 12.08. - at 2 pm GMT**

by Phylo#2233
