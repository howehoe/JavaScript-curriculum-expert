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

export const Chapter1_7: FC = () => (
  <Root>
    <Title>再帰関数と高階関数</Title>
    <ContentWrapper>
      <TextWrapper>
        <SubTitle>再帰関数</SubTitle>
        <Text>
          再帰関数は、自身の関数内で自身を呼び出すことで処理を繰り返す関数のことを指します。
          <br />
          例えば、nの階乗を求める再帰関数を以下に示します。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>function</CodeBlue> <CodeRed>functional</CodeRed>(n) ｛
            <br />
            &nbsp;if (n {"<"}= 1) ｛
            <br />
            &nbsp;&nbsp;<CodeBlue>return</CodeBlue> 1;
            <br />
            &nbsp;｝ <CodeBlue>else</CodeBlue>｛
            <br />
            &nbsp;&nbsp;<CodeBlue>return</CodeBlue> n *{" "}
            <CodeRed>functional</CodeRed>(n - 1);
            <br />
            &nbsp;｝
            <br />｝
          </pre>
        </CodeBlock>
        <Text>
          この再帰関数では、まずnが1以下になった場合に1を返し、それ以外の場合にはnとfactorial(n
          - 1)の積を返します。
          <br />
          このとき、factorial(n -
          1)は再帰的に自身を呼び出し、nが1以下になるまで繰り返し処理が行われます。
          <br />
          ※再帰関数では再帰の終了点を忘れないようにしてください。終了点がない場合無限ループに陥ります。
          <br />
          上記のコードではnが1以下の場合は、nの階乗が1であるため、1を返すように終了点を作成しています。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>高階関数</SubTitle>
        <Text>
          高階関数は、関数を引数として受け取り、または関数を返す関数のことを指します。
          <br />
          JavaScriptでは、関数を第一級オブジェクトとして扱えるため、変数に格納したり引数や戻り値として指定して高階関数を簡単に実装することができます。
          <br />
          Javascriptで普段お世話になるような下記の関数(forEach, map,
          filter...)もみんな、高階関数です。
          <br />
          例えば、以下のような高階関数を考えることができます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>function</CodeBlue> <CodeRed>multiplyBy</CodeRed>(factor)
            ｛
            <br />
            &nbsp;<CodeBlue>return</CodeBlue> function (number) ｛
            <br />
            &nbsp; &nbsp;<CodeBlue>const</CodeBlue> total = number * factor;
            <br />
            &nbsp; &nbsp;console.<CodeRed>log</CodeRed>(total)
            <br />
            &nbsp;｝
            <br />｝
            <br />
            <br />
            <CodeRed>multiplyBy</CodeRed>(3)(4) //結果は12
          </pre>
        </CodeBlock>
        <Text>
          この高階関数multiplyByは、数値を引数として受け取り、その数値を指定された係数で乗算して返す関数を返します。
          <br />
          つまり「「numberを引数に取る新しい関数」を返す関数」になります。
          <br />
          "(~~)"を2回連続してつなげているのは、引数を1つ適用して返ってきた関数に、さらに引数を渡しているからです。
          <br />
          以下は、この高階関数を使って新しい関数を生成し、それを使って計算する例です。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> double = <CodeRed>multiplyBy</CodeRed>(2)
            // 係数が2の場合の関数を生成
            <br />
            <CodeBlue>const</CodeBlue> triple = <CodeRed>multiplyBy</CodeRed>(3)
            // 係数が2の場合の関数を生成
            <br />
            <br />
            console.log(<CodeRed>double</CodeRed>(5)) // 結果は10
            <br />
            console.log(<CodeRed>triple</CodeRed>(5)) // 結果は15
          </pre>
        </CodeBlock>
        <Text>
          この例では、multiplyBy関数が新しい関数を生成して返しています。
          <br />
          そして、multiplyBy(2)を呼び出すと、数値を2倍にする関数が返されます。
          <br />
          これをdoubleという変数に代入することで、double(5)を呼び出すと、5を2倍にした10が返されます。
          <br />
          同様に、multiplyBy(3)を呼び出して返された関数をtripleという変数に代入し、triple(5)を呼び出すと、5を3倍にした15が返されます。
          <br />
          このように、高階関数を使うことで、関数を動的に生成して利用することができます。
          <br />
          また、高階関数は関数の再利用性を高め、コードの簡潔さを保つことができます。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>チャレンジ課題</SubTitle>
        <Text>
          再帰関数を使って、引数xに対して、xが偶数の場合はxを2で割り、奇数の場合はxに3をかけて1を足します。
          <br />
          この操作を繰り返して初期のxに戻るまでの回数を再帰関数をconsole.logで表示させてください
        </Text>
      </TextWrapper>
    </ContentWrapper>
  </Root>
)
