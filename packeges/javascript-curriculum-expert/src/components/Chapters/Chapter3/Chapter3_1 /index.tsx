import { FC } from "react"
import {
  Title,
  SubTitle,
  Text,
  TextWrapper,
  ContentWrapper,
  Root,
} from "../../../../const/CommonStyledComponent"

export const Chapter3_1: FC = () => (
  <Root>
    <Title>組込みオブジェクトについて</Title>
    <ContentWrapper>
      <TextWrapper>
        <Text>
          JavaScriptの実行環境にあらかじめ組み込まれているオブジェクトのことを「ビルトインオブジェクト」と呼びます。
          <br />
          JavaScriptでは、特定の処理を行うための変数や関数（メソッド）をまとめ、これに名前を付けて管理できるようになっています。いくつか代表的なものを以下に挙げます。
        </Text>
        <Text>
          1. Arrayメソッド:
          <br />
          配列に対して操作を行うメソッドが豊富にあります。代表的なものには、push、pop、shift、unshift、splice、slice、map、filter、reduceなどがあります。
          <br />
          <br />
          2. Stringメソッド:
          <br />
          文字列に対して操作を行うメソッドが豊富にあります。代表的なものには、charAt、indexOf、replace、split、substring、toLowerCase、toUpperCaseなどがあります。
          <br />
          <br />
          3. Mathメソッド:
          <br />
          数学的な操作を行うメソッドが豊富にあります。代表的なものには、round、floor、ceil、max、min、random、absなどがあります。
          <br />
          <br />
          4. Dateメソッド:
          <br />
          日付に対して操作を行うメソッドが豊富にあります。代表的なものには、getFullYear、getMonth、getDate、getDay、getHours、getMinutes、getSecondsなどがあります。
          <br />
          <br />
          5. Objectメソッド:
          <br />
          オブジェクトに対して操作を行うメソッドが豊富にあります。代表的なものには、assign、keys、values、freeze、seal、is、defineProperty、hasOwnPropertyなどがあります。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text>
          これらの組み込みメソッドを使用することで、JavaScriptのプログラムを効率的かつ簡潔に書くことができます。
          <br />
          それぞれのメソッドについて詳しく説明したいところですが、全てを網羅的に説明することは尺の都合上難しいので割愛します。
          <br />
          組み込みメソッドは、上で区分したように配列要素にしか適用できないものや文字列に対してのみ使用できるものなど専用性あるのが特徴です。
          <br />
          全てを網羅しておけるとスマートですが、おすすめは思いついた処理（文字を全て大文字に変換したいや配列に受け取った要素を追加したいけど配列名はそのままにしたい。）
          <br />
          などを実装する際に、まずは組み込みメソッドで似たような機能がないかを調べてみることです。
          <br />
          （今の例だと、toUpperCase、pushで解決できます）
        </Text>
      </TextWrapper>
    </ContentWrapper>
  </Root>
)
