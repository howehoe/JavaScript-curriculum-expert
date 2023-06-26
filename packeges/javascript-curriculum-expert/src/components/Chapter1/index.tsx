import Link from "next/link"
import { FC, Fragment } from "react"

export const Chapter1: FC = () => (
  <Fragment>
    <p>1.関数と変数</p>
    <ul>
      <li>
        <Link href="../Chapter1/Chapter1_1">
          <p>1-1:関数:繰り返し利用するコードを一箇所にまとめる</p>
        </Link>
      </li>
      <li>関数の定義方法</li>
      <li>再帰関数と高階関数</li>
      <li>関数定義の注意点※thisの立ち振る舞いについて</li>
      <li>変数と引数</li>
      <li>スプレッド構文</li>
    </ul>
  </Fragment>
)
