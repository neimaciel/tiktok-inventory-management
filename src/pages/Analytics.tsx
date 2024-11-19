import React from 'react';
import {
  Page,
  Layout,
  Card,
  TextStyle,
  DataTable,
} from '@shopify/polaris';

export default function Analytics() {
  const salesData = [
    ['White T-Shirt', '50', '$1,500', '30%'],
    ['Blue Jeans', '35', '$2,450', '25%'],
    ['Red Sneakers', '25', '$2,250', '20%'],
  ];

  return (
    <Page title="Analytics">
      <Layout>
        <Layout.Section oneThird>
          <Card title="Total Sales">
            <Card.Section>
              <div className="text-center">
                <TextStyle variation="strong">
                  <span className="text-3xl">$6,200</span>
                </TextStyle>
                <p className="text-sm text-green-600 mt-2">↑ 15% from last week</p>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <Card title="Items Sold">
            <Card.Section>
              <div className="text-center">
                <TextStyle variation="strong">
                  <span className="text-3xl">110</span>
                </TextStyle>
                <p className="text-sm text-green-600 mt-2">↑ 8% from last week</p>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <Card title="Live Stream Views">
            <Card.Section>
              <div className="text-center">
                <TextStyle variation="strong">
                  <span className="text-3xl">2.5K</span>
                </TextStyle>
                <p className="text-sm text-green-600 mt-2">↑ 25% from last stream</p>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card title="Top Performing Products">
            <Card.Section>
              <DataTable
                columnContentTypes={['text', 'numeric', 'numeric', 'numeric']}
                headings={['Product', 'Units Sold', 'Revenue', 'Conversion Rate']}
                rows={salesData}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}