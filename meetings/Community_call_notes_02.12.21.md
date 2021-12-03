<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 02.12.2021

<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. Community decision: Define the texts that will be shown to voters in the voting process
2. Creating the draft pull-request for the first vote event
3. Hornet voting plugin is ready. Community voting tests in Commnet will start this weekend
4. Open-end community discussion to participate and create ideas

Recording availeable here: https://youtu.be/960BgSpQfrw

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

### Community decision: Define the texts that will be shown to voters in the voting process

- During the voting process in Firefly, the voters will see a page where they are asked to cast their decision.
- The exact text displayed to the voters needs to be defined by the community
- Following the decisions in our last meeting, first, some suggestions have been made in the Governance Discussion channel. 
- On 29.11.21, a poll was created to select the best text out of the proposed ones:

<img width="192" alt="Screenshot 2021-12-03 180329" src="https://user-images.githubusercontent.com/77154511/144586878-e9f5d97e-2b1b-4696-86fc-a97232cc2c0e.png">
<img width="231" alt="Screenshot 2021-12-03 180350" src="https://user-images.githubusercontent.com/77154511/144586920-1dfbd426-e00c-46ce-9972-2d0dd8643acc.png">


As a result the following texts have been selected to be displayed to voters in the first vote:

**Build:**
   - The tokens will be used to support and fund projects and initiatives that are important to the IOTA community ecosystem via future votes

**Burn:**
- Burn the Treasury tokens - The unclaimed tokens will be removed from the IOTA ledger and the total supply will be reduced by the number of tokens held in the unclaimed treasury pool

Creation of the draft Pull request for the 1st Treasury vote:
- event file created at: https://github.com/iota-community/treasury/pull/9
- file:
```
{
    "name": "IOTAVOTE1",
    "milestoneIndexCommence": 1977184,
    "milestoneIndexStart": 1987184,
    "milestoneIndexEnd": 1997184,
    "payload":
    {
        "type": 0,
        "questions":
        [
            {
                "text": "What should be done with the unclaimed treasury tokens?",
                "answers":
                [
                    {
                        "value": 1,
                        "text": "Build",
                        "additionalInfo": "The tokens will be used to support and fund projects and initiatives that are important to the IOTA community ecosystem via future votes"
                    },
                    {
                        "value": 2,
                        "text": "Burn",
                        "additionalInfo": "Burn the Treasury tokens - The unclaimed tokens will be removed from the IOTA ledger and the total supply will be reduced by the number of tokens held in the unclaimed treasury pool"
                    }
                ],
                "additionalInfo": ""
            }
        ]
    },
    "additionalInfo": ""
}
```
This pull request has been created life and visible for all attendees of the meeting and is fully recorded visible in the recordings of the meeting:
https://www.youtube.com/watch?v=960BgSpQfrw&t=355s

The file will be updated with the valid milestones once we have a defined start time for the vote.
Then it will be moved from "draft status" into a real pull request and the elected community approvers need to check the file for correctness before it will be availeable for the nodes and the vote.


### **Hornet voting plugin is ready. Community voting tests in Commnet can start**

- The Hornet plugin to count votes is ready and available in the develop branch of the Hornet repository:
https://github.com/gohornet/hornet/tree/develop/plugins/participation
- The community Node operators are planning tests in Commnet for the coming days.
- A CLI Wallet is available to create the vote transactions in the Commnet
- If you wish to participate, connect to the Commnet operators in the #commnet channel in Discord.
- A participation gyuide has been created by Dr. Electron:
- https://hackmd.io/oPnNFFhtRnisAou373lerA?view



### **Open end community discussions**


### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. Positive feedback and input from the community on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 16.12.21 at 2pm UTC**

by Phylo#2233 for the community

