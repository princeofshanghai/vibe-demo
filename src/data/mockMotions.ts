import { Motion, ProductChange } from '../types/motion';

// Mock product changes representing various types of updates
const mockProductChanges: ProductChange[] = [
  {
    id: 'pc-1',
    productId: 'p-1',
    productName: 'Premium Career',
    changeType: 'description',
    beforeValue: 'Advanced career tools for professionals',
    afterValue: 'Advanced career tools and insights for ambitious professionals',
    timestamp: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: 'pc-2',
    productId: 'p-1',
    productName: 'Premium Career',
    changeType: 'pricing',
    beforeValue: '$39.99/month',
    afterValue: '$49.99/month',
    timestamp: new Date('2024-01-15T10:35:00Z')
  },
  {
    id: 'pc-3',
    productId: 'p-2',
    productName: 'Sales Navigator Core',
    changeType: 'features',
    beforeValue: 'Basic lead recommendations, InMail credits (20)',
    afterValue: 'Enhanced lead recommendations, InMail credits (30), Advanced search filters',
    timestamp: new Date('2024-01-20T14:15:00Z')
  },
  {
    id: 'pc-4',
    productId: 'p-3',
    productName: 'Recruiter Lite',
    changeType: 'name',
    beforeValue: 'Recruiter Lite',
    afterValue: 'Talent Solutions Starter',
    timestamp: new Date('2024-01-25T09:45:00Z')
  },
  {
    id: 'pc-5',
    productId: 'p-4',
    productName: 'Premium Business',
    changeType: 'description',
    beforeValue: 'Business networking and insights',
    afterValue: 'Comprehensive business networking, market insights, and lead generation tools',
    timestamp: new Date('2024-02-01T11:20:00Z')
  }
];

export const mockMotions: Motion[] = [
  {
    id: 'm-1',
    name: 'Q1 Premium Product Refresh',
    status: 'In Production',
    activationDate: new Date('2024-02-01T00:00:00Z'),
    createdDate: new Date('2024-01-10T09:00:00Z'),
    lastModified: new Date('2024-02-01T15:30:00Z'),
    productChanges: [mockProductChanges[0], mockProductChanges[1]],
    submittedBy: 'sarah.chen@linkedin.com',
    approvedBy: 'mike.rodriguez@linkedin.com'
  },
  {
    id: 'm-2', 
    name: 'Sales Navigator Enhancement Release',
    status: 'Pushing to Production',
    activationDate: new Date('2024-02-15T00:00:00Z'),
    createdDate: new Date('2024-01-18T14:20:00Z'),
    lastModified: new Date('2024-02-10T16:45:00Z'),
    productChanges: [mockProductChanges[2]],
    submittedBy: 'alex.kumar@linkedin.com',
    approvedBy: 'jennifer.wong@linkedin.com'
  },
  {
    id: 'm-3',
    name: 'Talent Solutions Rebrand',
    status: 'Approvals',
    activationDate: new Date('2024-03-01T00:00:00Z'),
    createdDate: new Date('2024-01-22T11:15:00Z'),
    lastModified: new Date('2024-02-08T13:20:00Z'),
    productChanges: [mockProductChanges[3]],
    submittedBy: 'rachel.kim@linkedin.com'
  },
  {
    id: 'm-4',
    name: 'Business Premium Feature Update',
    status: 'Pushing to EI',
    activationDate: new Date('2024-03-15T00:00:00Z'),
    createdDate: new Date('2024-01-28T08:30:00Z'),
    lastModified: new Date('2024-02-12T10:15:00Z'),
    productChanges: [mockProductChanges[4]],
    submittedBy: 'david.park@linkedin.com'
  },
  {
    id: 'm-5',
    name: 'Learning Platform Integration',
    status: 'Submitted',
    activationDate: new Date('2024-04-01T00:00:00Z'),
    createdDate: new Date('2024-02-05T16:00:00Z'),
    lastModified: new Date('2024-02-14T09:45:00Z'),
    productChanges: [],
    submittedBy: 'emily.zhang@linkedin.com'
  },
  {
    id: 'm-6',
    name: 'Mobile App Performance Improvements',
    status: 'Draft',
    activationDate: new Date('2024-04-15T00:00:00Z'),
    createdDate: new Date('2024-02-12T12:30:00Z'),
    lastModified: new Date('2024-02-14T14:20:00Z'),
    productChanges: []
  }
];

export default mockMotions;