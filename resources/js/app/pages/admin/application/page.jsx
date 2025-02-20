import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import ApplicationTableSection from './section/application-table-section'
import store from '../../store/store';
import { get_application_thunk } from '@/app/redux/application-thunk';

export default function ApplicationPage() {
    useEffect(() => {
        store.dispatch(get_application_thunk())
    }, []);
    return (
        <AdminLayout>
            <ApplicationTableSection />
        </AdminLayout>
    )
}
