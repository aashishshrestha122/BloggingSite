const config = {
  app: {
    port: process.env.PORT || '5000',
    saltKey: process.env.SALT_KEY || 'blogging!',
    refreshTokenExpiryInMinute: process.env.REFRESH_TOKEN_EXPIRY_IN_MINUTE || '1440m', // 1 day
    accessTokenExpiryInMinute: process.env.ACCESS_TOKEN_EXPIRY_IN_MINUTE || '60m'
  },
  db: {
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'localhost',
      database: 'blogging'
    }
  }
}

export default config;
