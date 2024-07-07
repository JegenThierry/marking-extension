import { Colors } from "../enums/colors";

export class Annotation {
  id: string = "";
  annotatedText: string = "";
  websiteUrl: string = "";
  subAnnotations: { [key: string]: SubAnnotation } = {};
  positionalInformation: string = "";
  createdDate: Date = new Date();
  modifiedDate: Date = new Date();
  color: Colors = Colors.Lavender;

  constructor(
    annotatedText: string,
    positionalInformation: string,
    color: Colors,
    websiteUrl: string
  ) {
    this.id = self.crypto.randomUUID();
    this.createdDate = new Date();
    this.modifiedDate = new Date();

    this.annotatedText = annotatedText;
    this.positionalInformation = positionalInformation;
    this.websiteUrl = websiteUrl;
    this.color = color;
  }
}
