import React, { useState } from 'react';
import { MailFilled } from '@ant-design/icons';
import Select from '@/app/pages/_components/select';
import Button from '@/app/pages/_components/button';
import Wysiwyg from '@/app/pages/_components/wysiwyg';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import store from '@/app/pages/store/store';
import { send_email_thunk } from '@/app/redux/app-thunk';
import { message } from 'antd';

export default function SendEmailSection() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        type: '',
        area: '',
        content: ''
    });

    // Handles form submission
    async function sendEmail(e) {
        e.preventDefault();
        setLoading(true);

        console.log('Form before submit:', form);  // Check the current state of form fields

        try {
            const { type, area, content } = form;
            if (!type || !area || !content) {
                message.error('All fields must be filled out.');
                setLoading(false);
                return;
            }

            await store.dispatch(send_email_thunk({ type, area, content }));
            message.success("Email has been sent.");
        } catch (error) {
            console.error("Error sending email:", error);
            message.error("Failed to send email. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    const typeOptions = [
        { value: 'Maintenance', label: 'Maintenance' },
        { value: 'Offers / Promos', label: 'Offers / Promos' },
    ];

    const areaOptions = [
        { value: 'All', label: 'All' },
        { value: 'Barangay I (Pob.)', label: 'Barangay I (Pob.)' },
        { value: 'Barangay II (Pob.)', label: 'Barangay II (Pob.)' },
        { value: 'Barangay III (Pob.)', label: 'Barangay III (Pob.)' },
        { value: 'Barangay IV (Pob.)', label: 'Barangay IV (Pob.)' },
        { value: 'Barangay V (Pob.)', label: 'Barangay V (Pob.)' },
        { value: 'Barangay VI (Pob.)', label: 'Barangay VI (Pob.)' },
        { value: 'Bagonbon', label: 'Bagonbon' },
        { value: 'Buluangan', label: 'Buluangan' },
        { value: 'Codcod', label: 'Codcod' },
        { value: 'Ermita', label: 'Ermita' },
        { value: 'Guadalupe', label: 'Guadalupe' },
        { value: 'Nataban', label: 'Nataban' },
        { value: 'Palampas', label: 'Palampas' },
        { value: 'Prosperidad', label: 'Prosperidad' },
        { value: 'Punao', label: 'Punao' },
        { value: 'Quezon', label: 'Quezon' },
        { value: 'Rizal', label: 'Rizal' },
        { value: 'San Juan', label: 'San Juan' },
    ];

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="mb-4 text-2xl">
                    <h1><MailFilled /> Email Notifications</h1>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-xl">
                    <div className="m-4">
                        <Select
                            name="type"
                            label="Type"
                            options={typeOptions}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    type: e.target.value,
                                })
                            }
                            value={form.type} // Update selectedType when user selects a value
                        />
                    </div>

                    <div className="m-4">
                        <Select
                            name="area"
                            label="Area"
                            options={areaOptions}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    area: e.target.value,
                                })
                            }
                            value={form.area} // Update selectedArea when user selects a value
                        />
                    </div>

                    <div className="m-4">
                        <Wysiwyg
                            label="Email Content"
                            onChange={(value) => {
                                console.log('Content changed:', value);  // Log the content value from WYSIWYG editor
                                setForm({
                                    ...form,
                                    content: value,  // Use the correct value from the WYSIWYG editor
                                });
                            }}
                            value={form.content}  // Bind the value to the form state
                            name="emailContent"
                        />
                    </div>


                    <div className="mt-28 flex justify-end">
                        <Button
                            icon={<EnvelopeIcon className="h-6 text-white" />}
                            variant="info"
                            type="submit" // Now using form submission
                            disabled={loading}
                        >
                            &nbsp;Send
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
