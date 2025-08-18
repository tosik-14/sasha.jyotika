import { useState } from 'react';

export function useLetsConnect() {
    const [success, setSuccess] = useState<boolean | null>(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        if (data.name === '' || data.email === '' || data.message === '') {
            return;
        }

        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        if (result.success) {
            form.reset();
            setSuccess((prev) => (prev = true));
            setTimeout(() => {
                setSuccess((prev) => (prev = false));
            }, 10000);
        } else {
            //alert(result.error);
        }
    };

    return {
        handleSubmit,
        success,
    };
}