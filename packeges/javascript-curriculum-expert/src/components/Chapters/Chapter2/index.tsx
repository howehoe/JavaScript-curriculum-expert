import Link from "next/link"
import { FC, Fragment } from "react"

export const Chapter2: FC = () => (
  <Fragment>
    <p>2.非同期処理</p>
    <ul>
      <li>
        <Link href="../Chapter2/Chapter2_1">
          <p>2-1:非同期処理とは</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter2/Chapter2_2">
          <p>2-2:コールバック関数</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter2/Chapter2_3">
          <p>2-3:Promiseオブジェクト</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter2/Chapter2_4">
          <p>2-4:async await構文</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter2/Chapter2_5">
          <p>2-5:APIを使用したバックエンドとの疎通</p>
        </Link>
      </li>
    </ul>
  </Fragment>
)
