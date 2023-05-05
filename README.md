# nestjs-google-cloud-storage

Google Cloud Storage as a very simple Module for NestJS framework

## Installation

```bash
yarn add nestjs-google-cloud-storage
```

```bash
npm install --save nestjs-google-cloud-storage
```

## Usage

You can load it as a global module and then just inject it normaly.

```ts
import { StorageModule } from 'nestjs-google-cloud-storage';

@Module({
  imports: [
    StorageModule.forRoot({
      bucket: 'your-bucket-name', // This is optional
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

```ts
import { StorageService } from 'nestjs-google-cloud-storage';

@Injectable()
export class CustomService {
  constructor(
    private readonly storageService: StorageService,
  ) {}

  create() {
    const writableFile = this.storageService.createFileStream(
          `filename.wav`,
          { contentType: 'audio/x-wav' },
        );
  }
}

```
