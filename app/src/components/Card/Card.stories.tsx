import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from "@/components/Card/Card";

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "This is the content of the card.",
    imageUrl: "http://www.baltana.com/animals/cute-cat-images-07756.html",
  },
};