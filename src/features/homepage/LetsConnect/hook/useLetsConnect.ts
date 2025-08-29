import { useState } from 'react';
import { sendMessage } from '@/features/homepage/LetsConnect/api/sendMessage';
import type { Message } from '@/features/homepage/LetsConnect/entity/types';

export function useLetsConnect() {
    const [success, setSuccess] = useState<boolean | null>(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData: Message = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        if (
            formData.name === '' ||
            formData.email === '' ||
            formData.message === ''
        )
            return;

        form.reset();
        setSuccess(true);

        const timer = setTimeout(() => setSuccess(false), 10000);

        try {
            const res = await sendMessage(formData);
            if (!res.ok) new Error('server error');
            const result = await res.json();
            if (!result.success) new Error('response.success===false');
        } catch (err) {
            console.error(err);

            clearTimeout(timer);
            setSuccess(null);

            setTimeout(() => {
                setSuccess(false);
                form.name.value = formData.name;
                form.email.value = formData.email;
                form.message.value = formData.message;
            }, 5000);
        }
    };

    return {
        handleSubmit,
        success,
    };
}
