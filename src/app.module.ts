import { Module } from '@nestjs/common';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { RecordModule } from './modules/record.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [RecordModule, NestjsFormDataModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
