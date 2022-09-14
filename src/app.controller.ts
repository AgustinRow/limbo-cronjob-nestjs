import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Interval } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Interval(10000)
  async handleCron() {
    const date = this.appService.executeShell();
    console.log('Date:', date);
  }
}
