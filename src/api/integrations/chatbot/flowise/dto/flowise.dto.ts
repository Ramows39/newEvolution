import { TriggerOperator, TriggerType } from '@prisma/client';

export class FlowiseDto {
  enabled?: boolean;
  description?: string;
  apiUrl?: string;
  apiKey?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  triggerType?: TriggerType;
  triggerOperator?: TriggerOperator;
  private _triggerValue?: string;

  get triggerValue(): string | undefined {
    return this._triggerValue;
  }

  set triggerValue(value: string | number | undefined) {
    if (typeof value === 'number') {
      this._triggerValue = value.toString();
    } else {
      this._triggerValue = value;
    }
  }
  ignoreJids?: any;
  splitMessages?: boolean;
  timePerChar?: number;
}

export class FlowiseSettingDto {
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  flowiseIdFallback?: string;
  ignoreJids?: any;
  splitMessages?: boolean;
  timePerChar?: number;
}
