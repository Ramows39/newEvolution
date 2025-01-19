import { TriggerOperator, TriggerType } from '@prisma/client';

export class PrefilledVariables {
  remoteJid?: string;
  pushName?: string;
  messageType?: string;
  additionalData?: { [key: string]: any };
}

export class TypebotDto {
  enabled?: boolean;
  description?: string;
  url: string;
  typebot?: string;
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
}

export class TypebotSettingDto {
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  typebotIdFallback?: string;
  ignoreJids?: any;
}
