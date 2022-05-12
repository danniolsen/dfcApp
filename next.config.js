/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    auth_domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    database_url: process.env.NEXT_PUBLIC_DATABASE_URL,
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
    storage_bucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messaging_sender_id: process.env.NEXT_PUBLIC_MESSAGING_SERDER_ID,
    app_id: process.env.NEXT_PUBLIC_APP_ID,
    measurement_id: process.env.NEXT_PUBLIC_MEASURMENT_ID,
  },
}

module.exports = nextConfig
