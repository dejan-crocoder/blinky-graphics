import { Size, ZeroPoint, ZeroSize } from "../Math";
import { Graphic } from "./Graphic";

export const Text = (label: string): Graphic => ({
  size: ZeroSize,
  position: ZeroPoint,
  constrain(size: Size) {
    this.size = { height: 1, width: label.length };
  },
  layout() {
  },
  render() {

  },
})