import { Inject, Injectable } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from './lib/gcp.module-definition';

import {
  Bucket,
  CreateWriteStreamOptions,
  FileOptions,
  Storage,
} from '@google-cloud/storage';

@Injectable()
export class StorageService {
  private readonly storageInstance: Storage;
  private readonly bucketInstance: Bucket;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) protected readonly options: typeof OPTIONS_TYPE,
  ) {
    this.storageInstance = new Storage(options);

    if (typeof options.bucket === 'string') {
      this.bucketInstance = this.storageInstance.bucket(options.bucket);
    }
  }

  createFile(filename: string, options?: FileOptions) {
    return this.bucketInstance.file(filename, options);
  }

  createFileStream(
    filename: string,
    streamOptions?: CreateWriteStreamOptions,
  ) {
    return this.bucketInstance
      .file(filename)
      .createWriteStream(streamOptions);
  }

  get storage() {
    return this.storageInstance;
  }

  get bucket() {
    return this.bucket;
  }
}
