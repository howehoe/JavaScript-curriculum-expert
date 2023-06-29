import { FC } from "react"
import {
  Title,
  SubTitle,
  Text,
  TextWrapper,
  ContentWrapper,
  CodeBlock,
  CodeBlue,
  CodeRed,
  Root,
} from "../../../../const/CommonStyledComponent"

export const Chapter1_5: FC = () => (
  <Root>
    <Title>変数と引数</Title>
    <ContentWrapper>
      <Text>
        初めに変数と関数の引数については初級カリキュラムにて扱っているので
        <a href="https://naogo705.github.io/JavaScript-curriculum/2-3.html">
          こちら
        </a>
        を参考にしてください
      </Text>
      <SubTitle>変数の参照（スコープ）</SubTitle>
      <Text>
        JavaScriptにおいて、変数のスコープはその変数がどこで定義されたかによって決まります。
        <br />
        スコープとは、変数が有効である範囲のことを指します。変数を宣言する際にはスコープ範囲を意識することでコードの可読性や保守性が高まります。
        <br />
        JavaScriptには、以下のように4つのスコープがあります。
      </Text>
      <TextWrapper>
        <Text>
          1. グローバルスコープ:
          <br />
          - プログラムのどこからでもアクセス可能
          <br />
          - varで宣言された変数や、関数宣言はグローバルスコープに属する
          <br />
          <br />
          2. 関数スコープ:
          <br />
          - 関数内で宣言された変数は、関数内でのみアクセス可能
          <br />
          - 関数の引数も関数スコープに属する
          <br />
          <br />
          3. ブロックスコープ:
          <br />
          -
          if文やfor文などのブロック内で宣言された変数は、そのブロック内でのみアクセス可能
          <br />
          - varではなく、letやconstで宣言した変数は、ブロックスコープに属する
          <br />
          <br />
          4. モジュールスコープ:
          <br />
          - モジュール内で宣言された変数は、そのモジュール内でのみアクセス可能
          <br />
          -
          モジュールスコープは、ES6のimport/export構文を使用することで作成される
          <br />-
          モジュールとは、関連するコードをまとめてカプセル化したもので、独立して他のコードと区別される単位です。
        </Text>
        <Text>
          スコープには、外側のスコープから内側のスコープへアクセスすることができますが、内側のスコープから外側のスコープへはアクセスできません。
          <br />
          また、同じスコープ内で同じ名前の変数を宣言することはできません。
          <br />
          それぞれのスコープ内で一意の名前を持つ変数を宣言する必要があります。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>引数のさまざまな記述方</SubTitle>
        <Text>
          JavaScriptにおける関数の引数には、いくつかの記述方法があります。
          <br />
          ES2015以降で追加された記述方法はモダンな現場ではよく目にするのでその機能について知識として持っておくとコードをみた際にどのような引数を期待しているのかがわかるようになります。
        </Text>
        <TextWrapper>
          <Text>
            通常の引数
            <br />
            最も基本的な引数の渡し方です。以下は、aとbの2つの引数を受け取る関数の例です。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>sum</CodeRed>(a,b) ｛
              <br />
              <CodeBlue>return</CodeBlue> a + b;
              <br />｝
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          <Text>
            デフォルト引数
            <br />
            引数に初期値を設定することができます。引数が渡されなかった場合に、初期値が使われます。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>greet</CodeRed>(name =
              "Guest") ｛
              <br />
              <CodeBlue>return</CodeBlue> Hello $｛name｝!;
              <br />｝
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          <Text>
            残余引数を使用した可変長引数関数への引数の渡し方
            <br />
            JavaScriptにおいて、残余引数（rest
            parameters）を使用すると、関数に可変長の引数を渡すことができます。
            <br />
            残余引数は、関数定義の引数リストで 「...」
            構文を使用して宣言されます。
            <br />
            ※可変長引数関数とは関数が可変長の引数を受け取ることができる特殊な関数です。
            <br />
            可変長引数関数では、関数の引数の数が固定ではなく、任意の数の引数を受け取ることができます。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>sum</CodeRed>(...numbers)
              ｛
              <br />
              <CodeBlue>let</CodeBlue> total = 0;
              <CodeBlue>for</CodeBlue> (let number pf numbers) ｛
              <br />
              total += number;
              <br />｝<CodeBlue>return</CodeBlue> total;
              <br />｝
              <br />
              <br />
              console.<CodeRed>log</CodeRed>(<CodeRed>sum</CodeRed>(1,2,3,))
              //結果6
              <br />
              console.<CodeRed>log</CodeRed>(<CodeRed>sum</CodeRed>(1,2,3,4,5))
              //結果15
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          <Text>
            分割代入を用いた引数の受け取り
            <br />
            分割代入を使うことで、複数の引数を一度に受け取ることができます。引数が多い場合や、オブジェクトや配列を受け取る場合に便利です。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>showFullName</CodeRed>(
              ｛firstName, LastName｝) ｛
              <br />
              console.<CodeRed>log</CodeRed>($｛firstName｝ $｛lastName｝);
              <br />｝
              <br />
              <br />
              <CodeRed>showFullName</CodeRed>(｛ firstName: "taro", lastName:
              "yamada"｝) //taro yamada
            </pre>
          </CodeBlock>
        </TextWrapper>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>作成済みのJSdocを参考に関数を作成してください</Text>
      <Text>作成済みの関数に対してJSDocで関数の説明を作成してください</Text>
    </ContentWrapper>
  </Root>
)
