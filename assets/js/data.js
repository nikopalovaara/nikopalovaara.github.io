const STATS = [
  { number: '€15M+',  label: 'Revenue generated across career',       context: 'Specialized in information technology. Spanning retail, telecom and B2B sales' },
  { number: '400+',   label: 'SME accounts managed simultaneously',   context: 'Elisa Oyj - Bookers Group, 2022-2023' },
  { number: '#1',     label: 'Best salesperson in Finland',           context: 'Gigantti Oy, Vantaa Tammisto' },
  { number: 'Top',    label: 'Customer satisfaction - SME portfolio', context: 'Highest rated among peer portfolios at Elisa' },
  { number: 'Global', label: 'Executive reach',                       context: 'Worked with C-level and senior decision-makers across Nordics, Germany, UK, Switzerland, Baltics, North America and more' },
  { number: '42',     label: 'Network - Hive Helsinki',               context: 'Ranked 3rd globally · Highly selective and competitive selection process' },
  { number: '3-5',    label: 'Teams led on construction projects',    context: 'Tehotytyt Rakennusapu - full P&L responsibility' },
  { number: '15+',    label: 'Years of customer-facing experience',   context: 'From frontline retail to enterprise account management' },
  { number: '3',      label: 'Languages spoken',                      context: 'Finnish · English · Swedish' },
];

const CASES = [
  {
    tag:    'Ownership',
    title:  'Client and prospect Account Management during sales team reconstruction',
    body:   'Responsible for company portfolio that normally would take 3-4 employees to handle. Generating sales including project management and consulting from planning to aftersales with SMB and some Enterprise companies over 1 year time period.',
    result: 'This taught me well to schedule my priorities instead of prioritizing my schedule.',
  },
  {
    tag:    'Ongoing',
    title:  'Building a startup as a founder around SaaS system from scratch',
    body:   'Translated an idea into a product and business by working with domain experts to find product-market fit, assembling the right team, and successfully communicating the vision to investors to raise initial funding.',
    result: 'From idea to funded product - with paying customers in the pipeline.',
  },
  {
    tag:    'Ongoing',
    title:  'Media Operator - HIFK Women\'s Futsal League',
    body:   'End-to-end live production for HIFK women\'s futsal matches. Responsible for live graphics and real-time operation, streaming setup, camera work and full broadcast pipeline - sole operator from pre-match setup to live air on Ruutu+ and MatsiTV.',
    result: 'Professional sports broadcast produced independently, season after season.',
  },
];

const TIMELINE = [
  {
    period:  '2024 - Present',
    org:     'Helsinki',
    logos: [
      { src: 'OIP-4203719633.jpg',            url: 'https://www.hifk.fi/',         alt: 'HIFK' },
      { src: 'Naisten_Futsal-liiga_logo.png', url: 'https://futsalliiga.fi/',      alt: 'Naisten Futsal Liiga' },
      { src: 'OIP-1603885728.jpg',            url: 'https://www.ruutu.fi/',        alt: 'Ruutu' },
    ],
    title:   'Media Operator',
    company: 'HIFK / Women\'s Futsal League',
    bullets: [
      'Live graphics design, setup and real-time operation for HIFK women\'s futsal matches in Naisten Futsal Liiga',
      'Full broadcast pipeline: camera operation, streaming encoding and live output to Ruutu',
      'Sole operator responsible for the complete production setup and delivery across the season',
    ],
  },
  {
    period:  '2024 - 2025',
    org:     'Helsinki',
    logos: [
      { src: 'hive-helsinki.jpg',  url: 'https://www.hive.fi/',       alt: 'Hive Helsinki' },
      { src: 'OIP-2472295720.jpg', url: 'https://www.42network.org/', alt: '42 Network'    },
    ],
    title:   'Student - Software Development',
    company: 'Hive Helsinki (42 Network)',
    bullets: [
      'Selected through a highly competitive admission process into one of the world\'s top-ranked peer-learning coding schools',
      'Project-based curriculum in C, Unix, algorithms, memory management and peer code review',
      'Developed problem-solving discipline and technical rigour working under pressure in a collaborative environment',
    ],
    highlight: '42 Network ranked 3rd globally among higher education institutions in computer science',
  },
  {
    period:  '2022 - 2023',
    org:     'Helsinki',
    logos: [
      { src: 'OIP-2433648136.jpg', url: 'https://elisa.fi/',   alt: 'Elisa Oyj'     },
      { src: 'OIP-3854307394.jpg', url: 'https://bookers.fi/', alt: 'Bookers Group' },
    ],
    title:   'Account Manager',
    company: 'Elisa Oyj / Bookers Group Oy',
    bullets: [
      'Managed a portfolio of ~400+ SME accounts with full ownership of each customer relationship',
      'Identified growth opportunities through data and business environment analysis, driving solution sales across operator and IT service packages',
      'Collaborated cross-functionally with delivery and technical teams to ensure service quality',
    ],
    highlight: 'Top-ranked customer satisfaction across SME portfolios at Elisa',
  },
  {
    period:  '2018 - 2021',
    org:     'Helsinki',
    logos: [
      { src: 'logo-139266180.png', url: 'https://www.veikonkone.fi/', alt: 'Veikon Kone' },
    ],
    title:   'Sales Associate',
    company: 'Kauppiasosuuskunta Veikon Kone',
    bullets: [
      'Responsible to CEO for day-to-day operations of the Helsinki store',
      'Consultative sales across a wide product range including complete solutions and services',
      'Actively monitored orders, campaign performance and inventory levels',
    ],
  },
  {
    period:  '2016 - 2018',
    org:     'Helsinki',
    logos: [
      { src: 'yit5891-4091325622.jpg', url: 'https://www.yitgroup.com/', alt: 'Tehotytyt Rakennusapu' },
    ],
    title:   'Site Supervisor',
    company: 'Tehotytyt Rakennusapu Ky',
    bullets: [
      'Led teams of 3-5 people on construction contracts, accountable for delivery and quality',
      'Handled full small-business operations: invoicing, procurement, resourcing, recruitment and on/offboarding',
      'Built the company\'s reputation as a reliable contractor in new project relationships',
    ],
    highlight: 'Built a new company\'s reputation as a trusted contractor from the ground up',
  },
  {
    period:  '2010 - 2016',
    org:     'Vantaa',
    logos: [
      { src: 'OIP-4012335240.jpg', url: 'https://www.gigantti.fi/', alt: 'Gigantti' },
    ],
    title:   'Sales Associate',
    company: 'Gigantti Oy - Vantaa Tammisto',
    bullets: [
      'Revenue-accountable sales and store operations across a large consumer electronics floor',
      'Ranked #1 salesperson in Finland within the Gigantti',
    ],
    highlight: 'Finland\'s best-performing salesperson - Gigantti',
  },
];

const SKILLS = {
  groups: [
    {
      category: 'Sales & Revenue',
      proof:    'Elisa · Gigantti · Veikon Kone · €15M+ career revenue',
      skills:   ['B2B & SME solution sales', 'Account management', 'Pipeline management', 'Consultative selling', 'Contract negotiation', 'Upsell & cross-sell', 'New business development', 'Sales forecasting'],
    },
    {
      category: 'Customer & Relationships',
      proof:    'Top-rated SME portfolio at Elisa · 400+ accounts managed',
      skills:   ['Client relationship management', 'RFP/RFQ responses, SOWs, and contract documentation', 'Stakeholder management', 'Executive presentations', 'Retention & churn reduction', 'NPS management'],
    },
    {
      category: 'Leadership & Operations',
      proof:    'Startup founder · Site supervisor · Full P&L responsibility',
      skills:   ['Team leadership', 'Project coordination', 'Recruitment & on/offboarding', 'Budget & P&L management', 'Invoicing & procurement', 'Cross-functional collaboration', 'Market & competitor analysis'],
    },
    {
      category: 'CRM & Business Tools',
      proof:    'Elisa · Veikon Kone · Gigantti · Google Certified',
      skills:   ['Salesforce CRM', 'Google Workspace', 'MS Office Suite', 'VoIP systems', 'Windows AD & Server', 'macOS · iOS · Android'],
    },
    {
      category: 'Technical & Development',
      proof:    'Hive Helsinki (42 Network) · Personal projects · GitHub',
      skills:   ['C programming', 'Unix / Bash', 'SQL', 'Git & version control', 'Algorithms & data structures', 'Memory management', 'React', 'Node.js', 'Python'],
    },
  ],
};

const LANGUAGES = [
  { name: 'Finnish', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Swedish', level: 'Conversational' },
];

const REFERRALS = [
  { role: 'Team Lead',     name: 'Elisa Oyj / Bookers Group',      company: 'Account management & B2B sales, 2022-2023' },
  { role: 'CEO',           name: 'Kauppiasosuuskunta Veikon Kone', company: 'Retail sales & store operations, 2018-2021' },
  { role: 'Partner',       name: 'Tehotytyt Rakennusapu Ky',       company: 'Site supervision & small business ops, 2016-2018' },
  { role: 'Store Manager', name: 'Gigantti Oy - Vantaa Tammisto',  company: 'Consumer electronics sales, 2010-2016' },
];
