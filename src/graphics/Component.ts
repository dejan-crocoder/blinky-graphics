import { ZeroPoint, ZeroSize } from "../Math";
import { Graphic } from "./Graphic"

export interface ComponentDefinition<PropsType = {}> {
  (props: PropsType): Graphic;
}
export const Component = <T = {}>(component: ComponentDefinition<T>) => (componentProps:T): Graphic => {

  const componentGraphic = component(componentProps);

  return {
    size: ZeroSize,
    position: ZeroPoint,
    constrain(size) {
      componentGraphic.constrain(size);
      this.size = size;
    },
    layout() {
      // what is position ?
      componentGraphic.layout();
    },
    render() {
      componentGraphic.render();
    },
  }
}