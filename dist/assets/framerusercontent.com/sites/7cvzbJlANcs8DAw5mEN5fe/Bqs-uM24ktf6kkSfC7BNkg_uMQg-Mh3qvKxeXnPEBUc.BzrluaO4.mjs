import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{E as t,M as n,N as r,T as i,c as a,l as o,m as s,s as c,u as l,v as u,x as d}from"./react.BJcGtc4y.mjs";import{T as f,i as p,s as m,t as h}from"./motion.CA4L5q-g.mjs";import{A as g,B as _,J as v,M as y,Ot as b,_t as x,a as S,bt as C,dt as w,gt as T,ht as E,i as D,k as O,o as k,p as A,yt as j}from"./framer.Cs5SKXVM.mjs";import{n as M,r as N}from"./eK81hwHUL.CwdyIcqm.mjs";function P(e){let{eyebrow:t,title:n,description:r,addGSTLabel:i,removeGSTLabel:a,amountBeforeLabel:s,amountIncludingLabel:d,gstRateLabel:f,taxTypeLabel:p,cgstSgstLabel:m,igstLabel:h,totalLabel:g,taxableAmountLabel:_,totalGSTLabel:v,disclaimer:y,backgroundColor:b,inputBackground:x,resultBackground:S,textColor:C,mutedColor:w,borderColor:T,accentColor:E,activeBackground:D,buttonTextColor:O,borderRadius:k,inputRadius:A,fontFamily:j,titleSize:M,totalSize:N}=e,[P,F]=u(`exclusive`),[I,L]=u(`intra`),[R,z]=u(`10000`),[B,V]=u(18),H=Number(R)||0,U=0,W=0,G=0;P===`exclusive`?(U=H,W=B/100*U,G=U+W):(G=H,U=G/(1+B/100),W=G-U);let K=W/2,q=W/2,J=e=>`₹${e.toLocaleString(`en-IN`,{minimumFractionDigits:2,maximumFractionDigits:2})}`,Y=`
        .gst-wrapper {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            font-family: ${j};
            color: ${C};
        }

        .gst-wrapper *,
        .gst-wrapper *::before,
        .gst-wrapper *::after {
            box-sizing: border-box;
        }

        .gst-container {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
            background: ${b};
            border: 1px solid ${T};
            border-radius: ${k}px;
            overflow: hidden;
        }

        .gst-input-section {
            min-width: 0;
            padding: 32px;
            border-right: 1px solid ${T};
        }

        .gst-eyebrow {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${w};
            margin-bottom: 8px;
        }

        .gst-title {
            font-size: ${M}px;
            line-height: 1.1;
            letter-spacing: -0.04em;
            font-weight: 650;
            margin: 0;
            overflow-wrap: anywhere;
        }

        .gst-description {
            font-size: 14px;
            line-height: 1.55;
            color: ${w};
            margin: 10px 0 24px;
            max-width: 520px;
        }

        .gst-tabs {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
            padding: 4px;
            background: ${D};
            border-radius: ${A}px;
            margin-bottom: 24px;
        }

        .gst-tab {
            width: 100%;
            min-width: 0;
            min-height: 44px;
            border: 0;
            padding: 10px;
            border-radius: ${Math.max(A-2,4)}px;
            font-family: ${j};
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s ease;
            white-space: normal;
        }

        .gst-field-label {
            display: block;
            font-size: 13px;
            line-height: 1.3;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .gst-amount-wrapper {
            position: relative;
            width: 100%;
            margin-bottom: 20px;
        }

        .gst-currency {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: ${w};
            font-weight: 600;
            pointer-events: none;
        }

        .gst-input {
            width: 100%;
            min-width: 0;
            height: 50px;
            border: 1px solid ${T};
            border-radius: ${A}px;
            background: ${x};
            color: ${C};
            padding: 0 14px 0 34px;
            font-family: ${j};
            font-size: 16px;
            outline: none;
        }

        .gst-input:focus,
        .gst-select:focus {
            border-color: ${E};
            box-shadow: 0 0 0 3px ${D};
        }

        .gst-input::-webkit-inner-spin-button,
        .gst-input::-webkit-outer-spin-button {
            opacity: 0.5;
        }

        .gst-fields {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 14px;
        }

        .gst-select {
            width: 100%;
            min-width: 0;
            height: 50px;
            border: 1px solid ${T};
            border-radius: ${A}px;
            background: ${x};
            color: ${C};
            padding: 0 12px;
            font-family: ${j};
            font-size: 15px;
            outline: none;
            cursor: pointer;
        }

        .gst-tax-buttons {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 8px;
        }

        .gst-tax-button {
            width: 100%;
            min-width: 0;
            min-height: 50px;
            border: 1px solid ${T};
            border-radius: ${A}px;
            padding: 8px;
            font-family: ${j};
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s ease;
            white-space: normal;
            line-height: 1.2;
        }

        .gst-hint {
            margin: 12px 0 0;
            font-size: 11px;
            line-height: 1.5;
            color: ${w};
        }

        .gst-result-section {
            min-width: 0;
            background: ${S};
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .gst-result-label {
            font-size: 12px;
            font-weight: 600;
            color: ${w};
            margin-bottom: 7px;
        }

        .gst-total {
            min-width: 0;
            font-size: ${N}px;
            line-height: 1.05;
            letter-spacing: -0.045em;
            font-weight: 700;
            margin-bottom: 24px;
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .gst-breakdown {
            width: 100%;
            border-top: 1px solid ${T};
        }

        .gst-line {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-width: 0;
            padding: 13px 0;
            border-bottom: 1px solid ${T};
            font-size: 13px;
        }

        .gst-line span {
            min-width: 0;
        }

        .gst-line span:first-child {
            color: ${w};
            overflow-wrap: anywhere;
        }

        .gst-line strong {
            flex-shrink: 0;
            font-weight: 650;
            text-align: right;
            white-space: nowrap;
        }

        .gst-note {
            font-size: 11px;
            line-height: 1.5;
            color: ${w};
            margin: 18px 0 0;
        }

        /* TABLET */

        @media (max-width: 850px) {
            .gst-container {
                grid-template-columns: 1fr;
            }

            .gst-input-section {
                border-right: 0;
                border-bottom: 1px solid ${T};
            }

            .gst-result-section {
                min-height: 0;
            }
        }

        /* SMALL TABLET */

        @media (max-width: 600px) {
            .gst-input-section,
            .gst-result-section {
                padding: 24px;
            }

            .gst-title {
                font-size: clamp(24px, 7vw, ${M}px);
            }

            .gst-total {
                font-size: clamp(30px, 9vw, ${N}px);
            }

            .gst-fields {
                grid-template-columns: 1fr;
                gap: 18px;
            }
        }

        /* MOBILE */

        @media (max-width: 420px) {
            .gst-container {
                border-radius: ${Math.min(k,18)}px;
            }

            .gst-input-section,
            .gst-result-section {
                padding: 20px;
            }

            .gst-description {
                font-size: 13px;
                margin-bottom: 20px;
            }

            .gst-tabs {
                margin-bottom: 20px;
            }

            .gst-tab {
                font-size: 12px;
                padding: 9px 6px;
            }

            .gst-input,
            .gst-select {
                height: 48px;
            }

            .gst-tax-button {
                font-size: 11px;
                padding: 7px 5px;
            }

            .gst-line {
                font-size: 12px;
                gap: 10px;
                padding: 12px 0;
            }

            .gst-total {
                margin-bottom: 20px;
            }
        }

        /* VERY SMALL PHONES */

        @media (max-width: 330px) {
            .gst-input-section,
            .gst-result-section {
                padding: 16px;
            }

            .gst-tabs {
                grid-template-columns: 1fr;
                background: transparent;
                padding: 0;
                gap: 7px;
            }

            .gst-tab {
                border: 1px solid ${T};
                background: ${x};
            }

            .gst-tab.active {
                background: ${D};
            }

            .gst-tax-buttons {
                grid-template-columns: 1fr;
            }

            .gst-line {
                align-items: flex-start;
                flex-direction: column;
                gap: 5px;
            }

            .gst-line strong {
                text-align: left;
            }
        }
    `;return/*#__PURE__*/ l(`div`,{className:`gst-wrapper`,children:[/*#__PURE__*/ c(`style`,{children:Y}),/*#__PURE__*/ l(`div`,{className:`gst-container`,children:[/*#__PURE__*/ l(`section`,{className:`gst-input-section`,children:[/*#__PURE__*/ c(`div`,{className:`gst-eyebrow`,children:t}),/*#__PURE__*/ c(`h2`,{className:`gst-title`,children:n}),/*#__PURE__*/ c(`p`,{className:`gst-description`,children:r}),/*#__PURE__*/ l(`div`,{className:`gst-tabs`,children:[/*#__PURE__*/ c(`button`,{type:`button`,className:`gst-tab ${P===`exclusive`?`active`:``}`,onClick:()=>F(`exclusive`),style:{background:P===`exclusive`?x:`transparent`,color:P===`exclusive`?C:w},children:i}),/*#__PURE__*/ c(`button`,{type:`button`,className:`gst-tab ${P===`inclusive`?`active`:``}`,onClick:()=>F(`inclusive`),style:{background:P===`inclusive`?x:`transparent`,color:P===`inclusive`?C:w},children:a})]}),/*#__PURE__*/ c(`label`,{className:`gst-field-label`,children:P===`exclusive`?s:d}),/*#__PURE__*/ l(`div`,{className:`gst-amount-wrapper`,children:[/*#__PURE__*/ c(`span`,{className:`gst-currency`,children:`₹`}),/*#__PURE__*/ c(`input`,{className:`gst-input`,type:`number`,min:`0`,inputMode:`decimal`,value:R,onChange:e=>z(e.target.value),"aria-label":P===`exclusive`?s:d})]}),/*#__PURE__*/ l(`div`,{className:`gst-fields`,children:[/*#__PURE__*/ l(`div`,{children:[/*#__PURE__*/ c(`label`,{className:`gst-field-label`,children:f}),/*#__PURE__*/ l(`select`,{className:`gst-select`,value:B,onChange:e=>V(Number(e.target.value)),children:[/*#__PURE__*/ c(`option`,{value:5,children:`5%`}),/*#__PURE__*/ c(`option`,{value:12,children:`12%`}),/*#__PURE__*/ c(`option`,{value:18,children:`18%`}),/*#__PURE__*/ c(`option`,{value:28,children:`28%`})]})]}),/*#__PURE__*/ l(`div`,{children:[/*#__PURE__*/ c(`label`,{className:`gst-field-label`,children:p}),/*#__PURE__*/ l(`div`,{className:`gst-tax-buttons`,children:[/*#__PURE__*/ c(`button`,{type:`button`,className:`gst-tax-button`,onClick:()=>L(`intra`),style:{background:I===`intra`?D:x,color:I===`intra`?O:C},children:m}),/*#__PURE__*/ c(`button`,{type:`button`,className:`gst-tax-button`,onClick:()=>L(`inter`),style:{background:I===`inter`?D:x,color:I===`inter`?O:C},children:h})]})]})]}),/*#__PURE__*/ c(`p`,{className:`gst-hint`,children:`For intra-state transactions, GST is split equally between CGST and SGST. For inter-state transactions, the full amount is IGST.`})]}),/*#__PURE__*/ l(`section`,{className:`gst-result-section`,"aria-live":`polite`,children:[/*#__PURE__*/ l(`div`,{children:[/*#__PURE__*/ c(`div`,{className:`gst-result-label`,children:g}),/*#__PURE__*/ c(`div`,{className:`gst-total`,children:J(G)}),/*#__PURE__*/ l(`div`,{className:`gst-breakdown`,children:[/*#__PURE__*/ l(`div`,{className:`gst-line`,children:[/*#__PURE__*/ c(`span`,{children:_}),/*#__PURE__*/ c(`strong`,{children:J(U)})]}),I===`intra`&&/*#__PURE__*/ l(o,{children:[/*#__PURE__*/ l(`div`,{className:`gst-line`,children:[/*#__PURE__*/ l(`span`,{children:[`CGST (`,B/2,`%)`]}),/*#__PURE__*/ c(`strong`,{children:J(K)})]}),/*#__PURE__*/ l(`div`,{className:`gst-line`,children:[/*#__PURE__*/ l(`span`,{children:[`SGST (`,B/2,`%)`]}),/*#__PURE__*/ c(`strong`,{children:J(q)})]})]}),I===`inter`&&/*#__PURE__*/ l(`div`,{className:`gst-line`,children:[/*#__PURE__*/ l(`span`,{children:[`IGST (`,B,`%)`]}),/*#__PURE__*/ c(`strong`,{children:J(W)})]}),/*#__PURE__*/ l(`div`,{className:`gst-line`,children:[/*#__PURE__*/ c(`span`,{children:v}),/*#__PURE__*/ c(`strong`,{children:J(W)})]})]})]}),/*#__PURE__*/ c(`p`,{className:`gst-note`,children:y})]})]})]})}function F(){return(F=e((()=>{a(),t(),v(),g(P,{eyebrow:{type:k.String,title:`Eyebrow`,defaultValue:`Tax Tool`},title:{type:k.String,title:`Title`,defaultValue:`GST Calculator`},description:{type:k.String,title:`Description`,displayTextArea:!0,defaultValue:`Calculate GST instantly and see the taxable amount, tax breakdown and final payable amount.`},addGSTLabel:{type:k.String,title:`Add GST`,defaultValue:`Add GST`},removeGSTLabel:{type:k.String,title:`Remove GST`,defaultValue:`Remove GST`},amountBeforeLabel:{type:k.String,title:`Before GST`,defaultValue:`Amount before GST`},amountIncludingLabel:{type:k.String,title:`Including GST`,defaultValue:`Amount including GST`},gstRateLabel:{type:k.String,title:`GST Rate`,defaultValue:`GST rate`},taxTypeLabel:{type:k.String,title:`Tax Type`,defaultValue:`Tax type`},cgstSgstLabel:{type:k.String,title:`CGST + SGST`,defaultValue:`CGST + SGST`},igstLabel:{type:k.String,title:`IGST`,defaultValue:`IGST`},totalLabel:{type:k.String,title:`Total Label`,defaultValue:`Total including GST`},taxableAmountLabel:{type:k.String,title:`Taxable Label`,defaultValue:`Taxable amount`},totalGSTLabel:{type:k.String,title:`GST Label`,defaultValue:`Total GST`},disclaimer:{type:k.String,title:`Disclaimer`,displayTextArea:!0,defaultValue:`This calculator is for general estimation purposes only. Actual GST treatment can depend on the nature and place of supply.`},backgroundColor:{type:k.Color,title:`Main Background`,defaultValue:`#FFFFFF`},inputBackground:{type:k.Color,title:`Input Background`,defaultValue:`#FFFFFF`},resultBackground:{type:k.Color,title:`Result Background`,defaultValue:`#F7F6F3`},textColor:{type:k.Color,title:`Text`,defaultValue:`#171717`},mutedColor:{type:k.Color,title:`Muted Text`,defaultValue:`#707070`},borderColor:{type:k.Color,title:`Border`,defaultValue:`#E7E5E0`},accentColor:{type:k.Color,title:`Accent`,defaultValue:`#171717`},activeBackground:{type:k.Color,title:`Active Background`,defaultValue:`#F2F1EE`},buttonTextColor:{type:k.Color,title:`Active Text`,defaultValue:`#171717`},borderRadius:{type:k.Number,title:`Card Radius`,min:0,max:50,step:1,defaultValue:24},inputRadius:{type:k.Number,title:`Input Radius`,min:0,max:30,step:1,defaultValue:11},fontFamily:{type:k.String,title:`Font`,defaultValue:`Inter, sans-serif`},titleSize:{type:k.Number,title:`Title Size`,min:18,max:60,step:1,defaultValue:30},totalSize:{type:k.Number,title:`Total Size`,min:24,max:64,step:1,defaultValue:38}})})))()}var I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{a(),v(),h(),t(),F(),M(),I=_(P),L={qFzydXlv3:`(max-width: 809.98px)`,zHxzCgzh3:`(min-width: 1200px)`,Zxu10XIQN:`(min-width: 810px) and (max-width: 1199.98px)`},R=[],z=`framer-K6lLS`,B={qFzydXlv3:`framer-v-4dcp9v`,zHxzCgzh3:`framer-v-1t3nwmi`,Zxu10XIQN:`framer-v-ttstab`},V=(e,t,n)=>e&&t?`position`:n,H={Desktop:`zHxzCgzh3`,Phone:`qFzydXlv3`,Tablet:`Zxu10XIQN`},U=({value:e})=>x()?null:/*#__PURE__*/ c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),W=({height:e,id:t,width:n,...r})=>({...r,variant:H[r.variant]??r.variant??`zHxzCgzh3`}),G=b(/* @__PURE__ */ s(function(e,t){let a=d(null),o=t??a,s=i(),{activeLocale:u,setLocale:h}=j();w();let{style:g,className:_,layoutId:v,variant:b,...x}=W(e),O=r(()=>N({},u),[u]);C(O);let[k,M]=T(b,L,!1),F=y(z),I=n(A)?.isLayoutTemplate,R=!!n(m)?.transition?.layout,G=V(I,R);return E({}),/*#__PURE__*/ c(A.Provider,{value:{activeVariantId:k,humanReadableVariantMap:H,primaryVariantId:`zHxzCgzh3`,variantClassNames:B},children:/*#__PURE__*/ l(p,{id:v??s,children:[/*#__PURE__*/ c(U,{value:`html body { background: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, rgb(247, 245, 244)); }`}),/*#__PURE__*/ c(f.div,{...x,className:y(F,`framer-1t3nwmi`,_),ref:o,style:{...g},children:/*#__PURE__*/ c(f.main,{className:`framer-pthkl3`,"data-framer-name":`Main`,layout:G,children:/*#__PURE__*/ c(`header`,{className:`framer-xqd5bv`,"data-framer-name":`Hero`,children:/*#__PURE__*/ c(`div`,{className:`framer-kbzidr`,"data-framer-name":`Container`,children:/*#__PURE__*/ c(D,{children:/*#__PURE__*/ c(S,{className:`framer-1k6jh3n-container`,isAuthoredByUser:!0,nodeId:`bBxPUSpbY`,scopeId:`eK81hwHUL`,children:/*#__PURE__*/ c(P,{accentColor:`rgb(23, 23, 23)`,activeBackground:`rgb(242, 241, 238)`,addGSTLabel:`Add GST`,amountBeforeLabel:`Amount before GST`,amountIncludingLabel:`Amount including GST`,backgroundColor:`var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, rgb(247, 245, 244))`,borderColor:`rgb(231, 229, 224)`,borderRadius:24,buttonTextColor:`rgb(23, 23, 23)`,cgstSgstLabel:`CGST + SGST`,description:`Calculate GST instantly and see the taxable amount, tax breakdown and final payable amount.`,disclaimer:`This calculator is for general estimation purposes only. Actual GST treatment can depend on the nature and place of supply.`,eyebrow:`Tax Tool`,fontFamily:`Inter, sans-serif`,gstRateLabel:`GST rate`,height:`100%`,id:`bBxPUSpbY`,igstLabel:`IGST`,inputBackground:`rgb(255, 255, 255)`,inputRadius:11,layoutId:`bBxPUSpbY`,mutedColor:`var(--token-6fa528a6-4e65-4d37-a1ce-4a5c532158ba, rgb(52, 73, 72))`,removeGSTLabel:`Remove GST`,resultBackground:`rgb(247, 246, 243)`,style:{width:`100%`},taxableAmountLabel:`Taxable amount`,taxTypeLabel:`Tax type`,textColor:`var(--token-6fa528a6-4e65-4d37-a1ce-4a5c532158ba, rgb(52, 73, 72))`,title:`GST Calculator`,titleSize:30,totalGSTLabel:`Total GST`,totalLabel:`Total including GST`,totalSize:38,width:`100%`})})})})})})}),/*#__PURE__*/ c(`div`,{id:`overlay`})]})})}),[`.framer-K6lLS.framer-jgzk4q, .framer-K6lLS .framer-jgzk4q { display: block; }`,`.framer-K6lLS.framer-1t3nwmi { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-K6lLS .framer-pthkl3 { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-K6lLS .framer-xqd5bv { align-content: center; align-items: center; background-color: var(--token-8d5fe4c9-6fe6-4037-9332-274c86d5588e, #f7f5f4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 24px 100px 24px; position: relative; width: 100%; }`,`.framer-K6lLS .framer-kbzidr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-K6lLS .framer-1k6jh3n-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-K6lLS.framer-1t3nwmi { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-K6lLS.framer-1t3nwmi { width: 390px; } .framer-K6lLS .framer-xqd5bv { padding: 160px 20px 80px 20px; }}`],`framer-K6lLS`),G.displayName=`Page`,G.defaultProps={height:1402,width:1200},O(G,[{explicitInter:!0,fonts:[]},...I],{supportsExplicitInterCodegen:!0}),K={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramereK81hwHUL`,slots:[],annotations:{framerIntrinsicHeight:`1402`,framerScrollSections:`false`,framerAcceptsLayoutTemplate:`true`,framerDisplayContentsDiv:`false`,framerAutoSizeImages:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Zxu10XIQN":{"layout":["fixed","fixed"]},"qFzydXlv3":{"layout":["fixed","fixed"]}}}`,framerComponentViewportWidth:`true`,framerIntrinsicWidth:`1200`,framerLayoutTemplateFlowEffect:`true`,framerContractVersion:`1`,framerColorSyntax:`true`,framerResponsiveScreen:`true`,framerImmutableVariables:`true`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}q();export{K as __FramerMetadata__,G as default,R as queryParamNames};
//# sourceMappingURL=Bqs-uM24ktf6kkSfC7BNkg_uMQg-Mh3qvKxeXnPEBUc.BzrluaO4.mjs.map