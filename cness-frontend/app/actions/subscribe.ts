'use server';

export async function addSubscriber(email: string) {
  const res = await fetch(`${process.env.STRAPI_URL || 'http://localhost:1337'}/api/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: { email }
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Strapi Error:', errorText);
    throw new Error('Failed to subscribe');
  }

  return res.json();
}
