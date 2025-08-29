export const sendMessage = async (data) => {
    return await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
};
