import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from '@/components/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// 基本的なストーリー
export const Default: Story = {};

// モバイル表示の確認用
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

// 背景色が異なる親要素の中での見え方
export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-black p-10">
        <Story />
      </div>
    ),
  ],
};