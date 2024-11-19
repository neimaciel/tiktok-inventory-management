import React from 'react';
import { Page, Layout, Card } from '@shopify/polaris';
import { AlertTriangle } from 'lucide-react';
import StatCard from '../components/stats/StatCard';
import StockTable from '../components/inventory/StockTable';
import StreamStatus from '../components/live/StreamStatus';

export default function Dashboard() {
  const [isLive, setIsLive] = React.useState(false);

  const lowStockItems = [
    { product: 'White T-Shirt', currentStock: 5, threshold: 50, status: 'Critical' },
    { product: 'Blue Jeans', currentStock: 8, threshold: 40, status: 'Warning' },
    { product: 'Red Sneakers', currentStock: 10, threshold: 30, status: 'Warning' },
  ] as const;

  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Inventory Overview">
            <Card.Section>
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  title="Total Products"
                  value="1,234"
                  trend={{ value: "15% from last week", positive: true }}
                />
                <StatCard
                  title="Low Stock Items"
                  value="3"
                  trend={{ value: "2 more than yesterday", positive: false }}
                />
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section oneHalf>
          <StreamStatus
            isLive={isLive}
            viewers={isLive ? 245 : 0}
            sales="$12,345"
            onToggleStream={() => setIsLive(!isLive)}
          />
        </Layout.Section>

        <Layout.Section>
          <Card title="Low Stock Alerts">
            <Card.Section>
              <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="font-medium">3 products require attention</span>
              </div>
              <StockTable items={lowStockItems} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}