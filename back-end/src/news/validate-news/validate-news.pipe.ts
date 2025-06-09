import { ArgumentMetadata, Injectable, PipeTransform, UnprocessableEntityException } from '@nestjs/common';
import { News } from '../news.interface';

@Injectable()
export class ValidateNewsPipe implements PipeTransform {
  transform(value: News, metadata: ArgumentMetadata): News {
    const newsKeys = [
      "entry_id",
      "channel_name",
      "title",
      "create_date",
      "update_date",
      "img_src",
      "redirect_url"
    ];

    for (let key of newsKeys) {
      if (value[key] === undefined) throw new UnprocessableEntityException;
    }

    return value;
  }
}
