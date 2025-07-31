import { Motion, MotionStatus } from '../types/motion';

/**
 * Get the next status in the motion workflow
 */
export const getNextStatus = (currentStatus: MotionStatus): MotionStatus | null => {
  const statusFlow: MotionStatus[] = [
    'Draft',
    'Submitted',
    'Pushing to EI',
    'Approvals', 
    'Pushing to Production',
    'In Production'
  ];
  
  const currentIndex = statusFlow.indexOf(currentStatus);
  if (currentIndex === -1 || currentIndex === statusFlow.length - 1) {
    return null;
  }
  
  return statusFlow[currentIndex + 1];
};

/**
 * Get the previous status in the motion workflow
 */
export const getPreviousStatus = (currentStatus: MotionStatus): MotionStatus | null => {
  const statusFlow: MotionStatus[] = [
    'Draft',
    'Submitted', 
    'Pushing to EI',
    'Approvals',
    'Pushing to Production',
    'In Production'
  ];
  
  const currentIndex = statusFlow.indexOf(currentStatus);
  if (currentIndex <= 0) {
    return null;
  }
  
  return statusFlow[currentIndex - 1];
};

/**
 * Check if a motion can be edited (only Draft status allows editing)
 */
export const canEditMotion = (status: MotionStatus): boolean => {
  return status === 'Draft';
};

/**
 * Check if a motion can be submitted (only Draft status can be submitted)
 */
export const canSubmitMotion = (motion: Motion): boolean => {
  return motion.status === 'Draft' && motion.productChanges.length > 0;
};

/**
 * Check if a motion status can be progressed to the next stage
 */
export const canProgressStatus = (currentStatus: MotionStatus): boolean => {
  return getNextStatus(currentStatus) !== null;
};

/**
 * Get status color for badge display
 */
export const getStatusColor = (status: MotionStatus): string => {
  const colorMap: Record<MotionStatus, string> = {
    'Draft': 'default',
    'Submitted': 'blue',
    'Pushing to EI': 'orange',
    'Approvals': 'purple',
    'Pushing to Production': 'gold',
    'In Production': 'green'
  };
  
  return colorMap[status] || 'default';
};

/**
 * Generate a unique ID for new motions
 */
export const generateMotionId = (): string => {
  return `m-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate a unique ID for new product changes
 */
export const generateProductChangeId = (): string => {
  return `pc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Validate motion data before saving
 */
export const validateMotion = (motion: Partial<Motion>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!motion.name || motion.name.trim().length === 0) {
    errors.push('Motion name is required');
  }
  
  if (!motion.activationDate) {
    errors.push('Activation date is required');
  } else if (motion.activationDate < new Date()) {
    errors.push('Activation date must be in the future');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Format motion status for display
 */
export const formatStatusForDisplay = (status: MotionStatus): string => {
  return status;
};

/**
 * Sort motions by creation date (newest first)
 */
export const sortMotionsByDate = (motions: Motion[]): Motion[] => {
  return [...motions].sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
};

/**
 * Filter motions by status
 */
export const filterMotionsByStatus = (motions: Motion[], status: MotionStatus): Motion[] => {
  return motions.filter(motion => motion.status === status);
};

/**
 * Get motions that are currently active (not in Draft or In Production)
 */
export const getActiveMotions = (motions: Motion[]): Motion[] => {
  return motions.filter(motion => 
    motion.status !== 'Draft' && motion.status !== 'In Production'
  );
};