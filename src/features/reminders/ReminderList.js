import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Space, Typography, Empty, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddReminderForm from '../../components/AddReminderForm';
import ReminderCard from '../../components/ReminderCard';
import { deleteReminder, markCompleted } from './reminderSlice';

const { Title } = Typography;

const ReminderList = () => {
  const dispatch = useDispatch();
  const reminders = useSelector(state => state.reminders.list);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2} style={{ margin: 0 }}>My Pet Reminders</Title>
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setModalVisible(true)}
          >
            Add Reminder
          </Button>
        </Col>
      </Row>

      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        title="Add New Reminder"
        destroyOnClose
      >
        <AddReminderForm setShowForm={() => setModalVisible(false)} />
      </Modal>

      {reminders.length === 0 ? (
        <Empty
          description="No reminders yet. Click 'Add Reminder' to get started!"
          style={{ marginTop: 60 }}
        />
      ) : (
        <Row gutter={[16, 16]}>
          {reminders.map(reminder => (
            <Col xs={24} sm={12} md={8} lg={6} key={reminder.id}>
              <ReminderCard
                reminder={reminder}
                onDelete={() => dispatch(deleteReminder(reminder.id))}
                onComplete={() => dispatch(markCompleted(reminder.id))}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ReminderList;