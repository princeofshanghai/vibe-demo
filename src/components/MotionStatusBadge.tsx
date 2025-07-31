import React from 'react';
import { Tag } from 'antd';
import { MotionStatus } from '../types/motion';
import { getStatusColor } from '../utils/motionHelpers';

interface MotionStatusBadgeProps {
  status: MotionStatus;
  size?: 'small' | 'default';
}

const MotionStatusBadge: React.FC<MotionStatusBadgeProps> = ({ 
  status, 
  size = 'default' 
}) => {
  const getStatusIcon = (status: MotionStatus): string => {
    switch (status) {
      case 'Draft':
        return '📝';
      case 'Submitted':
        return '📤';
      case 'Pushing to EI':
        return '🔄';
      case 'Approvals':
        return '👥';
      case 'Pushing to Production':
        return '🚀';
      case 'In Production':
        return '✅';
      default:
        return '';
    }
  };

  const getStatusDescription = (status: MotionStatus): string => {
    switch (status) {
      case 'Draft':
        return 'Motion is being prepared';
      case 'Submitted':
        return 'Motion has been submitted for review';
      case 'Pushing to EI':
        return 'Changes are being pushed to Engineering Infrastructure';
      case 'Approvals':
        return 'Motion is pending final approvals';
      case 'Pushing to Production':
        return 'Changes are being deployed to production';
      case 'In Production':
        return 'Motion is live in production';
      default:
        return '';
    }
  };

  return (
    <Tag 
      color={getStatusColor(status)} 
      style={{ 
        textTransform: 'capitalize',
        fontSize: size === 'small' ? '12px' : '14px',
        padding: size === 'small' ? '2px 6px' : '4px 8px',
        borderRadius: '6px',
        fontWeight: 500,
        cursor: 'help'
      }}
      title={getStatusDescription(status)}
    >
      <span style={{ marginRight: '4px' }}>{getStatusIcon(status)}</span>
      {status}
    </Tag>
  );
};

export default MotionStatusBadge;