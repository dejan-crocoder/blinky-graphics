import { Component } from "./graphics/Component";
import { Text } from "./graphics/Text";

const App = Component(() => {


  return Column({
    children: [
      Menu({ labels: ['a', 'b', 'c'] })
    ]
  })
});

const Menu = Component(({ labels }: { labels: string[] }) => {
  return Text(labels[0])
})