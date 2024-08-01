"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1593],{159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);const s={},a=void 0,r={id:"archive/canonical/technical/Delay_Towers_Pt_1",title:"Delay_Towers_Pt_1",description:"Puzzle Towers for BFT",source:"@site/docs/archive/canonical/technical/Delay_Towers_Pt_1.md",sourceDirName:"archive/canonical/technical",slug:"/archive/canonical/technical/Delay_Towers_Pt_1",permalink:"/archive/canonical/technical/Delay_Towers_Pt_1",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/archive/canonical/technical/Delay_Towers_Pt_1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delay_Towers_Pt_0",permalink:"/archive/canonical/technical/Delay_Towers_Pt_0"},next:{title:"Delay_Towers_Pt_2",permalink:"/archive/canonical/technical/Delay_Towers_Pt_2"}},l={},c=[{value:"Puzzle Towers for BFT",id:"puzzle-towers-for-bft",level:2},{value:"TL;DR",id:"tldr",level:2},{value:"Context",id:"context",level:2},{value:"Distribution of tokens",id:"distribution-of-tokens",level:3},{value:"Diversity of stakeholders",id:"diversity-of-stakeholders",level:3},{value:"Byzantine Fault Tolerance (BFT)",id:"byzantine-fault-tolerance-bft",level:2},{value:"Blockchains and BFT",id:"blockchains-and-bft",level:2},{value:"Puzzle Towers to bootstrap BFT networks",id:"puzzle-towers-to-bootstrap-bft-networks",level:2},{value:"Limitations of Puzzle Towers",id:"limitations-of-puzzle-towers",level:2},{value:"Full Series",id:"full-series",level:2}];function h(e){const t={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"puzzle-towers-for-bft",children:"Puzzle Towers for BFT"}),"\n",(0,o.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers may offer a new Sybil resistance technique worth exploring for permissionless environments, especially during network bootstrapping. They offer a glimpse into what a different game for starting a diverse BFT network might look like. However, without modifying the type of work done in a puzzle tower, the advantages given to current PoW miners would make the proposal a non-starter. Alternatives to traditional PoW will be discussed in the following article."}),"\n",(0,o.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,o.jsx)(t.p,{children:"Blockchain systems can leverage Byzantine Fault Tolerant (BFT) protocols to provide high throughput (transactions per second) and faster finalities. Currently, proof of authority (PoA) and proof of stake (PoS) are widely used Sybil resistance mechanisms for BFT networks. While PoA systems lack credible neutrality (due to permissioned access to the validator set being managed by centralized membership providers), PoS systems are permissionless with open access to the network. PoS systems have a well-defined parameter space and protocol designers are tasked with tuning parameters to match a community's requirements and culture."}),"\n",(0,o.jsx)(t.p,{children:"Without going into depth, it's worthwhile to summarize a few challenges of PoS networks."}),"\n",(0,o.jsx)(t.h3,{id:"distribution-of-tokens",children:"Distribution of tokens"}),"\n",(0,o.jsx)(t.p,{children:"How does a PoS blockchain genesis happen? If you strictly apply the logic of PoS, a stake must pre-exist before the network. Without getting into the notorious regulatory issues associated with token issuance, the manner in which the initial distribution occurs has the potential to threaten the credibility of a neutral smart contract execution environment."}),"\n",(0,o.jsx)(t.p,{children:"Allocation of stake always has bias (which could contribute positively or negatively to the community's goals). BFT networks also have biases: High validator node requirements and upper bounds on quorum sizes often tend towards monopoly. And that's before considering the compounding of interest on stake, which likely only exacerbates the bias."}),"\n",(0,o.jsx)(t.h3,{id:"diversity-of-stakeholders",children:"Diversity of stakeholders"}),"\n",(0,o.jsx)(t.p,{children:"A public good smart contract system must aim to be neutral. It's difficult to imagine neutrality without diversity. This raises the question: How can one ensure diversity among stakeholders in the network?"}),"\n",(0,o.jsx)(t.p,{children:'The predominant issue with achieving a plural and diverse set of stakeholders is the technical overhead necessary to participate in a new blockchain. Most platforms\' stakes are typically reserved for technologists and venture capitalists.The general public and many institutions are left out at worst, or merely second thoughts at best. Networks requiring high capital commitments, i.e., you must buy a stake, make those networks inaccessible to many. In some limited situations we\xe2\u20ac\u2122ve seen institutions "loaned" the necessary stake, or developers granted stake (by a centralized promoter) as part of a testnet program, but such mitigations tend to be marginal in impact and fall short of open, equitable access.'}),"\n",(0,o.jsx)(t.p,{children:"With this context on PoS and industry practices, let us revisit BFT networks and see if we can address these challenges."}),"\n",(0,o.jsx)(t.h2,{id:"byzantine-fault-tolerance-bft",children:"Byzantine Fault Tolerance (BFT)"}),"\n",(0,o.jsx)(t.p,{children:"We need the briefest background on what we mean by BFT. Leslie Lamport published the Byzantine Generals Problem in 1982, laying the foundation for multiple breakthroughs in distributed computing over the past four decades. The goal of BFT protocols is to solve the Byzantine Generals problem, i.e., reach consensus among a set of nodes where some of the nodes might be dishonest. The Practical Byzantine Fault Tolerant (PBFT) protocol established a standard for BFT protocols running in production. We've seen multiple variants of PBFT developed by optimizing parameters, such as rounds, to reach finality and messages broadcast. For instance, the improvements on the aggregation of signatures with the BLS scheme allowed us to reduce the number of broadcasted messages. Protocols such as HotStuff progressed BFT to consensus linearity wherein an agreement on a message is reached in a single round. Pipelining of blocks in HotStuff guarantees the finality of the proposed block by the third block following the proposed block. These advances in consensus are highly desirable and future blockchains will likely continue to use variations on these protocols."}),"\n",(0,o.jsx)(t.h2,{id:"blockchains-and-bft",children:"Blockchains and BFT"}),"\n",(0,o.jsx)(t.p,{children:"Any blockchain open to the world essentially has to solve the Byzantine Generals problem of reaching consensus among (un)trusted parties. The earliest blockchains addressed BFT by stating that higher computational power will increase the probability of proposing the next block (Proof of Work), i.e., using computational power as a substitute for identity. Over time, this led to an arms race of investing in computational resources, i.e., making higher capital investments to increase the likelihood of proposing a new block and thereby earning the associated rewards. Furthermore, this introduced the game-theoretic assumption that one would not harm the system they are highly invested in. Though this addresses Byzantine Generals' problem in a trustless setting, experience has shown that out-of-band coordination can lead to centralization (e.g. with the emergence of mining pools). Furthermore, PoW struggles to scale to the transactional demands of contemporary use-cases, creating along the way increased waste and exacerbating concerns about energy usage."}),"\n",(0,o.jsx)(t.p,{children:"By decoupling the establishment of identity and reaching consensus, we could better solve the problems inherent in current approaches. Using alternative ways to establish identity, one could leverage BFT consensus protocols for scaling the blockchain system to meet the demands of high transactional throughput and faster finality times."}),"\n",(0,o.jsx)(t.p,{children:"In most variants of BFT protocols a set of validators are committed to proposing and attesting new blocks. This set has to be stable and can only be altered at fixed intervals called epochs. Permissioned blockchains rely on Proof of Authority (PoA), wherein a centralized membership service provider authenticates and authorizes validators in the network. Eliminating the centralized membership service provider could lead to Sybil attacks as a malicious party can subvert the consensus protocol by creating many (pseudo)anonymous identities."}),"\n",(0,o.jsx)(t.p,{children:"To achieve the benefits of BFT consensus, networks have two hard requirements: persistent identities and that the identities are not cheap. Said differently, the reasonable economic value which can be held on-chain safely will be as low as the cost of creating new node identities."}),"\n",(0,o.jsx)(t.p,{children:"The only known Sybil resistance mechanism to achieve this in a permissionless setting is Proof of Stake (PoS). We have already seen the challenges of PoA and PoS systems in the previous section."}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers may offer a new Sybil resistance technique worth exploring for permissionless environments, especially during network bootstrapping. In addition, puzzle towers might solve distribution and diversity challenges, at least to a certain extent."}),"\n",(0,o.jsx)(t.h2,{id:"puzzle-towers-to-bootstrap-bft-networks",children:"Puzzle Towers to bootstrap BFT networks"}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers were introduced by Dominic Williams in Sybil-resistant Network Identities From Dedicated Hardware. The key idea is to use chained work (such as a Bitcoin puzzle) to prove work done by an agent, wherein the cumulative count of proofs can also be used for providing certain guarantees. One such guarantee would be the cumulative time (or clock cycles) by an agent on the network."}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers are sequential proofs of work. They consist of chains of proofs obtained from solving puzzles in sequence. The zeroth proof consists of a unique identifier of the owner, such as their public key, and all the proofs following it would have a hash of its previously verified proof. Each agent\xe2\u20ac\u2122s puzzle tower height and last computed hash is stored on a chain, and this data can subsequently be used in consensus games while ranking the candidates in the validator set."}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers act as a reputation by building persistent identity for the agent which is built with time and cannot be bought or transferred."}),"\n",(0,o.jsx)(t.p,{children:"There's an additional benefit to creating a possibly wider distribution of initial consensus weights. In BFT, puzzle towers provide a way for consensus weight to get distributed to consensus agents (validators), without needing any permission, and without needing to purchase stake from a centralized actor. Even the genesis transaction of a network can include several puzzle towers from different actors, and a group of people can elect from those candidates a genesis validator set."}),"\n",(0,o.jsx)(t.p,{children:"Puzzle towers signal a kind of reputation in the system; one that is acquired by actively participating in the network over time. The mechanism bears similarity to PoS systems where nodes that successfully engage in consensus have their rewards increase over time, and the ones that fail do not receive rewards."}),"\n",(0,o.jsx)(t.p,{children:"Assuming native tokens earned as rewards for securing the network are not transferable between nodes, the consensus weight resulting from puzzle towers would be the same as in a PoS system. Said differently, at the start of networks a puzzle-tower-based vote distribution would correlate with the voting power in a purely PoS voting scheme."}),"\n",(0,o.jsx)(t.p,{children:"The major differentiator is that no stake had to be acquired to participate. The players all start from the same position: A tower of zero height, and with zero coins. From then on, any node which computes delay towers is treated equally irrespective of stake they own, or when they joined."}),"\n",(0,o.jsx)(t.p,{children:"Though we are not yet making claims about the steady-state Sybil-resistance of these implementations, puzzle towers may be a plausible genesis and bootstrapping ritual."}),"\n",(0,o.jsx)(t.h2,{id:"limitations-of-puzzle-towers",children:"Limitations of Puzzle Towers"}),"\n",(0,o.jsx)(t.p,{children:"The original puzzle towers design solves one distribution issue, namely that it doesn't require capital or permission to join a network. But unmodified, they do tend to benefit an existing community. Hash-based puzzles will suffer from the same race on hardware that plagues Bitcoin and will require highly technical people to set up and maintain nodes to receive *any* reward. This design sets a high barrier to entry for contributors."}),"\n",(0,o.jsx)(t.p,{children:"Additionally, it is expensive, but not impossible, to forge a hash-based puzzle tower quickly. For instance, an agent with an ASIC miner could compute an impostor tower which someone started mining with a desktop computer."}),"\n",(0,o.jsx)(t.p,{children:"Lastly, building a puzzle tower based on typical Proof-of-Work puzzles is expensive to verify. The puzzle towers -- if designed as sequential functions, as described -- are computationally expensive to verify their correctness because the verifier has to run all the steps again to obtain the result. When scaled-up this might consume most of the cycles a blockchain should use for its consensus and application layer."}),"\n",(0,o.jsx)(t.p,{children:"Next we'll look at Verifiable Delay Functions as alternative work which can be done in a puzzle tower."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"full-series",children:"Full Series"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://openlibra.blog/2021/11/01/delay-towers-part-0/",children:"A high-throughput chain with a fair launch"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://openlibra.blog/2021/11/05/delay-towers-part-1/",children:"Puzzle Towers for BFT"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://openlibra.blog/2021/11/08/delay-towers-part-2/",children:"From Puzzle Towers and VDFs to Delay Towers"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://openlibra.blog/2021/11/12/part-3-a-delay-towers-implementation-on-bft/",children:"Implementation on BFT"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);