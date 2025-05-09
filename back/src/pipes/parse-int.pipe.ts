import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  public transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    console.log('Metadata', metadata);

    if (isNaN(val)) {
      throw new BadRequestException('Incorrect value format');
    }

    return val;
  }
}
