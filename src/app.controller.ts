import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Interval } from '@nestjs/schedule';
import { StoreService } from './store/store.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productsService: StoreService,
  ) {}

  @Interval(10000)
  async handleCron() {
    const command = this.appService.executeShell();
    console.log('info: output from command is ->', command);
    await this.productsService.storeOutput(command);
  }
}
