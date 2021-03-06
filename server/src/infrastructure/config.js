import path from 'path'

const rootDir = path.resolve(__dirname, '..')

export default {
  __rootDir: rootDir,
  development: process.env.NODE_ENV === 'development',
  systemPort: process.env.PORT,
  webpackDevServer: process.env.DEV_SERVER,
  mongodb: process.env.MONGO,
  apiUrl: process.env.API_URL,
  session: {
    secret: process.env.SESSION_SECRET,
    ttl: process.env.SESSION_TTL
  },
  aws: {
    ses: {
      region: process.env.AWS_SES_REGION,
      accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
      apiVersion: process.env.AWS_SES_API_VERSION,
      sender: process.env.AWS_SES_SENDER
    }
  },
  baseUrl: process.env.BASE_URL,
  cdnServer: process.env.CDN_SERVER,
  jobServer: process.env.JOB_SERVER,
  sendGrid: {
    key: process.env.SENDGRID_API_KEY,
    sender: process.env.SENDGRID_SENDER
  },
  apiSecretKey:  process.env.API_SECRET_KEY,
  pageSize: process.env.PAGE_SIZE
}
