import Link from "next/link"
import { FC, Fragment } from "react"

export const Chapter3: FC = () => (
  <Fragment>
    <p>3.組込みオブジェクト</p>
    <ul>
      <li>
        <Link href="../Chapter3/Chapter3_1">
          <p>3-1:組込みオブジェクトとは</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter3/Chapter3_2">
          <p>2-2:コールバック関数</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter3/Chapter3_3">
          <p>2-3:Promiseオブジェクト</p>
        </Link>
      </li>
      <li>
        <Link href="../Chapter3/Chapter3_4">
          <p>2-4:async await構文</p>
        </Link>
      </li>
    </ul>
  </Fragment>
)
