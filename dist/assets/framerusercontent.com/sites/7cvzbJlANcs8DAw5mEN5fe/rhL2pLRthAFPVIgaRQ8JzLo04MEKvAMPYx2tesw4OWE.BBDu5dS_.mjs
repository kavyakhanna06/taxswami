import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{E as t,M as n,N as r,T as i,c as a,m as o,s,u as c,v as l,x as ee}from"./react.BJcGtc4y.mjs";import{T as u,i as te,s as ne,t as d}from"./motion.CA4L5q-g.mjs";import{A as re,B as ie,J as f,M as p,Ot as m,_t as h,a as ae,bt as oe,dt as se,gt as ce,ht as le,i as ue,k as g,o as _,p as v,yt as de}from"./framer.Cs5SKXVM.mjs";import{n as fe,r as y}from"./knW43aSoT.DtIOnB4f.mjs";function b(e,t){return`${t}${Math.round(k(e)).toLocaleString(`en-IN`)}`}function pe(e){let t=k(e);if(t<=4e5)return 0;let n=0;return n+=Math.min(Math.max(t-4e5,0),4e5)*.05,n+=Math.min(Math.max(t-8e5,0),4e5)*.1,n+=Math.min(Math.max(t-12e5,0),4e5)*.15,n+=Math.min(Math.max(t-16e5,0),4e5)*.2,n+=Math.min(Math.max(t-2e6,0),4e5)*.25,n+=Math.max(t-24e5,0)*.3,n}function x(e,t){let n=k(e),r=25e4;t>=80?r=5e5:t>=60&&(r=3e5);let i=0;return n<=r?0:(i+=Math.min(Math.max(n-r,0),25e4-Math.max(r-0,0))*.05,t>=80?(i=Math.max(n-5e5,0)*.2,i=Math.min(Math.max(n-5e5,0),5e5)*.2,i+=Math.max(n-1e6,0)*.3,i):t>=60?(i=Math.min(Math.max(n-3e5,0),2e5)*.05,i+=Math.min(Math.max(n-5e5,0),5e5)*.2,i+=Math.max(n-1e6,0)*.3,i):(i=Math.min(Math.max(n-25e4,0),25e4)*.05,i+=Math.min(Math.max(n-5e5,0),5e5)*.2,i+=Math.max(n-1e6,0)*.3,i))}function S(e,t){return e<=5e6?0:e<=1e7?.1:e<=2e7?.15:e<=5e7||t===`new`?.25:.37}function C(e,t,n){return n===`new`&&e<=12e5?Math.min(6e4,t):n===`old`&&e<=5e5?Math.min(12500,t):0}function w(e,t,n,r=0){let i=t===`new`?pe(e):x(e,n),a=C(e,i,t),o=Math.max(0,i-a),s=o*S(e,t),c=o+s+r,l=c*.04;return{normalIncomeTax:i,rebate:a,surcharge:s,cess:l,capitalGainTax:r,total:c+l}}function me(e,t,n){return k(e)*(n/100)+k(t)*(n/100)}function T({label:e,value:t,onChange:n,prefix:r,help:i,disabled:a=!1}){return/*#__PURE__*/ c(`div`,{className:`field`,children:[/*#__PURE__*/ s(`label`,{children:e}),/*#__PURE__*/ c(`div`,{className:`inputWrap`,children:[/*#__PURE__*/ s(`span`,{children:r}),/*#__PURE__*/ s(`input`,{disabled:a,type:`number`,min:`0`,value:t||``,onChange:e=>n(Number(e.target.value.replace(/[^0-9.]/g,``))||0)})]}),i&&/*#__PURE__*/ s(`small`,{children:i})]})}function E({label:e,value:t,onChange:n,options:r}){return/*#__PURE__*/ c(`div`,{className:`field`,children:[/*#__PURE__*/ s(`label`,{children:e}),/*#__PURE__*/ s(`select`,{value:t,onChange:e=>n(e.target.value),children:r.map(e=>/*#__PURE__*/ s(`option`,{value:e.value,children:e.label},e.value))})]})}function D({label:e,value:t,currency:n,strong:r=!1}){return/*#__PURE__*/ c(`div`,{className:r?`resultRow strong`:`resultRow`,children:[/*#__PURE__*/ s(`span`,{children:e}),/*#__PURE__*/ s(`strong`,{children:b(t,n)})]})}function O(e){let{primaryColor:t,accentColor:n,backgroundColor:r,cardColor:i,textColor:a,mutedColor:o,borderColor:ee,successColor:u,dangerColor:te,title:ne,subtitle:d,basicLabel:re,advancedLabel:ie,salaryLabel:f,houseLabel:p,businessLabel:m,otherLabel:h,capitalLabel:ae,deductionsLabel:oe,resultLabel:se,comparisonLabel:ce,calculateLabel:le,resetLabel:ue,currency:g,fontFamily:_,titleSize:v,bodySize:de,inputSize:fe,borderRadius:y,cardRadius:pe,spacing:x,maxWidth:S,showComparison:C,showCapitalGains:O,showAdvanced:A,showDisclaimer:j,disclaimer:M}=e,[N,P]=l(`basic`),[F,I]=l(`1961`),[L,R]=l(`new`),[z,B]=l(`below60`),[V,H]=l(`resident`),[he,ge]=l(`individual`),[U,_e]=l(12e5),[ve,ye]=l(0),[be,xe]=l(0),[Se,Ce]=l(0),[we,Te]=l(0),[Ee,De]=l(0),[Oe,ke]=l(20),[Ae,je]=l(75e3),[W,Me]=l(0),[G,Ne]=l(0),[K,Pe]=l(0),[q,Fe]=l(0),[J,Ie]=l(0),[Le,Re]=l(0),[ze,Be]=l(0),[Ve,He]=l(0),[Ue,We]=l(0),[Ge,Ke]=l(0),[qe,Je]=l(!1),Ye=z===`80plus`?80:z===`60to79`?60:40,Y=k(U)+k(ve)+k(be)+k(Se),Xe=me(we,Ee,Oe),Ze=Math.min(L===`new`?75e3:5e4,U),Qe=L===`old`?Math.min(15e4,W)+Math.min(5e4,G)+Math.min(1e5,K)+Math.min(2e5,q)+k(J)+k(Le):0,X=Math.max(0,Y-Ze-Qe),$e=Math.max(0,Y-Math.min(75e3,U)),et=Math.max(0,Y-Math.min(5e4,U)-Math.min(15e4,W)-Math.min(5e4,G)-Math.min(1e5,K)-Math.min(2e5,q)-J-Le),Z=w(X,L,Ye,Xe),Q=w($e,`new`,Ye,Xe),$=w(et,`old`,Ye,Xe),tt=k(ze)+k(Ve)+k(Ue)+k(Ge),nt=Math.max(0,Z.total-tt),rt=Math.max(0,tt-Z.total);function it(){_e(0),ye(0),xe(0),Ce(0),Te(0),De(0),Me(0),Ne(0),Pe(0),Fe(0),Ie(0),Re(0),Be(0),He(0),We(0),Ke(0),Je(!1)}return/*#__PURE__*/ c(`div`,{className:`itc`,style:{"--primary":t,"--accent":n,"--background":r,"--card":i,"--text":a,"--muted":o,"--border":ee,"--success":u,"--danger":te,"--radius":`${y}px`,"--cardRadius":`${pe}px`,"--spacing":`${x}px`,"--bodySize":`${de}px`,"--inputSize":`${fe}px`,fontFamily:_,maxWidth:`${S}px`},children:[/*#__PURE__*/ s(`div`,{className:`header`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`div`,{className:`eyebrow`,children:`INCOME TAX CALCULATOR`}),/*#__PURE__*/ s(`h1`,{children:ne}),/*#__PURE__*/ s(`p`,{children:d})]})}),A&&/*#__PURE__*/ c(`div`,{className:`modeTabs`,children:[/*#__PURE__*/ s(`button`,{className:N===`basic`?`mode active`:`mode`,onClick:()=>P(`basic`),children:re}),/*#__PURE__*/ s(`button`,{className:N===`advanced`?`mode active`:`mode`,onClick:()=>P(`advanced`),children:ie})]}),/*#__PURE__*/ c(`div`,{className:`mainGrid`,children:[/*#__PURE__*/ c(`div`,{className:`left`,children:[/*#__PURE__*/ c(`section`,{className:`card`,children:[/*#__PURE__*/ s(`div`,{className:`sectionHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:`Basic Information`}),/*#__PURE__*/ s(`p`,{children:`Enter your tax profile and applicable regime.`})]})}),/*#__PURE__*/ c(`div`,{className:`grid`,children:[/*#__PURE__*/ s(E,{label:`Applicable Act`,value:F,onChange:e=>I(e),options:[{label:`Income Tax Act, 1961`,value:`1961`},{label:`Income Tax Act, 2025`,value:`2025`}]}),/*#__PURE__*/ s(E,{label:F===`2025`?`Tax Year`:`Assessment Year`,value:`2026-27`,onChange:()=>{},options:[{label:`2026–27`,value:`2026-27`}]}),/*#__PURE__*/ s(E,{label:`Taxpayer Category`,value:he,onChange:ge,options:[{label:`Individual`,value:`individual`},{label:`HUF`,value:`huf`}]}),/*#__PURE__*/ s(E,{label:`Age`,value:z,onChange:B,options:[{label:`Below 60 years`,value:`below60`},{label:`60–79 years`,value:`60to79`},{label:`80 years or above`,value:`80plus`}]}),/*#__PURE__*/ s(E,{label:`Residential Status`,value:V,onChange:H,options:[{label:`Resident`,value:`resident`},{label:`Non-Resident`,value:`nonresident`},{label:`RNOR`,value:`rnor`}]}),/*#__PURE__*/ s(E,{label:`Preferred Tax Regime`,value:L,onChange:e=>R(e),options:[{label:`New Tax Regime`,value:`new`},{label:`Old Tax Regime`,value:`old`}]})]})]}),/*#__PURE__*/ c(`section`,{className:`card`,children:[/*#__PURE__*/ s(`div`,{className:`sectionHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:`Income Details`}),/*#__PURE__*/ s(`p`,{children:`Enter income under each applicable head.`})]})}),/*#__PURE__*/ c(`div`,{className:`grid`,children:[/*#__PURE__*/ s(T,{label:f,value:U,onChange:_e,prefix:g}),/*#__PURE__*/ s(T,{label:p,value:ve,onChange:ye,prefix:g}),/*#__PURE__*/ s(T,{label:m,value:be,onChange:xe,prefix:g}),/*#__PURE__*/ s(T,{label:h,value:Se,onChange:Ce,prefix:g})]})]}),O&&/*#__PURE__*/ c(`section`,{className:`card`,children:[/*#__PURE__*/ s(`div`,{className:`sectionHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:ae}),/*#__PURE__*/ s(`p`,{children:`Capital gains are calculated separately from normal slab income.`})]})}),/*#__PURE__*/ c(`div`,{className:`grid`,children:[/*#__PURE__*/ s(T,{label:`Short-Term Capital Gains`,value:we,onChange:Te,prefix:g}),/*#__PURE__*/ s(T,{label:`Long-Term Capital Gains`,value:Ee,onChange:De,prefix:g}),/*#__PURE__*/ s(T,{label:`Capital Gain Tax Rate`,value:Oe,onChange:ke,prefix:``,help:`Enter the applicable special tax rate.`})]})]}),/*#__PURE__*/ c(`section`,{className:`card`,children:[/*#__PURE__*/ s(`div`,{className:`sectionHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:oe}),/*#__PURE__*/ s(`p`,{children:`Deductions below are primarily applicable to the old regime.`})]})}),/*#__PURE__*/ c(`div`,{className:`grid`,children:[/*#__PURE__*/ s(T,{label:`Standard Deduction`,value:Ze,onChange:()=>{},prefix:g,disabled:!0,help:L===`new`?`Maximum ₹75,000 under the new regime.`:`Maximum ₹50,000 under the old regime.`}),/*#__PURE__*/ s(T,{label:`PPF / LIC / 80C`,value:W,onChange:Me,prefix:g,help:`Maximum ₹1,50,000.`}),/*#__PURE__*/ s(T,{label:`NPS — 80CCD(1B)`,value:G,onChange:Ne,prefix:g,help:`Maximum ₹50,000.`}),/*#__PURE__*/ s(T,{label:`Mediclaim — 80D`,value:K,onChange:Pe,prefix:g,help:`Maximum depends on age and conditions.`}),/*#__PURE__*/ s(T,{label:`Housing Loan Interest`,value:q,onChange:Fe,prefix:g,help:`Self-occupied home loan limit considered up to ₹2,00,000.`}),/*#__PURE__*/ s(T,{label:`Higher Education Loan Interest`,value:J,onChange:Ie,prefix:g}),/*#__PURE__*/ s(T,{label:`Other Deductions`,value:Le,onChange:Re,prefix:g})]})]}),N===`advanced`&&/*#__PURE__*/ c(`section`,{className:`card`,children:[/*#__PURE__*/ s(`div`,{className:`sectionHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:`Tax Credits & Payments`}),/*#__PURE__*/ s(`p`,{children:`Enter taxes already deducted or paid.`})]})}),/*#__PURE__*/ c(`div`,{className:`grid`,children:[/*#__PURE__*/ s(T,{label:`TDS`,value:ze,onChange:Be,prefix:g}),/*#__PURE__*/ s(T,{label:`TCS`,value:Ve,onChange:He,prefix:g}),/*#__PURE__*/ s(T,{label:`Advance Tax`,value:Ue,onChange:We,prefix:g}),/*#__PURE__*/ s(T,{label:`Self Assessment Tax`,value:Ge,onChange:Ke,prefix:g})]})]}),/*#__PURE__*/ c(`div`,{className:`actions`,children:[/*#__PURE__*/ s(`button`,{className:`calculate`,onClick:()=>Je(!0),children:le}),/*#__PURE__*/ s(`button`,{className:`reset`,onClick:it,children:ue})]})]}),/*#__PURE__*/ c(`aside`,{className:`right`,children:[/*#__PURE__*/ c(`section`,{className:`resultCard`,children:[/*#__PURE__*/ c(`div`,{className:`resultTop`,children:[/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`span`,{children:se}),/*#__PURE__*/ s(`h2`,{children:b(Z.total,g)}),/*#__PURE__*/ s(`p`,{children:`Estimated total tax including cess.`})]}),/*#__PURE__*/ s(`div`,{className:`regimeBadge`,children:L===`new`?`NEW REGIME`:`OLD REGIME`})]}),/*#__PURE__*/ c(`div`,{className:`resultRows`,children:[/*#__PURE__*/ s(D,{label:`Gross Income`,value:Y,currency:g}),/*#__PURE__*/ s(D,{label:`Taxable Income`,value:X,currency:g}),/*#__PURE__*/ s(D,{label:`Income Tax`,value:Z.normalIncomeTax,currency:g}),/*#__PURE__*/ s(D,{label:`87A Rebate`,value:Z.rebate,currency:g}),/*#__PURE__*/ s(D,{label:`Capital Gains Tax`,value:Z.capitalGainTax,currency:g}),/*#__PURE__*/ s(D,{label:`Surcharge`,value:Z.surcharge,currency:g}),/*#__PURE__*/ s(D,{label:`Health & Education Cess`,value:Z.cess,currency:g}),/*#__PURE__*/ s(D,{label:`Tax Credits`,value:tt,currency:g}),/*#__PURE__*/ s(D,{label:rt>0?`Estimated Refund`:`Estimated Tax Payable`,value:rt>0?rt:nt,currency:g,strong:!0})]})]}),C&&/*#__PURE__*/ c(`section`,{className:`comparison`,children:[/*#__PURE__*/ s(`div`,{className:`comparisonHeader`,children:/*#__PURE__*/ c(`div`,{children:[/*#__PURE__*/ s(`h2`,{children:ce}),/*#__PURE__*/ s(`p`,{children:`Estimated tax under both regimes.`})]})}),/*#__PURE__*/ c(`div`,{className:`compareGrid`,children:[/*#__PURE__*/ c(`div`,{className:L===`new`?`compareItem selected`:`compareItem`,children:[/*#__PURE__*/ s(`span`,{children:`New Regime`}),/*#__PURE__*/ s(`strong`,{children:b(Q.total,g)})]}),/*#__PURE__*/ c(`div`,{className:L===`old`?`compareItem selected`:`compareItem`,children:[/*#__PURE__*/ s(`span`,{children:`Old Regime`}),/*#__PURE__*/ s(`strong`,{children:b($.total,g)})]})]}),/*#__PURE__*/ s(`div`,{className:`saving`,children:Q.total<$.total?`New regime saves ${b($.total-Q.total,g)}`:`Old regime saves ${b(Q.total-$.total,g)}`})]}),/*#__PURE__*/ c(`section`,{className:`breakdown`,children:[/*#__PURE__*/ s(`h3`,{children:`Calculation Summary`}),/*#__PURE__*/ c(`div`,{className:`summaryItem`,children:[/*#__PURE__*/ s(`span`,{children:`Gross income`}),/*#__PURE__*/ s(`strong`,{children:b(Y,g)})]}),/*#__PURE__*/ c(`div`,{className:`summaryItem`,children:[/*#__PURE__*/ s(`span`,{children:`Total deductions`}),/*#__PURE__*/ s(`strong`,{children:b(Y-X,g)})]}),/*#__PURE__*/ c(`div`,{className:`summaryItem`,children:[/*#__PURE__*/ s(`span`,{children:`Taxable income`}),/*#__PURE__*/ s(`strong`,{children:b(X,g)})]})]}),j&&/*#__PURE__*/ s(`div`,{className:`disclaimer`,children:M})]})]}),/*#__PURE__*/ s(`style`,{children:`
                * {
                    box-sizing: border-box;
                }

                .itc {
                    width: 100%;
                    margin: 0 auto;
                    padding: 28px;
                    background: var(--background);
                    color: var(--text);
                    font-size: var(--bodySize);
                    overflow: hidden;
                }

                .header {
                    margin-bottom: 24px;
                }

                .eyebrow {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .12em;
                    color: var(--primary);
                    margin-bottom: 10px;
                }

                h1 {
                    margin: 0;
                    font-size: ${v}px;
                    line-height: 1.08;
                    letter-spacing: -0.035em;
                }

                .header p {
                    margin: 10px 0 0;
                    color: var(--muted);
                    line-height: 1.6;
                    max-width: 720px;
                }

                .modeTabs {
                    display: flex;
                    gap: 4px;
                    padding: 4px;
                    background: var(--card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    margin-bottom: 20px;
                }

                .mode {
                    flex: 1;
                    border: 0;
                    background: transparent;
                    color: var(--muted);
                    padding: 12px 16px;
                    border-radius: calc(var(--radius) - 4px);
                    font: inherit;
                    font-weight: 600;
                    cursor: pointer;
                }

                .mode.active {
                    background: var(--primary);
                    color: white;
                }

                .mainGrid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.5fr) minmax(300px, .75fr);
                    gap: var(--spacing);
                    align-items: start;
                }

                .left {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing);
                    min-width: 0;
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing);
                    min-width: 0;
                    position: sticky;
                    top: 20px;
                }

                .card,
                .comparison,
                .breakdown,
                .disclaimer {
                    background: var(--card);
                    border: 1px solid var(--border);
                    border-radius: var(--cardRadius);
                }

                .card {
                    padding: 22px;
                }

                .sectionHeader {
                    margin-bottom: 20px;
                }

                .sectionHeader h2,
                .comparisonHeader h2 {
                    margin: 0;
                    font-size: 18px;
                    letter-spacing: -.02em;
                }

                .sectionHeader p,
                .comparisonHeader p {
                    margin: 6px 0 0;
                    color: var(--muted);
                    font-size: 13px;
                    line-height: 1.5;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px;
                }

                .field {
                    min-width: 0;
                }

                .field label {
                    display: block;
                    font-size: 12px;
                    font-weight: 650;
                    margin-bottom: 7px;
                }

                .field small {
                    display: block;
                    margin-top: 5px;
                    color: var(--muted);
                    font-size: 10px;
                    line-height: 1.4;
                }

                .inputWrap {
                    height: 46px;
                    display: flex;
                    align-items: center;
                    border: 1px solid var(--border);
                    background: var(--background);
                    border-radius: ${Math.max(6,y-4)}px;
                    overflow: hidden;
                }

                .inputWrap span {
                    padding-left: 13px;
                    color: var(--muted);
                    font-size: 13px;
                }

                input,
                select {
                    width: 100%;
                    height: 46px;
                    border: 1px solid var(--border);
                    background: var(--background);
                    color: var(--text);
                    border-radius: ${Math.max(6,y-4)}px;
                    outline: none;
                    font-family: inherit;
                    font-size: var(--inputSize);
                }

                .inputWrap input {
                    border: 0;
                    border-radius: 0;
                    background: transparent;
                    padding: 0 12px 0 7px;
                }

                select {
                    padding: 0 12px;
                }

                input:focus,
                select:focus {
                    border-color: var(--primary);
                }

                input:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .actions {
                    display: flex;
                    gap: 10px;
                }

                .calculate,
                .reset {
                    min-height: 46px;
                    padding: 0 20px;
                    border-radius: var(--radius);
                    border: 0;
                    font: inherit;
                    font-weight: 650;
                    cursor: pointer;
                }

                .calculate {
                    flex: 1;
                    background: var(--primary);
                    color: white;
                }

                .reset {
                    background: var(--card);
                    color: var(--text);
                    border: 1px solid var(--border);
                }

                .resultCard {
                    background: var(--primary);
                    color: white;
                    border-radius: var(--cardRadius);
                    padding: 24px;
                    overflow: hidden;
                }

                .resultTop {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 14px;
                }

                .resultTop span {
                    opacity: .7;
                    font-size: 12px;
                }

                .resultTop h2 {
                    margin: 8px 0 4px;
                    font-size: 32px;
                    line-height: 1;
                    letter-spacing: -.04em;
                }

                .resultTop p {
                    margin: 0;
                    opacity: .72;
                    font-size: 11px;
                    line-height: 1.5;
                }

                .regimeBadge {
                    padding: 6px 8px;
                    border: 1px solid rgba(255,255,255,.25);
                    border-radius: 999px;
                    font-size: 9px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .resultRows {
                    margin-top: 24px;
                    border-top: 1px solid rgba(255,255,255,.18);
                }

                .resultRow {
                    display: flex;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 11px 0;
                    border-bottom: 1px solid rgba(255,255,255,.12);
                    font-size: 12px;
                }

                .resultRow span {
                    opacity: .7;
                }

                .resultRow strong {
                    font-size: 12px;
                }

                .resultRow.strong {
                    margin-top: 5px;
                    padding-top: 15px;
                    font-size: 13px;
                }

                .resultRow.strong strong {
                    font-size: 16px;
                }

                .comparison {
                    padding: 20px;
                }

                .compareGrid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                    margin-top: 18px;
                }

                .compareItem {
                    padding: 14px;
                    border: 1px solid var(--border);
                    border-radius: ${Math.max(8,y-2)}px;
                }

                .compareItem.selected {
                    border-color: var(--primary);
                    background: color-mix(
                        in srgb,
                        var(--primary) 7%,
                        var(--card)
                    );
                }

                .compareItem span {
                    display: block;
                    color: var(--muted);
                    font-size: 10px;
                    margin-bottom: 7px;
                }

                .compareItem strong {
                    font-size: 16px;
                }

                .saving {
                    margin-top: 12px;
                    padding: 10px 12px;
                    border-radius: 8px;
                    background: color-mix(
                        in srgb,
                        var(--success) 10%,
                        var(--card)
                    );
                    color: var(--success);
                    font-size: 11px;
                    font-weight: 650;
                }

                .breakdown {
                    padding: 20px;
                }

                .breakdown h3 {
                    margin: 0 0 14px;
                    font-size: 14px;
                }

                .summaryItem {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 9px 0;
                    border-bottom: 1px solid var(--border);
                    font-size: 11px;
                }

                .summaryItem:last-child {
                    border-bottom: 0;
                }

                .summaryItem span {
                    color: var(--muted);
                }

                .disclaimer {
                    padding: 14px;
                    color: var(--muted);
                    font-size: 10px;
                    line-height: 1.55;
                }

                @media (max-width: 900px) {
                    .itc {
                        padding: 20px;
                    }

                    .mainGrid {
                        grid-template-columns: 1fr;
                    }

                    .right {
                        position: static;
                    }
                }

                @media (max-width: 600px) {
                    .itc {
                        padding: 14px;
                    }

                    h1 {
                        font-size: ${Math.max(26,v-8)}px;
                    }

                    .card {
                        padding: 16px;
                    }

                    .grid {
                        grid-template-columns: 1fr;
                    }

                    .compareGrid {
                        grid-template-columns: 1fr;
                    }

                    .resultTop {
                        flex-direction: column;
                    }

                    .actions {
                        flex-direction: column;
                    }

                    .modeTabs {
                        flex-direction: column;
                    }

                    .mode {
                        width: 100%;
                    }
                }

                @media (max-width: 360px) {
                    .itc {
                        padding: 10px;
                    }

                    .resultCard {
                        padding: 18px;
                    }

                    .resultTop h2 {
                        font-size: 27px;
                    }

                    .card {
                        padding: 13px;
                    }
                }
            `})]})}var k;function A(){return(A=e((()=>{a(),t(),f(),k=(e,t=0)=>Math.max(t,e||0),O.defaultProps={primaryColor:`#171717`,accentColor:`#6B5CFF`,backgroundColor:`#F7F7F5`,cardColor:`#FFFFFF`,textColor:`#171717`,mutedColor:`#737373`,borderColor:`#E5E5E5`,successColor:`#15803D`,dangerColor:`#DC2626`,title:`Income Tax Calculator`,subtitle:`Estimate your income tax liability and compare the old and new tax regimes.`,basicLabel:`Basic Calculator`,advancedLabel:`Advanced Calculator`,salaryLabel:`Salary Income`,houseLabel:`House Property Income`,businessLabel:`Business / Profession Income`,otherLabel:`Income from Other Sources`,capitalLabel:`Capital Gains`,deductionsLabel:`Deduction Details`,resultLabel:`Estimated Tax`,comparisonLabel:`Old vs New Regime`,calculateLabel:`Calculate Tax`,resetLabel:`Reset`,currency:`₹`,fontFamily:`Inter, sans-serif`,titleSize:36,bodySize:13,inputSize:13,borderRadius:10,cardRadius:16,spacing:16,maxWidth:1200,showComparison:!0,showCapitalGains:!0,showAdvanced:!0,showDisclaimer:!0,disclaimer:`This calculator provides an independent tax estimate for planning purposes. It is not an official Income Tax Department calculator and does not cover every special-rate income, exemption, deduction, interest provision or filing circumstance.`},re(O,{primaryColor:{type:_.Color,title:`Primary`},accentColor:{type:_.Color,title:`Accent`},backgroundColor:{type:_.Color,title:`Background`},cardColor:{type:_.Color,title:`Cards`},textColor:{type:_.Color,title:`Text`},mutedColor:{type:_.Color,title:`Muted`},borderColor:{type:_.Color,title:`Border`},successColor:{type:_.Color,title:`Success`},dangerColor:{type:_.Color,title:`Danger`},title:{type:_.String,title:`Title`},subtitle:{type:_.String,title:`Subtitle`},basicLabel:{type:_.String,title:`Basic Label`},advancedLabel:{type:_.String,title:`Advanced Label`},salaryLabel:{type:_.String,title:`Salary Label`},houseLabel:{type:_.String,title:`House Label`},businessLabel:{type:_.String,title:`Business Label`},otherLabel:{type:_.String,title:`Other Income`},capitalLabel:{type:_.String,title:`Capital Gains`},deductionsLabel:{type:_.String,title:`Deductions`},resultLabel:{type:_.String,title:`Result Label`},comparisonLabel:{type:_.String,title:`Comparison`},calculateLabel:{type:_.String,title:`Calculate`},resetLabel:{type:_.String,title:`Reset`},currency:{type:_.String,title:`Currency`},fontFamily:{type:_.String,title:`Font`},titleSize:{type:_.Number,title:`Title Size`,min:20,max:64,step:1},bodySize:{type:_.Number,title:`Body Size`,min:10,max:20,step:1},inputSize:{type:_.Number,title:`Input Size`,min:10,max:18,step:1},borderRadius:{type:_.Number,title:`Input Radius`,min:0,max:30,step:1},cardRadius:{type:_.Number,title:`Card Radius`,min:0,max:40,step:1},spacing:{type:_.Number,title:`Spacing`,min:8,max:40,step:1},maxWidth:{type:_.Number,title:`Max Width`,min:700,max:1600,step:10},showComparison:{type:_.Boolean,title:`Comparison`,enabledTitle:`Show`,disabledTitle:`Hide`},showCapitalGains:{type:_.Boolean,title:`Capital Gains`,enabledTitle:`Show`,disabledTitle:`Hide`},showAdvanced:{type:_.Boolean,title:`Advanced`,enabledTitle:`Show`,disabledTitle:`Hide`},showDisclaimer:{type:_.Boolean,title:`Disclaimer`,enabledTitle:`Show`,disabledTitle:`Hide`},disclaimer:{type:_.String,title:`Disclaimer`,displayTextArea:!0}})})))()}var j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{a(),f(),d(),t(),A(),fe(),j=ie(O),M={G8Bl57blq:`(max-width: 809.98px)`,m8jYoI5xM:`(min-width: 810px) and (max-width: 1199.98px)`,MdDNh7kVA:`(min-width: 1200px)`},N=[],P=`framer-7JQfE`,F={G8Bl57blq:`framer-v-15nddfi`,m8jYoI5xM:`framer-v-svfjpj`,MdDNh7kVA:`framer-v-hql273`},I=(e,t,n)=>e&&t?`position`:n,L={Desktop:`MdDNh7kVA`,Phone:`G8Bl57blq`,Tablet:`m8jYoI5xM`},R=({value:e})=>h()?null:/*#__PURE__*/ s(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),z=({height:e,id:t,width:n,...r})=>({...r,variant:L[r.variant]??r.variant??`MdDNh7kVA`}),B=m(/* @__PURE__ */ o(function(e,t){let a=ee(null),o=t??a,l=i(),{activeLocale:d,setLocale:re}=de();se();let{style:ie,className:f,layoutId:m,variant:h,...g}=z(e),_=r(()=>y({},d),[d]);oe(_);let[fe,b]=ce(h,M,!1),pe=p(P),x=n(v)?.isLayoutTemplate,S=!!n(ne)?.transition?.layout,C=I(x,S);return le({}),/*#__PURE__*/ s(v.Provider,{value:{activeVariantId:fe,humanReadableVariantMap:L,primaryVariantId:`MdDNh7kVA`,variantClassNames:F},children:/*#__PURE__*/ c(te,{id:m??l,children:[/*#__PURE__*/ s(R,{value:`html body { background: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, rgb(247, 245, 244)); }`}),/*#__PURE__*/ s(u.div,{...g,className:p(pe,`framer-hql273`,f),ref:o,style:{...ie},children:/*#__PURE__*/ s(u.main,{className:`framer-1ut4380`,"data-framer-name":`Main`,layout:C,children:/*#__PURE__*/ s(`header`,{className:`framer-1mxy5bz`,"data-framer-name":`Hero`,children:/*#__PURE__*/ s(`div`,{className:`framer-rnul6z`,"data-framer-name":`Container`,children:/*#__PURE__*/ s(ue,{children:/*#__PURE__*/ s(ae,{className:`framer-ygaw6c-container`,isAuthoredByUser:!0,nodeId:`csM1iez8x`,scopeId:`knW43aSoT`,children:/*#__PURE__*/ s(O,{accentColor:`rgb(107, 92, 255)`,advancedLabel:`Advanced Calculator`,backgroundColor:`rgb(247, 247, 245)`,basicLabel:`Basic Calculator`,bodySize:13,borderColor:`rgb(229, 229, 229)`,borderRadius:10,businessLabel:`Business / Profession Income`,calculateLabel:`Calculate Tax`,capitalLabel:`Capital Gains`,cardColor:`rgb(255, 255, 255)`,cardRadius:16,comparisonLabel:`Old vs New Regime`,currency:`₹`,dangerColor:`rgb(220, 38, 38)`,deductionsLabel:`Deduction Details`,disclaimer:`This calculator provides an independent tax estimate for planning purposes. It is not an official Income Tax Department calculator and does not cover every special-rate income, exemption, deduction, interest provision or filing circumstance.`,fontFamily:`Inter, sans-serif`,height:`100%`,houseLabel:`House Property Income`,id:`csM1iez8x`,inputSize:13,layoutId:`csM1iez8x`,maxWidth:1200,mutedColor:`var(--token-6fa528a6-4e65-4d37-a1ce-4a5c532158ba, rgb(52, 73, 72))`,otherLabel:`Income from Other Sources`,primaryColor:`var(--token-6fa528a6-4e65-4d37-a1ce-4a5c532158ba, rgb(52, 73, 72))`,resetLabel:`Reset`,resultLabel:`Estimated Tax`,salaryLabel:`Salary Income`,showAdvanced:!0,showCapitalGains:!0,showComparison:!0,showDisclaimer:!0,spacing:16,style:{width:`100%`},subtitle:`Estimate your income tax liability and compare the old and new tax regimes.`,successColor:`rgb(21, 128, 61)`,textColor:`var(--token-6fa528a6-4e65-4d37-a1ce-4a5c532158ba, rgb(52, 73, 72))`,title:`Income Tax Calculator`,titleSize:36,width:`100%`})})})})})})}),/*#__PURE__*/ s(`div`,{id:`overlay`})]})})}),[`.framer-7JQfE.framer-1mea7yv, .framer-7JQfE .framer-1mea7yv { display: block; }`,`.framer-7JQfE.framer-hql273 { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-7JQfE .framer-1ut4380 { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-7JQfE .framer-1mxy5bz { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 160px 24px 100px 24px; position: relative; width: 100%; }`,`.framer-7JQfE .framer-rnul6z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-7JQfE .framer-ygaw6c-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-7JQfE.framer-hql273 { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-7JQfE.framer-hql273 { width: 390px; } .framer-7JQfE .framer-1mxy5bz { padding: 160px 20px 80px 20px; }}`],`framer-7JQfE`),B.displayName=`Page`,B.defaultProps={height:2653,width:1200},g(B,[{explicitInter:!0,fonts:[]},...j],{supportsExplicitInterCodegen:!0}),V={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerknW43aSoT`,slots:[],annotations:{framerImmutableVariables:`true`,framerIntrinsicWidth:`1200`,framerContractVersion:`1`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"m8jYoI5xM":{"layout":["fixed","fixed"]},"G8Bl57blq":{"layout":["fixed","fixed"]}}}`,framerColorSyntax:`true`,framerScrollSections:`false`,framerIntrinsicHeight:`2653`,framerAutoSizeImages:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerComponentViewportWidth:`true`,framerLayoutTemplateFlowEffect:`true`,framerAcceptsLayoutTemplate:`true`}},__FramerMetadata__:{type:`variable`}}}})))()}H();export{V as __FramerMetadata__,B as default,N as queryParamNames};
//# sourceMappingURL=rhL2pLRthAFPVIgaRQ8JzLo04MEKvAMPYx2tesw4OWE.BBDu5dS_.mjs.map