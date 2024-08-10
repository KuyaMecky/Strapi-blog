module.exports = ({ env }) => ({
  plugins: {
    seo: {
      enabled: true,
    },
    migrations: {
      enabled: true,
      config: {
        autoStart: true,
        migrationFolderPath: 'migrations'
      },
    },
  },
});
