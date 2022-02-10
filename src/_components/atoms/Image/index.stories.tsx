/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageComponent from ".";

const ImageTemplate = {
  title: "Components/Atoms",
  component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

export const Image: ComponentStory<typeof ImageComponent> = (args: any) => (
  <ImageComponent {...args} />
);

Image.args = {
  height: 300,
  width: 280,
  src: "/assets/img1.png",
  sx: { border: "1px solid grey" },
};

export default ImageTemplate;
