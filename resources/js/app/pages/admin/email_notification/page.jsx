import React from 'react'
import AdminLayout from '../layout'
import SendEmailSection from './sections/send-email-section';

export default function EmailNotificationPage() {
    return (
        <AdminLayout>
            <SendEmailSection />
        </AdminLayout>
    )
}
