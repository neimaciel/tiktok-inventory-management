import React from 'react';
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Select,
  Button,
  SettingToggle,
} from '@shopify/polaris';

export default function Settings() {
  const [syncEnabled, setSyncEnabled] = React.useState(true);

  return (
    <Page title="Settings">
      <Layout>
        <Layout.AnnotatedSection
          title="Sync Settings"
          description="Configure how your inventory syncs between Shopify and TikTok Shop."
        >
          <Card sectioned>
            <FormLayout>
              <Select
                label="Sync Frequency"
                options={[
                  {label: 'Real-time', value: 'realtime'},
                  {label: 'Every 5 minutes', value: '5min'},
                  {label: 'Every 15 minutes', value: '15min'},
                  {label: 'Every hour', value: '1hour'},
                ]}
                value="realtime"
              />
              <TextField
                label="Low Stock Threshold"
                type="number"
                value="10"
                helpText="Get notified when stock falls below this number"
              />
              <SettingToggle
                action={{
                  content: syncEnabled ? 'Disable' : 'Enable',
                  onAction: () => setSyncEnabled(!syncEnabled),
                }}
                enabled={syncEnabled}
              >
                Automatic sync is {syncEnabled ? 'enabled' : 'disabled'}
              </SettingToggle>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="TikTok Shop Integration"
          description="Manage your TikTok Shop API credentials and settings."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                label="API Key"
                type="password"
                value="••••••••••••••••"
              />
              <TextField
                label="API Secret"
                type="password"
                value="••••••••••••••••"
              />
              <Button primary>Update Credentials</Button>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Notification Settings"
          description="Configure when and how you receive alerts."
        >
          <Card sectioned>
            <FormLayout>
              <Select
                label="Alert Method"
                options={[
                  {label: 'Email', value: 'email'},
                  {label: 'SMS', value: 'sms'},
                  {label: 'Both', value: 'both'},
                ]}
                value="email"
              />
              <TextField
                label="Email Address"
                type="email"
                value="user@example.com"
              />
              <TextField
                label="Phone Number"
                type="tel"
                value="+1234567890"
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}