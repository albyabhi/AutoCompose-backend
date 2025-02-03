module.exports = [
    {
      standardness: 5,
      subject: `APPLICATION FOR THE POSITION OF {{position}}`,
      body: `
        Dear {{hrname}},
  
        I am writing to apply for the {{position}} position advertised recently. I believe my skills and experience make me a strong candidate for this role.
  
        Please find attached my CV and other relevant documents. I am excited about the opportunity to contribute to your team and would appreciate the chance to discuss my qualifications further.
  
        Thank you for considering my application. I look forward to hearing from you.
  
        Kind regards,  
        {{name}}  
        {{number}}  
        {{email}}  
        {{link}}
      `,
      placeholders: ['position', 'hrname', 'name', 'number', 'email', 'link'],
    },
    {
      standardness: 4,
      subject: `APPLICATION FOR THE POSITION OF {{position}}`,
      body: `
        Dear {{hrname}},
  
        I am writing to express my interest in the {{position}} role. I believe that my experience and skills make me a suitable candidate for this opportunity.
  
        Please find my CV and other supporting documents attached for your review. I look forward to the possibility of discussing my application in more detail.
  
        Thank you for your time and consideration.
  
        Best regards,  
        {{name}}  
        {{number}}  
        {{email}}  
        {{link}}
      `,
      placeholders: ['position', 'hrname', 'name', 'number', 'email', 'link'],
    },
    {
      standardness: 3,
      subject: `APPLICATION FOR THE POSITION OF {{position}}`,
      body: `
        Hi {{hrname}},
  
        I’m interested in the {{position}} role at your company. Based on my skills and qualifications, I believe I would be a good fit for this position.
  
        I’ve attached my CV and look forward to hearing more about the next steps. Let me know if you need any further information.
  
        Thanks for considering my application.
  
        Regards,  
        {{name}}  
        {{number}}  
        {{email}}  
        {{link}}
      `,
      placeholders: ['position', 'hrname', 'name', 'number', 'email', 'link'],
    },
    {
      standardness: 2,
      subject: `APPLICATION FOR THE POSITION OF {{position}}`,
      body: `
        Hello {{hrname}},
  
        I’m writing to apply for the {{position}} role. I think my background makes me a good fit, and I’d love the opportunity to chat more.
  
        Attached are my CV and contact details. Feel free to reach out with any questions.
  
        Best,  
        {{name}}  
        {{number}}  
        {{email}}  
        {{link}}
      `,
      placeholders: ['position', 'hrname', 'name', 'number', 'email', 'link'],
    },
    {
      standardness: 1,
      subject: `APPLICATION FOR THE POSITION OF {{position}}`,
      body: `
        Hi {{hrname}},
  
        I’m interested in the {{position}} role. Please find my CV attached.
  
        Let me know if you need anything else.
  
        Thanks,  
        {{name}}  
        {{number}}  
        {{email}}  
        {{link}}
      `,
      placeholders: ['position', 'hrname', 'name', 'number', 'email', 'link'],
    },
  ];
  