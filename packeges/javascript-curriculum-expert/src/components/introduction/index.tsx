import { FC, Fragment } from "react"
import styled from "styled-components"
import {
  Wrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
  SubTitle,
  Text,
  TextWrapper,
  CheckBoxArea,
  CheckBoxWrapper,
  CheckList,
  CheckBox,
  CheckBoxText,
  Root,
} from "../../const/CommonStyledComponent"
import { Chapter1 } from "../Chapters/Chapter1"

export const Introduction: FC = () => (
  <Root>
    <TitleWrapper>
      <Title>JavaScript応用カリキュラム</Title>
    </TitleWrapper>
    <ContentWrapper>
      <div>
        <SubTitle>はじめに</SubTitle>
        <TextWrapper>
          <Text>
            このカリキュラムではJavaScriptの基本を学習された方のカリキュラムです。
            <br />
            もう一歩踏み込んだ内容について機能単位で解説しながら進めていくJavaScriptのエキスパートカリキュラムです。
            <br />
            モダンスタイルの基礎から現場での応用までを視野に入れたJavaScriptを本質的に理解するためのきっかけとなることを望んでおります。
          </Text>
        </TextWrapper>
      </div>
      <div>
        <SubTitle>カリキュラム作成の目的と目標</SubTitle>
        <TextWrapper>
          <Text>
            目的：JSへの理解度の向上と概念的把握が目的です。
            <br />
            （このカリキュラムで扱った内容の応用が現場で求められるので、あくまでも知識をつけておく程度です。ただ、知っているのと知らないのとではこの先の技術への理解度が変わってくるのでなるべく網羅的に扱います。）
            <br />
            目標：このカリキュラムを経てVueなどのフレームワークに取り組んでもらいたいので基礎的な土台形成を目標としています。
            <br />
            <br />
            全体を通して知らない単語が頻出します。なるべく噛み砕いて説明できるように心がけて作成してますが、限界はあるのでわからない単語は調べておくと話の流れが抽象的にならずに済むのでオススメです。
            <br />
            また、扱う内容全てが現場で求められるというわけではなく、一部が頻出したり、しなかったりと現場によって様々です。
          </Text>
        </TextWrapper>
      </div>
    </ContentWrapper>
    <CheckBoxArea>
      <SubTitle>受講対象者</SubTitle>
      <CheckBoxWrapper>
        <CheckList>
          <CheckBox type="Checkbox" />
          <CheckBoxText>
            JavaScriptスタンダードカリキュラムを終えられた方
          </CheckBoxText>
        </CheckList>
        <CheckList>
          <CheckBox type="Checkbox" />
          <CheckBoxText>JavaScriptについてもっと知りたい方</CheckBoxText>
        </CheckList>
        <CheckList>
          <CheckBox type="Checkbox" />
          <CheckBoxText>
            Vue.jsを使用したカリキュラムに挑戦したい方
          </CheckBoxText>
        </CheckList>
      </CheckBoxWrapper>
    </CheckBoxArea>
    <div>
      <SubTitle>JavaScript公式ガイド（MDN）について</SubTitle>
      <TextWrapper>
        <Text>
          カリキュラムを進める上で、あるいはJavaScriptを用いて何か興味深いものを作成している時に、技術的に信頼できるリファレンスを必要としているなら、{" "}
          <br />
          <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide">
            JavaScriptリファレンス
          </a>
          は非常に有益です。実装方法や機能について疑問が生じたら、まず公式ガイドを訪れてみることをおすすめします。
          <br />
          MDNに書いてあることに嘘はないです。ただ、読み解きにくい箇所もあるのでその際は有識者が執筆した記事などを参考にしてみてください。
        </Text>
      </TextWrapper>
    </div>
    <div>
      <SubTitle>カリキュラムの進め方</SubTitle>
      <TextWrapper>
        <Text>
          このカリキュラムではJavaScriptの応用的なトピックについて解説し、サンプルコードとチャレンジ課題を提供します。
          <br />
          各テーマの終わりごとにチャレンジ課題に取り組み、書き終えたコードをGitHub上のリポジトリにpushしてください。
          <br />
          コードを確認の上、メンターによるフィードバックコメントを返却します。
          <br />
          フィードバックには時間がかかる場合がありますので、コメントを待つ間に次のトピックに着手することを推奨します。
        </Text>
      </TextWrapper>
    </div>
    <div>
      <SubTitle>目次</SubTitle>
      <div>
        <Chapter1></Chapter1>
        <ul>2.非同期処理を行うための関数</ul>
        <ul>3.組み込みメソッド</ul>
        <ul>4.ECMAScriptとは</ul>
      </div>
    </div>
  </Root>
)
