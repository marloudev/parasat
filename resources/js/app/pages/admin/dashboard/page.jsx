import React, { useState } from 'react'
import AdminLayout from '../layout'
import Alert from '../../_components/alert'
import Button from '../../_components/button'
import Badge from '../../_components/badge';
import Card from '../../_components/card';
import Avatar from '../../_components/avatar';
import InputField from '../../_components/inputfield';
import Progress from '../../_components/progress';
import Select from '../../_components/select';

export default function AdminDashboardPage() {
  const [progress, setProgress] = useState(30);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.min(prev - 10, 100));
  };

  const resetProgress = () => {
    setProgress(0);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = () => {
    if (!username) {
      setUsernameError('Username is required');
    }

    if (!password) {
      setPasswordError('Password is required');
    }

    if (username && password) {
      alert(`Username: ${username}\nPassword: ${password}`);
    }
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [selectError, setSelectError] = useState('');

  const selectOptions = [
    { label: 'Barangay 1', value: '1' },
    { label: 'Barangay 2', value: '2' },
    { label: 'Barangay 3', value: '3' },
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectError(''); // Reset error on change
  };

  const handleSelectSubmit = () => {
    if (!selectedOption) {
      setSelectError('Please select an option');
    } else {
      alert(`Selected Option: ${selectedOption}`);
    }
  };

  return (

    <AdminLayout>
      {/* Alerts */}
      {/* Success Alert */}
      <div className="flex gap-4">
        <Alert
          variant='default'
          message="This is a default alert"
          onClose={() => setShowSuccessAlert(false)}
        />
        <Alert
          variant='success'
          message="This is a success alert"
          onClose={() => setShowSuccessAlert(false)}
        />
        {/* Error Alert */}
        <Alert
          variant='error'
          message="This is an error alert"
          onClose={() => setShowErrorAlert(false)}
        />
        {/* Warning Alert */}
        <Alert
          variant='warning'
          message="This is a warning alert"
          onClose={() => setShowWarningAlert(false)}
        />
        {/* Info Alert */}
        <Alert
          variant="info"
          message="This is an info alert"
          onClose={() => setShowInfoAlert(false)}
        />
      </div>

      <div className='flex flex-col gap-8'>
        {/* Button */}
        <div className="flex gap-4">
          <Button variant="default" onClick={() => alert('Default Button Clicked')}>
            Default
          </Button>
          <Button variant="success" onClick={() => alert('Success Button Clicked')}>
            Success
          </Button>
          <Button variant="error" onClick={() => alert('Error Button Clicked')}>
            Error
          </Button>
          <Button variant="warning" onClick={() => alert('Warning Button Clicked')}>
            Warning
          </Button>
          <Button variant="info" onClick={() => alert('Info Button Clicked')}>
            Info
          </Button>
        </div>

        {/* Badge */}
        <div className="flex gap-2">
          <Badge variant="default" size="small">Default</Badge>
          <Badge variant="success" size="small">Success</Badge>
          <Badge variant="error" size="medium">Error</Badge>
          <Badge variant="warning" size="large">Warning</Badge>
          <Badge variant="info" size="medium">Info</Badge>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            image="http://upload.wikimedia.org/wikipedia/commons/9/90/Sunset_Marina.JPG"
            title="Sunset"
            description="Sunset is beautiful."
            actions={[{ label: 'Learn More' }, { label: 'View Details' }]}
          />
          <Card
            image="https://www.desicomments.com/dcimg/02/271302_original.jpg"
            title="Rainbow"
            description="Rainbow always comes after the rain."
            actions={[{ label: 'Learn More' }]}
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/d/d0/Aerial_view_of_the_Amazon_Rainforest.jpg"
            title="Forest"
            description="Drone view of the Amazon Forest."
            actions={[{ label: 'View Details' }]}
          />
        </div>

        <div className="flex flex-col">
          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar size="large" src={"https://randomuser.me/api/portraits/men/44.jpg"} name={"John Doe"} />
            <div className='flex flex-col'>
              <h3 className="text-xl font-semibold">{"John Doe"}</h3>
              <p className="text-gray-500">{"Admin"}</p>
            </div>
          </div>

          {/* InputField */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <InputField
                label="Username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                error={usernameError}
              />
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                error={passwordError}
              />
            </div>
            <div>
              <Button variant="info" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Progress */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-800">Progress Bar</h2>
            <Progress value={100} color="bg-gray-500" />
            <Progress value={80} color="bg-green-500" />
            <Progress value={60} color="bg-red-500" />
            <Progress value={80} color="bg-orange-500" />
            <Progress value={100} color="bg-blue-500" />
          </div>

          {/* Select */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">Select Dropdown</h2>
            <Select
              label="Choose a barangay"
              options={selectOptions}
              value={selectedOption}
              onChange={handleSelectChange}
              error={selectError}
              placeholder="Select your barangay"
            />
            <Button variant="info" onClick={handleSelectSubmit}>
              Submit
            </Button>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}
