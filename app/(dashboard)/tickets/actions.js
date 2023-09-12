'use server';

import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// Important Note:
// When you use server action in dev mood, a lot of time, you will need to disable RLS in supabase:
// https://supabase.com/dashboard/project/ojnieaohntvqlhyvlebc/auth/policies
// Otherwise it cannot insert data. When you do prod build and use prod build, then it will not have problem.
// For RLS, you can find info here: https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security

// This method is the same as 'export async function POST(request)' in the app\api\tickets\route.js file
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

  // insert the data
  const { error } = await supabase
    .from('Tickets')
    .insert({ ...ticket, user_email: session.user.email });

  revalidatePath('/tickets');
  redirect('/tickets'); // cannot use "router.push('/tickets');" because it is not a client component, don't have access to router
}
