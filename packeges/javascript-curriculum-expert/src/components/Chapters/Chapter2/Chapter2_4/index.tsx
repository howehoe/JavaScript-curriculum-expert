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

export const Chapter2_4: FC = () => (
  <Root>
    <Title>非同期関数（async await構文）</Title>
    <ContentWrapper>
      <TextWrapper>
        <SubTitle>async awaitとは</SubTitle>
        <Text>
          async awaitはES2017で追加された比較的新しい機能です。
          <br />
          ちなみにasync
          awaitはPromiseの糖衣構文なため、全く別物というわけではないです。
          <br />
          イメージとしては基本的にはPromiseの機能を使っていますが、書き方や機能性を拡張したものがasync
          awaitといった感じです。
        </Text>
        <SubTitle>async awaitの使い方</SubTitle>
        <Text>
          async
          awaitキーワードを関数の宣言の前に付けることで、その関数は非同期関数として宣言されます。そして、awaitキーワードを非同期処理が必要な箇所に挿入し、処理が完了するまで待ちます。
          <br />
          非同期処理の結果はPromiseオブジェクトとして返されます。
          <br />
          そのため、New
          Promiseで新たにPromiseオブジェクトを作成することなく非同期処理の内容にアクセスできます。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>async</CodeBlue> <CodeBlue>function</CodeBlue>{" "}
            <CodeRed>fetchData</CodeRed>() ｛
            <br />
            &nbsp;<CodeBlue>const</CodeBlue> response ={" "}
            <CodeBlue>await</CodeBlue> <CodeRed>fetch</CodeRed>
            ('https://api.example.com/data');
            <br />
            &nbsp;<CodeBlue>const</CodeBlue> data = <CodeBlue>await</CodeBlue>{" "}
            response.<CodeRed>json</CodeRed>()
            <br />
            &nbsp;<CodeBlue>return</CodeBlue> data;
            <br />
            ｝;
          </pre>
        </CodeBlock>
        <Text>
          この例では、fetchData()関数は非同期関数として宣言され、fetch()関数でデータを取得しています。
          <br />
          awaitキーワードがfetch()の前に挿入されているため、fetch()が完了するまで次の行には進まず、
          <br />
          処理が完了したらレスポンスオブジェクトが返されます。
          <br />
          次に、レスポンスのjson()メソッドを呼び出して、データをJSON形式で取得しています。最後に、取得したデータをreturn文で返しています。
        </Text>
        <TextWrapper>
          <SubTitle>async functionの特徴</SubTitle>
          <Text>
            async functionは呼び出されるとPromiseを返す。
            <br />
            async functionが値をreturnした場合はその値をresolveする。
            <br />
            async functionが例外をthrowした場合はその値をrejectする。
          </Text>
        </TextWrapper>
        <TextWrapper>
          <SubTitle>awaitの特徴</SubTitle>
          <Text>
            await 式は「右辺の Promise インスタンスが Settled 状態(Fulfilled
            または Rejected 状態)になるまで非同期処理の完了を待ち、
            <br />
            Promise インスタンスの状態が変化したらその Promise
            インスタンスの**評価結果を値として返す**」という機能を持ちます。
            <br />
            もう少し具体的に説明すると、Promise`の結果（resolveもしくはreject）が返されるまで待機する（処理を一時停止する）演算子のことです。
            <br />
            <br />
            ただし、ここで重要な注意点として awaitはasync
            functionの中でしか使えない、という制約があります。
            <br />
            ※ES2022のアップデートでトップレベルでのawaitが使用できるようになりました。つまり、awaitはasyncの外側でも使用できるということです。
          </Text>
        </TextWrapper>
        <TextWrapper>
          <SubTitle>Promiseとの違い</SubTitle>
          <Text>
            Promiseとasync
            functionでどのように書き方が異なるのか、サンプルコードで見てみましょう。
          </Text>
          <Text>Promiseの場合</Text>
          <CodeBlock>
            <pre>
              <CodeBlue>function</CodeBlue> <CodeRed>promiseFunction</CodeRed>()
              ｛
              <br />
              &nbsp;<CodeRed>return</CodeRed> <CodeBlue>new</CodeBlue>{" "}
              <CodeRed>Promise</CodeRed>((resolve, reject)) ={">"}｛
              <br />
              &nbsp; &nbsp;<CodeBlue>try</CodeBlue> ｛
              <br />
              &nbsp; &nbsp; &nbsp;<CodeRed>resolve</CodeRed>("resolve")
              <br />
              &nbsp; &nbsp;｝<CodeBlue>catch</CodeBlue> (e) ｛
              <br />
              &nbsp; &nbsp; &nbsp;<CodeRed>reject</CodeRed>("reject")
              <br />
              &nbsp; &nbsp;｝
              <br />
              &nbsp; ｝)
              <br />｝
            </pre>
          </CodeBlock>
          <Text>asyncの場合</Text>
          <CodeBlock>
            <pre>
              <CodeBlue>async</CodeBlue> <CodeBlue>function</CodeBlue>{" "}
              <CodeRed>asyncFunction</CodeRed>() ｛
              <br />
              &nbsp;<CodeBlue>try</CodeBlue> ｛
              <br />
              &nbsp; &nbsp;<CodeBlue>return</CodeBlue>("resolve")
              <br />
              &nbsp;｝<CodeBlue>catch</CodeBlue> (e) ｛
              <br />
              &nbsp; &nbsp;<CodeBlue>throw</CodeBlue>("reject")
              <br />
              &nbsp;｝
              <br />｝
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          どうでしょうか。async functionの方がreturn new
          Promise()がいらなくなったので、見た目がスッキリしていると思います。
          <br />
          Promiseがなくなったことで、resolve、rejectが引数に取れなくなったので、returnとthrowがその代わりとなっています。
          <br />
          ちなみにPromiseで紹介したthenやcatchもasync内で使用できます。
        </TextWrapper>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
      1.fetchDataという関数があります。この関数は非同期なAPIリクエストを行い、成功時にはレスポンスデータを解決するPromiseを返します。
      <br />
      2.fetchData関数を呼び出してデータを取得し、成功した場合は「データの取得に成功しました:
      [データ]」というメッセージをコンソールに出力します。
      <br />
      3. 失敗した場合は「データの取得に失敗しました:
      [エラーメッセージ]」というメッセージをコンソールに出力します。
    </ContentWrapper>
  </Root>
)
