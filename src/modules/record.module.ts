import { Module } from '@nestjs/common';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { RecordService } from '../services/record.service';
import { RecordController } from '../controllers/record.controller';

@Module({
  imports: [NestjsFormDataModule],
  providers: [RecordService],
  controllers: [RecordController],
})
export class RecordModule {}
