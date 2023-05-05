import { StorageOptions } from '@google-cloud/storage';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface ExtraConfiguration {
  isGlobal?: boolean;
  bucket?: string;
}

export type StorageModuleOptions = StorageOptions & ExtraConfiguration;

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<StorageModuleOptions>()
  .setExtras<ExtraConfiguration>({ isGlobal: false }, (definition, extras) => ({
    ...definition,
    global: extras.isGlobal,
  }))
  .setClassMethodName('forRoot')
  .build();
