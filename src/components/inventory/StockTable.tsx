import React from 'react';
import { DataTable, Badge } from '@shopify/polaris';

interface StockItem {
  product: string;
  currentStock: number;
  threshold: number;
  status: 'Critical' | 'Warning' | 'Good';
}

interface StockTableProps {
  items: StockItem[];
}

export default function StockTable({ items }: StockTableProps) {
  const getStatusBadge = (status: StockItem['status']) => {
    const colors = {
      Critical: 'critical',
      Warning: 'warning',
      Good: 'success',
    };
    return <Badge status={colors[status]}>{status}</Badge>;
  };

  const rows = items.map(item => [
    item.product,
    item.currentStock.toString(),
    item.threshold.toString(),
    getStatusBadge(item.status),
  ]);

  return (
    <DataTable
      columnContentTypes={['text', 'numeric', 'numeric', 'text']}
      headings={['Product', 'Current Stock', 'Threshold', 'Status']}
      rows={rows}
    />
  );
}