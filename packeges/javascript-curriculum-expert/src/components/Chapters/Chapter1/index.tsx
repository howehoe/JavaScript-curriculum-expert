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
      <li>
        <Link href="../Chapter1/Chapter1_2">
          <p>1-2:関数の定義方法</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter1/Chapter1_3">
          <p>関数定義の注意点</p>
        </Link>
      </li>
      <li>Thisとは何か</li>
      <li>変数と引数</li>
      <li>スプレッド構文</li>
    </ul>
  </Fragment>
)
