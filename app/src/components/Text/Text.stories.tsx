import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "@/components/Text/Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasePrimary: Story = {
  args: {
    children: "Today's weather is sunny.",
    size: "base",
    color: "primary",
  },
};

export const SmallPrimary: Story = {
  args: {
    children: "warning: this is protect",
    size: "sm",
    color: "tertiary",
  },
};


export const LargeSecondary: Story = {
  args: {
    children: "Tech List",
    size: "lg",
    color: "secondary",
  },
};

export const ExtraLarge4Title: Story = {
  args: {
    children: "Shirakasu Portfolio",
    size: "xl4",
    color: "title",
  },
};
