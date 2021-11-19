<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 18.11.21**




<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Community decision: Which persons should be approvers of the vote proposal in Github?
1. Community decision: Define the texts that will be shown to voters in the voting process
1. Hornet voting plugin is ready. Community voting tests in Commnet can start
2. Treasury Website - redesign and texts
3. Open-end community discussion to participate and create ideas

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**


### **Community decision: Which persons should be approvers of the vote proposal in Github?**

- The proposal for the first vote will need to follow a predefined form (based on RFC by Walter, adjusted by Alex). The texts that users will see in the Firefly wallet for Vote questions and possible answers are defined in this so-called "event file".
- The hornet node operators, the IOTA Firefly Nodes, and the Treasury Website will use this file to display the vote information and count the votes. To ensure that only the correct data is included in this file, it will need to be proposed in the community treasury Github Repository as a pull request, checked by a set of approvers, and merged into the Main branch of the Repo.
This check, approval, and merging is a crucial security part of the vote. The community needs to decide which persons to ask to take these checks and approve the proposal.
- Following the last community call on 04/11/21, a discussion thread has been created to nominate candidates:
https://github.com/iota-community/Community-Governance/discussions/52
- The nomination has ended at 18/11/21 at 12:00 CET
- Results:

![image](https://user-images.githubusercontent.com/77154511/142581311-1d2b4d3d-428a-425f-bacf-57f3e77efa27.png)


- Also, a poll was created to decide on the numbers of approvers

![image](https://user-images.githubusercontent.com/77154511/142581194-46320cbf-79af-413b-9928-b8292808ccdd.png)


According to this, the following decision has been taken by the participants of the meeting:
- In total, 13 members will be enabled as approvers.
The voting file merge is possible if 10 of those 13 members approve the file as correct.
The call participants have decided to elect the members according to the received number of upvotes in the nomination process.

### Elected members:

1. Linus Nauman
1. Sissors
1. Dr. Electron
1. Dave [EF]
1. Adamski
1. Merul
1. Edur
1. pmaxuw (microhash)
1. Gman214
1. MuXXer
1. mathieu (Chris Alice)
1. Vrom
1. Alex Sporn



### Community decision: Define the texts that will be shown to voters in the voting process

- During the voting process in Firefly, the voters will see a page where they are asked to cast their decision.
- The exact text displayed to the voters needs to be defined by the community

![image](https://user-images.githubusercontent.com/77154511/142581113-89169884-a00f-47a5-9b28-672cac773533.png)


- The group has decided to create a thread in the #governance-discussion Channel in the IOTA Discord:
https://discord.com/channels/397872799483428865/839927402242637834/910918135706710088
where these texts can be discussed and changes proposed. A selection should be made using polls, and a final decision will be taken in the next meeting to complete this task.

- With the definition of those crucial texts, the voting file could already be drafted to the Community Governance Github as a draft pull request. Issuing this draft version of the file will likely be done live via screen sharing in the following community call. Like this, it is entirely transparent and verifiable that the community decisions are executed as proposed by the participants.
- The Pull Request will stay in a draft stage until the final date of the vote is decided. Once the final date is known, the values for the counting milestones need to be included in this file. 
- Once this has been done (also live-streamed for the community), the elected approvers need to verify the correct execution of this process, and if no errors are found, the file can be merged into the Repository Master branch.

### **Hornet voting plugin is ready. Community voting tests in Commnet can start**

- The Hornet plugin to count votes is ready and available in the develop branch of the Hornet repository:
https://github.com/gohornet/hornet/tree/develop/plugins/participation
- The community Node operators are planning tests in Commnet for the coming days.
- A CLI Wallet is available to create the vote transactions in the Commnet
- If you wish to participate, connect to the Commnet operators in the #commnet channel in Discord.

### **Treasury Website redesign and content**

- The website will display the information that led to this decision and give access to all information created in the last 6,5 months in this Community Treasury initiative
- It will also be possible to initiate the vote from this website.
- It will have a FAQ section for voters.
- It will have a complete Tutorial that explains every step of the voting process.
- It will display the live results and statistics during and after the vote.
- Text for the pages to review:
https://github.com/iota-community/treasury-web/pull/6

![image](https://user-images.githubusercontent.com/77154511/142581615-83e6f2ce-40f7-4ac1-81fc-f47c855e4d90.png)



### **Open end community discussions**

Some questions came up again and have been discussed by the community:
- If I have already initiated staking with my tokens and then intend to initiate the vote, will it be possible that I miss 1 or 2 milestones of my staking (10 - 20 seconds) during the time that the voting transaction is confirmed?
    - We have already received confirmation from the Hornet team that this cannot happen. The staking will be continuously counted, and a milestone cannot be missed.


### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. Positive feedback and input from the community on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 02.12.21 - at 2 pm UTC**

by Phylo#2233 for the community

