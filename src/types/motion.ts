export type MotionStatus = 
  | 'Draft'
  | 'Submitted' 
  | 'Pushing to EI'
  | 'Approvals'
  | 'Pushing to Production'
  | 'In Production';

export interface ProductChange {
  id: string;
  productId: string;
  productName: string;
  changeType: 'name' | 'description' | 'pricing' | 'features';
  beforeValue: string;
  afterValue: string;
  timestamp: Date;
}

export interface Motion {
  id: string;
  name: string;
  status: MotionStatus;
  activationDate: Date;
  createdDate: Date;
  lastModified: Date;
  productChanges: ProductChange[];
  submittedBy?: string;
  approvedBy?: string;
}