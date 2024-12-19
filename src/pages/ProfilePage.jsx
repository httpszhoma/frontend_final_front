import React, {useEffect, useState} from 'react';
import api from '../api/api';
import axios from "axios";

export default function ProfilePage() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        try {
            const res = await api.post('/auth/login', {
                email: 'zturtan@gmail.com',
                password: 'qwerty'
            });
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            {users.length > 0 && users.map(user => (
                <div key={user.id}>
                    <h1>{user.username}</h1>
                    <h1>{user.email}</h1>
                </div>
            ))}
        </div>
    );
}
