import { BaseClient } from '@base-open/node-sdk';
import { Injectable } from '@nestjs/common';
import { NewRecordDto } from '../dtos/record.dto';

@Injectable()
export class RecordService {
  async newRecord(body: NewRecordDto) {
    const client = new BaseClient({
      appToken: process.env.APP_TOKEN,
      personalBaseToken: process.env.PERSONAL_BASE_TOKEN,
    });
    const res = await client.base.appTableRecord.list({
      path: {
        table_id: body.tableId,
      },
    });
    console.log(res);
    console.log(body);
  }
}
