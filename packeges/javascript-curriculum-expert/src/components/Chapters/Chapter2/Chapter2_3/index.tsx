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

export const Chapter2_3: FC = () => (
  <Root>
    <Title>Promiseオブジェクト</Title>
    <ContentWrapper>
      <TextWrapper>
        <Text>
          Promiseオブジェクトは非同期処理の完了やエラーを扱うための機能を提供するJavaScriptの組み込みオブジェクトです。
          <br />
          非同期処理の結果を表現するために使用され、より直感的な方法で非同期コードを記述し、管理することができます。
          <br />
          基本的に、プロミスはコールバックを関数に渡すかわりに、関数が返したオブジェクトに対してコールバックを登録するようにするというものです。
        </Text>
        <SubTitle>Promiseの作成</SubTitle>
        <Text>
          Promiseオブジェクトはnew Promise()を使って作成します。
          <br />
          Promiseコンストラクタには、非同期処理を実行するための関数（executor関数）を渡します。
          <br />
          この関数は2つの引数を受け取ります。
          <br />
          成功時の処理を行うresolve関数と、エラー時の処理を行うreject関数です。
        </Text>
        <CodeBlock>
          <pre>
            <CodeBlue>const</CodeBlue> promise = <CodeBlue>new</CodeBlue>{" "}
            <CodeRed>Promise</CodeRed>((resolve, reject) ={">"}
            ｛
            <br />
            <br />
            &nbsp;// 非同期処理を実行する
            <br />
            &nbsp;// 成功時には resolve() を呼び出す
            <br />
            &nbsp;// エラー時には reject() を呼び出す
            <br />
            ｝);
          </pre>
        </CodeBlock>
        <TextWrapper>
          <SubTitle>非同期処理の完了</SubTitle>
          <Text>
            非同期処理が成功した場合は、resolve()を呼び出してPromiseを解決します。
          </Text>
          <CodeBlock>
            <pre>
              <CodeRed>resolve</CodeRed> (response);
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          <SubTitle>エラーの処理</SubTitle>
          <Text>
            非同期処理がエラーを返した場合は、reject()を呼び出してPromiseを拒否します。
          </Text>
          <CodeBlock>
            <pre>
              <CodeRed>reject</CodeRed> (error);
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          <SubTitle>thenメソッドを使った結果の取得</SubTitle>
          <Text>
            Promiseオブジェクトのthen()メソッドを使用して、非同期処理が完了した後の結果を取得します。
            <br />
            then()メソッドは2つのコールバック関数（成功時の処理と失敗時の処理）を受け取ります。
            <br />
            thenメソッドはPromiseでの非同期処理が完了するより前には決して呼び出されません。
            <br />
            thenはPromiseオブジェクト内で幾つでも呼び出すことができます。その際に値は上から下にthenを通して連携されていきます。
          </Text>
          <CodeBlock>
            <pre>
              <CodeBlue>const</CodeBlue> promise = new{" "}
              <CodeRed>Promise</CodeRed>((resolve, reject) ={">"} {"{"}
              <br />
              &nbsp;resolve("thenに渡す値");
              <br />
              {"}"});
              <br />
              <br />
              promise.<CodeRed>then</CodeRed>
              ((result) ={">"} ｛
              <br />
              &nbsp;// 非同期処理が成功した場合の処理
              <br />
              &nbsp; console.<CodeRed>log</CodeRed>(result);
              <br />
              ｝,(error) ={">"} ｛
              <br />
              &nbsp; // 非同期処理が失敗した場合の処理
              <br />
              &nbsp; console.<CodeRed>log</CodeRed>(error);
              <br />
              ｝);
            </pre>
          </CodeBlock>
        </TextWrapper>
        <TextWrapper>
          以上が基本的なPromiseで使用できる基本的なメソッドです。
          <br />
          コールバック関数を使用した非同期処理と比べると処理が複雑になった際にもシンプルにみやすいコードとして定義できます。
          <br />
          また、Promiseと.thenを組み合わせることで、複数の非同期処理を連続してシンプルに記述することも可能になります。
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
