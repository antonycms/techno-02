export default {
  methods: {
    async getDataFromApi(path) {
      let localPath = `${path}`;

      if (localPath.startsWith('/')) {
        localPath = localPath.replace('/', '');
      }

      const response = await fetch(`${process.env.VUE_APP_API_URL}/${localPath}`);

      return await response.json();
    },
  },
};
