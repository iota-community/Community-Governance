<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 12.08.21**




<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Firefly voting progress, Proposal handling Github
1. Vote marketing / Project naming / creating awareness
1. Firefly UI/UX proposal by IF Design Crew
1. Core Team that develops the Firefly voting plugin
1. Open end community discussion for all of us to participate and create ideas





<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

### **Using Github to create, discuss, approve and publish proposals**

We envision IOTA’s Community Governance Github repository to be utilized for proposal management. This will serve as a staging area for proposals prior to their final submission to the community nodes and Firefly.

Github is considered a trustworthy source and provides a very secure environment for proposals at this stage.

This method should be sufficient for our initial rollout as we await the release of ISCP.

The benefits of this approach are that it provides enough transparency into the process and allows everyone to participate.

![image](https://user-images.githubusercontent.com/77154511/129310596-0df138ce-e650-4662-9851-0c84d958c727.png)


### **Usage**

**Draft/Request for Comments Proposal**

- A user creates a new pull request with a proposal (DRAFT) specification against the governance repository master branch
- The user provides sufficient information within this proposal following the proposal template described in this Proposal RFC
- The created pull request gets shared within the community to provide feedback/comments/etc.
- The proposer should make sure to gather a lot of interest and promote their idea before it’s passed to the submission stage.


**Submit Proposal**

- Once the proposer is comfortable to proceed, they will need to submit their proposal for approval by moving the created pull request from “Draft”- status to “Ready for Review”
- The pull request enters a defined, required approval process and awaits all approvals (mixture of IF/community members)
- We can automate this via GitHub Actions inc. various verifications.

**Proposal Approval**

- Once the pull request is approved, it’ll get merged into the master branch under the “proposal” folder.
- GitHub Action can be used to publish the proposal
- This tool could be used to automatically create an immutable hash of the release and post it as a message in the tangle, so everyone could have a proof and the hash of the valid proposal: https://github.com/iotaledger/gh-tangle-release
- GitHub Action can also post information about a new proposal to the **#governance-discussion channel** on Discord
- Any new proposal within the “proposals” master branch are picked and promoted within Hornet nodes (with voting plugin)
- Upload to nodes could be done manually. Or the Github API can be used so that node operators enable the automated upload of approved Proposals to the node
- Firefly makes use of the existing API and picks approved proposals from the Master Branch Release

### **Firefly UI/UX design ideas by the IF Team**

The IF has created some ideas how the Frontend of the voting Tab in Firefly could look, great ideas, and this was welcomed

See some ideas here:

![Dashboard-1 Acc](https://user-images.githubusercontent.com/77154511/129310271-9f586b4d-e29f-4acd-a8b9-f7e3f0cd3c8e.png)
![Dashboard-1 Acc (1)](https://user-images.githubusercontent.com/77154511/129310329-2d954b4d-3278-4f77-8317-40307a62b7fd.png)
![Dashboard-1 Acc (2)](https://user-images.githubusercontent.com/77154511/129310441-339e2db0-4b60-4c38-a652-82317717ca79.png)



### **Core development Team**

We will form a Project Team of members that dedicate full time / part time to start building the needed software and bring the project forward. Some community developers have applied to take this task, and we are open to more contributors.

### **Outreach / Information**

- We all agreed that we need to start promoting and bring the word out to the community. We invite skilled community members to support us in this task. 
- The IF Design Team will help to develop a Brand and Design for the Project. Members with design and marketing skills are welcome to join the initiative
- We will create a Twitter account and potentially a YouTube channel for the initiative


### **Need for translations?**

- We discussed if it is needed to translate every proposal.
- This will not be possible to implement in Firefly with different proposal languages
- For the future, it shall be in the interest and scope of the proposers to provide translations if they envision it would help the proposal to gain more votes
- Firefly Frontend will be translated using the community translators same as it was used already

### **Contribute**

**We want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. We would hope for positive feedback and input from the community on all the above-discussed topics. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the IOTA voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 26.08. - at 2 pm GMT**

by Phylo#2233
