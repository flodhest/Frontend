import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (ref) {
      const destroy = ref.destroy;
      if (destroy && typeof destroy === 'function') {
        destroy();
      }
    }
    (window as any).ngRef = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
