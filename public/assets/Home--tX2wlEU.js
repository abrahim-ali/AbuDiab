import{r as d,j as e}from"./index-8F3ixmFl.js";import{t as b,W as v,H as N,F as S}from"./Footer-BZZTckDH.js";import{F as w,a as k,b as A,c as D,d as E,e as I}from"./index-Zx_AeyRJ.js";import{T as C}from"./TestimonialsPage-Dtszr4pU.js";import{H as z}from"./Helmet-BIyoWkPE.js";function W({lang:i}){const[n,m]=d.useState(""),t=b("hero.text",i),s=100,r=1500,g=50;return d.useEffect(()=>{let a;const o=()=>{m(c=>{const f=t.slice(0,c.length+1);return f.length<t.length?a=setTimeout(o,s):f.length===t.length&&(a=setTimeout(l,r)),f})},l=()=>{m(c=>c.length>1?(a=setTimeout(l,g),c.slice(0,-1)):(a=setTimeout(o,s),""))};return a=setTimeout(o,s),()=>clearTimeout(a)},[i]),e.jsx(v,{children:e.jsxs("section",{className:"hero",id:"home",children:[e.jsx("style",{children:`
          .cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background: currentColor;
            margin-left: 4px;
            animation: blink 1s step-start infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            justify-content: center;
          }

          .btn-primary,
          .btn-secondary {
            padding: 0.8rem 1.8rem;
            border-radius: 0.5rem;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.5px;
            text-decoration: none;
            transition: all 0.3s ease;
            min-width: 160px;
            text-align: center;
            border: none;
            cursor: pointer;
          }

          .btn-primary {
            background: linear-gradient(135deg,  #8b5cf6 0%, #ec4899 100%);
            color: #ffffff;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 7px 20px rgba(37, 117, 252, 0.4);
            background: linear-gradient(135deg, #5a0fc0 0%, #1d6bfa 100%);
          }

          .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .btn-secondary:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
            color: white;
          }

          @media (max-width: 500px) {
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
            .btn-primary,
            .btn-secondary {
              width: 100%;
              max-width: 220px;
            }
          }
        `}),e.jsx("h1",{children:b("hero.title",i)}),e.jsxs("p",{children:[n,e.jsx("span",{className:"cursor",children:"|"})]}),e.jsxs("div",{className:"hero-buttons",children:[e.jsx("a",{href:"contact",className:"btn-primary",children:b("hero.btn",i)}),e.jsx("a",{href:"#Projects",className:"btn-secondary",children:b("hero.btn2",i)})]})]})})}function T({lang:i,setLang:n}){const m=[e.jsx(w,{}),e.jsx(k,{}),e.jsx(w,{}),e.jsx(A,{}),e.jsx(D,{}),e.jsx(E,{}),e.jsx(I,{})],t={de:{title:"خدماتنا",subtitle:"نقدم حلولًا متكاملة لتنمية أعمالك الرقمية",services:[{title:"تطوير المواقع الإلكترونية",description:"نقوم بتصميم وتطوير مواقع إلكترونية حديثة وسريعة وسهلة الاستخدام باستخدام أحدث التقنيات."},{title:"تطبيقات الجوال",description:"نطور تطبيقات جوال متكاملة لأنظمة iOS و Android باستخدام React Native و Flutter."},{title:"تطوير المتاجر الإلكترونية",description:"نقوم بتصميم وتطوير متاجر إلكترونية حديثة وسريعة مع نظام التحكم والدفع باستخدام أحدث التقنيات."},{title:"تصميم الهوية البصرية",description:"نقدم حلول تصميم احترافية للشعارات، البطاقات، والمواد التسويقية لعلامتك التجارية."},{title:"التسويق الرقمي",description:"نُحسّن ظهورك الرقمي عبر الحملات المدفوعة، السيو، ووسائل التواصل الاجتماعي."},{title:"الذكاء الاصطناعي والتحليلات",description:"نستخدم الذكاء الاصطناعي لتحليل البيانات واتخاذ قرارات ذكية تُسهم في نجاح عملك."},{title:"الدعم الفني والصيانة",description:"نقدم دعمًا فنيًا مستمرًا وصيانة دورية لضمان استقرار أنظمتك."}]},en:{title:"Our Services",subtitle:"We offer comprehensive solutions to grow your digital business",services:[{title:"Website Development",description:"We design and develop modern, fast, and user-friendly websites using the latest technologies."},{title:"Mobile Applications",description:"We build integrated mobile apps for iOS and Android using React Native and Flutter."},{title:"E-commerce development",description:"We design and develop modern, fast e-commerce stores with control and payment systems using the latest technologies."},{title:"Visual Identity Design",description:"We provide professional design solutions for logos, business cards, and marketing materials for your brand."},{title:"Digital Marketing",description:"We enhance your digital presence through paid campaigns, SEO, and social media."},{title:"Artificial Intelligence & Analytics",description:"We use AI to analyze data and make smart decisions that contribute to your business success."},{title:"Technical Support & Maintenance",description:"We provide ongoing technical support and regular maintenance to ensure system stability."}]}};d.useEffect(()=>{const r=localStorage.getItem("siteLang");if(r==="de"||r==="en")n(r);else{const g=navigator.language.startsWith("de")?"de":"en";n(g)}},[]);const s=t[i];return e.jsxs("div",{className:`services-page ${i==="de"?"rtl":"ltr"}`,dir:i==="de"?"rtl":"ltr",children:[e.jsxs("header",{className:"services-header",children:[e.jsx("h1",{children:s.title}),e.jsx("p",{children:s.subtitle})]}),e.jsx("div",{className:"services-grid",children:s.services.map((r,g)=>e.jsxs("div",{className:"service-card",children:[e.jsx("div",{className:"service-icon-wrapper",children:e.jsx("span",{className:"service-icon",children:m[g]})}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.description})]},g))})]})}function P({lang:i,setLang:n}){const[m,t]=d.useState(!1);d.useEffect(()=>{const a=localStorage.getItem("siteLang");if(a&&["de","en"].includes(a))n(a);else{const o=navigator.language.startsWith("de")?"de":"en";n(o)}},[]),d.useEffect(()=>{let a,o,l=10;return m&&(o=setInterval(()=>{l-=1;const c=document.getElementById("countdown");c&&(c.textContent=l),l<=0&&t(!1)},1e3),a=setTimeout(()=>{t(!1)},1e4)),()=>{a&&clearTimeout(a),o&&clearInterval(o)}},[m]);const r={de:{title:"أعمالنا ومشروعاتنا",subtitle:"اكتشف أبرز المشاريع التي ساهمنا في تنفيذها بنجاح",view_project:"عرض المشروع",project_in_progress:"المشروع قيد التنفيذ",coming_soon_message:"سنقوم بإطلاقه قريبًا، شكرًا لصبرك!",closing_in:"الإغلاق خلال",seconds:"ثانية",projects:[{title:"موقع متجر إلكتروني",category:"تطوير المواقع",img:"/img/store.png",url:"https://www.zaziano.de/",description:"منصة تسوق كاملة مع دعم الدفع الإلكتروني وإدارة المخزون."},{title:"تطبيق python ai",category:"تطبيقات الجوال",img:"/img/pythonai.png",url:"https://play.google.com/store/apps/details?id=org.information.information&pli=1",description:"هو تطبيق متكامل يدمج أدوات الذكاء الاصطناعي، دردشه، مولد صور، ...الخ "},{title:"هوية بصرية لمنتجات",category:"تصميم جرافيك",img:"/img/Design.png",url:"https://www.zaziano.de/products",description:"تصميم شعار، بطاقة عمل، وعناصر وتصميم صور المنتجات للمطعم باحترافيه ."},{title:"دروس الأمن السيبراني",category:"تطبيقات الجوال",img:"/img/cybersecurity.png",url:"https://play.google.com/store/apps/details?id=org.cybersecurity.abrahim711.org.cybersecurity.abrahim711",description:"تقدم هذه المنصة التعليمية تجربة فريدة ومتطورة في تعلم الأمن السيبراني،...الخ"},{title:"محرر الصور ai",category:"تطوير ويب",img:"/img/cromax.png",url:"",description:"هو تطبيق وموقع يسمح بتعديل الصور من خلال الذكاء الاصطناعي والدردشة"},{title:"دفتر حسابات ",category:"تطبيقات الجوال",img:"/img/aconet.png",url:"",description:"هو تطبيق يسمح بتسجيل الديون والدخل والخرج للمستخدم ويقوم بحفظها وتصديرها"},{title:"نظام إدارة منصة اعمال",category:"تطوير ويب",img:"/img/chat-jobs.png",url:"https://chat-jobs--9q8c7t777h.expo.app/",description:"هو نموذج لمنصة ادارة المهن والمشاريع الحرة للمستقلين واصحاب الاعمال"},{title:"موقع عرض اعمال",category:"تطوير المواقع",img:"/img/softwere.png",url:"https://abrahim.onrender.com/",description:"هو موقع لعرض الاعمال والمهارات والخدمات بصورة احترافيه وجذابة"},{title:"لوحة تحكم تحليلات ذكية",category:"واجهات مستخدم",img:"/img/Interfaces.png",url:"",description:"لوحة تحكم تفاعلية لعرض البيانات باستخدام تحليلات الذكاء الاصطناعي."},{title:"محرر صوت ai",category:"تطوير ويب",img:"/img/sound.png",url:"",description:"هو تطبيق يسمح بتعديل الصوت وتغيير الكلمات باستخدام الذكاء الاصطناعي"}]},en:{title:"Our Work & Projects",subtitle:"Discover the key projects we have successfully delivered",view_project:"View Project",project_in_progress:"Project In Progress",coming_soon_message:"We will launch it soon, thank you for your patience!",closing_in:"Closing in",seconds:"seconds",projects:[{title:"E-Commerce Store Website",category:"Web Development",img:"/img/store.png",url:"https://www.zaziano.de/",description:"A complete e-commerce platform with online payment support and inventory management."},{title:"python ai",category:"Mobile Applications",img:"/img/pythonai.png",url:"https://play.google.com/store/apps/details?id=org.information.information&pli=1",description:"It is an integrated application that combines artificial intelligence tools, chat, image generator, etc."},{title:"Visual identity for products",category:"Graphic Design",img:"/img/Design.png",url:"https://www.zaziano.de/products",description:"Professional logo design, business card, and product image design elements for the restaurant."},{title:"Cybersecurity Lessons",category:"Mobile Apps",img:"/img/cybersecurity.png",url:"https://play.google.com/store/apps/details?id=org.cybersecurity.abrahim711.org.cybersecurity.abrahim711",description:"This educational platform offers a unique and advanced experience in learning cybersecurity, etc."},{title:"AI Image Editor",category:"Web Development",img:"/img/cromax.png",url:"",description:"It is an application and website that allows image editing using artificial intelligence and chat"},{title:"Account Book",category:"Mobile Applications",img:"/img/aconet.png",url:"",description:"It is an application that allows the user to record debts, income, and expenditures, and save and export them"},{title:"Business Platform Management System",category:"Web Development",img:"/img/chat-jobs.png",url:"https://chat-jobs--9q8c7t777h.expo.app/",description:"It is a model for a platform for managing professions and freelance projects for freelancers and business owners"},{title:"Work Showcase Website",category:"Website Development",img:"/img/softwere.png",url:"https://abrahim.onrender.com/",description:"A website for showcasing work, skills, and services in a professional and attractive manner"},{title:"Smart Analytics Dashboard",category:"User Interfaces",img:"/img/Interfaces.png",url:"",description:"An interactive dashboard for data visualization using AI analytics."},{title:"AI Audio Editor",category:"Web Development",img:"/img/sound.png",url:"",description:"It's an application that allows you to modify your voice and change your words using artificial intelligence"}]}}[i],g=a=>{a&&a.trim()!==""?window.location.href=a:t(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`portfolio-page ${i==="de"?"rtl":"ltr"}`,dir:i==="de"?"rtl":"ltr",id:"Projects",children:[e.jsxs("header",{className:"portfolio-header",children:[e.jsx("h1",{children:r.title}),e.jsx("p",{children:r.subtitle})]}),e.jsx("div",{className:"portfolio-grid",children:r.projects.map(a=>e.jsxs("div",{className:"project-card",children:[e.jsxs("div",{className:"project-image",children:[e.jsx("img",{src:a.img,alt:a.title,loading:"eager",fetchpriority:"high"}),e.jsx("div",{className:"project-overlay",children:e.jsx("button",{className:"btn-view",onClick:()=>g(a.url),children:r.view_project})})]}),e.jsxs("div",{className:"project-info",children:[e.jsx("span",{className:"project-category",children:a.category}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description})]})]},a.title))})]}),m&&e.jsx("div",{className:"in-progress-modal-overlay",onClick:()=>t(!1),children:e.jsxs("div",{className:"in-progress-modal",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{className:"modal-close-btn",onClick:()=>t(!1),children:"×"}),e.jsx("div",{className:"modal-icon",children:e.jsx("i",{className:"fas fa-tools"})}),e.jsx("h3",{children:r.project_in_progress}),e.jsx("p",{children:r.coming_soon_message}),e.jsxs("div",{className:"countdown-timer",children:[r.closing_in,": ",e.jsx("span",{id:"countdown",children:"10"})," ",r.seconds]})]})})]})}const F=({lang:i,setLang:n})=>{d.useEffect(()=>{const p=localStorage.getItem("setLang");if(p&&["de","en"].includes(p))n(p);else{const h=navigator.language.startsWith("de")?"de":"en";n(h)}},[]);const t={de:{title:"طلب عرض سعر",subtitle:"املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة بإقتراح مخصص",successTitle:"✅ تم إرسال طلبك بنجاح!",successMessage:"شكرًا لك، سنقوم بمراجعة طلبك وإرسال عرض السعر في أقرب وقت.",labels:{name:"الاسم الكامل *",email:"البريد الإلكتروني *",service:"نوع الخدمة المطلوبة *",projectDetails:"تفاصيل المشروع *",budget:"الميزانية المتوقعة",deadline:"الموعد النهائي المطلوب"},placeholders:{projectDetails:"صف مشروعك، الأهداف، والمتطلبات الفنية...",budget:"مثلاً: 5000"},services:["تطوير المواقع الإلكترونية","تطبيقات الجوال","تصميم الهوية البصرية","التسويق الرقمي","الذكاء الاصطناعي والتحليلات","الدعم الفني والصيانة","نظام إدارة محتوى (CMS)","حلول تجارة إلكترونية"],errors:{name:"الاسم مطلوب",email:"البريد الإلكتروني مطلوب",emailInvalid:"البريد غير صحيح",service:"يرجى اختيار نوع الخدمة",projectDetails:"وصف المشروع مطلوب"},submitButton:"إرسال طلب عرض السعر"},en:{title:"Request a Quote",subtitle:"Fill out the form below and we’ll get back to you within 24 hours with a customized proposal",successTitle:"✅ Your request has been submitted successfully!",successMessage:"Thank you! We will review your request and send you a quote shortly.",labels:{name:"Full Name *",email:"Email Address *",service:"Service Required *",projectDetails:"Project Details *",budget:"Expected Budget ",deadline:"Preferred Deadline"},placeholders:{projectDetails:"Describe your project, goals, and technical requirements...",budget:"e.g. 5000"},services:["Website Development","Mobile Applications","Visual Identity Design","Digital Marketing","AI & Analytics","Technical Support & Maintenance","Content Management System (CMS)","E-Commerce Solutions"],errors:{name:"Name is required",email:"Email is required",emailInvalid:"Email is invalid",service:"Please select a service",projectDetails:"Project description is required"},submitButton:"Submit Quote Request"}}[i],[s,r]=d.useState({name:"",email:"",service:"",projectDetails:"",budget:"",deadline:""}),[g,a]=d.useState(!1),[o,l]=d.useState({}),c=p=>{const{name:h,value:u}=p.target;r(x=>({...x,[h]:u})),o[h]&&l(x=>{const j={...x};return delete j[h],j})},f=()=>{const p={};return s.name.trim()||(p.name=t.errors.name),s.email.trim()?/\S+@\S+\.\S+/.test(s.email)||(p.email=t.errors.emailInvalid):p.email=t.errors.email,s.service||(p.service=t.errors.service),s.projectDetails.trim()||(p.projectDetails=t.errors.projectDetails),p},y=async p=>{p.preventDefault();const h=f();if(Object.keys(h).length>0){l(h);return}try{const u=await fetch("/api/send-quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),x=await u.json();u.ok?(console.log("البريد أُرسل بنجاح:",x),a(!0),setTimeout(()=>{a(!1),r({name:"",email:"",service:"",projectDetails:"",budget:"",deadline:""})},5e3)):(alert("حدث خطأ أثناء إرسال الطلب. حاول لاحقًا."),console.error("Error:",x))}catch(u){alert("تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت."),console.error("Network error:",u)}};return e.jsxs("div",{className:`quote-form-container ${i==="de"?"rtl":"ltr"}`,dir:i==="de"?"rtl":"ltr",id:"submit",children:[e.jsxs("header",{className:"form-header",children:[e.jsx("h1",{children:t.title}),e.jsx("p",{children:t.subtitle})]}),g?e.jsxs("div",{className:"success-message",children:[e.jsx("h2",{children:t.successTitle}),e.jsx("p",{children:t.successMessage})]}):e.jsxs("form",{onSubmit:y,className:"quote-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",children:t.labels.name}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:c,className:o.name?"error":""}),o.name&&e.jsx("span",{className:"error-text",children:o.name})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:t.labels.email}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:c,className:o.email?"error":""}),o.email&&e.jsx("span",{className:"error-text",children:o.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"service",children:t.labels.service}),e.jsxs("select",{id:"service",name:"service",value:s.service,onChange:c,className:o.service?"error":"",children:[e.jsx("option",{value:"",children:i==="ar"?"اختر الخدمة":"Select a service"}),t.services.map((p,h)=>e.jsx("option",{value:p,children:p},h))]}),o.service&&e.jsx("span",{className:"error-text",children:o.service})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"projectDetails",children:t.labels.projectDetails}),e.jsx("textarea",{id:"projectDetails",name:"projectDetails",rows:"5",placeholder:t.placeholders.projectDetails,value:s.projectDetails,onChange:c,className:o.projectDetails?"error":""}),o.projectDetails&&e.jsx("span",{className:"error-text",children:o.projectDetails})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group half",children:[e.jsx("label",{htmlFor:"budget",children:t.labels.budget}),e.jsx("input",{type:"number",id:"budget",name:"budget",value:s.budget,onChange:c,placeholder:t.placeholders.budget})]}),e.jsxs("div",{className:"form-group half",children:[e.jsx("label",{htmlFor:"deadline",children:t.labels.deadline}),e.jsx("input",{type:"date",id:"deadline",name:"deadline",value:s.deadline,onChange:c})]})]}),e.jsx("button",{type:"submit",className:"submit-btn",children:t.submitButton})]})]})},L=({lang:i,setLang:n})=>{d.useEffect(()=>{const l=localStorage.getItem("siteLang");if(l&&["de","en"].includes(l))n(l);else{const c=navigator.language.startsWith("de")?"de":"en";n(c)}},[]);const t={de:{slides:[{img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"موقع إلكتروني احترافي",desc:"تصميم سريع، متجاوب، ومحسن لمحركات البحث — يجذب العملاء ويزيد المبيعات."},{img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"متجرك الإلكتروني جاهز خلال 72 ساعة",desc:"تكامل كامل مع بوابات الدفع، إدارة المنتجات، والتتبع — كل شيء تحت سيطرتك."},{img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"تطبيق جوال يخطف أنظار المستخدمين",desc:"واجهة أنيقة، أداء سريع، ومتوافق مع iOS و Android — صُنع ليحقق نجاحك."}]},en:{slides:[{img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"Professional Website",desc:"Fast, responsive, and SEO-optimized — attracts customers and boosts sales."},{img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"Your E-Commerce Store Ready in 72 Hours",desc:"Fully integrated with payment gateways, product management, and tracking — all under your control."},{img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&w=1920",title:"Mobile App That Captivates Users",desc:"Sleek interface, fast performance, compatible with iOS & Android — built for your success."}]}}[i],s=i==="de",[r,g]=d.useState(0),a=d.useRef(null);d.useEffect(()=>(a.current=setInterval(()=>{g(l=>(l+1)%t.slides.length)},5e3),()=>{a.current&&clearInterval(a.current)}),[t.slides.length]);const o=l=>l===r?"active":l===(r-1+t.slides.length)%t.slides.length?"exiting":l===(r+1)%t.slides.length?"entering":"hidden";return e.jsxs("div",{className:`hero-promo-container ${s?"rtl":"ltr"}`,dir:s?"rtl":"ltr",children:[e.jsx("div",{className:"background-slider",children:t.slides.map((l,c)=>e.jsxs("div",{className:`slide ${o(c)} ${s?"rtl":"ltr"}`,style:{backgroundImage:`url(${l.img})`},children:[e.jsx("div",{className:"slide-overlay"}),e.jsxs("div",{className:"slide-content",children:[e.jsx("h2",{children:l.title}),e.jsx("p",{children:l.desc})]})]},c))}),e.jsx("style",{jsx:!0,children:`
        .hero-promo-container {
          position: relative;
          height: 60vh;
          width: 100%;
          overflow: hidden;
        }

        /* Background Slider */
        .background-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: ${s?"flex-start":"flex-end"};
          padding: 0 10%;
          opacity: 0;
          transform: scale(1.1) translateX(${s?"100%":"-100%"}) rotateY(${s?"-15deg":"15deg"});
          transition: all 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform, opacity;
        }

        /* Entering Animation */
        .slide.entering {
          opacity: 1;
          transform: scale(1.05) translateX(0) rotateY(0deg);
          animation: fadeInText 0.8s 0.4s forwards ease-out;
        }

        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(30px) scale(1.05); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Active State */
        .slide.active {
          opacity: 1;
          transform: scale(1) translateX(0) rotateY(0deg);
          z-index: 2;
          animation: pulseGlow 4s infinite alternate ease-in-out;
        }

        @keyframes pulseGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.05); }
        }

        /* Exiting Animation */
        .slide.exiting {
          opacity: 0.7;
          transform: scale(0.95) translateX(${s?"-100%":"100%"}) rotateY(${s?"15deg":"-15deg"});
          filter: blur(8px);
          z-index: 1;
        }

        .slide.hidden {
          z-index: 0;
        }

        /* Dark overlay for better text contrast */
        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to ${s?"left":"right"}, rgba(0,0,0,0.3), transparent 60%);
          z-index: 1;
        }

        .slide-content {
          position: relative;
          z-index: 2;
          max-width: 580px;
          color: white;
          text-align: ${s?"right":"left"};
          transform: translateY(40px);
          opacity: 0;
          animation: slideUpText 0.8s 0.6s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        @keyframes slideUpText {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-content h2 {
          color: white; /* اللون الأساسي للنص */
          font-size: 2.0rem;
          font-weight: 800;
          text-shadow:
            /* الطبقة 1: الحدود السوداء (4 اتجاهات) */
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            /* الطبقة 2: الحدود الزرقاء الداكنة (بين الحدود السوداء والنص) */
            -1px -1px 0 #0a1a3a,
            1px -1px 0 #0a1a3a,
            -1px 1px 0 #0a1a3a,
            1px 1px 0 #0a1a3a,
            /* الطبقة 3: الظل الأحمر الخارجي (يظهر خلف الحدود) */
            0 0 15px #001fcfff,
            0 0 30px rgba(0, 70, 223, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .slide-content p {
          color: white; /* اللون الأساسي للنص */
          font-size: 1.2rem;
          font-weight: 800;
          text-shadow:
            /* الطبقة 1: الحدود السوداء (4 اتجاهات) */
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            /* الطبقة 2: الحدود الزرقاء الداكنة (بين الحدود السوداء والنص) */
            -1px -1px 0 #0a1a3a,
            1px -1px 0 #0a1a3a,
            -1px 1px 0 #0a1a3a,
            1px 1px 0 #0a1a3a,
            /* الطبقة 3: الظل الأحمر الخارجي (يظهر خلف الحدود) */
            0 0 15px #001fcfff,
            0 0 30px rgba(0, 70, 223, 0.5);
          text-transform: uppercase;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .slide-content h2 {
            font-size: 2.6rem;
          }
          .hero-promo-container {height:70vh;}
        }

        @media (max-width: 768px) {
          .hero-promo-container {height:50vh;}

          .slide-content h2 {
            font-size: 2.2rem;
          }

          .slide-content p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-promo-container {height:50vh;}

          .slide-content h2 {
            font-size: 1.4rem;
          }

          .slide-content p {
            font-size: 1.0rem;
          }
        }
      `})]})},M=({lang:i,setLang:n})=>{d.useEffect(()=>{const r=localStorage.getItem("siteLang");if(r&&["de","en"].includes(r))n(r);else{const g=navigator.language.startsWith("de")?"de":"en";n(g)}},[]);const t={de:{title:"لا تُضيّع فرصة التحوّل الرقمي",highlight1:"لا موقع؟",highlight2:"لا متجر إلكتروني؟",highlight3:"لا تطبيق ذكي؟",subtitle:"نحن نبني مستقبلك الرقمي بذكاء واحترافية.",description:"في عالم اليوم، من ليس له وجود رقمي، فكأنه غير موجود. نحن لا نُبرمج فقط، بل نُصمّم تجارب، نُطلق علامات تجارية، ونُحوّل الأفكار إلى واقع رقمي مربح.",cta:"ابدأ رحلتك الرقمية الآن",langSwitch:"English"},en:{title:"Don’t miss your digital transformation",highlight1:"No website?",highlight2:"No online store?",highlight3:"No mobile app?",subtitle:"We build your digital future with precision and care.",description:"In today’s world, if you’re not online, you don’t exist. We don’t just code — we design experiences, launch brands, and turn ideas into profitable digital realities.",cta:"Start Your Digital Journey Now",langSwitch:"العربية"}}[i],s=()=>{const r=["function createWebsite() {","const app = new Express();","await client.validate();",'router.get("/api/*",',"deployToCloud(solution);","return response.success();",'console.log("Live:", url);',"if (user.hasVision) {",'setPriority("high");',"secureConnection(user);",'const config = { speed: "fast",','status: "deployed" }',"res.json(data);","// Abu Dhabiab - 2025",'scale: "global" }',"error = null;","solution.build();"];return Array(150).fill().map(()=>"  "+r[Math.floor(Math.random()*r.length)]).join(`
`)};return e.jsxs("div",{className:`code-bg-page ${i}`,dir:i==="de"?"rtl":"ltr",children:[e.jsx("div",{className:"grid-background"}),e.jsx("div",{className:"side-code-background",style:{[i==="de"?"left":"right"]:0,width:"40%",height:"100%"},children:e.jsx("div",{className:"code-scroll",children:s()})}),e.jsxs("div",{className:"main-content50",children:[e.jsxs("h1",{children:[t.title,e.jsx("br",{}),e.jsx("span",{className:"highlight",children:t.highlight1}),e.jsx("br",{}),e.jsx("span",{className:"highlight",children:t.highlight2}),e.jsx("br",{}),e.jsx("span",{className:"highlight",children:t.highlight3})]}),e.jsx("p",{className:"subtitle",children:t.subtitle}),e.jsx("p",{className:"description",children:t.description}),e.jsx("button",{className:"cta-button",onClick:()=>window.location.href="#submit",children:t.cta})]}),e.jsx("style",{jsx:!0,children:`
        .code-bg-page {
          position: relative;
          padding: 30px 20px;
          overflow: hidden;
          color: white;
          background: #f3f3f3ff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* شبكة المربعات في الخلفية */
        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 3, 163, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(1, 0, 80, 1) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
          opacity: 0.3;
        }

        /* الخلفية الجانبية (الكود المتحرك) */
        .side-code-background {
          position: absolute;
          top: 0;
          width: 40%;
          height: 100%;
          z-index: 2;
          overflow: hidden;
        }

        .code-scroll {
          position: absolute;
          top: 0;
          width: 120%;
          font-size: 14px;
          line-height: 1.8;
          color: rgba(2, 0, 107, 0.56);
          white-space: pre;
          opacity: 0.9;
          animation: scrollCode 120s linear infinite;
        }

        @keyframes scrollCode {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        /* المحتوى الرئيسي */
        .main-content50 {
          position: relative;
          z-index: 10;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: ${i==="de"?"right":"left"};
        }

        .main-content50 h1 {
          color: white; /* اللون الأساسي للنص */
          font-size: 1.3rem;
          font-weight: 800;
          margin: 2.0rem 0;
          max-width: 700px;
          text-shadow:
            /* الطبقة 1: الحدود السوداء (4 اتجاهات) */
            -2px -2px 0 #020061ff,
            2px -2px 0 #020061ff,
            -2px 2px 0 #020061ff,
            2px 2px 0 #020061ff,
            /* الطبقة 2: الحدود الزرقاء الداكنة (بين الحدود السوداء والنص) */
            -1px -1px 0 #0a1a3a,
            1px -1px 0 #0a1a3a,
            -1px 1px 0 #0a1a3a,
            1px 1px 0 #0a1a3a,
            /* الطبقة 3: الظل الأحمر الخارجي (يظهر خلف الحدود) */
            0 0 15px #c00000ff,
            0 0 30px rgba(170, 34, 10, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .highlight {
          color: #64ffda;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #022920ff;
          margin: 0 0 16px;
          font-weight: 500;
        }

        .description {
          font-size: 1.25rem;
          color: #0032d8ff;
          margin: 0 0 32px;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow:
            /* الطبقة 1: الحدود السوداء (4 اتجاهات) */
            1px 1px 0 #020061ff,
            /* الطبقة 3: الظل الأحمر الخارجي (يظهر خلف الحدود) */
            0 0 15px #880000ff,
            0 0 30px rgba(187, 0, 0, 0.5);
        }

        .cta-button {
          background: linear-gradient(90deg, #001affff, #64ffda);
          color: #0a1128;
          border: none;
          padding: 16px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 5px 25px rgba(100, 255, 218, 0.2);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.3);
        }

        
      `})]})};function $(){const[i,n]=d.useState("de");return d.useEffect(()=>{const m=localStorage.getItem("siteLang");if(m){n(m),document.documentElement.lang=m;return}const s=(navigator.language||navigator.userLanguage).startsWith("ar")?"de":"en";n(s),document.documentElement.lang=s,localStorage.setItem("siteLang",s)},[]),d.useEffect(()=>{localStorage.setItem("siteLang",i),document.documentElement.lang=i},[i]),e.jsxs("div",{className:"app",children:[e.jsxs(z,{children:[e.jsx("title",{children:"أبو ذياب للبرمجيات | تطوير تطبيقات ويب وجوال، أنظمة مخصصة، وحلول ذكاء اصطناعي"}),e.jsx("meta",{name:"description",content:"شركة أبو ذياب للبرمجيات تقدم حلولاً برمجية متكاملة: تطوير تطبيقات الويب والجوال (أندرويد وiOS)، أنظمة إدارة الأعمال (ERP)، المتاجر الإلكترونية، وحلول الذكاء الاصطناعي. نُنفذ مشاريع مخصصة للأفراد والشركات في المملكة العربية السعودية ودول الخليج بجودة عالية، دعم فني مستمر، وتسليم في الوقت المحدد."}),e.jsx("meta",{name:"keywords",content:"تطوير برمجيات، تطوير تطبيقات، تطبيقات ويب، تطبيقات جوال، تطبيقات أندرويد، أنظمة ERP، حلول برمجية مخصصة، شركة برمجة في السعودية، abudiab، أبو ذياب، تطوير مواقع، برمجة تطبيقات جوال، تطوير أنظمة إدارة، ذكاء اصطناعي، تطوير متجر إلكتروني، تطوير تطبيقات للأعمال"}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("link",{rel:"canonical",href:"https://www.abudiab.com"}),e.jsx("meta",{property:"og:title",content:"أبو ذياب للبرمجيات | حلول برمجية مخصصة لمشاريعك"}),e.jsx("meta",{property:"og:description",content:"نطور تطبيقات ويب وجوال، أنظمة إدارة، وحلول ذكاء اصطناعي بجودة عالية. شريكك الرقمي الموثوق في السعودية والخليج."}),e.jsx("meta",{property:"og:image",content:"https://www.abudiab.com/img/diab.png"}),e.jsx("meta",{property:"og:url",content:"https://www.abudiab.com"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"أبو ذياب للبرمجيات"}),e.jsx("meta",{property:"og:locale",content:"ar_SA"}),e.jsx("meta",{property:"og:title:en",content:"Abudiab Software | Custom Web & Mobile App Development"}),e.jsx("meta",{property:"og:description:en",content:"Custom software, web & mobile apps, ERP systems, and AI solutions for businesses in Saudi Arabia and the Gulf."}),e.jsx("meta",{property:"og:image:en",content:"https://www.abudiab.com/img/diab.png"}),e.jsx("meta",{property:"og:url:en",content:"https://www.abudiab.com/"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:"أبو ذياب للبرمجيات | تطوير حلول برمجية مخصصة"}),e.jsx("meta",{name:"twitter:description",content:"نطور تطبيقات ويب وجوال، أنظمة إدارة، وحلول ذكاء اصطناعي. جودة، دعم فني، وابتكار لمشروعك القادم."}),e.jsx("meta",{name:"twitter:image",content:"https://www.abudiab.com/img/diab.png"}),e.jsx("meta",{name:"twitter:site",content:"@abudiab"}),e.jsx("meta",{name:"twitter:creator",content:"@abudiab"}),e.jsx("meta",{name:"twitter:title:en",content:"Abudiab Software | Custom Software Development"}),e.jsx("meta",{name:"twitter:description:en",content:"Expert in web & mobile apps, ERP, e-commerce, and AI solutions. Trusted by businesses in KSA."}),e.jsx("meta",{name:"twitter:image:en",content:"https://www.abudiab.com/img/diab.png"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"SoftwareCompany",name:"شركة أبو ذياب للبرمجيات",alternateName:"Abudiab Software Company",url:"https://www.abudiab.com",logo:"https://www.abudiab.com/img/diab.png",description:"نقدم حلولاً برمجية مخصصة: تطوير تطبيقات ويب وجوال، أنظمة إدارة، وحلول ذكاء اصطناعي للأفراد والشركات في المملكة العربية السعودية ودول الخليج.",address:{"@type":"PostalAddress",streetAddress:"اليمن , مدينة الضهار , اب",addressLocality:"اب",addressRegion:"اب",postalCode:"12345",addressCountry:"SA"},telephone:"+967775796741",email:"info@abudiab.com",openingHours:"Mo-Fr 09:00-18:00",areaServed:["SA","AE","QA","BH","KW"],serviceArea:{"@type":"Country",name:"المملكة العربية السعودية"},sameAs:["https://www.facebook.com/abudiab.sf","https://www.linkedin.com/company/abudiab.sf","https://twitter.com/abudiab.sf","https://www.tiktok.com/@abudiab.sf","https://www.instagram.com/abudiab.sf","https://api.whatsapp.com/send?phone=967711924474"],founder:"أبو ذياب",foundingDate:"2022",award:"جائزة أفضل شركة برمجيات ناشئة 2023"})}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:"الصفحة الرئيسية",description:"الصفحة الرسمية لشركة أبو ذياب للبرمجيات، تقدم خدمات تطوير التطبيقات والأنظمة المخصصة.",url:"https://www.abudiab.com",mainContentOfPage:{"@type":"WebPageElement",cssSelector:"#hero, #services, #Projects, #whyus,submit"},primaryImageOfPage:{"@type":"ImageObject",url:"https://www.abudiab.com/img/diab.png"}})}),e.jsx("meta",{charSet:"UTF-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"})]}),e.jsx(N,{lang:i,setLang:n}),e.jsx(W,{lang:i}),e.jsx(M,{lang:i,setLang:n}),e.jsx("main",{className:"container",children:e.jsx(T,{lang:i,setLang:n})}),e.jsx(L,{lang:i,setLang:n}),e.jsx(P,{lang:i,setLang:n}),e.jsx(C,{lang:i,setLang:n}),e.jsx(F,{lang:i,setLang:n}),e.jsx(S,{lang:i})]})}export{$ as default};
