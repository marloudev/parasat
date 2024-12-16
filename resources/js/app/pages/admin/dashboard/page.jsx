import React, { useState } from 'react'
import AdminLayout from '../layout'
import Alert from '../../_components/alert'
import Button from '../../_components/button'
import Badge from '../../_components/badge';
import Card from '../../_components/card';
import Avatar from '../../_components/avatar';

export default function AdminDashboardPage() {
  const [showDefaultAlert, setShowDefaultAlert] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);
  const [showInfoAlert, setShowInfoAlert] = useState(true);

  return (
    <AdminLayout>
      {/* Alerts */}
      {/* Success Alert */}
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

      <div className='flex flex-col gap-4'>
        {/* Button */}
        <div className="flex gap-4">
          <Button variant="success" size="medium" onClick={() => alert('Secondary Button Clicked')}>
            Success
          </Button>
          <Button variant="error" size="large" onClick={() => alert('Danger Button Clicked')}>
            Error
          </Button>
          <Button variant="warning" size="medium">
            Warning
          </Button>
          <Button variant="info" size="medium">
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

        {/* Avatar */}
        <div className="flex gap-4">
          <div className="flex items-center gap-4 mb-6">
            <Avatar size="large" src={"https://randomuser.me/api/portraits/men/44.jpg"} name={"John Doe"} />
            <div className='flex flex-col'>
              <h3 className="text-xl font-semibold">{"John Doe"}</h3>
              <p className="text-gray-500">{"Admin"}</p>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}
