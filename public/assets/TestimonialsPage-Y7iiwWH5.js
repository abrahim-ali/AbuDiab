import{r as s,j as e}from"./index-CZ_A9zr0.js";const w=({lang:h,setLang:u})=>{s.useEffect(()=>{const t=localStorage.getItem("siteLang");if(t&&["de","en"].includes(t))u(t);else{const a=navigator.language.startsWith("de")?"de":"en";u(a)}},[]);const n={de:{title:"آراء عملائنا",subtitle:"لقد واصلنا ابداعنا مع مجموعة من أهم رواد الأعمال فى شتى المجالات",testimonials:[{name:"أحمد السعيد",role:"مدير شركة تقنية",company:"تيك سولوشنز",content:"الخدمة كانت ممتازة! تم تسليم المشروع في الوقت المحدد وبجودة عالية. فريق العمل محترف جدًا وسريع الاستجابة."},{name:"نورة العلي",role:"رائدة أعمال",company:"متجر نورا",content:"صمموا لي متجرًا إلكترونيًا جميلًا وسهل الاستخدام. منذ الإطلاق، زادت مبيعاتي بنسبة 150%. لا أستطيع أن أشكرهم بما يكفي!"},{name:"خالد المحمود",role:"مدير تسويق",company:"إنتربرايز ميديا",content:"حملة التسويق الرقمي التي أعدوها لنا كانت مذهلة. حققنا وضوحًا كبيرًا في السوق وزيادة ملحوظة في التفاعل."},{name:"سارة عبد الله",role:"مؤسسة مشروع تعليمي",company:"أكاديمية المستقبل",content:"الدعم الفني المقدم كان استثنائيًا. كل طلب صيانة يتم الرد عليه خلال ساعة. أشعر أن لدي فريق دعم خاص بي!"},{name:"فيصل الهاشمي",role:"مطور مستقل",company:"فري لانسر",content:"التعاون معهم كان تجربة تعليمية واحترافية في آنٍ واحد. التفاصيل الدقيقة في التصميم والكود كانت مبهرة."},{name:"لمى الحمادي",role:"مديرة مشاريع",company:"إنوفا ديزاين",content:"الهوية البصرية التي صمموها لشركتنا غيرت طريقة نظر الناس إلينا. التصميم أنيق، احترافي، ويُعبّر تمامًا عن قيم علامتنا."}]},en:{title:"What Our Clients Say",subtitle:"We’ve partnered with leading entrepreneurs across various industries.",testimonials:[{name:"Ahmed Al-Saeed",role:"Tech Company Manager",company:"Tech Solutions",content:"The service was excellent! The project was delivered on time and with high quality. The team is very professional and responsive."},{name:"Noura Al-Ali",role:"Entrepreneur",company:"Noura Store",content:"They designed a beautiful and user-friendly e-commerce store for me. Since launch, my sales have increased by 150%. I can’t thank them enough!"},{name:"Khalid Al-Mahmoud",role:"Marketing Director",company:"Enterprise Media",content:"The digital marketing campaign they prepared for us was amazing. We gained significant market visibility and noticeable engagement growth."},{name:"Sara Abdullah",role:"Founder of an Educational Project",company:"Future Academy",content:"The technical support provided was exceptional. Every maintenance request is responded to within an hour. I feel like I have a dedicated support team!"},{name:"Faisal Al-Hashemi",role:"Freelance Developer",company:"Freelancer",content:"Collaborating with them was both educational and professional. The attention to detail in design and code was impressive."},{name:"Lama Al-Hamadi",role:"Project Manager",company:"Inova Design",content:"The visual identity they created for our company changed how people perceive us. The design is elegant, professional, and perfectly reflects our brand values."}]}}[h],r=h==="de",f=t=>[...Array(5)].map((a,o)=>e.jsx("span",{className:`star ${o<t?"filled":""}`,children:"★"},o)),[c,i]=s.useState(0),[l,g]=s.useState(!0),m=s.useRef(null),d=s.useRef(null),p=()=>{d.current&&clearInterval(d.current),g(!1),d.current=setTimeout(()=>{g(!0)},3e3)},x=()=>{i(t=>(t+1)%n.testimonials.length),p()},b=()=>{i(t=>(t-1+n.testimonials.length)%n.testimonials.length),p()};return s.useEffect(()=>{if(m.current&&!l){const o=-(c*382);m.current.style.transform=`translateX(${r?-o:o}px)`}},[c,r]),s.useEffect(()=>{if(!l)return;const t=setInterval(()=>{i(a=>(a+1)%n.testimonials.length)},5e3);return()=>clearInterval(t)},[l,n.testimonials.length]),e.jsxs("div",{className:`testimonials-page ${r?"rtl":"ltr"}`,dir:r?"rtl":"ltr",children:[e.jsxs("header",{className:"testimonials-header",children:[e.jsx("h1",{children:n.title}),e.jsx("p",{children:n.subtitle})]}),e.jsxs("div",{className:"testimonials-carousel-wrapper",children:[e.jsx("div",{ref:m,className:`testimonials-carousel ${l?r?"rtl":"ltr":""}`,style:{transition:"transform 0.5s ease-in-out"},children:[...n.testimonials,...n.testimonials].map((t,a)=>e.jsxs("div",{className:"testimonial-card",children:[e.jsx("div",{className:"testimonial-rating",children:f(5)}),e.jsxs("blockquote",{className:"testimonial-content",children:['"',t.content,'"']}),e.jsxs("div",{className:"testimonial-author",children:[e.jsx("img",{src:`https://i.pravatar.cc/150?img=${a%6+1}`,alt:t.name,className:"author-avatar"}),e.jsxs("div",{className:"author-info",children:[e.jsx("strong",{children:t.name}),e.jsxs("span",{children:[t.role," ",r?"في":"at"," ",t.company]})]})]})]},a))}),e.jsxs("div",{className:"carousel-nav",children:[e.jsx("button",{onClick:b,className:`nav-btn prev ${r?"right-arrow":"left-arrow"}`,"aria-label":"Previous",children:r?"→":"←"}),e.jsx("button",{onClick:x,className:`nav-btn next ${r?"left-arrow":"right-arrow"}`,"aria-label":"Next",children:r?"←":"→"})]}),e.jsx("div",{className:"carousel-dots",children:n.testimonials.map((t,a)=>e.jsx("button",{onClick:()=>{i(a),p()},className:`dot ${a===c?"active":""}`,"aria-label":`Go to slide ${a+1}`},a))})]}),e.jsx("style",{jsx:!0,children:`
        .testimonials-page {
          padding: 2rem 2rem;
          background: #f9fafb;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .testimonials-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #003277ff;
          margin-bottom: 1rem;
        }

        .testimonials-header p {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonials-carousel-wrapper {
          overflow: hidden;
          position: relative;
          padding: 2rem 0;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .testimonials-carousel {
          display: flex;
          gap: 2rem;
          padding: 1rem 0;
          width: fit-content;
        }

        /* Auto-scroll animations */
        .testimonials-carousel.ltr {
          animation: scroll-ltr 35s linear infinite;
        }

        .testimonials-carousel.rtl {
          flex-direction: row-reverse;
          animation: scroll-rtl 35s linear infinite;
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem * ${n.testimonials.length/2}));
          }
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(50% + 1rem * ${n.testimonials.length/2}));
          }
        }

        /* Pause on hover */
        .testimonials-carousel:hover {
          animation-play-state: paused;
        }

        .testimonial-card {
          flex: 0 0 350px;
          background: white;
          border-radius: 16px;
          padding: 2rem;
          border-top: 4px solid #1e3a8a; /* حد أزرق علوي */
          border-bottom: 4px solid #1e3a8a ;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          opacity: 0.95;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          opacity: 1;
        }

        .testimonial-rating {
          color: #fbbf24;
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          letter-spacing: 2px;
        }

        .testimonial-content {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #374151;
          margin: 0 0 1.5rem 0;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e5e7eb;
        }

        .author-info strong {
          display: block;
          font-weight: 600;
          color: #111827;
        }

        .author-info span {
          font-size: 0.9rem;
          color: #6b7280;
        }

        /* Stars styling */
        .star {
          color: #e5e7eb;
        }
        .star.filled {
          color: #fbbf24;
        }

        /* Navigation Buttons */
        .carousel-nav {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          z-index: 10;
        }

        .nav-btn {
          pointer-events: auto;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #374151;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .nav-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        /* Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #fbbf24;
          transform: scale(1.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .testimonials-carousel {
            gap: 1.25rem;
          }
          .testimonial-card {
            flex: 0 0 280px;
            padding: 1.5rem;
          }
          .testimonials-header h1 {
            font-size: 2rem;
          }
          .nav-btn {
            width: 36px;
            height: 36px;
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .testimonial-card {
            flex: 0 0 100%;
            max-width: 250px;
          }
          .testimonials-carousel {
            gap: 1rem;
          }
          .carousel-dots {
            gap: 6px;
          }
          .dot {
            width: 8px;
            height: 8px;
          }
        }
      `})]})};export{w as T};
