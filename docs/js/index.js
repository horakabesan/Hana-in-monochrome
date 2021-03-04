$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 600; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


// 映画の概要
const summaries = [
  'インドで迷子になった5歳の少年が、25年後にGoogle Earthで故郷を探し出したという実話を映画化したヒューマンドラマ。1986年、インドのスラム街で暮らす5歳の少年サルーは、兄と仕事を探しにでかけた先で停車中の電車で眠り込んでしまい、家から遠く離れた大都市カルカッタ（コルカタ）まで来てしまう。そのまま迷子になったサルーは、やがて養子に出されオーストラリアで成長。25年後、友人のひとりから、Google Earthなら地球上のどこへでも行くことができると教えられたサルーは、おぼろげな記憶とGoogle Earthを頼りに、本当の母や兄が暮らす故郷を探しはじめる。',
  '米海軍特殊部隊ネイビー・シールズの隊員クリス・カイルは、イラク戦争の際、その狙撃の腕前で多くの仲間を救い、「レジェンド」の異名をとる。しかし、同時にその存在は敵にも広く知られることとなり、クリスの首には懸賞金がかけられ、命を狙われる。数多くの敵兵の命を奪いながらも、遠く離れたアメリカにいる妻子に対して、良き夫であり良き父でありたいと願うクリスは、そのジレンマに苦しみながら、2003年から09年の間に4度にわたるイラク遠征を経験。過酷な戦場を生き延び妻子のもとへ帰還した後も、ぬぐえない心の傷に苦しむことになる。',
  '持ち前の明るさと強さで娘を育てている双葉が、突然の余命宣告を受けてしまう。双葉は残酷な現実を受け入れ、1年前に突然家出した夫を連れ帰り休業中の銭湯を再開させることや、気が優しすぎる娘を独り立ちさせることなど、4つの「絶対にやっておくべきこと」を実行していく。',
  '森で暮らす風変わりな一家が旅に出たことから巻き起こる騒動を描いたロードムービー。現代社会から切り離されたアメリカ北西部の森で、独自の教育方針に基づいて6人の子どもを育てる父親ベン・キャッシュ。厳格な父の指導のおかげで子どもたちは皆アスリート並みの体力を持ち、6カ国語を操ることができた。さらに18歳の長男は、受験した名門大学すべてに合格する。ところがある日、入院中の母レスリーが亡くなってしまう。',
  'それぞれに最愛の人を失い心に傷を負った男女が再生していく姿を、笑いや涙を交えて描いたヒューマンコメディ。妻の浮気が原因で心、のバランスを崩したパットは仕事も家も失い、両親とともに実家暮らし。いつか妻とよりを戻そうと奮闘していたある日、事故で夫を亡くして心に傷を抱えた女性ティファニーに出会う。愛らしい容姿とは裏腹に、過激な発言と突飛な行動を繰り返すティファニーに振り回されるパットだったが……。',
  '悪の組織フット軍団による犯罪と暴力が日増しに激しくなるニューヨーク。フット軍団を追いかけていたテレビリポーターのエイプリルは、ある夜、闇夜に紛れてフット軍団を倒す謎のヒーローを目撃する。その姿を映像に収めることができず、誰にも信じてもらえなかったエイプリルだが、今度は地下鉄の駅でフット軍団が人々を襲撃。そこで再び謎のヒーローを目撃したエイプリルは、後を追いかけ、カメの姿をした4人組の忍者タートルズと出会う。',
  '老朽化した巨大なバスルームで目覚めた互いに面識のない2人の男は「6時間以内に相手を殺すか、2人とも死ぬか」というゲームを強要される。だが誰が何の目的で？　一方で、この犯人が他の被害者たちにもカミソリワイアーを張り巡らした密室、顎を砕くヘッドギアなどを用いた究極のゲームを仕掛けていたことが判明していく。サンダンス映画祭で注目された異色サスペンス。',
  'ニューヨークを舞台に父と娘の絆を描いたヒューマンドラマ。「レ・ミゼラブル」でも共演したラッセル・クロウとアマンダ・セイフライドが、主人公となる父娘に扮した。小説家のジェイクは交通事故により同乗していた妻を亡くし、自身も入院を余儀なくされてしまう。やがて退院したジェイクは、溺愛する7歳の娘ケイティに「ずっと一緒」だと約束する。それから25年後、悲しい過去の経験から他人を愛せなくなってしまっていたケイティは、娘と自分について綴った父の遺作を敬愛する作家志望のキャメロンと恋に落ちる。キャメロンとの出会いをきっかけに、ケイティは自身の過去と向き合おうとする。',
  '名古屋の女子高に通うさやかは、偏差値30の学年ビリという成績。見かねた母に塾へ通うことを提案され、入塾面接で教師の坪田と運命的な出会いを果たす。金髪パーマに厚化粧、耳にはピアス、極端に短いミニスカートというギャル全開なさやかに面を食らう坪田だったが、さやかの素直な性格に気付き、ふたりは慶應大学への受験合格を約束することに。偏差値30のギャルが、偏差値70の慶應大学現役合格を果たすまでを、笑いと涙で描いていく'
]


$(document).ready(function(){

  const movie_all = $(".card_a").toArray();
  // length -> 配列型の後ろにつけると要素数に！文字列だと文字数に変換！！！！
  for ( let i = 0 ; i < movie_all.length ; i++ ) {
    if ( summaries[i].length >= 75 ) {
      $(movie_all[i]).on('mouseenter', function () {
        console.log("over")
        movie_all[i].children[2].innerHTML = summaries[i];
        let weight = 0
        if( summaries[i].length >= 230 ){
          weight = 2.5
        }else if(summaries[i].length >= 170){
          weight = 3
        }else{
          weight = 3.5
        }
        const height = summaries[i].length  * weight;
        //$('.card_a').addClass('movie_summary_mouseover');
        $(movie_all[i]).animate({"height": height +  "px"},300);
        // $('.movie_summary_mouseover')
      });
      $(movie_all[i]).on('mouseleave', function () {
        movie_all[i].children[2].innerHTML = summaries[i].slice(0, 74);
        $(movie_all[i]).animate({"height":"350px"},150)
      });
      // 省略されるよ
      movie_all[i].children[2].innerHTML = summaries[i].slice(0, 74);
    } else {
      movie_all[i].children[2].innerHTML = summaries[i]
    }
    //movie_all[i].innerHTML = summaries[i];
  }

  // ハンバーガーメニュー
  $('#nav-toggle').on('click', function() {
    $('body').toggleClass('open');
  });

  // コンタクトで送信された時のアラート
  $('.sousinn_alert').on('click', function() {
    alert('送信されました。');
  });

  // ページトップへ戻る
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  
  AOS.init();

});
