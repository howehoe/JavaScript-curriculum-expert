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

export const Chapter1_6: FC = () => (
  <Root>
    <Title>スプレッド構文</Title>
    <ContentWrapper>
      <Text>
        スプレッド構文は、配列やオブジェクトの要素を展開して、別の配列やオブジェクトに組み込むための構文です。
        <br />
        ES6以降のJavaScriptで導入された構文の一つで、以下のような使い方ができます。
      </Text>
      <TextWrapper>
        <SubTitle>配列のスプレッド構文</SubTitle>
        <Text>
          配列の要素を展開して、別の配列に組み込むことができます。
          <br />
          例えば、以下のようにして2つの配列を結合することができます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> arr1 = [1, 2, 3];
            <br />
            <CodeBlue>const</CodeBlue> arr1 = [4, 5, 6];
            <br />
            <CodeBlue>const</CodeBlue> arr1 = [<CodeRed>...arr1</CodeRed>,{" "}
            <CodeRed>...arr2</CodeRed>]; //[1,2,3,4,5,6]
            <br />
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>オブジェクトのスプレッド構文</SubTitle>
        <Text>
          オブジェクトのプロパティを展開して、別のオブジェクトに組み込むことができます。
          <br />
          例えば、以下のようにして2つのオブジェクトをマージすることができます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> obj1 = ｛1, 2, 3｝;
            <br />
            <CodeBlue>const</CodeBlue> obj1 = ｛3, 4, 5｝;
            <br />
            <CodeBlue>const</CodeBlue> obj1 = [<CodeRed>...obj1</CodeRed>,{" "}
            <CodeRed>...obj2</CodeRed>]; //[1,2,3,4,5,6]
            <br />
          </pre>
        </CodeBlock>
        <Text>
          また、スプレッド構文を使うことで、オブジェクトの一部のプロパティを変更することもできます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> obj1 = ｛a:1, b:2｝;
            <br />
            <CodeBlue>const</CodeBlue> obj1 = ｛<CodeRed>...obj1</CodeRed>,
            d:4｝;
            <br />
            console.log(obj2); // ｛ a: 1, b: 4, c: 3 ｝
            <br />
          </pre>
        </CodeBlock>
        <Text>
          ES2019以降では、配列やオブジェクトに対してスプレッド構文を使用することで、
          <br />
          オブジェクトや配列の要素を一つずつ取り出すことができるようになりました。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> arr = [1, 2, 3]
            <br />
            <CodeBlue>const</CodeBlue> [x, y, z] = <CodeRed>arr</CodeRed>
            <br />
            console.log(x, y, z); // 1,2,3
          </pre>
        </CodeBlock>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>二つのオブジェクトを一つにまとめてください</Text>
      <Text>
        そのまとめたオブジェクトの3番目と4番目の値をそれぞれ取り出して、ログとして表示してください
      </Text>
    </ContentWrapper>
  </Root>
)
