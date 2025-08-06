import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Breadcrumb } from 'antd';
import { ArrowLeftOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Motion } from '../types/motion';
import { mockMotions } from '../data/mockMotions';
import MotionStatusBadge from '../components/MotionStatusBadge';
import MotionForm from '../components/MotionForm';
import ProductChangesList from '../components/ProductChangesList';
import { canEditMotion, canSubmitMotion, getNextStatus } from '../utils/motionHelpers';

const MotionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [motion, setMotion] = useState<Motion | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id === 'new') {
      // Create new motion
      const newMotion: Motion = {
        id: '',
        name: '',
        status: 'Draft',
        activationDate: new Date(),
        createdDate: new Date(),
        lastModified: new Date(),
        productChanges: []
      };
      setMotion(newMotion);
      setIsEditing(true);
    } else if (id) {
      // Load existing motion
      const existingMotion = mockMotions.find(m => m.id === id);
      if (existingMotion) {
        setMotion(existingMotion);
      } else {
        // Motion not found, redirect to motions list
        navigate('/motions');
      }
    }
  }, [id, navigate]);

  const handleSave = (updatedMotion: Motion) => {
    setMotion(updatedMotion);
    setIsEditing(false);
    
    // If this is a new motion, navigate to the specific motion URL
    if (id === 'new' && updatedMotion.id) {
      navigate(`/motions/${updatedMotion.id}`, { replace: true });
    }
    
    // In a real app, this would make an API call
    console.log('Motion saved:', updatedMotion);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (id === 'new') {
      navigate('/motions');
    }
  };

  const handleSubmit = () => {
    if (motion && canSubmitMotion(motion)) {
      const nextStatus = getNextStatus(motion.status);
      if (nextStatus) {
        const updatedMotion = {
          ...motion,
          status: nextStatus,
          lastModified: new Date()
        };
        setMotion(updatedMotion);
        // In a real app, this would make an API call
        console.log('Motion submitted:', updatedMotion);
      }
    }
  };

  if (!motion) {
    return <div>Loading...</div>;
  }

  const isNewMotion = id === 'new';
  const canEdit = canEditMotion(motion.status);
  const canSubmit = canSubmitMotion(motion);

  return (
    <div style={{ background: 'transparent' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        style={{ marginBottom: 16 }}
        items={[
          {
            href: '/',
            title: <HomeOutlined />
          },
          {
            href: '/motions',
            title: (
              <>
                <AppstoreOutlined />
                <span>GTM Motions</span>
              </>
            )
          },
          {
            title: isNewMotion ? 'New Motion' : motion.name || 'Motion Detail'
          }
        ]}
        onClick={(e, route) => {
          e.preventDefault();
          if (route?.href) {
            navigate(route.href);
          }
        }}
      />

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 24 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button 
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/motions')}
            style={{ borderRadius: '6px' }}
          >
            Back to Motions
          </Button>
          <h2 style={{ 
            margin: 0,
            fontSize: '24px', 
            fontWeight: 600,
            color: '#000'
          }}>
            {isNewMotion ? 'Create New Motion' : motion.name}
          </h2>
          {!isNewMotion && <MotionStatusBadge status={motion.status} />}
        </div>
        
        <div style={{ display: 'flex', gap: 8 }}>
          {!isEditing && canEdit && (
            <Button onClick={handleEdit} style={{ borderRadius: '6px' }}>
              Edit Motion
            </Button>
          )}
          {!isEditing && canSubmit && (
            <Button 
              type="primary" 
              onClick={handleSubmit}
              style={{ borderRadius: '6px' }}
            >
              Submit Motion
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Motion Form Card */}
        <Card
          title="Motion Details"
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
          }}
        >
          <MotionForm
            motion={motion}
            isEditing={isEditing}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </Card>

        {/* Product Changes Card */}
        {!isNewMotion && (
          <Card
            title="Product Changes"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
            }}
          >
            <ProductChangesList changes={motion.productChanges} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default MotionDetail;