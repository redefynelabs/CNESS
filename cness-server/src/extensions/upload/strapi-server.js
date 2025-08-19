export default (plugin) => {
    const cloudinaryProvider = plugin.providers.find(
      (provider) => provider.name === 'cloudinary'
    );
  
    if (cloudinaryProvider) {
      const originalUpload = cloudinaryProvider.upload;
  
      cloudinaryProvider.upload = async (file) => {
        const result = await originalUpload(file);
  
        // Fix preview: force Strapi to use Cloudinary secure_url
        if (file.formats) {
          Object.keys(file.formats).forEach((key) => {
            file.formats[key].url = file.formats[key].url?.startsWith('http')
              ? file.formats[key].url
              : result[0]?.url;
          });
        }
  
        file.url = file.url?.startsWith('http') ? file.url : result[0]?.url;
  
        return result;
      };
    }
  
    return plugin;
  };
  