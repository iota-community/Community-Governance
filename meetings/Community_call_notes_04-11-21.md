<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 04.11.21**




<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Update from the BUILDERS Team for the Treasury Web voting system.
1. Community decision: Which persons should be approvers of the vote proposal in Github?
1. Community decision: Proposal of Alex, change from 1 IOTA = 1 vote to 1000 IOTA = 1 vote
3. Open-end community discussion to participate and create ideas

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

### **Updates from the BUILDERS of the Treasury System**

- Technicals are in the building phase, and the Hornet plugin is near finalization. Things work as planned.
- The Treasury website will undergo a design change to create a more consistent visual approach throughout the whole voting process.

### **Community decision: Which persons should be approvers of the vote proposal in Github?**

- The proposal for the first vote will need to follow a predefined form (based on RFC by Walter, adjusted by Alex). The texts that users will see in the Firefly wallet for Vote questions and possible answers are defined in this proposal file.
- The hornet node operators, the IOTA Firefly Nodes, and the Treasury Website will use this file to display the vote information and count the votes. To make sure that only the correct data is included in this file, it will need to be proposed in the community treasury Github Repository, checked by a set of approvers, and approved to be merged into the Main branch of the Repo.
This check, approval, and merging is a crucial security part of the vote. The community needs to decide which persons they want to ask to take these checks and approve the proposal.
- The community will need to decide on the number of persons that need to come to a unanimous agreement and approve it in Github. A suggested number in the call was ten people.
It was discussed that the community could suggest a group of persons and that people could nominate themselves as approvers of this.
- These people would receive approver privileges in the community Treasury Github Repo and a rule would be created that the proposal can only be merged into the Main Branch and a release created if all those ten people have checked and approved the proposal.
- Please use the discussion in the thread to nominate persons you would want to take on this task for the community.
- Give a Thumbs emoji to support suggestions
- If you want to nominate yourself to be an approver, do it there in the tread and receive thumbs-ups.
- The discussion and polling opportunity has been created here in the Github Discussion forum:
https://github.com/iota-community/Community-Governance/discussions/52

### **Community decision: Proposal of Alex, change from 1 IOTA = 1 vote to 1000 IOTA = 1 vote**

- In the beginning, we suggested counting every IOTA token sitting on a UTXO with the required voting metadata as one vote counted per milestone
- In a worst-case scenario (All tokens in the Tangle vote for 1 opinion), this could result in reaching the limit of Unit64 size for the voting count in nodes because it could, in the worst case, lead to a very large number that Unit64 numbers cannot capture
- An easy solution would be to increase the definition of 1 Vote to 1 Ki (1000 IOTA) instead of 1 IOTA. This would reduce the number of votes already by a factor of 1000 and therefore fit into the Unit64 requirements.
- Everyone in the call agreed that this is a perfect technical solution, and it will be implemented as proposed by Alex




### **Open end community discussions**

Some questions came up again and have been discussed by the community:
- Regarding participation or bringing up proposals, what is the best way to propose solutions for a possible community treasury?
- Propose it in the #governance-discussion channel in Discord. This is where most involved members will pick up your ideas and discuss them with other members.
- Also, of course, it's always possible to bring up ideas in the 2 - weekly community calls, and the involved people will be happy to talk about new ideas.
- Someone came up with the idea of an open, accessible community calendar to keep track of all events and activities in the community and participate in it. We will look into possible solutions for this



### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. Positive feedback and input from the community on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 18.11. - at 2 pm UTC**

by Phylo#2233 for the community
