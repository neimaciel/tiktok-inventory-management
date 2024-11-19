import React from 'react';
import { Card, TextStyle, Button } from '@shopify/polaris';
import { Video, Users, DollarSign } from 'lucide-react';

interface StreamStatusProps {
  isLive: boolean;
  viewers: number;
  sales: string;
  onToggleStream: () => void;
}

export default function StreamStatus({ isLive, viewers, sales, onToggleStream }: StreamStatusProps) {
  return (
    <Card title="Live Stream Status">
      <Card.Section>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              <TextStyle variation={isLive ? "positive" : "subdued"}>
                {isLive ? 'Live Now' : 'Offline'}
              </TextStyle>
            </div>
            <Button primary onClick={onToggleStream}>
              {isLive ? 'End Stream' : 'Start Live'}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <div className="flex justify-between w-full">
              <TextStyle variation="strong">Active Viewers</TextStyle>
              <TextStyle>{viewers.toLocaleString()}</TextStyle>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            <div className="flex justify-between w-full">
              <TextStyle variation="strong">Today's Sales</TextStyle>
              <TextStyle>{sales}</TextStyle>
            </div>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
}