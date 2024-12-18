function changeVideo(videoSrc) {
   const videoPlayer = document.getElementById("videoPlayer");
   videoPlayer.src = videoSrc; 
   videoPlayer.play(); 
}



const cardContent = {
   ai: [
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172528/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-01_wymtxj.png', title: 'Draft emails replies to customers', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172528/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-02_yo6tko.png', title: 'Summarize sales calls using OpenAI', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172528/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-03_doscn6.png', title: 'Talk to leads 24/7 with a custom sales chatbot', desc: 'Get started'  },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172528/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-05_fb8my5.png', title: 'Supercharge your support with an AI-powered FAQ', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172528/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-04_ymnvxx.png', title: 'Use AI to generate relevant content ideas', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726172527/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/AI%20Automation/template-thumb_ai-automation-06_zooowf.png', title: 'Turn Slack messages into a prioritized task list ', desc: 'Get started'  },
   ],
   lead: [
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130909/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-01_jm9jym.png', title: 'Capture leads from multiple sources', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130908/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-04_qi8rbc.png', title: 'Build your own simple CRM', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130907/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-05_tw1aaa.png', title: 'Collect newsletter signups that sync with your email platform', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130910/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-02_s8krt9.png', title: 'Automatically email your contacts with one table', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130908/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-03_atqlar.png', title: 'Collect and email your Facebook leads with one table', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130908/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/LEAD%20MANAGEMENT/template-thumb_lead-management-03_atqlar.png', title: 'Sync Mailchimp subscribers and HubSpot contacts ', desc: 'Get started' },
   ],
   sales: [
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-01_x64iq7.png', title: 'Send a simple drip campaign to prospects', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130879/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-03_mzfylb.png', title: 'Manage and centralize online customer order', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-05_od77sv.png', title: 'Answer FAQ quickly with an AI-powered bot', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-02_hwcye6.png', title: 'Build your own simple CRM', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130878/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-04_vyr4dw.png', title: 'Connect Service providers and customers in a simple marketplace', desc: 'Get started' },
       { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-06_bue1oz.png', title: 'Build your own AI chatbot experience for stakeholders', desc: 'Get started' },
   ],
   marketing: [
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2', title: 'Send a simple drip campaign to prospects', desc: 'Get started' },
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130879/Homepage%20%E2', title: 'Sales Team Monitoring', desc: 'Get started' },
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2', title: 'Sales Analytics', desc: 'Get started' },
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2', title: 'Sales Analytics', desc: 'Get started' },
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130878/Homepage%20%E2', title: 'Sales Analytics', desc: 'Get started' },
      { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2', title: 'Sales Analytics', desc: 'Get started' },
  ],
  sales: [
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-01_x64iq7.png', title: 'Send a simple drip campaign to prospects', desc: 'Get started' },
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130879/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-03_mzfylb.png', title: 'Sales Team Monitoring', desc: 'Get started' },
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-05_od77sv.png', title: 'Sales Analytics', desc: 'Get started' },
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130880/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-02_hwcye6.png', title: 'Sales Analytics', desc: 'Get started' },
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130878/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-04_vyr4dw.png', title: 'Sales Analytics', desc: 'Get started' },
   { img: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726130877/Homepage%20%E2%80%94%20Sept%202024/Templates%20thumbnails/SALES/template-thumb_sales-06_bue1oz.png', title: 'Sales Analytics', desc: 'Get started' },
  ],
};


function loadCards(category) {
   const container = document.querySelector('.sec7-card-temp');
   container.innerHTML = ''; 


   const isAI = category === 'ai';

   cardContent[category].forEach(card => {
       container.innerHTML += `
           <div class="sec-7-card">
               <img src="${card.img}" alt="${card.title}">
               ${isAI && card.logo ? `<img src="${card.logo}" alt="Logo" class="logo-img">` : ''}
               <h3>${card.title}</h3>
               <p>${card.desc}</p>
           </div>
       `;
   });
}

document.querySelectorAll('.v-btn2').forEach(button => {
   button.addEventListener('click', () => {
       document.querySelectorAll('.v-btn2').forEach(btn => btn.classList.remove('active'));
       button.classList.add('active');
       const category = button.getAttribute('data-category');
       loadCards(category);
   });
});

loadCards('ai');


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}