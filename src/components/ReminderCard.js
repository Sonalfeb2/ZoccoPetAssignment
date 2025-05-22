import React from 'react';
import { Card, Button, Space, Tag, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const ReminderCard = ({ reminder, onComplete, onDelete }) => {
  const isCompleted = reminder.status === 'completed';

  return (
    <Card
      style={{
        marginBottom: 16,
        opacity: isCompleted ? 0.6 : 1,
        backgroundColor: isCompleted ? '#f6ffed' : 'white',
        borderColor: isCompleted ? '#b7eb8f' : undefined,
      }}
      title={
        <Space>
          <Text delete={isCompleted} strong>
            {reminder.title}
          </Text>
          {isCompleted && (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Completed
            </Tag>
          )}
        </Space>
      }
      size="small"
      bordered
    >
      <Paragraph>
        <Text strong>Pet: </Text>
        <Text delete={isCompleted}>{reminder.pet}</Text> •{' '}
        <Text delete={isCompleted}>{reminder.category}</Text>
      </Paragraph>

      <Paragraph>
        <Text strong>Date & Time: </Text>
        <Text delete={isCompleted}>
          {reminder.date} at {reminder.time}
        </Text>
      </Paragraph>

      {reminder.notes && (
        <Paragraph>
          <Text strong>Notes: </Text>
          <Text delete={isCompleted}>{reminder.notes}</Text>
        </Paragraph>
      )}

      <Space>
        {!isCompleted && (
          <Button type="link" onClick={onComplete}>
            Mark Done
          </Button>
        )}
        <Button type="link" danger onClick={onDelete}>
          Delete
        </Button>
      </Space>
    </Card>
  );
};

export default ReminderCard;