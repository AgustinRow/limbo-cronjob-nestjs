import { Injectable, Logger } from '@nestjs/common';
import { ChildProcess, spawn } from 'child_process';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  executeShell(): ChildProcess {
    this.logger.debug('Executing file:');
    const process = spawn('date', []);
    return process;
  }
}
