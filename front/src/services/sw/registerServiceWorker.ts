import appConfig from '../../config/appConfig';

// #region constants
const { path: swPath } = appConfig.sw;
// #endregion

function registerServiceWorker(): void {
  if (typeof window !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(swPath)
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }
}

export default registerServiceWorker;
