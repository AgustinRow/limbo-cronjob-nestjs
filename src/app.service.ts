import { Injectable, Logger } from '@nestjs/common';
import { execFileSync } from 'child_process';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  executeShell(): string {
    this.logger.debug('Executing file:');
    const output = execFileSync('./src/date.sh', []);
    return output.toString();
  }
}
