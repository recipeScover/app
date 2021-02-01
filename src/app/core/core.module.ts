import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() private readonly coreModule: CoreModule) {
    if (this.coreModule) {
      throw new Error('The core module can be only used inside the app module');
    }
  }
}
