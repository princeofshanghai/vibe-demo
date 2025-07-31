import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Product {
  key: string;
  name: string;
  status: string;
}

const data: Product[] = [
  {
    key: '1',
    name: 'Premium Career',
    status: 'active',
  },
  {
    key: '2',
    name: 'Sales Navigator Core',
    status: 'active',
  },
  {
    key: '3',
    name: 'Recruiter Lite',
    status: 'active',
  },
  {
    key: '4',
    name: 'Premium Business',
    status: 'active',
  },
];

const columns: ColumnsType<Product> = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span style={{ fontWeight: 500 }}>{text}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color="green" style={{ textTransform: 'capitalize' }}>
        {status}
      </Tag>
    ),
  },
];

const Products: React.FC = () => {
  return (
    <div style={{ background: 'transparent' }}>
      <h2 style={{ 
        marginBottom: 24, 
        fontSize: '24px', 
        fontWeight: 600,
        color: '#000',
        background: 'transparent'
      }}>
        Products
      </h2>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}
        style={{ 
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
        }}
      />
    </div>
  );
};

export default Products;