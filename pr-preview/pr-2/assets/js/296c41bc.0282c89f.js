"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[4641],{7564:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(5893),o=n(1151);const s={},r="Module and Structure Initialization in Move",a={id:"core-devs/move_data_initialization",title:"Module and Structure Initialization in Move",description:"When you create a new data structure in Move that needs to be initialized by the system and not by the user, you generally need to add the initialization in two places:",source:"@site/docs/core-devs/move_data_initialization.md",sourceDirName:"core-devs",slug:"/core-devs/move_data_initialization",permalink:"/pr-preview/pr-2/core-devs/move_data_initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/core-devs/move_data_initialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core Devs",permalink:"/pr-preview/pr-2/category/core-devs"},next:{title:"Archive",permalink:"/pr-preview/pr-2/category/archive"}},d={},l=[{value:"Steps for Initialization",id:"steps-for-initialization",level:2},{value:"1. <code>genesis.move</code>",id:"1-genesismove",level:3},{value:"2. epoch_boundary.move",id:"2-epoch_boundarymove",level:3},{value:"Common Issue and Error Message",id:"common-issue-and-error-message",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"module-and-structure-initialization-in-move",children:"Module and Structure Initialization in Move"}),"\n",(0,t.jsx)(i.p,{children:"When you create a new data structure in Move that needs to be initialized by the system and not by the user, you generally need to add the initialization in two places:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"genesis.move"})}),": Add the initialization in the ",(0,t.jsx)(i.code,{children:"initialize"})," function to ensure that the smoke tests execute successfully."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"epoch_boundary.move"})}),": Add the initialization in the ",(0,t.jsx)(i.code,{children:"migrate_data"})," function to ensure it will be executed in production."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"steps-for-initialization",children:"Steps for Initialization"}),"\n",(0,t.jsxs)(i.h3,{id:"1-genesismove",children:["1. ",(0,t.jsx)(i.code,{children:"genesis.move"})]}),"\n",(0,t.jsxs)(i.p,{children:["Add the initialization in the ",(0,t.jsx)(i.code,{children:"initialize"})," function. This is crucial to ensure that smoke tests run without issues."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-move",children:"// In genesis.move\npublic fun initialize(...) {\n    // Existing initialization code\n    ...\n    // Initialize your module\n    <YOUR_MODULE>::initialize();\n    ...\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"2-epoch_boundarymove",children:"2. epoch_boundary.move"}),"\n",(0,t.jsxs)(i.p,{children:["Add the initialization in the ",(0,t.jsx)(i.code,{children:"migrate_data"})," function. This ensures that the initialization is executed in production."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-move",children:"// In epoch_boundary.move\npublic fun migrate_data(...) {\n    // Existing migration code\n    ...\n    // Initialize your module\n    <YOUR_MODULE>::initialize();\n    ...\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"common-issue-and-error-message",children:"Common Issue and Error Message"}),"\n",(0,t.jsxs)(i.p,{children:["One of the side effects of not initializing these data is that when the test scenario uses ",(0,t.jsx)(i.code,{children:"LibraSmoke"})," with more than one node, it will not be able to complete the genesis. If you check the log of one of the nodes, you will see the following error message:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Execution error InternalError { error: \"status UNEXPECTED_ERROR_FROM_KNOWN_MOVE_FUNCTION of type Invariant violation with message [diem_vm] Unexpected error from known Move function, 'block_prologue'. Error: EXECUTION_FAILURE { status_code: MISSING_DATA, sub_status: None, location: 0000000000000000000000000000000000000000000000000000000000000001::<YOUR_MODULE>...\n"})}),"\n",(0,t.jsx)(i.p,{children:"This error indicates that the required initialization was not performed, leading to missing data during execution."}),"\n",(0,t.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(i.p,{children:"To avoid this issue, always ensure to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Add the necessary initialization in the ",(0,t.jsx)(i.code,{children:"initialize"})," function within ",(0,t.jsx)(i.code,{children:"genesis.move"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Add the necessary initialization in the ",(0,t.jsx)(i.code,{children:"migrate_data"})," function within ",(0,t.jsx)(i.code,{children:"epoch_boundary.move"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Following these steps will help you ensure that your module or structure is properly initialized both in testing and production environments."})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var t=n(7294);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);