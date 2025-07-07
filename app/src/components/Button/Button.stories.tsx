import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CustomButton } from "@/components/Button/Button";

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
}