import { TriggerOperator, TriggerType } from '@prisma/client';

export class OpenaiCredsDto {
  name: string;
  apiKey: string;
}

export class OpenaiDto {
  enabled?: boolean;
  description?: string;
  openaiCredsId: string;
  botType?: string;
  assistantId?: string;
  functionUrl?: string;
  model?: string;
  systemMessages?: string[];
  assistantMessages?: string[];
  userMessages?: string[];
  maxTokens?: number;
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
  };
  ignoreJids?: any;
  splitMessages?: boolean;
  timePerChar?: number;
}

export class OpenaiSettingDto {
  openaiCredsId?: string;
  expire?: number;
  keywordFinish?: string;
  delayMessage?: number;
  unknownMessage?: string;
  listeningFromMe?: boolean;
  stopBotFromMe?: boolean;
  keepOpen?: boolean;
  debounceTime?: number;
  openaiIdFallback?: string;
  ignoreJids?: any;
  speechToText?: boolean;
  splitMessages?: boolean;
  timePerChar?: number;
}
