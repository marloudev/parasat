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
import Table from '../../_components/table';
import Pagination from '../../_components/pagination';
import Modal from '../../_components/modal';
import Drawer from '../../_components/drawer';
import Tab from '../../_components/tab';
import Collapse from '../../_components/collapse';

export default function AdminDashboardPage() {
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
    setSelectError('');
  };

  const handleSelectSubmit = () => {
    if (!selectedOption) {
      setSelectError('Please select an option');
    } else {
      alert(`Selected Option: ${selectedOption}`);
    }
  };

  const columns = [
    { title: "ID", dataKey: "id" },
    { title: "Name", dataKey: "name" },
    { title: "Role", dataKey: "role" },
    {
      title: "Actions",
      dataKey: "actions",
      render: (value, row) => (
        <button
          onClick={() => alert(`Editing ${row.name}`)}
          className="px-2 py-1 text-blue-500 hover:underline"
        >
          Edit
        </button>
      ),
    },
  ];

  const data = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Alice Johnson", role: "Moderator" },
  ];

  const fullData = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Alice Johnson", role: "Moderator" },
    { id: 4, name: "Bob Brown", role: "Admin" },
    { id: 5, name: "Charlie Davis", role: "User" },
    { id: 6, name: "David Evans", role: "Moderator" },
    { id: 7, name: "Ella Foster", role: "Admin" },
    { id: 8, name: "Fay Green", role: "User" },
    { id: 9, name: "George Harris", role: "Moderator" },
    { id: 10, name: "Hannah Ingram", role: "Admin" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(fullData.length / itemsPerPage);

  const currentData = fullData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);

  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Users', href: '#' },
  ];

  return (
    <AdminLayout>
      {/* Alerts */}
      {/* Success Alert */}
      <div className="flex gap-4">
        <Alert
          variant='default'
          message="This is a default alert"
        />
        <Alert
          variant='success'
          message="This is a success alert"
        />
        {/* Error Alert */}
        <Alert
          variant='error'
          message="This is an error alert"
        />
        {/* Warning Alert */}
        <Alert
          variant='warning'
          message="This is a warning alert"
        />
        {/* Info Alert */}
        <Alert
          variant="info"
          message="This is an info alert"
        />
      </div>

      <div className='flex flex-col gap-5'>
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

          <div className="flex">
            {/* Select */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">Reusable Select Component</h2>
                <Select
                  label="Choose a barangay"
                  options={selectOptions}
                  value={selectedOption}
                  onChange={handleSelectChange}
                  error={selectError}
                  placeholder="Select your barangay"
                />
              </div>
              <Button variant="info" onClick={handleSelectSubmit}>
                Submit
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-4">Reusable Table Component</h1>
            <Table columns={columns} data={data} className="shadow" />
          </div>
        </div>

        <div className="flex justify-end">
          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-2">
            {/* Modal */}
            <Button
              variant="info"
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Open Modal
            </Button>
            <Modal
              open={isModalOpen}
              setOpen={setIsModalOpen}
            >
              <h1>Sample Modal</h1>
            </Modal>

            {/* Drawer */}
            <Button
              variant="info"
              onClick={openDrawer}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Open Drawer
            </Button>
            <Drawer
              isOpen={isDrawerOpen}
              setIsOpen={setIsDrawerOpen}
            >
              <h1>Sample Drawer Content</h1>
            </Drawer>
          </div>


          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* Tab Component */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">Reusable Tabs Component</h1>
                <Tab tabs={tabs} onTabChange={(tab) => setActiveTab(tab.name)} />
              </div>

              {/* Render Tab Content Based on Active Tab */}
              {activeTab === 'Overview' && (
                <div>
                  <h2>Overview Content</h2>
                  <p>This is the content for the Overview tab.</p>
                </div>
              )}
              {activeTab === 'Analytics' && (
                <div>
                  <h2>Analytics Content</h2>
                  <p>This is the content for the Analytics tab.</p>
                </div>
              )}
              {activeTab === 'Settings' && (
                <div>
                  <h2>Settings Content</h2>
                  <p>This is the content for the Settings tab.</p>
                </div>
              )}
              {activeTab === 'Users' && (
                <div>
                  <h2>Users Content</h2>
                  <p>This is the content for the Users tab.</p>
                </div>
              )}
            </div>
          </div>

          {/* Collapse Component */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Reusable Collapse Component</h1>
            <div className="flex gap-2">
              <Collapse title="Sample Collapse 1" variant="info">
                <p>sample collapse 1</p>
              </Collapse>
              <Collapse title="Sample Collapse 2" variant="success">
                <p>sample collapse 2</p>
              </Collapse>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
