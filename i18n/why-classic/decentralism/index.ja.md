---
title: ディセントラリズム
updated: 2022-02-22
disclaimer: opinion
seo: イーサリアムクラシックの原則とコアバリューの提案を支える分散主義の価値観を説明する論文で、他の多くのブロックチェーンが中央集権化という暗い道を歩んでいるのとは対照的に、明るい未来を提供することを可能にするものです。
contributors:
  - "IstoraMandiri"
  - "DonaldMcIntyre"
---

## キーポイント

- 分散主義が有利なのは、システムの単一障害点が少なく、捕捉が困難なこと。
- ブロックチェーンシステムでは、分散化が極めて重要である。 ブロックチェーンを有用なものにするためには、用途に応じて一定の閾値を満たす必要があります。
- 多くのプロジェクトは、分散化を測定することの難しさを利用して、本当の意味での捕捉のしやすさを隠しています。
- 社会層と技術層は様々な手段で捉えることができるため、いずれも分散型でなければならず、中央の集団に依存してはならない。
- イーサリアムクラシックは、 _ソブリングレード_ レベルの分散化を目指しており、いかなる世俗的組織もこれを捉えることができないことを意味します。
- Ethereum Classicは、長期的な捕捉防止を達成するために、 _原則優先アプローチ_, _分散最大主義_, _チェックアンドバランス_ , _プロトコル中立性_ を適用しています。

## はじめに

The DAOハードフォーク後に出たイーサリアムクラシックに関する最初の出版物の1つが [A Crypto-Decentralist Manifesto](/blog/2016-07-11-crypto-decentralist-manifesto)。 The Forkに抗議して、ブロックチェーン・プロジェクトを組織するための古典的な分散型アプローチを強調したのです。 この文書は、ETCの今後の展開の方向性を示すものでした。 その誕生以来、とらえどころのない、しかし重要な概念の本質について、多くの発見がありました。

> 分散型、不変、止められない。
> 
> - イーサリアムクラシック ウェブサイト、2016年

この一連のバズワードは、ブロックチェーン技術の真の価値ポテンシャルを引き出すためのレシピなのです。 分散化によって不変性が実現し、止められなくなり、先ほど説明した [明るい未来](/why-classic/code-is-law) が可能になるのです。

## 地方分権の定量化

> 分散化とは、組織の活動、特に計画や意思決定に関する活動が、中央の権威ある場所やグループから離れて分散または委譲されるプロセスを指す。
> 
> - [ウィキペディア](https://en.wikipedia.org/wiki/Decentralization)

分権主義は、自然界の多くのシステムや形態に存在する性質である分散を好む。 それは二元的な性質ではなく、時間の経過とともに変化するスペクトルである。 あらゆるコンテクストにおいて、分権を明確に定義することは困難ですが、視覚的にかなり直感的に理解することができます。

![システムが分散化されると、チョークポイントが少なくなり、捕捉が難しくなる](./decentralization.jpg)

ブロックチェーンプロジェクトの領域では、分散化の測り方は様々で、「システムを乗っ取るために妥協する必要がある人の割合」が一つの目安の数値化となっています。 つまり、攻撃者がチェーンを制御したり検閲したりしたいと考えた場合、参加者の80%を侵害する必要があるプロジェクトは、10%しか侵害する必要がないプロジェクトよりも、 _より分散化された_。

この測定は、 [中本係数](https://minima.global/blog/the-nakamoto-coefficient-an-attempt-to-quantify-decentralization)として知られており、優れたコンセプトツールではあるが、かなり低解像度の一次元測定である。 実際には、分散型のシステムでは、異なるグループに異なる責任を負わせることで、キャプチャーの可能性を低くするように設計することができます。 そのため、ネットワークを捉えることの難しさは、単純な人数比ではなく、それぞれのアクターが持つ強さと弱さが複雑に絡み合っていることにある。

例えば、Proof of Workのブロックチェーンでは、報酬によるマイニング、コードベースによるクライアント、コミットによる開発者、取引量による交換、カウントによるノード、価値分配による所有権などを考慮して、分散化を正確に測定しようとする。 しかし、このような微妙なアプローチも完璧とは言い難く、1回のスナップショット測定では、システムが長期にわたって分散化を維持できるかどうかについての見識はあまり得られない。

どのように数値化するにせよ、システムを「所有」しようとする攻撃者は、プロジェクトが分散化されればされるほど、より困難な仕事を強いられることになる。 買収から守るためには、プロジェクトは十分な分散化のレベルに達する必要があります。 つまり、システムのあちこちに存在しうる中央の障害点やボトルネックの数を最小限に抑えるということです。

### ブロックチェーンのトリレンマ

> 分散型ネットワークの基本的な構造は、集中型ネットワークと比較して、ユニークな課題を抱えています。 1980年代にはすでに、コンピュータ科学者がCAP定理と呼ばれるものを開発し、これらの課題のうち最も重要なものを明確にしていた。 CAP定理によれば、ブロックチェーンがその一例である分散型データストアは、一貫性、可用性、分割耐性(CAP)の3つのうち2つの保証しか同時に提供することができない。 現代の分散型ネットワークの文脈では、この定理はブロックチェーンのトリレンマに発展している。 これは、パブリックブロックチェーンは、そのインフラにおいて、セキュリティ、非中央集権、スケーラビリティのいずれかを犠牲にしなければならないという俗説である。
> 
> - ブロックチェーンのトリレンマ』 [Gemini.com](https://www.gemini.com/cryptopedia/blockchain-trilemma-decentralization-scalability-definition#section-what-is-the-blockchain-trilemma)

![ブロックチェーンのトリレンマ](./trilemma.png)

ブロックチェーンのトリレンマとは、すべてのブロックチェーンプロトコルに適用される技術的な制限を説明するものです。 同様のコンセプトは、ブロックチェーン・プロジェクトのソーシャル・レイヤーにも当てはまり、トップダウンとボトムアップの意思決定がスライド式に行われます。

ビデオゲームのキャラクターを作るように、すべてのプロジェクトは、これらの社会技術的次元の空間のどこかに自分自身を配置し、能力ポイントを割り当て、ある属性を他の属性のために犠牲にしなければなりません。 この選択によって、ブロックチェーンのクラス、能力、戦闘での有効性が定義されます。

これから述べるように、プロトコルの特性や基本的な考え方として、イーサリアムクラシックは分散化とセキュリティを最大限に高め、より本質的なスキルを強化するために、意図的に取引のスケーラビリティとトップダウンの社会組織を犠牲にしているのです。

ETCがこれらのスキルを最大限に発揮することを選んだのは、ブロックチェーン・プロトコルがその基本プロトコルを拡張するためには、分散化とセキュリティのトレードオフを行う必要があるからです。 これは、すぐに明らかなコストとして現れないかもしれませんが、長い目で見ればネットワークの効用と価値を損なうことになるに違いありません。 つまり、ETCにとってスケーラビリティはセキュリティや分散化よりも重要ではなく、この技術的トレードオフは社会層にも反映されており、分散化は中央支配の都合に優先する。

今日、ほとんどのブロックチェーンプロジェクトは、スケーラビリティと中央のグループから調整する利点と引き換えに、分散化を最大化するという考えを放棄しています。 しかし、プロジェクトが中央集権への依存度を下げない限り(これはインセンティブ構造上不可能かもしれないが)、ネットワークはこの比較的中央集権的なセットアップの捕捉によって乗っ取りにさらされることになるのだ。

### ソブリン・グレードの検閲への抵抗

さまざまなブロックチェーン・プロジェクトを評価する際に問われるべきは、「十分に分散化されているか」という点です。 これに対する答えは、完全にユースケースの [脅威モデル](https://en.wikipedia.org/wiki/Threat_model)に依存します。 これは、あるチェーン上でどのような種類のアプリケーションを実行する必要があるかに依存します。 この問題は、「誰がこのチェーン上のアプリケーションの実行を止めたいのか、そしてチェーンは彼らの検閲の試みに抵抗できるのか」と言い換えることができる。

例えば、ビットコインの場合、その主な用途はコインそのものであり、デジタルの希少性と検閲を受けずに転送できることである。 米ドルを含む多くの通貨や資産と競合しているため、非常に強力な存在からの攻撃に耐えなければ存続できないのです。 ビットコインの前身である

一方、ブロックチェーンの中には、ビットコインほど検閲の抵抗力を必要とせず、例えば、仮想の野球カードの譲渡を可能にするなど、議論の余地のないユースケースだけを意図しているものもあります。 これらのアプリケーションを止めようとする強力な外部勢力は存在しないので、検閲の抵抗は不要である。 ある状況下で中央の当事者がチェーンの状態を上書きすることができれば、それは利点とさえ見なされるかもしれません。 したがって、チェーン全体を少数の当局が運用することは、このユースケースにとって容認できることなのです。 このような場合、資金力のある組織が閉鎖するほどユースケースが重要でないなら、スケーラビリティのために分散化を犠牲にすることは意味があるかもしれないし、他の非ブロックチェーン技術がより適切であるかもしれません。

Ethereum Classicは、Ethereumとして知られていた2015年当時でさえ、少なくともBitcoinと同様に検閲を受けやすいレベルで野望を達成することを目指した。

> イーサリアムは、スマートコントラクトを実行する分散型コンピューティングプラットフォームである。 アプリケーションは、検閲、ダウンタイム、第三者による干渉の可能性がなく、プログラム通りに実行されます。
> 
> - イーサリアム(Ethereum.org)、2015年

イーサリアムのスマートコントラクトプラットフォームは、ビットコインの基軸通貨のユースケースだけでなく、あらゆる種類のブロックチェーンアプリケーションをサポートするために設計されています。 そのため、レガシーシステムの既存企業から検閲の試みを受ける可能性が高く、妨害される危険性があります。

国民国家や多国籍組織など他の主権機関からの攻撃を食い止める必要があるグローバルレベルでのソリューションを提供するためには、ビットコインと同様にイーサリアムも、これらのどのグループも検閲することが不可能な分散化のレベルに達する必要があります。 _Sovereign Grade Censorship Resistance_ が必要なのです。

この程度の無修正では、臨界閾値に達してしまうのです。 他の機関がネットワークを検閲できないため、アプリケーションの利便性が著しく向上し、 _トラストレス_になる。 また、これらのプラットフォームでは、何が行われるかを決定するのは、プロバイダーではなく、むしろユーザーなのです。

_Code is Law_ は、 _Sovereign Grade Censorship Resistance_を獲得したチェーンでのみ動作可能です。 このレベルは、他のエンティティによるチェーンの運用の検閲を防ぐために必要であり、そのためにはチェーンが分散化属性を最大化し、妥協することなく常に維持することが必要です。 _Code is Law_ requires _decentralization maximalism_.

## 中央集権化失敗国家

中央集権化の問題の解決策を探る前に、まず、分権化の欠如がいかに本格的な失敗に早く逆行するかを理解する必要があります。

今日、2015年にイーサリアム(クラシック)が発売されたときよりもさらに、検閲が、関連性にしがみつこうとする瀕死のレガシーシステムの選択兵器になりつつあることがますます明らかになっている。 このような古い制度は、変化への脅威が増すにつれて、その地位を守るためにこれまで以上に思い切った手段を取るようになると思われる。

インターネットやブロックチェーン技術が登場する以前は、価値や情報の伝達を集中管理点に大きく依存する社会であったため、これらの機関は現実をかなり封鎖しており、容易に悪用される状況でした。 暗号技術で、サトシはちょうど時間のニックの中で、 [暴力の論理を逆転させ、](https://cryptonews.net/en/news/bitcoin/2927549/)、人類に代替の創発的秩序に向かう道を提供しました。

時間が経つにつれて、現状に対する自由で公平でオープンな代替案に対する攻撃は激化していくでしょう。 その結果、暗号通貨のエコシステムは、ブロックチェーン技術の無検閲性が真に試され、それを持つ暗号通貨システムの中心的な障害点が探し出されて悪用されるという、非常に拮抗した新しいフェーズに入るでしょう。 現職が認めないユースケースについては、 _Sovereign Grade_ だけが生き残ることになる。

今後、ブロックチェーンの有用性と価値を維持するためには、ブロックチェーンに対して展開されるであろう社会的、経済的、技術的な様々な攻撃に対抗する必要があります。 攻撃のリストは増え続け、新しい形の攻撃が思い浮かび、それに対抗することもできるはずだが、今のところ、少なくとも、より明白な既知の障害状態は避けなければならない。

### エフェメラル・ファウンデーション

歴史的に、ブロックチェーン・プロジェクトの死因の第1位は、メンテナンスを担当するチームが活動しなくなることです。 簡単に言えば、プロジェクトが中央の組織委員会や開発者チームに依存している場合、その組織がある限り、プロジェクトは長く続くだけなのです。

組織は様々な理由で活動を停止することがあります。 単純な引き抜き、資金不足、ハッキング、規制当局からの攻撃、交通事故、その他の理由であれ、これらの要因はこのチームのコントロール外にあることが多く、プロジェクトが生き残れるかどうかは、運や規制当局の承認にかかっているのです。

多くの場合、中央のチームが存在すると、他のメンバーが同じ土俵に立てないため、プロジェクトに貢献する意欲が減退してしまいます。 第三者は、この中央組織委員会に比べれば常に二流市民であり、プレマイン・タックスや開発タックスの場合には、指示し、価格行動から不釣り合いに利益を得ている。 このため、プロジェクトの維持と指示のためにこのチームへの依存がさらに強固になり、少なくとも、自然な組織階層が生まれることはないだろう。

このように中央のチームに依存することは、短期的には方向性を示し、大きな予算を提供するかもしれないが、プロトコルに一種の「中央集権化負債」を負わせ、それを返済するのは困難である。 いずれは、すべての組織がそうであるように、中央のチームは活動を停止することになる。 この依存を捨てない限り、プロジェクトは放棄されるか、このグループなしの生活に不適応になる可能性が高い。

### ミートスペース・キャプチャー

中央集権的なチームに過度に依存した高価値のプロジェクトでは、時間が経つにつれて、単なる放棄よりもはるかに陰湿な運命が待っている可能性が高くなる。 トップダウンの中央集権的な組織と同じように、時計仕掛けのように、さまざまな操作技術によって特別な利害関係者に取り込まれていく。

ある有力な機関が、新しい技術に脅威を感じているとする。 不可能かもしれないが、それを踏みつぶすよりも、現状を根本的に覆さない範囲で開発の方向性に影響を与え、単純に妥協してその運営を混乱させる方がはるかに効果的である。

これは、インフルエンサーや組織のリーダーを操り人形にして、さまざまなニンジンや棒で糸を引くことによって実現できる。 同調圧力、暴徒、政治、キックバック、賄賂、サイコパス、ハニートラップ、コンプロマット、身体的脅迫、投獄、あるいはもっと悪いことなど、人間は誤りやすく、あらゆる程度の操作や強要に影響を受けやすい。

攻撃者は、十分な数の重要なターゲットがあれば、その権限によってチェーンの将来をコントロールし、微妙な漸進的変化を加えて、意思決定に対する支配力をさらに高めることができます。

この種の故障状態の最も問題な要素の一つは、検出できない方法で行われることである。 セントラルチームがどの程度危険にさらされているかは不明で、手遅れになったときに初めて捕捉が明らかになるということもありえます。

たとえ中央集権的なチームがあからさまに妥協していなくても、その可能性は不信と不安を呼び起こすことになります。 陰謀論や意思決定への疑問は、実力だけで動いていないように見える場合、プロジェクトのリーダーシップと安定性を損ない、組織委員会に対して展開される単純な分裂と征服の戦術は、プロジェクトを麻痺させるのに十分である可能性があります。

この失敗例は、中央の組織委員会に依存するブロックチェーン・プロジェクトに内在する矛盾を示している。 プロトコルは書類上では分散化されているかもしれませんが、実際にはプロジェクトは中央のグループに従属しており、そのコストが見合うと感じる人なら誰でもその意思を曲げることができますし、今後もそうするでしょう。

### 歌舞伎コイン

中央集権は、重力のように常に引っ張られ、社会技術的構造のあらゆる弱点を探して、その限界点を見つけようとします。 この力を長期的に克服するためには、中央の障害点を利用されないようにすること、つまり、一箇所だけでなく、すべての領域で常に中央集権化を押し返す強固な対策が設計されている必要があります。

このため、中途半端な分権には意味がありません。 チェーンはその最も弱いリンクによってのみ強くなり、ブロックチェーンはその最も中央集権的なボトルネックによってのみ非中央集権的となる。 このため、 _ブロックチェーン・プロジェクトのすべての_ 部分は、技術的にも社会的にも、 _分散化最大主義を目指す必要があります_.

残念ながら、暗号通貨のエコシステム内では、 _分散化最大主義_ の重要性が広く理解されたり採用されたりしていないため、 _分散化劇場_ という言葉が、多くの _いわゆる_ 分散化システムを表す一般的な方法になってしまっています。

これらのプロジェクトは、システム内に微妙な単一障害点がありますが、推進者は他の「分散化」された領域に焦点を移します。 これは有効な手段である。 なぜなら、あるシステムに潜在的に捕捉可能な中心的障害点があることを証明するには、そのシステムに関する深い知識が必要であり、適切に評価するためには技術的スキルや内部知識が必要となるため、素人には非常に困難か不可能だからである。

岩と砂の上に建つ建物のたとえのように、素人目には2つのプロジェクトが適切に構築され、通常の条件下ではどちらも意図したとおりに動作しているように見えるかもしれません。 しかし、水面下では、あるプロジェクトには致命的な欠陥があり、ストレスの多い時には破滅を招くだけでなく、そのプロジェクトに時間の試練を期待する人たちに損害を与える結果になる可能性が高いのです。

![ブロックチェーンは、建物のように、強い基礎と弱い基礎の上に構築することができます。](./rocksand.jpeg)

## 古典的な問題には古典的な解決策が必要

腐敗は、文明と同じくらい古い問題です。 暗号通貨の分野ではまだ醜い頭をもたげていないかもしれませんが、この技術がより影響力を持つようになると、その力に橋をかけ、ブロックチェーンが人類を解放するどころか、奴隷を最適化する道具になってしまうような未来に向けて形作ろうとする勢力を引き寄せるに違いありません。

長い目で見れば、何が起ころうとも、最終的には分散型ブロックチェーンが優位に立つでしょう。 しかし、人類が暗黒時代のような技術革新の阻害と停滞の時代を避けたいのであれば、中央集権化の危険性を広く伝え、それが定着する前に対処する必要がある。 幸いなことに、ブロックチェーンを捕捉しようとする不可避の継続的な試みに対抗する窓が存在しています。 今のところ、 _分散化最大主義_ を目指すプロジェクトはまだ存在し、希望者はそれを利用することができます。

まだ任意ではありますが、権威者やマーケティングキャンペーンに頼るのではなく、個人が第一原理から推論し、過去の教訓を振り返りながら、どのブロックチェーンが長期的な価値を提供しそうで、交流する価値があるのか、自分なりの結論を出すことができるのです。

ブロックチェーン技術のルーツ、経済理論、歴史の教訓に立ち返ることで、ビットコインの背後にある設計上の決定の知恵が明らかになり、この論理はイーサリアムクラシックなどのスマートコントラクトプラットフォームを含むこの分野の他の技術的進歩に再適用することができる。

### はじめに

制度やそれを作る人間は誤りやすく、気まぐれで壊れやすいものですが、アイデアは弾丸のように強いものです。 ブロックチェーンのような重要で影響力のあるテクノロジーは、人以上のもので構築されなければならないことは自明です。 そして、その哲学は、捕獲可能な肉塊の行動を導く強力な土台とならなければならないのです。

優れたアイデアは、それ自体が独立しており、公の場で議論することができ、誰が宣言しても有効であるため、ブロックチェーン・プロジェクトの将来を抑制し保護するためのハーネスを構築するのに最適です。 そのため、The Ethereum Classic Foundationは、 *グループ*ではなく、その *原則*が最優先され、意思決定に反映されるのです。

プラグマティズムとは、健全な原則を維持し、遵守することの下流にあるもので、それによって現実的な存続と長期的な持続性が可能になり、質の高い貢献者を惹きつける広告として機能するからです。 原理原則を優先するアプローチは、プロジェクトが何世代にもわたって軌道を維持できることを保証するものです。 なぜなら、常に変化する中央グループの利益によってではなく、外部の哲学的基準点によって導かれるため、たとえ貢献者の交代が激しくても、プロジェクトの将来を導くために永続し改良することが可能だからです。

中央集権的な組織がないため、ステークホルダーが理解するETCの原則と価値を忠実に解釈し、実行する限り、どのような個人またはグループでもあらゆる役割を果たすことができます。 ハードフォークが契約した価値観と乖離していると感じる人がいれば、既存のバージョンのチェーンを継続することも可能です。 連鎖分裂のリスクは、すべての参加者が相違点を解決するために協力する動機付けとなり、意見の相違が解決できない場合は、どちらの側も他を圧倒することができません。

### プロトコルニュートラル

ブロックチェーンのゲームでは夜が浅いので、 [Ephemeral Foundations](#the-ephemeral-foundation) の問題はそれほど明白ではないかもしれません。 多くのブロックチェーン・プロジェクトは、騙されようが、潰されようが、あるいは取り込まれようが、その崇高な意図は確実に終焉を迎え、チェーンが信頼性を失えば、その野望もまた終焉を迎えます。

この問題は、ブロックチェーン・プロジェクト内の意思決定システムが、長期間にわたって中央のグループに依存した場合、さらに悪化する。 ボトムアップではなく、トップダウンで意思決定が行われることが予想されるため、プロジェクトを組織するための代替メカニズムが進化できないのです。 その結果、不透明な独裁主義が標準となり、骨抜きにされて脆弱化し、むしろ反脆弱な開放的実力主義が花開くことになるのです。

これは、 _中央集権化の重力井戸_という形で現れます。 中央の意思決定への依存が雪だるま式に増え、外部からの貢献が難しくなるため、プロジェクトはますますトップダウンのリーダーシップに依存し、このサイクルが繰り返されることになるのです。

そのため、今後、中央集権的な組織に依存したプロジェクトは、次々とその犠牲になり、依存しないプロジェクトだけが長期的に維持できる、という真実に気づくことになるだろう。 暗号通貨が現在享受している乱暴な評価は、これらのプロジェクトがある程度の寿命を持つという希望に依存しているため、真に分散化されたプロジェクトのみが資金、人材、時間を提供する価値があることがますます明らかになり、市場はそれに従って再配分されるでしょう。

長期的な価値提案を持つプロジェクトだけが残り、つまり中央の組織委員会に頼らないプロジェクトだけが残る。 同じ論理で、すべての条件が同じであれば、中央のグループへの依存度が低いと思われるプロジェクトが、最も多くの貢献と価値を引き寄せることが明らかになるであろう。

中央当局からの持続不可能な現金注入に頼るのではなく、プロジェクトは、 _Buy and Contribute_ 戦略によるような、個人がプロジェクトを購入し、経済的にインセンティブを与えて貢献するような、純粋に自然な貢献によって持続するように進化しなければなりません。

この戦略は、プロトコルが中立である場合にのみ起こりうる、個人が自分の貢献から十分な報酬を得ることができる場合に最も効果的です。 中立的なプロトコルは、すべての参加者を同じ立場で扱い、特定の当事者に特別な特権を与えるものではありません。 最も中立的なプロジェクト、つまり財団、開発税、または原始的なプレミンを持たないプロジェクトだけが、長期的な持続性を可能にするタイプの自然な貢献を引き寄せることができるのです。

### バランシング・パワー

アメリカ合衆国の政府のような既存の制度の仕組みに見られるように、誤った意思決定を抑制し、ある集団が利己的な利益のために制度全体を乗っ取ることを防ぐために、長寿を望む制度には異なるプレーヤー間の力の均衡が必要である。 この考え方は、 _チェックアンドバランス_として知られています。

![米国政府は、チェックアンドバランスを実施するシステムの一例である](./congress.png)

米国政府と同様、チェックアンドバランスはProof of Workブロックチェーンに不可欠な機能であり、3つの主要な権力集団が存在し、互いの力を均衡させることができるのです。

| グループ   | 役割                    | 拒否権           |
| ------ | --------------------- | ------------- |
| デベロッパー | クライアントとインフラの維持管理      | コードのメンテナンスの停止 |
| 鉱山労働者  | 51%の攻撃に対する安全性を提供      | 私のは別のチェーン     |
| フィナンシェ | 流動性と資金調達のイニシアティブを提供する | 保有株式の売却       |

Proof of Workのブロックチェーンでは、3大勢力が揃うことで安定性が確保されています。 それぞれ全く異なる方法でシステムに付加価値を与えているのです。 各グループは、拒否権によってシステムに責任を負わせ、他のグループが事態を悪化させないようにします。 政府であれブロックチェーンであれ、こうしたチェックアンドバランスが阻害されると、物事がうまくいかなくなる傾向があります。

なお、この3人の構成は、集団が単純な多数決で合意事項を克服できることも意味しており、重要である。 この奇数の選挙人は、分散型システムでよく見られるパターンである。 参加者が2人だけの場合、紛争を解決する第三者がいないため、デッドロックに陥る可能性があります。

その結果、バランスの取れた権力のシンフォニーが生まれ、競合する利害関係者によってまとめられ、自発的な関与や悪い行いの排斥を促すことになるのです。 マイナーはセキュリティを提供し、ブロック報酬を得ます。開発者や他のプロバイダーがプロトコルを維持し、インフラを構築し、流動性を提供するトレーダーや投機やプロジェクトへの資金提供を行う投資家によって促進され、ネットワークが有用であればこそ価値があります。

塔の土台を支える支柱のように、うまく配置されたインセンティブが互いに支え合っているのです。 それらが正しく配分されている限り、それぞれの部分の総和よりも大きな新しい構造を生み出し、何千年にもわたって存在し続ける可能性があるのです。

その上、役割の多様性は、利害関係者、プロファイル、弱点の異なる関係者の参加を促し、システムの破壊をより困難にします。 多重防御として、チェーンを確保する参加者のプールが多様であればあるほど、弱点の多様性が攻撃の多様性を必要とし、システムを攻略するために高いコストが必要となるため、攻撃者にとっての侵害は難しくなります。 同じ参加者数でも、より関心事が分離しているシステムは、この多様性のために、より分散化され、捕捉されにくいと考えることができる。

ビットコインが導入した設計図は、イーサリアムを含む他の多くの暗号通貨でも使用されました。イーサリアムは基本的な部分をコピーし、いくつかの変数を微調整し、（見事に）チューリング完全仮想マシンであるEVMを追加しました。 建築の設計図のように、現実の建物の構造をコード化し、その構造が崩れ落ちないようにするための重要な支柱を一つでも多く取り除くことは、一見すると賢明ではないように思われます。

プロジェクトが長期的に生き残ろうとするならば、これらの必要なインセンティブ構造の支柱が十分にあり、適切なバランスが保たれていなければならない。 ビットコインが鉱山労働者、開発者、トレーダーからなる頑丈な三脚であるとすれば、そのうちの1本を切り落とす、例えばProof of Stakeに切り替えて鉱山労働者を解雇すれば、結果は2本足のバースツールになる。 しばらくはまたげるが、わずかな風でも起これば危険な障害となる。

### 分散化最大化主義

_分権最大主義_ は、中央集権の力を長期に渡って補強するための唯一の既知のメカニズムである。 これは、あらかじめ決められたルールではなく、システム全体の中心的な障害点を減らそうとする一般的な哲学や考え方のことです。

それは、プロトコルの設計や、可能であれば社会層など、すべての領域で分散化を総合的に追求することを要求しています。 目標は、プロトコルを乗っ取りから安全にし、ソーシャルレイヤーを捕獲から安全にすることです。 サトシ・ナカモトが匿名で沈黙しているのは、この哲学がビットコイン・プロジェクトに適用された典型例であり、その成功は見習うべき賢明さを持っている。

そのため、このアプローチは妥協のないものです。 わずかな犠牲や違反、例外であっても、既知の停止基準に照らして全体的に価値のあるトレードオフで完全に避けられない場合を除き、耐え難いものであるべきです。 中央集権は取り除くことが難しいため、一般的には時間の経過とともに蓄積され、何らかの形でシステムが捕捉されるまで積み重なることになる。

どのような岐路であれ、 _分散化最大主義_ は、永遠の警戒と、システムは自然に集中化の方向に向かうという知識を必要とします。 したがって、すべての決定は、システムを長期的に無借金に保つために、集中化の負債として支払ったコストを考慮しなければなりません。

## オンワード

もし人類が再び暗黒の時代を迎えないことを望むなら、ブロックチェーン技術の未来を脅かす腐敗した勢力に対抗できるシステムを採用しなければならない。 _分散化最大主義_ を目指すシステムだけが実現できるのですが、現在存在するすべてのブロックチェーン・プロジェクトの中で、この要件を認識しているのはほんの一握りです。

EthereumがTuring Complete Smart Contract Platformという形で世界にもたらしたイノベーションは、ブロックチェーンのユースケースの実用性と可能性という点で大きな飛躍をもたらしますが、The DAO ForkとProof of Stakeへの切り替えが証明するように、プロジェクトの方向性は捕捉の影響を受けやすく、 _Sovereign Grade Censorship Resistance_を達成することができない状況になっています。

遠くない将来、ブロックチェーンに対する攻撃が激化すれば、この必要性はますます明らかになるでしょう。 いわゆる分散型プロジェクトが次々と本性を現し、利権屋に取り込まれるという形で腐敗に屈していく。 その結果、純粋に分散したものだけが残ることになる。

イーサリアムの技術とビットコインの哲学を組み合わせることで、イーサリアムクラシックは安全で多目的の分散型ブロックチェーンを提供し、厳しい集中型の未来になるかもしれないものに対して自由で公平で繁栄する代替手段を提供します。