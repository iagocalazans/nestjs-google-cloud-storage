import { Logger, Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigurableModuleClass } from './lib/gcp.module-definition';

@Module({
  providers: [StorageService, Logger],
  exports: [StorageService],
})
export class StorageModule extends ConfigurableModuleClass {}
