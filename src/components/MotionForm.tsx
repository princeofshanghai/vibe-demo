import React from 'react';
import { Form, Input, DatePicker, Button, Space } from 'antd';
import dayjs from 'dayjs';
import { Motion } from '../types/motion';
import { validateMotion, generateMotionId } from '../utils/motionHelpers';

interface MotionFormProps {
  motion: Motion;
  isEditing: boolean;
  onSave: (motion: Motion) => void;
  onCancel: () => void;
}

const MotionForm: React.FC<MotionFormProps> = ({
  motion,
  isEditing,
  onSave,
  onCancel
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    const updatedMotion: Motion = {
      ...motion,
      id: motion.id || generateMotionId(),
      name: values.name,
      activationDate: values.activationDate.toDate(),
      lastModified: new Date()
    };

    const validation = validateMotion(updatedMotion);
    if (validation.isValid) {
      onSave(updatedMotion);
    }
  };

  if (!isEditing) {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, color: '#666' }}>Motion Name:</label>
          <div style={{ marginTop: 4, fontSize: '16px' }}>{motion.name || 'Untitled Motion'}</div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, color: '#666' }}>Activation Date:</label>
          <div style={{ marginTop: 4, fontSize: '16px' }}>
            {motion.activationDate.toLocaleDateString()}
          </div>
        </div>
        {motion.createdDate && (
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 500, color: '#666' }}>Created:</label>
            <div style={{ marginTop: 4, fontSize: '14px', color: '#999' }}>
              {motion.createdDate.toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        name: motion.name,
        activationDate: motion.activationDate ? dayjs(motion.activationDate) : undefined
      }}
      onFinish={handleFinish}
    >
      <Form.Item
        name="name"
        label="Motion Name"
        rules={[
          { required: true, message: 'Motion name is required' },
          { min: 3, message: 'Motion name must be at least 3 characters' }
        ]}
      >
        <Input 
          placeholder="Enter motion name (e.g., Q2 Premium Product Refresh)"
          style={{ borderRadius: '6px' }}
        />
      </Form.Item>

      <Form.Item
        name="activationDate"
        label="Activation Date"
        rules={[
          { required: true, message: 'Activation date is required' }
        ]}
      >
        <DatePicker
          style={{ width: '100%', borderRadius: '6px' }}
          placeholder="Select activation date"
          disabledDate={(current) => current && current < dayjs().startOf('day')}
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Space>
          <Button 
            type="primary" 
            htmlType="submit"
            style={{ borderRadius: '6px' }}
          >
            Save Motion
          </Button>
          <Button 
            onClick={onCancel}
            style={{ borderRadius: '6px' }}
          >
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default MotionForm;