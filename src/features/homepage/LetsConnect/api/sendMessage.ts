import type { Message } from '@/features/homepage/LetsConnect/entity/types';

export const sendMessage = async (data: Message) => {
    return await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
};
