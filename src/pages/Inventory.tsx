import React from 'react';
import {
  Page,
  Card,
  DataTable,
  Filters,
  Button,
  ButtonGroup,
} from '@shopify/polaris';

export default function Inventory() {
  const rows = [
    ['White T-Shirt', 'Apparel', '5', '50', 'Shopify, TikTok', 'Synced'],
    ['Blue Jeans', 'Apparel', '8', '40', 'Shopify', 'Pending'],
    ['Red Sneakers', 'Footwear', '10', '30', 'TikTok', 'Error'],
  ];

  return (
    <Page
      title="Inventory Management"
      primaryAction={
        <ButtonGroup>
          <Button>Import Products</Button>
          <Button primary>Sync Now</Button>
        </ButtonGroup>
      }
    >
      <Card>
        <Card.Section>
          <Filters
            queryValue=""
            filters={[
              {
                key: 'category',
                label: 'Category',
                filter: (
                  <select className="border p-2 rounded">
                    <option value="">All Categories</option>
                    <option value="apparel">Apparel</option>
                    <option value="footwear">Footwear</option>
                  </select>
                ),
              },
              {
                key: 'status',
                label: 'Status',
                filter: (
                  <select className="border p-2 rounded">
                    <option value="">All Status</option>
                    <option value="synced">Synced</option>
                    <option value="pending">Pending</option>
                    <option value="error">Error</option>
                  </select>
                ),
              },
            ]}
            onQueryChange={() => {}}
            onQueryClear={() => {}}
          />
        </Card.Section>
        <Card.Section>
          <DataTable
            columnContentTypes={['text', 'text', 'numeric', 'numeric', 'text', 'text']}
            headings={[
              'Product',
              'Category',
              'Current Stock',
              'Threshold',
              'Platforms',
              'Status',
            ]}
            rows={rows}
          />
        </Card.Section>
      </Card>
    </Page>
  );
}