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

export const Chapter1_2: FC = () => (
  <Fragment>
    <Title>関数の定義方法</Title>
    <ContentWrapper>
      <SubTitle>関数の定義方法</SubTitle>
      <Text>
        JavaScriptで関数を定義する方法にはいくつかありますが、以下では代表的な3つの方法について説明します。
      </Text>
      <TextWrapper>
        <SubTitle>1.function文を使った方法</SubTitle>
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
        <Text>
          上記のように、functionキーワードを使って関数を定義する方法です。関数名、引数、処理、戻り値を指定します。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>2.関数式を使った方法</SubTitle>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> <CodeRed>関数名</CodeRed> ={" "}
            <CodeBlue>function</CodeBlue> (引数1,引数2)｛
            <br />
            処理
            <br />
            <CodeBlue>return</CodeBlue> 戻り値
            <br />｝
          </pre>
        </CodeBlock>
        <Text>
          上記は関数を変数に代入する方法です。呼び出す際は今まで通り関数名と任意の引数を渡す形で使用できます。
          <br />
          例えば、以下のような関数式を使った関数を定義することができます
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> <CodeRed>add</CodeRed> ={" "}
            <CodeBlue>function</CodeBlue> (a,b)｛
            <br />
            <CodeBlue>return</CodeBlue> a + b;
            <br />｝
            <br />
            <br />
            //作成した関数の呼び出し方法
            <br />
            <CodeRed>add</CodeRed> (1,4)
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>3.Arrow Function(アロー関数)を使った方法</SubTitle>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> <CodeRed>関数名</CodeRed> = (引数1,引数2)
            ={">"}｛
            <br />
            処理
            <br />
            <CodeBlue>return</CodeBlue> 戻り値
            <br />｝
          </pre>
        </CodeBlock>
        <Text>
          ES6から導入されたアロー関数を使って関数を定義する方法です。アロー関数は、簡潔でシンプルな書き方ができるため、現在では広く使われています。
          <br />
          例えば、以下のようなアロー関数を使った関数を定義することができます。
        </Text>
        <CodeBlock>
          <pre>
            (引数1,引数2) ={">"}｛
            <br />
            処理
            <br />
            <CodeBlue>return</CodeBlue> 戻り値
            <br />｝
          </pre>
        </CodeBlock>
        <Text>
          上記のように、アロー関数は関数名を省略して、引数と処理、戻り値を定義します。
          <br />
          また、処理が1行で済む場合は、{}を省略することもできます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> <CodeRed>add</CodeRed> = (a , b) ={">"} a
            + b ;
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>Thisの挙動</SubTitle>
        <Text>
          通常の関数とは異なり、アロー関数は自分自身のthisを持ちません。そのため、アロー関数内でthisを使用した場合、外側のスコープのthisが参照されます。
          <br />
          ※thisの挙動については別のチャプター（関数定義の注意点）で詳しく説明します。
        </Text>
        <Text>
          以上のように、いずれの方法でも、関数を定義することができます。
          <br />
          関数式やArrow
          Functionを使う場合、関数を変数に代入することができるため、柔軟なコーディングが可能です。
        </Text>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>
        1.
        functionを使って、引数として与えられた文字列を逆順にして返す関数を作成してください。
      </Text>
      <Text>
        2.
        アロー関数を使って、引数として与えられた二つの数値を掛け合わせる関数を作成してください。
      </Text>
      <Text>
        3.アロー関数を使って、引数として与えられた数値の配列の中で最大値を返す関数を作成してください。
      </Text>
    </ContentWrapper>
  </Fragment>
)
