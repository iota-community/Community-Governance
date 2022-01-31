<!-- COMMUNITY-GOVERNANCE -->
# **Community Governance**


## **Open Community Call, IOTA Discord 01.07.21**

A full recording of the call is available here: [https://www.youtube.com/watch?v=aeovywIT0rY]


<!-- COMMUNITY - CALL AGENDA -->
### **Community - call Agenda:**

1. Welcome and Introduction
2. The Vote in Firefly - using Muxxers proposed Hornet Voting plugin.
3. Do we require a holding period for the tokens used to vote?
4. Do we require minimum participation?
5. Are we happy with a simple majority (50% + 1i) or want more?
6. Who will build the plugin?
7. Open-end community discussion for all of us to participate and create ideas


<!-- DISCUSSED TOPICS -->
### **Discussed Topics**
 
 
We talked about the proposed solution to use a plugin in the hornet software to count the votes 
Proposed function:

https://cdn.discordapp.com/attachments/853248225767063592/860180214713024552/TornTUHD0NgAAAABJRU5ErkJggg.png


#### **During the open Voting Window**

- Plugin observes the ledger for addresses that contain the statement "Burn" or "Build" as an indexation payload

- Plugin tracks all changes to these addresses and adds also new addresses that appear and  contain this statement during the period

- Plugin tracks all balances on those addresses that contain a valid voting statement



#### **During the holding period**

- A holding period with a predefined length of milestones starts at a certain milestone

- As soon as the "Vote holding period" begins (defined milestone), the plugin assigns a voting weight to every address that holds a valid voting statement in the indexation payload of the UTXO per every new issued milestone 

- this will result in a time-dependent increase in the voting weight of the tokens on an address. So if a total Voting period of 1000 Milestones is defined, a user must hold the tokens on this address for 1000 Milestones to reach the full value and voting power of the tokens. Every Milestone will add 1/1000 of voting weight to the balance of the address.

- removing the balance from the address during the holding period will stop adding milestone weights and therefore the balance will only count for a part of the full amount needed to reach 100% voting weight

- if the plugin observes a new address with balance and a valid voting statement during the holding period, the weight of the balance counts from the observed milestone, until the balance is removed again from this address or the final milestone is reached. Again counted weight will be `balance held on milestones / total voting milestones`

- this rewards users that can hold tokens during the predefined time but also establishes the most possible flexibility and participation for users that need to do regularly transactions

- Final result will be a calculated voting balance of tokens that hold the voting statement as payload in relation to the time they have been tracked on unchanged addresses.

#### **Key takeaways:** 

- Participants of the meetings were very happy and excited about these possible solutions and it is widely welcomed and accepted by the group.

#### **Problems to solve:** 

- Finding developers with the skills and experience to build this. Muxxer is busy the next weeks but suggested some community devs. We will get in contact with them and see if they can support us. As also other tasks are not solved yet, the community hopes that in a couple of weeks the community devs can find some free time to start building this solution for the community.


#### **Next Agenda topic: Holding period**

- Has been a problematic topic before as it seemed that interrupting a holding period could lead to a total invalidation of the vote. But with the proposed solution described above a very elegant and flexible approach is possible that gives every user the freedom to access the tokens at any point in time during the holding period. The advantage here is, that the vote will count until the tokens are moved away from the address. This is a very welcomed feature of the proposed voting and counting system. 

- Some timeframes have been discussed but not yet decided, but an open voting window (to cast the vote) of 2 weeks before a 2 week holding period for the tokens seems to find
support in the group


#### **Next point: minimum participation**

We discussed several thoughts about that and came to an agreement that we will not require any minimum participation of tokens to declare the voting validly as long as no failure in the counting mechanism can be observed. So every amount of counted valid votes will lead to a decision and will be accepted by the community.


#### **Next point: simple majority**

The group agreed to accept a simple majority of valid votes as a ruling decision in the vote - so 50% + 1 IOTA is needed for a winning decision


The discussion went on to thoughts about how to manage the project and the building of the voting mechanism. We agreed to have a structured project management approach using the Github repo and discussions in Discord and Github. 

A new rank in Discord has been crested  `!rank governance` to make notifications easier for members interested in the topic. We agreed also to focus on the Firefly side of the vote and create some ideas of how the UI/UX approach for users could be built and what users would need to do to cast a vote - the simpler the better. We will approach the IF Firefly Team and also UX/UI Team if we need some input on that topic. 

Focussing on the User side of the vote now can also be used to bridge the time until devs will be available to vote on the Hornet side of the solution. Until then a detailed requirement and program flow for the plugin will be created by us with the help of the community devs to define exactly the scope of requirements.

We will start gathering in small Teams of interested members to find some more focussed approaches on the different topics. Those Teams will still need to be defined and will stay flexible and open. Team meetings in smaller scopes should happen whenever demand is there.


**We want to highlight that the above-discussed topics are all open to discussions for every community member that wants to engage or raise concerns or disagreements about it. We would hope for positive feedback and input from the community on all the above-discussed topics. All meetings and calls will happen in the public channels and members are invited and welcome to join and raise their voices during the sessions. All code and technical solutions used in the IOTA voting system will always be fully open-sourced and published on GitHub **


#### **The next community call in the Discord is planned for Thursday 15.07. - at 2 pm GMT**

by Phylo#2233
