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
    const res = await client.base.appTableRecord.get({
      path: {
        table_id: body.tableId,
        record_id: body.recordId,
      },
    });
    const {
      data: {
        record: { fields },
      },
    } = res;
    console.log(fields);
    fields['手机号'] = '18888888888';
    const res1 = await client.base.appTableRecord.update(
      JSON.parse(JSON.stringify(fields)),
    );
    console.log(res1);
    console.log(body);
  }
}
