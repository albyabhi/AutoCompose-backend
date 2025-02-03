module.exports = [
    {
      standardness: 5,
      subject: `Leave Notice from {{name}}`,
      body: `
        [Subject: Formal Leave Request]
  
        Dear HR,
  
        I am reaching out to request leave because {{details}}. The requested leave period begins on {{startDate}} and ends on {{endDate}}.
  
        I have ensured that my responsibilities are managed and my tasks are up-to-date. Please let me know if you need further details.
  
        Thank you for your time and consideration.
  
        Sincerely,  
        {{name}}
      `,
      placeholders: ['name', 'details', 'startDate', 'endDate'],
    },
    {
      standardness: 4,
      subject: `Leave Request by {{name}}`,
      body: `
        Dear HR Team,
  
        I am reaching out to request leave because {{details}}. The leave is planned from {{startDate}} to {{endDate}}.
  
        I will ensure that all pending tasks are handled appropriately. Please let me know if you need any more information.
  
        Thank you for your support.
  
        Best regards,  
        {{name}}
      `,
      placeholders: ['name', 'details', 'startDate', 'endDate'],
    },
    {
      standardness: 3,
      subject: `Leave Request from {{name}}`,
      body: `
        Hi Team,
  
        I am reaching out to request leave because {{details}}. The leave is scheduled from {{startDate}} to {{endDate}}.
  
        Please let me know if you have concerns or need more information regarding my absence.
  
        Thanks and regards,  
        {{name}}
      `,
      placeholders: ['name', 'details', 'startDate', 'endDate'],
    },
    {
      standardness: 2,
      subject: `Leave Application by {{name}}`,
      body: `
        Hello Team,
  
        I need to take leave because of {{details}}. The leave dates I’m requesting are from {{startDate}} to {{endDate}}.
  
        Please let me know if you need anything from me before I leave.
  
        Thank you.
  
        Best,  
        {{name}}
      `,
      placeholders: ['name', 'details', 'startDate', 'endDate'],
    },
    {
      standardness: 1,
      subject: `Leave Notice from {{name}}`,
      body: `
        Hi,
  
        I’m taking leave because {{details}}. The dates are from {{startDate}} to {{endDate}}.
  
        Let me know if there’s anything you need before I go.
  
        Thanks,  
        {{name}}
      `,
      placeholders: ['name', 'details', 'startDate', 'endDate'],
    },
  ];
  