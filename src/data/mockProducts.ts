import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 'p-1',
    key: '1',
    name: 'Premium Career',
    description: 'Advanced career tools and insights for ambitious professionals seeking to accelerate their career growth',
    status: 'active',
    category: 'Career Development',
    pricing: {
      tier: 'Premium',
      price: 49.99,
      currency: 'USD'
    },
    features: [
      'Advanced search filters',
      'InMail messaging (5 per month)',
      'See who viewed your profile',
      'Salary insights',
      'LinkedIn Learning courses',
      'Job applicant insights'
    ],
    lastModified: new Date('2024-01-15T10:35:00Z')
  },
  {
    id: 'p-2',
    key: '2', 
    name: 'Sales Navigator Core',
    description: 'Essential sales prospecting and lead generation tools for sales professionals',
    status: 'active',
    category: 'Sales Tools',
    pricing: {
      tier: 'Professional',
      price: 79.99,
      currency: 'USD'
    },
    features: [
      'Enhanced lead recommendations',
      'InMail credits (30 per month)',
      'Advanced search filters',
      'Lead and account tracking',
      'CRM integrations',
      'Real-time insights'
    ],
    lastModified: new Date('2024-01-20T14:15:00Z')
  },
  {
    id: 'p-3',
    key: '3',
    name: 'Talent Solutions Starter',
    description: 'Comprehensive recruiting platform for talent acquisition teams and hiring managers',
    status: 'active',
    category: 'Recruiting',
    pricing: {
      tier: 'Enterprise',
      price: 199.99,
      currency: 'USD'
    },
    features: [
      'Advanced candidate search',
      'InMail messaging (100 per month)',
      'Talent pipeline management',
      'Hiring analytics',
      'Team collaboration tools',
      'ATS integrations'
    ],
    lastModified: new Date('2024-01-25T09:45:00Z')
  },
  {
    id: 'p-4',
    key: '4',
    name: 'Premium Business',
    description: 'Comprehensive business networking, market insights, and lead generation tools for business development',
    status: 'active',
    category: 'Business Development',
    pricing: {
      tier: 'Business',
      price: 149.99,
      currency: 'USD'
    },
    features: [
      'Advanced company insights',
      'Industry trend analysis',
      'Competitive intelligence',
      'Lead generation tools',
      'Business InMail (15 per month)',
      'Company page analytics'
    ],
    lastModified: new Date('2024-02-01T11:20:00Z')
  },
  {
    id: 'p-5',
    key: '5',
    name: 'Learning Hub Enterprise',
    description: 'Corporate learning and development platform with extensive course library and analytics',
    status: 'active',
    category: 'Learning & Development',
    pricing: {
      tier: 'Enterprise',
      price: 299.99,
      currency: 'USD'
    },
    features: [
      'Unlimited access to LinkedIn Learning',
      'Custom learning paths',
      'Skills assessments',
      'Learning analytics dashboard',
      'Team progress tracking',
      'Custom content upload'
    ],
    lastModified: new Date('2024-01-30T16:00:00Z')
  },
  {
    id: 'p-6',
    key: '6',
    name: 'Campaign Manager Pro',
    description: 'Advanced advertising platform for creating and managing LinkedIn marketing campaigns',
    status: 'active',
    category: 'Marketing',
    pricing: {
      tier: 'Professional',
      price: 99.99,
      currency: 'USD'
    },
    features: [
      'Campaign creation and management',
      'Advanced audience targeting',
      'A/B testing capabilities',
      'Performance analytics',
      'Lead generation forms',
      'Conversion tracking'
    ],
    lastModified: new Date('2024-02-05T14:30:00Z')
  }
];

export default mockProducts;