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

export const Chapter1_4: FC = () => (
  <Root>
    <Title>thisとは何か</Title>
    <ContentWrapper>
      <SubTitle>thisとは何か</SubTitle>
      <Text>
        "this"は日本語で"これ"という意味ですが、JavaScriptにおける"this"は"このオブジェクト"と読み替えられます。
      </Text>
      <TextWrapper>
        <SubTitle>thisの扱い方について</SubTitle>
        <Text>
          thisはコードを書くタイミングではスコープの範囲が分かりますが、後から見ると何を指しているのかが分かりにくくなってしまうことも多々あります。
          <br />
          扱い方について説明していますが、実際に様々なシチュエーションで使用しながら覚えていくのが一番の勉強法かと思います。
          <br />
          JavaScriptにおけるthisは、関数が呼び出された際のコンテキストオブジェクトを指します。
          <br />
          thisの値は、呼び出し元のオブジェクトによって異なります。
          <br />
          thisの値を理解することは、オブジェクト指向プログラミングにおいて非常に重要です。
          <br />
          以下に、thisの値がどのように決定されるかについて説明します。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text>
          グローバルコンテキスト
          <br />
          グローバルコンテキスト内の関数で使用されたthisは、グローバルオブジェクトを指します。ブラウザの場合、グローバルオブジェクトはwindowオブジェクトです。
        </Text>
        <CodeBlock>
          <pre>
            console.log(<CodeBlue>this</CodeBlue>) // 結果はWindowが出力される
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <Text>
          関数内のコンテキスト
          <br />
          関数内で使用されたthisの値は、その関数が呼び出されたときのオブジェクトによって異なります。
          <br />
          関数を直接呼び出した場合、thisの値はグローバルオブジェクトを指します。
          <br />
          しかし、オブジェクト内でメソッドとして定義された関数が呼び出された場合、thisの値はそのオブジェクトを指します。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> person = ｛
            <br />
            firstName: 'John',
            <br />
            lastName: 'Doe',
            <br />
            fullName: <CodeBlue>function</CodeBlue>() ｛
            <br />
            console.log(this.firstName + ' ' + <CodeBlue>this</CodeBlue>
            .lastName);
            <br />
            ｝
            <br />
            ｝;
            <br />
            person.fullName(); // 結果：John Doe
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <Text>
          イベントハンドラ内のコンテキスト
          <br />
          イベントハンドラ内で使用されたthisの値は、イベントを発生させた要素を指します。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> document.<CodeRed>querySelector</CodeRed>
            ('button');
            <br />
            button.<CodeRed>addEventListener</CodeRed>('click' , function() ｛
            <br />
            console.log(<CodeBlue>this</CodeBlue>);
            <br />
            ｝);
          </pre>
        </CodeBlock>
      </TextWrapper>
      <TextWrapper>
        <Text>
          このように、thisの値は非常に複雑であり、コンテキストによって異なることがわかります。
          <br />
          thisの値を適切に理解して使いこなすことは、JavaScriptにおける重要なスキルの一つです。
        </Text>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>以下のコード見て最後の質問に解答してください</Text>
    </ContentWrapper>
  </Root>
)
