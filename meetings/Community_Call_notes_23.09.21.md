<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 23.09.21**

<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. 1Welcome and Introduction - a short recap
1. Update from the BUIDLERS Team for the Treasury Web voting system.
1. FAQ Questions for the Treasury Website - call for contributions.
1. Some decisions on timeframes for commencing and holding need to be made now.
1. Open-end community discussion to participate and create ideas

Link to the recording of the call: https://youtu.be/z8JgMD_6K0Y

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

### **Updates from Adam and Greg BUILDERS of the Treasury System**

- Adam and Greg gave updates on the current status. The website is in the building phase. Mainly the content needs to be finalized, checked, and then it can go live. The design has been refined by the community designer group and should make a beautiful website.
- including an FAQ Section will be necessary, and every community member is invited to include Questions in the Faq. Please post them in the #governance-discussion channel or contact Gman214 in pm in the Discord
- Every community member will have the chance to request updates on the website by creating pull requests against this repository:
https://github.com/iota-community/treasury-web


### **FAQ participation**

It aims to provide voters an excellent source of information about everything related to the vote and everything that has led to the decisions and the now-used solutions.
- Everyone is invited to contribute, but also be aware that not every submitted question or answer may be presented as submitted. The website's wording, tone, and style are essential to creating a professional experience for the visitors. So edits will be taken, and double submissions will only be presented one time.
- submit your questions in the governance discussion channel

### **Decisions to be made untill the next call**

The participants agreed that the community should make some decisions about timings until the next meeting takes place on 07.10.21. The following questions will be created as polls in the governance channel, and members are free to choose the options they deem most valuable. Finalizing the decision based on the outcome of the survey will happen in the next meeting.
- Poll 1: How long should the commencing period be? (This period is when the vote is possible for users, and the nodes observe the ledger for casted votes. It is the timeframe **before** the valid counting starts, and votes gain weight with every milestone. Changing or removing the vote can be done without consequences in the final result)
   - 3 days
   - 5 days
   - 7 days
   - 10 days
   - 14 days
  
- Poll 2: How long should the holding period be? (this period is the timeframe within the votes are counted, and the voting weight builds up with every counted milestone. Every change in a vote will result in changes in the final counting for a voter in this period. The purpose of this timeframe is to create a risk of losing capital for malicious actors that intend to use vote buying or flash loan attacks to gain an unfair increase in voting power. The longer this period is, the higher the potential losses for attackers)
  - 2 days
  - 4 days
  - 5 days
  - 7 days
  - 10 days

### **Open end community discussions**

Some questions came up again and have been answered by the community:
- Would it not be good to be able to "Pre-Lock" by the user himself at any time? To prevent the user from missing out. Maybe make a "closing" Time?
   This can't be done because it would lead to the need to have nodes keep a very long history of data. So if you do a vote now, but the counting and actual vote happen in 8 weeks, the nodes would have to keep the entire data history for these eight weeks. This is above the storage capacity of most common nodes. So we need to start the vote on a predefined milestone and don't want to force node operators to keep such a long history in the node storage.
- After a vote takes place, what kind of stats about the participation etc., will be published?
   The Treasury website will already display several metrics of the vote during the active voting period. It is planned to show
         - total number of already casted votes (live data)
         - percentage of tokens who participated in the vote (live data)
         - other metrics to be discussed further
         - after the vote has finished, complete reports and data of the count of nodes can be published on the website

Further discussion has taken place regarding the possibility of seeing how many nodes are actively counting the vote and compare the produced date. This depends on the willingness of the node operators to grant the community access to this data (via API). We envision that a vast amount of participating nodes will provide this access.
### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. Positive feedback and input from the community on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 07.10. - at 2 pm GMT**

by Phylo#2233 for the community
