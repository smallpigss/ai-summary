import { FormDataRequest } from 'nestjs-form-data';
import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { NewRecordDto } from '../dtos/record.dto';
import { RecordService } from '../services/record.service';

@Controller('records')
@UseInterceptors(ClassSerializerInterceptor)
export class RecordController {
  constructor(private readonly _recordService: RecordService) {}
  @Post()
  @FormDataRequest()
  async newRecord(@Body() record: NewRecordDto) {
    return await this._recordService.newRecord(record);
  }
}
