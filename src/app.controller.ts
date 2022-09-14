import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Cron } from '@nestjs/schedule';
import { StoreService } from './store/store.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productsService: StoreService,
  ) {}

  @Cron('10 * * * * *')
  async handleCron() {
    const command = this.appService.executeShell();
    command.stdout.on('data', async (chunk) => {
      await this.productsService.storeOutput(chunk);
    });
  }
}
