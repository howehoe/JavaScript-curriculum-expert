import { FC, Fragment } from "react"
import {
  Title,
  SubTitle,
  Text,
  TextWrapper,
  ContentWrapper,
  CodeBlock,
  CodeBlue,
  CodeRed,
} from "../../../../const/CommonStyledComponent"

export const Chapter1_1: FC = () => (
  <Fragment>
    <Title>関数:繰り返し利用するコードを一箇所にまとめる</Title>
    <ContentWrapper>
      <div>
        <SubTitle>関数とは</SubTitle>
        <TextWrapper>
          <Text>
            JavaScriptにおける関数は、複数の処理をまとめて1つの処理にまとめることができる機能です。
            <br />
            関数を定義することで、同じ処理を何度も書かなくて済み、コードの重複を減らすことができます。
            <br />
            また、関数は再利用性が高く、一度定義すれば複数の場所で使うことができます。
            <br />
            関数を定義するには、以下のような構文を使います。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>関数名</CodeRed>{" "}
              (引数1,引数2)｛
              <br />
              処理
              <br />
              <CodeBlue>return</CodeBlue> 戻り値
              <br />｝
            </pre>
          </CodeBlock>
          <Text>例えば、次のような関数を定義することができます。</Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>add</CodeRed> (a,b)｛
              <br />
              <CodeBlue>return</CodeBlue> a + b;
              <br />｝
            </pre>
          </CodeBlock>
          <Text>
            この関数は、2つの引数を受け取り、それらを足し合わせた値を返します。
            <br />
            関数を呼び出す場合は、以下のように関数名と引数を指定します。
          </Text>
          <CodeBlock>
            <pre>
              <CodeRed>add</CodeRed> (2,3); // 結果は5
            </pre>
          </CodeBlock>
          <Text>
            この例では、add関数に2と3を渡しています。add関数内でそれらを足し合わせた結果、5が返されます。
            <br />
            また、関数内で定義された変数は、関数外で参照することができません。これを「スコープ」と呼びます。関数内で定義した変数は、その関数内でのみ有効です。
            <br />
            関数は、プログラミングにおいて非常に重要な機能の一つです。関数をうまく使うことで、コードの重複を減らし、効率的なコードを書くことができます。
          </Text>
        </TextWrapper>
      </div>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>受け取った引数が偶数か奇数かを判定する関数を作成してください</Text>
    </ContentWrapper>
  </Fragment>
)
