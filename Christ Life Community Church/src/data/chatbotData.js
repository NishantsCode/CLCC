// Chatbot data - All questions and answers for the church
export const churchInfo = {
  name: 'Grace Community Church',
  address: '409 2620 16th Street SW, Calgary, Alberta, Canada, T2T 4G2',
  phone: '+1 825 733 8785',
  phone2: '+1 (403) 667-7175',
  email: 'christlifecommunitychurchca@gmail.com',
  website: 'www.gracechurch.com',
  
  // Social media
  social: {
    facebook: 'https://facebook.com/gracechurch',
    instagram: 'https://instagram.com/gracechurch',
    youtube: 'https://youtube.com/gracechurch',
    twitter: 'https://twitter.com/gracechurch'
  },
  
  // Service times
  services: {
    sunday: '7:30 AM - 8:30 AM (MST) - Online Service',
    wednesday: '7:00 PM - 8:00 PM (MST) - Bible Study',
    saturday: 'Street Ministry at 17th Ave SW Calgary, Tomkins Park'
  },
  
  // Prayer times
  prayerTimes: {
    morning: 'Daily at 6:00 AM',
    evening: 'Daily at 6:00 PM',
    special: 'Wednesday 7:00 PM (Group Prayer)'
  },
  
  // Donation info
  donation: {
    online: 'Visit our website donation page',
    bank: 'Bank Transfer: Account #123456789',
    inPerson: 'During any service at the offering box',
    methods: ['Cash', 'Check', 'Online Transfer', 'Credit/Debit Card']
  }
};

// Quick action buttons that appear when chat opens
export const quickActions = [
  {
    id: 'location',
    text: 'Location & Address',
    category: 'info'
  },
  {
    id: 'timing',
    text: 'Service Times',
    category: 'info'
  },
  {
    id: 'prayer',
    text: 'Prayer Schedule',
    category: 'info'
  },
  {
    id: 'reach',
    text: 'Directions',
    category: 'info'
  },
  {
    id: 'connect',
    text: 'Contact Us',
    category: 'contact'
  },
  {
    id: 'contribute',
    text: 'Get Involved',
    category: 'help'
  },
  {
    id: 'donate',
    text: 'Give & Support',
    category: 'help'
  },
  {
    id: 'events',
    text: 'Upcoming Events',
    category: 'info'
  },
  {
    id: 'ministries',
    text: 'Our Ministries',
    category: 'info'
  },
  {
    id: 'help',
    text: 'How Can We Help?',
    category: 'help'
  },
  {
    id: 'prayerRequest',
    text: '🙏 Prayer Request',
    category: 'prayer'
  }
];

// Responses for each question
export const responses = {
  location: {
    text: `OUR LOCATION\n\n${churchInfo.address}\n\nWe're located in the heart of Calgary. You can find us easily using Google Maps.`,
    actions: [
      { text: 'Open in Maps', link: `https://maps.google.com/?q=${encodeURIComponent(churchInfo.address)}` },
      { text: 'Get Directions', link: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(churchInfo.address)}` }
    ]
  },
  
  timing: {
    text: `SERVICE TIMES\n\nSunday Worship:\n${churchInfo.services.sunday}\nTime zone: America/Edmonton\n\nWednesday Bible Study:\n${churchInfo.services.wednesday}\n\nSaturday Street Ministry:\n${churchInfo.services.saturday}\n\nEveryone is welcome! Come as you are.`,
    followUp: ['Prayer Schedule', 'Upcoming Events']
  },
  
  prayer: {
    text: `PRAYER SCHEDULE\n\nMorning Prayer:\n${churchInfo.prayerTimes.morning}\n\nEvening Prayer:\n${churchInfo.prayerTimes.evening}\n\nGroup Prayer:\n${churchInfo.prayerTimes.special}\n\nJoin us in prayer anytime! You can also submit prayer requests through our contact form.`,
    followUp: ['Contact Us']
  },
  
  reach: {
    text: `DIRECTIONS TO OUR CHURCH\n\nBy Car:\nFree parking available on-site\n\nBy Public Transit:\nBus routes 3, 7, and 12 stop nearby\n\nBy Walking:\nWalkable neighborhood with sidewalks\n\nAddress:\n${churchInfo.address}`,
    actions: [
      { text: 'Get Directions', link: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(churchInfo.address)}` }
    ]
  },
  
  connect: {
    text: `CONTACT INFORMATION\n\nPhone 1: ${churchInfo.phone}\nPhone 2: ${churchInfo.phone2}\nEmail: ${churchInfo.email}\nWebsite: ${churchInfo.website}\n\nConnect with us on social media!`,
    actions: [
      { text: 'Call: +1 825 733 8785', link: `tel:+18257338785` },
      { text: 'Call: +1 (403) 667-7175', link: `tel:+14036677175` },
      { text: 'Email Us', link: `mailto:${churchInfo.email}` },
      { text: 'Facebook', link: churchInfo.social.facebook },
      { text: 'Instagram', link: churchInfo.social.instagram },
      { text: 'YouTube', link: churchInfo.social.youtube }
    ],
    showQR: true
  },
  
  contribute: {
    text: `WAYS TO GET INVOLVED\n\nVolunteer Opportunities:\n• Worship team\n• Children's ministry\n• Hospitality team\n• Community outreach\n\nShare Your Talents:\n• Music & arts\n• Teaching & mentoring\n• Technical support\n• Event planning\n\nContact us to learn more about serving opportunities!`,
    followUp: ['Our Ministries', 'Contact Us']
  },
  
  donate: {
    text: `GIVING & SUPPORT\n\nOnline:\n${churchInfo.donation.online}\n\nBank Transfer:\n${churchInfo.donation.bank}\n\nIn Person:\n${churchInfo.donation.inPerson}\n\nAccepted Methods:\n${churchInfo.donation.methods.map(m => `• ${m}`).join('\n')}\n\nYour generosity helps us serve our community and spread God's love. Thank you!`,
    actions: [
      { text: 'Give Online', link: '/contact' }
    ]
  },
  
  events: {
    text: `UPCOMING EVENTS\n\nCheck out our Events page for the latest happenings at our church!\n\nWe regularly host:\n• Community gatherings\n• Youth activities\n• Bible study groups\n• Special worship services\n• Outreach programs`,
    actions: [
      { text: 'View All Events', link: '/events' }
    ]
  },
  
  ministries: {
    text: `OUR MINISTRIES\n\nYouth Ministry:\nActive programs for teens and young adults\n\nWorship Ministry:\nContemporary and traditional worship\n\nCommunity Outreach:\nServing our local community\n\nPrayer Ministry:\nIntercession and spiritual support\n\nChildren's Ministry:\nAge-appropriate programs for kids`,
    followUp: ['Get Involved']
  },
  
  help: {
    text: `HOW CAN WE HELP YOU?\n\nI can provide information about:\n\n• Church location and directions\n• Service and prayer times\n• Contact information\n• Upcoming events\n• Ministry information\n• Donation options\n• Ways to get involved\n• General questions about our church\n\nSelect a topic below or type your question.`,
    followUp: []
  },
  
  prayerRequest: {
    text: `PRAYER REQUEST\n\nWe believe in the power of prayer! Our prayer team is ready to lift up your needs before God.\n\nPlease share your prayer request below, and we'll pray for you.`,
    showPrayerForm: true
  },
  
  // Default response for unrecognized questions
  default: {
    text: `Thank you for reaching out! I can help you with:\n\n• Location & directions\n• Service times\n• Prayer schedule\n• Contact information\n• Events & ministries\n• Giving & volunteering\n\nPlease select a topic below, or contact us directly at:\n${churchInfo.phone} or ${churchInfo.phone2}`,
    followUp: []
  }
};

// Keywords for simple matching
export const keywords = {
  location: ['location', 'where', 'address', 'find', 'map'],
  timing: ['time', 'timing', 'service', 'when', 'schedule', 'hours'],
  prayer: ['prayer', 'pray', 'intercession'],
  reach: ['reach', 'get there', 'directions', 'how to get', 'transport', 'parking'],
  connect: ['contact', 'connect', 'phone', 'email', 'call', 'reach out'],
  contribute: ['contribute', 'volunteer', 'serve', 'help', 'join'],
  donate: ['donate', 'give', 'offering', 'tithe', 'contribution', 'support'],
  events: ['event', 'happening', 'activity', 'program', 'upcoming'],
  ministries: ['ministry', 'ministries', 'department', 'group'],
  help: ['help', 'what can you do', 'assist', 'support'],
  prayerRequest: ['prayer request', 'pray for me', 'need prayer', 'prayer need']
};
