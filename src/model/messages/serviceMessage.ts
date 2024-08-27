import { ExtensionEvents } from "../enums/extensionEvents";

export interface ExtensionEventsPayloads {
  [ExtensionEvents.CreateAnnotation]: string;
  [ExtensionEvents.GetAnnotation]: {id:number};
  [ExtensionEvents.GetAllAnnotations]: string;
}

export default interface ServiceMessage<T extends ExtensionEvents> {
  messageType: T;
  data: ExtensionEventsPayloads[T];
}
