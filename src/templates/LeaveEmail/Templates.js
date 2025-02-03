// templates/LeaveEmail/Templates.js
module.exports = [
  {
    standardness: 5,
    subject: 'Formal Leave Request by {{name}}',
    body: `
      [Subject: Formal Leave Request]

      Dear HR,

      I am writing to formally request leave from work due to {{leaveReason}}. 
      The leave period I am requesting begins on {{startDate}} and ends on {{endDate}}. 

      This request is necessary due to {{details}}, and I have ensured that all my tasks are up to date to prevent any disruption. 
      Should you require further details or have any concerns, please do not hesitate to reach out to me.

      I understand the importance of my responsibilities, and I assure you that I will resume work promptly upon my return.

      Thank you for considering my request. I look forward to your approval.

      Sincerely,  
      {{name}}
    `,
    placeholders: ['name', 'leaveReason', 'startDate', 'endDate', 'details'],
  },
  {
    standardness: 4,
    subject: 'Leave Request by {{name}}',
    body: `
      Dear HR Team,

      I hope this message finds you well. I am writing to request leave from work due to {{leaveReason}}. 
      The requested leave period is from {{startDate}} to {{endDate}}.

      I will ensure that any pending tasks are completed or delegated appropriately before my absence. 
      If further details are needed, feel free to contact me.

      Thank you for your understanding and support. I look forward to your approval.

      Best regards,  
      {{name}}
    `,
    placeholders: ['name', 'leaveReason', 'startDate', 'endDate', 'details'],
  },
  {
    standardness: 3,
    subject: 'Leave Request from {{name}}',
    body: `
      Hi Team,

      I am reaching out to request leave from work due to {{leaveReason}}. 
      The leave is planned from {{startDate}} to {{endDate}}.

      Please let me know if you need any further information or have concerns regarding my absence. I will ensure to manage my responsibilities ahead of time.

      Looking forward to your approval.

      Thanks and regards,  
      {{name}}
    `,
    placeholders: ['name', 'leaveReason', 'startDate', 'endDate', 'details'],
  },
  {
    standardness: 2,
    subject: 'Leave Application by {{name}}',
    body: `
      Hello Team,

      I need to take leave due to {{leaveReason}}. The dates I’m requesting are from {{startDate}} to {{endDate}}.

      I will make sure that my work is in order before I leave. Let me know if there’s anything you need from me beforehand.

      Thank you for your understanding.

      Best,  
      {{name}}
    `,
    placeholders: ['name', 'leaveReason', 'startDate', 'endDate'],
  },
  {
    standardness: 1,
    subject: 'Leave Notice from {{name}}',
    body: `
      Hi,

      I’m taking leave because of {{leaveReason}}. The dates are from {{startDate}} to {{endDate}}.

      Let me know if you need anything before I go.

      Thanks,  
      {{name}}
    `,
    placeholders: ['name', 'leaveReason', 'startDate', 'endDate'],
  },
];
