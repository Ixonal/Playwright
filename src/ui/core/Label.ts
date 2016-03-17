
export abstract class Label {
  private text: string;
  
  setText(text: string) {
    this.text = text;
  }
  
  getText(): string {
    return this.text;
  }
  
}
