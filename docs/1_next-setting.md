<!-- おすすめの設定を新しく見つけたら追記 -->
# Next.jsアプリケーション(Tailwind-CSS)

## 前提条件

- Node.jsがインストール済み

## 対象読者

- Next.jsアプリケーションの開発未経験者
- Next.js × Tailwind-CSSの開発未経験者

## 開発環境構築

### Next.jsアプリケーションの作成

```shell
npx create-next-app@latest app
```

プロンプトで聞かれる内容は以下の通り

- TypeScript を使いますか？ → Yes（おすすめ）
- ESLint を使いますか？ → Yes
- Tailwind CSS を使いますか？ → Yes
- src/ ディレクトリ構成にしますか？ → Yes
- App Router（app/ ディレクトリ）を使いますか？ → Yes（Next.js 13+ の推奨構成）
- import Aliasのカスタマイズはしますか(デフォルト: @/*) → No

### 最小構成になるよう編集

`src/app`ディレクトリの`page.tsx`を以下の内容に変更．

```TypeScript
export default function Home() {
  return (
    <>
      <h1 className="text-green-600 text-center bg-amber-50 text-7xl">
        Hello World!
      </h1>
    </>
  );
}
```

`src/app`ディレクトリの`globals.css`を以下の内容に変更．

```Css
@import "tailwindcss";
```
`src/app`ディレクトリの`favicon.ico`を削除．

### Tailwind-cssの動作確認

実際に開発用サーバーを起動

```shell
npm run dev
```

`Hello World!`が出力されることを確認．
さらに，文字色が緑緑色になっていること確認．

以上