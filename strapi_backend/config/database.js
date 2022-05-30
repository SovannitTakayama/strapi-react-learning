module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-172-175-251.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ddaehuiqu163u9'),
      user: env('DATABASE_USERNAME', 'fysaorrgvlhkwl'),
      password: env('DATABASE_PASSWORD', 'a100e7d741fa1ef5fe4c0073d71009c65715931a71e24be3a378041952add7a5'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
