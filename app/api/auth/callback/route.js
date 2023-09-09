export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
}
