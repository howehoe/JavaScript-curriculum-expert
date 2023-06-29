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
          <p>1-3:関数定義の注意点</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter1/Chapter1_4">
          <p>1-4:Thisとは何か</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter1/Chapter1_5">
          <p>1-5:変数と引数</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter1/Chapter1_6">
          <p>1-6:スプレッド構文</p>
        </Link>
      </li>
    </ul>
  </Fragment>
)
