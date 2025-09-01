import React from 'react';
import { useState } from 'react';
import { sendMessage } from '@/features/homepage/LetsConnect/api/sendMessage';
import type { Message } from '@/features/homepage/LetsConnect/entity/types';

export function useLetsConnect() {
    const [success, setSuccess] = useState<boolean | null>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData: Message = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLInputElement)
                .value,
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
                (form.elements.namedItem('name') as HTMLInputElement).value =
                    formData.name;
                (form.elements.namedItem('email') as HTMLInputElement).value =
                    formData.email;
                (
                    form.elements.namedItem('message') as HTMLTextAreaElement
                ).value = formData.message;
            }, 5000);
        }
    };

    return {
        handleSubmit,
        success,
    };
}
