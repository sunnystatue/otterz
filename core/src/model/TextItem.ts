import { BaseItem } from "./BaseItem";
import { IBrowser } from "../utils/browser/IBrowser";

export class TextItem extends BaseItem {
  constructor(propName: string, selector: string) {
    super(propName, selector);
  }

  public scrap(browser: IBrowser): { [key: string]: string } | null {
    console.log(this.selector);
    const result = browser.scrapText(this.selector);
    console.log(result);

    if (result) {
      return { [this.propName]: result };
    } else {
      return null;
    }
  }
}
