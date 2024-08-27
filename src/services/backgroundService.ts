import Browser, { Runtime } from "webextension-polyfill";
import type ServiceMessage from "../model/messages/serviceMessage";
import FormatHelper from "../utils/formatHelper";
import { ExtensionEvents } from "../model/enums/extensionEvents";

Browser.runtime.onMessage.addListener(
  (
    request: unknown,
    messageSender: Runtime.MessageSender,
    sendResponse: (message: unknown) => void
  ) => {
    // Type assertion for messageType
    if (
      typeof request !== "object" ||
      request === null ||
      !("messageType" in request)
    ) {
      console.error(
        `Request does not contain all needed Values: ${FormatHelper.toJsonString(
          request
        )}`
      );
      return true;
    }

    const messageType = request.messageType as ExtensionEvents;

    switch (messageType) {
      case ExtensionEvents.CreateAnnotation: {
        const { data } =
          request as ServiceMessage<ExtensionEvents.CreateAnnotation>;
        console.log(data);
        break;
      }
      case ExtensionEvents.GetAllAnnotations: {
        const { data } =
          request as ServiceMessage<ExtensionEvents.GetAllAnnotations>;

        console.log(data);
        break;
      }
      case ExtensionEvents.GetAnnotation: {
        const { data } =
          request as ServiceMessage<ExtensionEvents.GetAnnotation>;

        console.log(data.id);
        break;
      }
    }

    return true;
  }
);
