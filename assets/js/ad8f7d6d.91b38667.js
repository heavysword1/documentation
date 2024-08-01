"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[8539],{2446:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(5893),i=t(1151);const s={},a=void 0,r={id:"archive/proposals/proposal_2210-2_proof_of_fee",title:"proposal_2210-2_proof_of_fee",description:"Proposal Type: Signalling",source:"@site/docs/archive/proposals/proposal_2210-2_proof_of_fee.md",sourceDirName:"archive/proposals",slug:"/archive/proposals/proposal_2210-2_proof_of_fee",permalink:"/archive/proposals/proposal_2210-2_proof_of_fee",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/proposals/proposal_2210-2_proof_of_fee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"proposal_2210-1_final_supply",permalink:"/archive/proposals/proposal_2210-1_final_supply"},next:{title:"proposal_2210-3_musical_chairs",permalink:"/archive/proposals/proposal_2210-3_musical_chairs"}},l={},c=[{value:"Proposal Type: Signalling",id:"proposal-type-signalling",level:6},{value:"Champion: 0o-de-lally",id:"champion-0o-de-lally",level:6},{value:"Date: 13 October 2022",id:"date-13-october-2022",level:6},{value:"State: Draft / Work in Progress",id:"state-draft--work-in-progress",level:6},{value:"<strong>Context</strong>",id:"context",level:3},{value:"<strong>Synopsis</strong>",id:"synopsis",level:3},{value:"<strong>Impact of Voting YES on this Proposal</strong>",id:"impact-of-voting-yes-on-this-proposal",level:3},{value:"<strong>Impact of Voting NO on this Proposal</strong>",id:"impact-of-voting-no-on-this-proposal",level:3},{value:"<strong>Special Notes:</strong>",id:"special-notes",level:3},{value:"<strong>Reference Materials:</strong>",id:"reference-materials",level:3},{value:"<strong>Notes on Process</strong>",id:"notes-on-process",level:4}];function h(e){const o={em:"em",h3:"h3",h4:"h4",h6:"h6",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h6,{id:"proposal-type-signalling",children:"Proposal Type: Signalling"}),"\n",(0,n.jsx)(o.h6,{id:"champion-0o-de-lally",children:"Champion: 0o-de-lally"}),"\n",(0,n.jsx)(o.h6,{id:"date-13-october-2022",children:"Date: 13 October 2022"}),"\n",(0,n.jsx)(o.h6,{id:"state-draft--work-in-progress",children:"State: Draft / Work in Progress"}),"\n",(0,n.jsx)(o.h3,{id:"context",children:(0,n.jsx)(o.strong,{children:"Context"})}),"\n",(0,n.jsx)(o.p,{children:"As an alternative to the (near-universally deployed) Delegated Proof of Stake we propose a sybil resistance technique designed natively for the benefits and tradeoffs of PBFT consensus, we call that system Proof-of-Fee (PoF). This proposal seeks to replace the Delay Towers mechanism currently in place with Proof-of-Fee.\xa0"}),"\n",(0,n.jsxs)(o.p,{children:["Profits to blockchains are slim to non-existent. Low consensus costs are foundational for any chain that wishes to provide consumer surplus and profit to coin-holders; where excess winnings of the chain can be distributed to ",(0,n.jsx)(o.em,{children:"all"}),' account holders, that is, without preference to an investor class of "stakers". In PoF, the cost of consensus is lowered maximally to the ',(0,n.jsx)(o.em,{children:"operator opportunity cost"}),", and such that the social cost (of dilution through issuance) is minimized."]}),"\n",(0,n.jsx)(o.p,{children:"Validator seats are auctioned at each epoch, such that the validators private valuation of rewards, MEV, breakage, and governance is revealed. PoF coins have superior ergonomics. Every actor has a very simple instruction; no staking, no yield games, no slashing. Holding the coin is the dominant strategy."}),"\n",(0,n.jsx)(o.h3,{id:"synopsis",children:(0,n.jsx)(o.strong,{children:"Synopsis"})}),"\n",(0,n.jsx)(o.p,{children:"Proof of Fee partially replaces the current security model of 0L, by introducing novel economic guarantees layered with the validator admission through Vouches and Jail reputation."}),"\n",(0,n.jsx)(o.p,{children:"The proposal has two parts:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Define a new validator incentives mechanism, and"}),"\n",(0,n.jsx)(o.li,{children:"Replace Delay Towers with Proof of Fee."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Here\u2019s how each part works:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Part 1: Define a New Validator Incentives Structure (i.e., determining how much is paid)"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"0L will shift from the algorithmic calculation of validator incentives that we presently employ, to a fee that is a percentage of the total supply. The percentage is stable across epochs."}),"\n",(0,n.jsx)(o.li,{children:"Each successful validator will receive an equal amount as other validators in incentives each epoch."}),"\n",(0,n.jsx)(o.li,{children:"The amount of the fee is a parameter subject to governance action (and hence is adjustable on vote by the community)."}),"\n",(0,n.jsx)(o.li,{children:"The amount should be minimal (e.g., single digit percentages of the total supply per year) yet designed to provide adequate incentives for validators to secure and maintain a reliable network."}),"\n",(0,n.jsx)(o.li,{children:"Incentives will be paid from the Infrastructure Escrow community wallet (see, Proposal 2210-1)"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Part 2: Implement Proof of Fee\xa0 (i.e., determining who gets to be paid)"})}),"\n",(0,n.jsx)(o.p,{children:"Proof of Fee creates a competitive auction mechanism to pick who gets to participate in the validator set each epoch. Here\u2019s an overview of how it works, a thorough paper is forthcoming:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"At the beginning of each epoch, all validators who wish to participate in the epoch will place a bid (an Entry Fee)."}),"\n",(0,n.jsx)(o.li,{children:"There is a limit to the number of validators in an epoch, the ones with the highest bids will enter the epoch."}),"\n",(0,n.jsx)(o.li,{children:"Validator consensus power is determined by the entry fee."}),"\n",(0,n.jsx)(o.li,{children:"Each validator bids their highest entry fee, with the expectation of receiving a flat fee at the end of a successful epoch."}),"\n",(0,n.jsx)(o.li,{children:"The initial proposed auction type is a Generalized Second Price Auction (a variation of the Nth Price Auction), which means the validator doesn't pay their maximum bid, but the bid of the next person immediately below them. (note: Future variations on this auction are possible and should be explored)"}),"\n",(0,n.jsx)(o.li,{children:"Bids in excess of the pre-defined validator incentive for that epoch (i.e., a negative bid) will be permitted, within limits (e.g. 110% of the reward). The limit is a parameter subject to governance action (and hence is adjustable on vote by the community)"}),"\n",(0,n.jsx)(o.li,{children:"At completion of the epoch, the pre-defined incentive amount will be paid to all validators that successfully completed the epoch. (The entry fee was already be paid thus, the net reward to a validator will be: Gross Incentive - Entry Fee = Net Amount Received by Each Validator)"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"All actions will be included in the Version 6 upgrade to the Protocol."}),"\n",(0,n.jsx)(o.h3,{id:"impact-of-voting-yes-on-this-proposal",children:(0,n.jsx)(o.strong,{children:"Impact of Voting YES on this Proposal"})}),"\n",(0,n.jsx)(o.p,{children:"A vote of YES on this proposal will signal to the Engineering Team and the Validator set the community\u2019s desire to enact the following changes in the Version 6 Protocol Upgrade:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Create new epoch reward amount, with parameter for governance,"}),"\n",(0,n.jsx)(o.li,{children:"If Final Supply proposal passes, then the validator reward will be extracted from the Infrastructure Escrow community wallet (no new coins will be minted)."}),"\n",(0,n.jsx)(o.li,{children:"Disable Delay Towers for Validator Sybil Resistance Purposes."}),"\n",(0,n.jsx)(o.li,{children:"Implement Proof of Fee with all necessary dependencies"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"impact-of-voting-no-on-this-proposal",children:(0,n.jsx)(o.strong,{children:"Impact of Voting NO on this Proposal"})}),"\n",(0,n.jsx)(o.p,{children:"A vote of NO on this proposal will reject all parts of this proposal and retain the Delay Towers mechanism that is currently in place."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"The author(s) believe that revision of our current approach to consensus is essential for the community, so in the event that you choose to vote against this proposal, we welcome you to engage with the community to collaborate on the creation of a policy that is acceptable to the community at large."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"special-notes",children:(0,n.jsx)(o.strong,{children:"Special Notes:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Note that this is a signalling proposal and therefore does not directly impact the chain; subsequent action is required to implement these changes."}),"\n",(0,n.jsx)(o.li,{children:"The outcomes of this proposal can be modified by the community via a subsequent proposal and vote"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"reference-materials",children:(0,n.jsx)(o.strong,{children:"Reference Materials:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"See also, Proposal 2210-1, Final Supply, for an explanation of the Infrastructure Escrow Community Wallet"}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"notes-on-process",children:(0,n.jsx)(o.strong,{children:"Notes on Process"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["This document is a Draft / Work in Progress. It will change until marked as FINAL. ",(0,n.jsx)(o.strong,{children:"The closing date for revisions is 15 October."})]}),"\n",(0,n.jsx)(o.li,{children:"Publication here is an invitation for community collaboration and co-creation."}),"\n",(0,n.jsxs)(o.li,{children:["To engage on this content, visit the ",(0,n.jsx)(o.strong,{children:"#governance-proposals"})," channel on the 0L Discord (link at bottom right)"]}),"\n",(0,n.jsxs)(o.li,{children:["Once this Proposal is finalized, it will be the subject of Voting on the Radical X Change platform. If you do not yet have credentials, visit the ",(0,n.jsx)(o.strong,{children:"#rxc-voice-discussion"})," channel on the 0L Discord and make a request to join."]}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:"Voting opens 17 Oct and closes 22 Oct"})}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>a});var n=t(7294);const i={},s=n.createContext(i);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);