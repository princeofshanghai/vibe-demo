import React from 'react';
import { Table, Button, Breadcrumb } from 'antd';
import { PlusOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';
import { Motion } from '../types/motion';
import { mockMotions } from '../data/mockMotions';
import MotionStatusBadge from '../components/MotionStatusBadge';

const columns: ColumnsType<Motion> = [
  {
    title: 'Motion Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <MotionStatusBadge status={status} />,
  },
  {
    title: 'Activation Date',
    dataIndex: 'activationDate',
    key: 'activationDate',
    render: (date: Date) => date.toLocaleDateString(),
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'createdDate',
    render: (date: Date) => date.toLocaleDateString(),
  },
  {
    title: 'Product Changes',
    dataIndex: 'productChanges',
    key: 'productChanges',
    render: (changes) => changes.length,
  },
];

const Motions: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateMotion = () => {
    navigate('/motions/new');
  };

  const handleRowClick = (record: Motion) => {
    navigate(`/motions/${record.id}`);
  };

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
            title: (
              <>
                <AppstoreOutlined />
                <span>GTM Motions</span>
              </>
            )
          }
        ]}
        onClick={(e, route) => {
          e.preventDefault();
          if (route?.href) {
            navigate(route.href);
          }
        }}
      />

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 24 
      }}>
        <h2 style={{ 
          margin: 0,
          fontSize: '24px', 
          fontWeight: 600,
          color: '#000',
          background: 'transparent'
        }}>
          GTM Motions
        </h2>
        <Button 
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleCreateMotion}
          style={{
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontWeight: 500
          }}
        >
          Create Motion
        </Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={mockMotions.map(motion => ({
          ...motion,
          key: motion.id
        }))}
        pagination={false}
        style={{ 
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
        }}
        size="middle"
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: 'pointer' },
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#fafafa';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        })}
      />
    </div>
  );
};

export default Motions;