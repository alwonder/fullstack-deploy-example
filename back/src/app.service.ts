import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCurrentTime(): { time: string } {
    const currentTime = new Date().toLocaleTimeString();
    return { time: currentTime };
  }
}
