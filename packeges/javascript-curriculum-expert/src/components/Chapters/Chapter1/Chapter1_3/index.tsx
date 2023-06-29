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

export const Chapter1_3: FC = () => (
  <Root>
    <Title>関数定義の注意点</Title>
    <ContentWrapper>
      <SubTitle>関数定義の注意点</SubTitle>
      <Text>
        関数定義については明確な言語としてのルール以外に以下のような点を意識すると可読性やメンテナンス性が高まります。
        <br />
        プロジェクトによっては更に細かいルールや文化があるため参画時に確認しておくと良いです。
      </Text>
      <TextWrapper>
        <Text>
          1. 関数名:
          適切な関数名を付けることで、関数の目的や動作が明確になります。
          <br />
          <br />
          2. 引数:
          関数が受け取る引数の数や型を定義し、必要な情報を適切に渡すことができます。
          <br />
          <br />
          3. 返り値:
          関数がどのような値を返すかを明示することで、関数を呼び出した後の処理がスムーズになります。
          <br />
          <br />
          4. 副作用:
          関数が外部の状態を変更する副作用を持つ場合は、そのことを明示し、意図しない結果が起こらないようにします。
          <br />
          <br />
          5. 再利用性:
          他の場所でも同じ機能を必要とする可能性がある場合、関数を再利用できるように設計します。
          <br />
          <br />
          6. インデントと読みやすさ:
          関数内のコードを適切にインデントし、読みやすく保つことで、コードの理解やメンテナンスがしやすくなります。
          <br />
          <br />
          7. エラーハンドリング:
          関数がエラーを発生させる可能性がある場合、エラーハンドリングを行い、適切なエラーメッセージを提供します。
          <br />
          <br />
          8. ドキュメンテーション:
          関数の目的や使用方法、パラメータの説明、返り値の説明などをドキュメントとして記述し、関数の利用者が理解しやすくします。
          <br />
          <br />
          9. パフォーマンス:
          関数の処理が効率的であることを考慮し、必要な場合は最適化を行います。
        </Text>
      </TextWrapper>
      <TextWrapper>
        <SubTitle>JSDocを仕様した関数の説明の作成</SubTitle>
        <Text>
          JSDocはJavaScriptのコード内で使用されるドキュメンテーションコメントの形式です。
          <br />
          JSDocコメントは特定のタグや構文を使用して関数、変数、クラスなどの要素に関する情報を記述します。
          <br />
          以下にJSDocの基本的な構文と一般的なタグの使用方法を説明します。
          <br />
          JSDocコメントは /** と */で囲まれたブロックコメントとして書かれます。
        </Text>
        <CodeBlock>
          <pre>
            /**
            <br />
            * 2つの数値を足し合わせる関数
            <br />
            * @param ｛number｝ a - 最初の数値
            <br />
            * @param ｛number｝ b - 2番目の数値
            <br />
            * @returns ｛number｝ - 足し合わせた結果
            <br />
            */
            <br />
            <br />
            <CodeBlue>function</CodeBlue> <CodeRed>add</CodeRed> (a, b) ｛
            <br />
            <CodeBlue>return</CodeBlue> a + b ;
            <br /> ｝
            <br />
          </pre>
        </CodeBlock>
        <Text>
          JSDocコメント内では、特定のタグを使用して情報を記述します。
          <br />
          よく使用されるJSDocのタグには以下のようなものがあります。
        </Text>
        <Text>
          <br />
          ・ @param: 関数のパラメータに関する情報を記述します。
          <br />
          ・ @returns or @return: 関数の返り値に関する情報を記述します。
          <br />・ @throws or @exception:
          関数がスローする例外に関する情報を記述します。 <br />
          ・ @typedef: カスタムな型定義を作成します。
          <br />
          ・ @property: オブジェクトのプロパティに関する情報を記述します。
          <br />・ @description: 追加の説明や詳細な情報を記述します。
        </Text>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      <Text>作成済みのJSdocを参考に関数を作成してください</Text>
      <Text>作成済みの関数に対してJSDocで関数の説明を作成してください</Text>
    </ContentWrapper>
  </Root>
)
