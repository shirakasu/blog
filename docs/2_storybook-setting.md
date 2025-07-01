# Storybook 導入手順（Next.js + TypeScript + Tailwind CSS）

## 前提条件

- Next.js(Tailwind-CSS)の設定が完了済み

## 対象読者

- storybookを用いた開発未経験者

## Storybookとは...?

そもそもStorybookとは「UIコンポーネントカタログ」の一種で，フロントエンド開発において，必要不可欠なサービスである．
React，Vue，Angularなど様々なフレームワークに対応していて，無料で利用することができる．

Storybookを使用するメリットを大まかにまとめると以下の通り．

- コンポーネント単体でブラウザに表示可能なため，レイアウトや挙動を確認しながらコーディングができる．
- 画面からUIの操作が可能なため，ソースコードが読めない方でも扱える．
- UIがどのような動きをするかすぐに確認できる．
- バックエンドとは切り離して作ることができるため，バックエンドの実装を待たずとも開発できる．

## storybookの導入

### パッケージのインストール

以下のコマンドでstorybookのインストールを行う．
初回実行時，Next.js プロジェクトに合わせて設定を自動で行ってくれる．

```shell
npx storybook@latest init
```

この時点で，以下のコマンドを実行するとstorybookの画面をブラウザで確認できる．

```shell
npm run storybook
```