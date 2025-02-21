"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Wrapper from "@/layouts/Wrapper";
import AdminLayout from "@/layouts/AdminLayout";

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('admin_authenticated');
        if (!user) {
            router.push('/admin-login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) return <p>Redirecting...</p>;

    return (
      <Wrapper>
        <AdminLayout>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel.</p>
        </AdminLayout>
      </Wrapper>
    );
};

export default AdminPage;
