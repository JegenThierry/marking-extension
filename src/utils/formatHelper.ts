class FormatHelper {
  public static toJsonString(object: any, beautify?: boolean): string {
    return JSON.stringify(object, null, beautify ? 2 : 0);
  }
}

export default FormatHelper;
