import { Module } from '@nestjs/common';
import { RecordModule } from './modules/record.module';

@Module({
  imports: [RecordModule],
})
export class AppModule {}
