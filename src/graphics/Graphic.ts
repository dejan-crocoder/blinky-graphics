import { Point, Size } from "../Math";

export interface Graphic {
  size: Size;
  position: Point;
  constrain(size: Size): void;
  layout(): void;
  render(): void;
}