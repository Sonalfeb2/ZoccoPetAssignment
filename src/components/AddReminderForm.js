import React from 'react';
import { useDispatch } from 'react-redux';
import { addReminder } from '../features/reminders/reminderSlice';
import { Form, Input, Select, DatePicker, TimePicker, Button } from 'antd';

const { Option } = Select;

const AddReminderForm = ({ setShowForm }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values, 'values');
    const reminder = {
      id: Date.now(),
      pet: values.pet,
      category: values.category || 'General', // fallback if empty
      title: values.title,
      notes: values.notes || '',
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm'),
      frequency: values.frequency || '',
      status: 'pending',
    };
    dispatch(addReminder(reminder));
    setShowForm(false);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ marginBottom: 24 }}>
      <Form.Item
        name="pet"
        label="Pet Name"
        rules={[{ required: true, message: 'Please input the pet name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: 'Please select a category!' }]}
      >
        <Select placeholder="Select a category">
          <Option value="General">General</Option>
          <Option value="Health">Health</Option>
          <Option value="Lifestyle">Lifestyle</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="title"
        label="Reminder Title"
        rules={[{ required: true, message: 'Please input the reminder title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="notes" label="Notes">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="date"
        label="Date"
        rules={[{ required: true, message: 'Please select a date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="time"
        label="Time"
        rules={[{ required: true, message: 'Please select a time!' }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item name="frequency" label="Frequency">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Reminder
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddReminderForm;