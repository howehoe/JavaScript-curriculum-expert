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

export const Chapter2_5: FC = () => (
  <Root>
    <Title>APIを使用したバックエンドとの疎通</Title>
    <ContentWrapper>
      <TextWrapper>
        <SubTitle>APIとは</SubTitle>
        <Text>
          APIとは、「Application Programming
          Interface（アプリケーション・プログラミング・インタフェース）」の頭文字を取った略語です。
          <br />
          具体的には、「機能を公開しているソフトウェア」と「その機能を使いたいソフトウェア」をつなげる窓口のようなものです。
          <br />
          基本的にAPIの設計はバックエンド領域で行われます。（プロジェクトによってはフロント領域の場合もあります。）
          <br />
          また、既存の外部のAPIを使用する場合もあります。
          <br />
          例えばGoogleが提供しているAPIの「GoogleMap」はポートフォリオ作成でも使用されたりするのでなんとなくイメージがつくかと思います。
          <br />
          GoogleだけでなくAmazonやTwitterなどもAPIを公開しているので興味があれば調べて基本無料なので飽きるまで使ってみてください。
          <br />
          <br />
          APIを使用することで、既存のシステムを比較的安全に自分のプログラムに導入できるため、開発コストを抑えることが可能になります。
        </Text>
        <SubTitle>リクエストとレスポンス</SubTitle>
        <Text>
          APIを使用する際は大きく分けてリクエストとレスポンスが必要になります。
          <br />
          それぞれ単語の通りの意味を機能として持っています。つまり、リクエストはデータを要求し、レスポンスは要求に対する返答です。
          <br />
          フロントエンド領域ではAPIにリクエストを送ることを「APIを叩く」とも表現します。
          <br />
          詳しくは、
          <a href="https://qiita.com/KNR109/items/d3b6aa8803c62238d990">
            こちら
          </a>
          が参考になるかと思います。
        </Text>
        <TextWrapper>
          <SubTitle>APIを使うシチュエーション</SubTitle>
          <Text>
            Web開発とWeb制作や運用とで少し変わってくるのでここで整理します。
            <br />
            開発では、APIはサーバーとの通信の際に使用します。
            <br />
            例えばユーザー登録の場合はリクエストに受け取った入力値を詰めてAPIを叩きます。
            <br />
            逆に登録済みのユーザー情報が必要な場合はその旨をリクエストして、レスポンス情報を加工してクライアントに表示します。
            <br />
            主にAPIはバックエンドとの連携に使用されます。
            <br />
            運用やデザインの領域では、先ほど例に挙げた「GoogleMap」のように外部の公開APIを使用して情報を表示させます。
            <br />
            どちらもリクエストを送ってレスポンスを受け取るという観点では同じですが、
            <br />
            公開APIの方が機能が単純化されているため誰でも使用しやすい設計となっています。
            <br />
            （現場のAPIは多機能が故の複雑さや、フロントの都合が考慮されていないため処理数が多くなっているものなどもあります。）
          </Text>
        </TextWrapper>
        <TextWrapper>
          <SubTitle> APIの使い方</SubTitle>
          <Text>
            APIは基本的に非同期処理の中で行われます。
            <br />
            例えば、以下の非同期関数はasyncを利用し作成しています。
          </Text>
        </TextWrapper>
        <CodeBlock>
          <pre>
            button.addEventListener("click", async function () ｛
            <br />
            try ｛
            <br />
            const response = await fetch(" https://randomuser.me/api/")
            <br />
            const data = await response.json()
            <br />
            const firstData = data.results[0]
            <br />
            const firstName = firstData.name.first
            <br />
            const lastName = firstData.name.last
            <br />
            const fullName = `$｛firstName｝ $｛lastName｝`
            <br />
            <br />
            const name = document.getElementById("name")
            <br />
            name.textContent = `$｛fullName｝`
            <br />
            ｝ catch (error) ｛
            <br />
            console.error(error)
            <br />
            ｝
            <br />
            ｝)
          </pre>
        </CodeBlock>
        <Text>
          今回はfetchに公開APIのURLを渡すことでHTTPリクエストを作成しています。
          <br />
          ちなみに使用したAPIは架空の人物情報をレスポンスとして返すRANDOM USER
          GENERATORhttps://randomuser.me/を使用しています。
          <br />
          この関数では、変数responseにfetchを使用してAPIを叩いたレスポンスを代入し、
          <br />
          response.json()メソッドを使用して、レスポンスの本文をJSON形式として解析しdata変数に格納します。
          <br />
          その中から最初のデータ配列にアクセスし、名前に該当するデータを取得・加工しています。
        </Text>
      </TextWrapper>
      <SubTitle>チャレンジ課題</SubTitle>
    </ContentWrapper>
  </Root>
)
