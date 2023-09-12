'use server';

import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

export async function addTicket(formData) {
  // console.log('hello from the server action');

  // Will create something like {title: 'xxx', body: 'yyy', priority: 'zzz'}
  const ticket = Object.fromEntries(formData);
  console.log('ticket=', ticket);

  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#server-actions
  const supabase = createServerActionClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
}
