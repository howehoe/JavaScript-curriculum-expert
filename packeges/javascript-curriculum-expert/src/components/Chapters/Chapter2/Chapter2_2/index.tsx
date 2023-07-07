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

export const Chapter2_2: FC = () => (
  <Root>
    <Title>基本の型：コールバック関数</Title>
    <ContentWrapper>
      <TextWrapper>
        <Text>
          コールバック関数を用いた非同期処理はJavascriptのアップデートでPromiseが追加されるまでは主流の方法でした。
          <br />
          ただ、コールバック関数を使用した非同期処理には処理が複雑になる程ネストが深くなり、メンテナンス性が著しく悪くなるという欠点があります。
          <br />
          これをコールバック地獄と呼んだりもします。
          <br />
          ただ、非同期処理について体系的に学ぶ上でコールバック関数から学ぶことで、
          <br />
          後述のPromiseやasyncなどが台頭した理由やアプローチについても理解度が変わってくるためカリキュラムとして扱うことにしました。
          <br />
          なので、実践向きの知識ではないかも知れませんが基礎として頭に入れておきましょう。
        </Text>
        <SubTitle>コールバック関数とは</SubTitle>
        <Text>
          JavaScriptでは、関数は変数として扱うことができます。
          <br />
          そのため、関数を引数として別の関数に渡すことができます。
          <br />
          この渡された関数が後から呼び出されることをコールバック関数と呼びます。
          <br />
          まず以下のコードをみてください。このコードでは、fetchDataという関数が非同期な処理を行い、1秒後にデータを取得します。
          <br />
          この関数は、コールバック関数を引数として受け取り、処理が完了した後にコールバック関数を呼び出して結果を返します。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>function</CodeBlue> <CodeRed>fetchData</CodeRed>(callback)
            ｛
            <br />
            &nbsp;// データの取得を模した非同期処理（例:
            1秒待ってからデータを取得する）
            <br />
            &nbsp;<CodeRed>setTimeout</CodeRed>(() ={">"} ｛
            <br />
            &nbsp; &nbsp;<CodeBlue>const</CodeBlue> data = ｛ id: 1, name: 'John
            Doe' ｝;
            <br />
            &nbsp; &nbsp;<CodeRed>callback</CodeRed>(<CodeBlue>null</CodeBlue>,
            data); // コールバック関数を呼び出して結果を返す
            <br />
            &nbsp;｝, 1000);
            <br />
            ｝
            <br />
            <br />
            // コールバック関数の定義
            <br />
            <CodeBlue>function</CodeBlue> <CodeRed>handleData</CodeRed>(error,
            data) ｛
            <br />
            &nbsp;if (error) ｛
            <br />
            &nbsp; &nbsp;console.<CodeRed>error</CodeRed>('An error occurred:',
            error);
            <br />
            &nbsp;｝ <CodeBlue>else</CodeBlue> ｛
            <br />
            &nbsp; &nbsp;console.<CodeRed>log</CodeRed>('Data received:', data);
            <br />
            &nbsp;｝
            <br />
            ｝
            <br />
            <br />
            // fetchData関数を呼び出し、コールバック関数を渡す
            <br />
            <CodeRed>fetchData</CodeRed>(handleData);
            <br />
          </pre>
        </CodeBlock>
        <Text>
          handleDataというコールバック関数は、エラーオブジェクトとデータを受け取り、エラーがあればエラーメッセージを表示し、データがあればデータをログとして表示します。
          <br />
          最後にhandleData関数を呼び出し、handleData関数をコールバック関数として渡しています。
          <br />
          このようにすることで、非同期な処理が完了した後に指定したコールバック関数が実行され、結果が処理されます。
          <br />
          このようにコールバック関数を使用することで、非同期な処理の完了をハンドリングし、結果を適切に処理することができます。
        </Text>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      仮のAPIのレスポンスを受け取るfetchData関数の続きを作成してください。
      <br />
      fetchData関数ではsetTimeoutを使用して仮のAPIリクエストを作成しています。
      <br />
      レスポンスの内容（400エラーか200レスポンス）によって処理を分岐する非同期処理をコールバック関数を使用して作成してください
    </ContentWrapper>
  </Root>
)
