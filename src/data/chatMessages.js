export const chatSequence = [
  { text: 'Which service do you need today?', options: ['Plumbing', 'Electrician', 'AC Repair', 'Cleaning', 'Gardening'] },
  { text: 'Would you like a quote now or schedule a visit?', options: ['Get quote', 'Schedule visit', 'Talk to expert'] },
  { text: 'When do you need the service?', options: ['Today', 'This week', 'Next week'] },
  { text: 'What is most important to you?', options: ['Fast arrival', 'Best price', 'Trusted expert'] },
  { text: 'Are you looking for commercial or residential service?', options: ['Residential', 'Commercial'] }
];

const chatMessages = [
  {
    id: 1,
    sender: 'support',
    type: 'mcq',
    text: 'Hi there! Welcome to HomeArc. Which service do you need today?',
    options: ['Plumbing', 'Electrician', 'AC Repair', 'Cleaning', 'Gardening'],
  }
];

export default chatMessages;
