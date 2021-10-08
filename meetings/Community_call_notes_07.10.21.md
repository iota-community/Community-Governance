<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 07.10.21**




<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Update from the BUIDLERS Team for the Treasury Web voting system.
1. Decisions on timeframes for commencing and holding period from the Discord poll
1. FAQ Questions for the Treasury Website - call for contributions.
3. Open-end community discussion to participate and create ideas

Link to the recording of the call: https://www.youtube.com/watch?v=zk4oPGfNpiQ

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

### **Updates from Adam and Greg BUILDERS of the Treasury System**

- Adam and Greg gave updates on the current status. The website is in the building phase. The content for the information website is finalized and has gone through some reviews. The design has been refined by the community designer group and should make a beautiful website.
- The community contributed FAQ questions that have been included in the content https://hackmd.io/gEAMi0KvRO-9EFp1_1ttig
- Every community member will have the chance to request updates on the website by creating pull requests against this repository:
https://github.com/iota-community/treasury-web
- on the technical side still, some fine tunings and minor implementation details are discussed with the Firefly team to increase mainly the user experience for the vote

### **Results of the poll about the time periods**

In the last meeting, the participants agreed that the community should make some decisions about timings
- **Poll 1**: How long should the commencing period be? (This period is when the vote is possible for users, and the nodes observe the ledger for casted votes. It is the timeframe **before** the valid counting starts, and votes gain weight with every milestone. Changing or removing the vote can be done without consequences in the final result)
   - 3 days
   - 5 days
   - 7 days
   - 10 days
   - 14 days
- **result:**

![poll Result:](https://cdn.discordapp.com/attachments/839927402242637834/895665554508099614/unknown.png)

- **Poll 2**: How long should the holding period be? (this period is the timeframe within the votes are counted, and the voting weight builds up with every counted milestone. Every change in a vote will result in changes in the final counting for a voter in this period. The purpose of this timeframe is to create a risk scenario of losing capital for malicious actors that intend to use vote buying or flash loan attacks to gain an unfair increase in voting power. The longer this period is, the higher the potential losses for attackers)
  - 2 days
  - 4 days
  - 5 days
  - 7 days
  - 10 days
- **result:**

![poll](https://cdn.discordapp.com/attachments/839927402242637834/895665641388933150/unknown.png)


### **Open end community discussions**

Some questions came up again and have been discussed by the community:
- Regarding the commencing period (decided in the poll to be seven days)
   - What would happen if some exchanges have not opened withdrawals until this period starts or what happens if exchanges have problems during this period and are stopping withdrawals during this time pre-voting?
   - It can be seen as an issue; on the other hand, all exchanges are open already (with some ups and downs), so people will definitely have enough chances to get tokens down from exchanges. Still, this point needs some more thought and will be discussed again.

- Some talks about the envisioned community test phase...
   - all agreed that the comnet would be the place to go for intensive testing of the counting mechanism. Maybe the community can build a useful CLI - Wallet to simulate the voting on commnet while Firefly is in the auditing phase.
   - Minimum one "dummy vote" with the final system for all community members should happen on mainnet before the actual vote goes live to make sure that anyone has the chance to test it out. This, of course, with a reduced timeframe of a couple of days for the whole process



### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. Positive feedback and input from the community on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 21.10. - at 2 pm GMT**

by Phylo#2233 for the community
