<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 16.12.2021

<!-- COMMUNITY - CALL AGENDA -->
## **Community - call Agenda:**

1. Welcome and Introduction - a short recap
1. More to talk about the Firefly vote display, Some UI / UX questions
3. Hornet voting plugin. Community voting tests successfully in Commnet last weekend
4. Open-end community discussion to participate and create ideas

Video recording of the full meeting availeable here: https://youtu.be/9bB-VN3sAo8

<!-- DISCUSSED TOPICS -->
## **Discussed Topics**

Firefly design / vote UI/UX discussions

- Details of the voting layout have been discussed. Mainly focussing around how much detailed information should be directly visible in Firefly. Most participants seem to like the idea of not overloading the UI with too much text and complicated displays.
- We will probably do a display of the "total voting power per milestone" (profile balance in Iota divided by 1000)
- Then, for an ongoing proposal, the maximum achievable votes for this proposal can be displayed (total voting power per milestones times milestones holding period of the proposal)
- attendees brought up the idea to reveal additional information to a proposal only in an unfolding option to keep to main UI clean and simple

Possible UI - layouts could be displaying such information for example:

<img width="696" alt="Screenshot 2021-12-19 121125" src="https://user-images.githubusercontent.com/77154511/146663608-bd12b680-ecca-4610-a7f1-2c7ac037b7fd.png">

<img width="691" alt="Screenshot 2021-12-19 121256" src="https://user-images.githubusercontent.com/77154511/146663613-ed9110c8-7a25-4342-a3e6-459195fce658.png">

<img width="698" alt="Screenshot 2021-12-19 121312" src="https://user-images.githubusercontent.com/77154511/146663622-de243805-e480-4bd3-9980-b2b6991e1300.png">


- After the first vote, further votes can be added as events to Firefly as long as the node that Firefly is connecting is aware of those events (has added it in its database)


### **Community voting tests in Commnet have happened last weekend**

- The community tested the voting functionality already with the nodes in Comnet. Everything worked fine.



### **Open end community discussions**

- the point of possible voting delegation has been brought up.
    - currently, this is not possible in the implementation of the first vote. Usually, delegation happens with the involvement of a smart contract that handles all those delegation functions, so it is not yet possible to be implemented. But we all agree that this will play an essential role in future votes and DAO's and we aim to implement this functionality as soon as technically possible

- question about the production of the voting results have been answered (milestones related)
    - as all nodes in the network have to follow the coordinator to stay in sync, manipulation of the milestones is not possible (which would lead to a different counting)
    - Also, as every participating node publishes the hash of his counting as a result, any false produced result would directly be visible and can be checked by the node operators.

- the group further discussed if it would not be feasible now to make already plans for the case that the community would vote for BUILD.
    - in that case, further votes on the strategy and organization of a potential treasury DAO would be needed. The group decided to use the IOTA discord, for now, to organize around specific topics and formulate proposals and strategies for a Treasury. 
    - channels to take part in these discussions:
    - #treasury-voting-tech
    - #treasury-vision
    - #treasury-website
    - #treasury-frameworks

- Also, the participants agreed to use a public google drive folder to collect documents for collaboration on ideas.
    - This folder is set up as part of the already existing Governance google drive: https://drive.google.com/drive/folders/1hCyYobDhQlLrTvOROuY0woy7sAq-qL7x?usp=sharing
    - the newly created public folder is this one: https://drive.google.com/drive/folders/14mLxezxv5isiJOMuo8kKWEPlYJcNS_wW?usp=sharing


### **Contribute**

**The involved community members want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. The community's positive feedback and input on all the above-discussed topics are welcomed. All meetings and calls will happen in the public channels, and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the Community voting system will always be fully open-sourced and published on GitHub**


#### **The next community call in the Discord is planned for Thursday, 30.12.21 at 2 pm UTC**

by Phylo#2233 for the community


