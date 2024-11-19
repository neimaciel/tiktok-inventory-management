import React from 'react';
import { Card, TextStyle } from '@shopify/polaris';

interface StatCardProps {
  title: string;
  value: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function StatCard({ title, value, trend }: StatCardProps) {
  return (
    <Card title={title}>
      <Card.Section>
        <div className="text-center">
          <TextStyle variation="strong">
            <span className="text-3xl">{value}</span>
          </TextStyle>
          {trend && (
            <p className={`text-sm mt-2 ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.positive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
      </Card.Section>
    </Card>
  );
}