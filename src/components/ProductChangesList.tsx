import React from 'react';
import { Table, Tag, Empty } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ProductChange } from '../types/motion';

interface ProductChangesListProps {
  changes: ProductChange[];
}

const ProductChangesList: React.FC<ProductChangesListProps> = ({ changes }) => {
  const getChangeTypeColor = (changeType: string): string => {
    const colorMap: Record<string, string> = {
      'name': 'blue',
      'description': 'green',
      'pricing': 'orange',
      'features': 'purple'
    };
    return colorMap[changeType] || 'default';
  };

  const columns: ColumnsType<ProductChange> = [
    {
      title: 'Product',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
    },
    {
      title: 'Change Type',
      dataIndex: 'changeType',
      key: 'changeType',
      render: (changeType) => (
        <Tag color={getChangeTypeColor(changeType)} style={{ textTransform: 'capitalize' }}>
          {changeType}
        </Tag>
      ),
    },
    {
      title: 'Before',
      dataIndex: 'beforeValue',
      key: 'beforeValue',
      render: (text) => (
        <div style={{ 
          maxWidth: '200px', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis',
          color: '#666'
        }}>
          {text}
        </div>
      ),
    },
    {
      title: 'After',
      dataIndex: 'afterValue',
      key: 'afterValue',
      render: (text) => (
        <div style={{ 
          maxWidth: '200px', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis',
          fontWeight: 500
        }}>
          {text}
        </div>
      ),
    },
    {
      title: 'Date Modified',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (date: Date) => (
        <span style={{ color: '#666', fontSize: '14px' }}>
          {date.toLocaleDateString()}
        </span>
      ),
    },
  ];

  if (changes.length === 0) {
    return (
      <Empty
        description={
          <span style={{ color: '#666' }}>
            No product changes in this motion yet.
            <br />
            Product changes will appear here when added.
          </span>
        }
        style={{ 
          padding: '40px 0',
          backgroundColor: '#fafafa',
          borderRadius: '6px',
          border: '1px dashed #d9d9d9'
        }}
      />
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 16, color: '#666' }}>
        <strong>{changes.length}</strong> product change{changes.length !== 1 ? 's' : ''} in this motion
      </div>
      
      <Table 
        columns={columns} 
        dataSource={changes.map(change => ({
          ...change,
          key: change.id
        }))}
        pagination={false}
        size="small"
        style={{
          backgroundColor: 'white'
        }}
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default ProductChangesList;