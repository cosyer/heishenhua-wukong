<template>
  <div
    class="gs-home"
    ref="homeTop"
  >
    <HomeNav
      v-if="!isPhone"
      :data="navData"
      :navActive="navActive"
      @scrollTo="scrollTo"
    />
    <PhoneHomeNav
      v-if="isPhone"
      :data="navData"
      :navActive="navActive"
      @scrollTo="scrollTo"
    />
    <!-- 首页大屏 -->
    <div class="home-1">
      <div
        v-if="!isPhone"
        class="home-1-bg"
      >
        <video
          poster="/img/b1/img_bg_title.png"
          loop
          :controls="false"
          preload="auto"
          muted="muted"
          autoplay="autoplay"
          :playsinline="true"
          :webkit-playsinline="true"
          :x-webkit-airplay="true"
          x5-video-player-type="h5-page"
          x5-video-orientation="h5"
          :x5-video-player-fullscreen="true"
          :x5-video-ignore-metadata="true"
        >
          <source
            src="/video/b1/video_WebTitle_batch.mp4"
            type="video/mp4"
          >
          您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
        </video>
      </div>
    </div>
    <div class="home-1-video">
      <div class="home-1-wukong">
        <div
          v-if="!isPhone"
          class="home-1-wukong2"
        >
        </div>
      </div>
      <div class="home-1-video-text">《黑神话：悟空》</div>
      <div class="home-1-video-text">首曝演示视频</div>
      <div
        class="home-1-video-container"
        @click="homeVideoPlay"
      >
        <video
          v-if="!isPhone"
          ref="homePreviewVideo"
          loop
          :controls="false"
          preload="auto"
          muted="muted"
          autoplay="autoplay"
          :playsinline="true"
          :webkit-playsinline="true"
          :x-webkit-airplay="true"
          x5-video-player-type="h5-page"
          x5-video-orientation="h5"
          :x5-video-player-fullscreen="true"
          :x5-video-ignore-metadata="true"
        >
          <source
            src="/video/b1/gamesci_wukong_preview.mp4"
            type="video/mp4"
          >
          您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
        </video>
        <div class="play-button play-button-fix"></div>
      </div>
      <div class="follow-us-btn">
        <B1Button @click="followUsShow = true">关注我们</B1Button>
      </div>
    </div>

    <div ref="homeIntroduction">
      <div
        class="gs-slides"
        :style="isPhone?'':('height: ' + (100 * slidesNum) + 'vh')"
        ref="gsSlides"
      >
        <!-- 文字介绍 -->
        <div :class="slidesClass(0)">
          <div class="home-introduction">
            <div class="introduction-info slides-animation-long">
              <div class="introduction-info-text1">
                那群最想做西游的人，
              </div>
              <div class="introduction-info-text2 text-red">
                回来了。
              </div>
            </div>
          </div>
        </div>

        <!-- 图文介绍 -->
        <div :class="slidesClass(1)">
          <div class="home-2">
            <div
              v-if="!isPhone"
              class="home-2-img slides-animation-short"
            >
            </div>
            <div class="home-2-info home-text home-text-line-height slides-animation-long">
              <div class="home-2-title">
                <div class="home-title"><span class="text-red">踏上取经路，</span></div>
                <div class="home-title">比抵达灵山更重要。
                  <template v-if="!isPhone"><br><br></template>
                </div>
              </div>
              <div class="home-2-text home-content-text">
                <div>内容行业，是个挣扎的行业。</div>
                <div>因为做内容的人，永远克制不住表达真实的自我。<br><br></div>
                <div><span class="text-red">《百将行》</span>里，为什么会有那么多武将长得像妖怪？</div>
                <div><span class="text-red">《战争艺术：赤潮》</span>里，为什么最重要的资源叫作“灵蕴”？</div>
                <div>大部分玩家也许都不知道原因，但我们一直知道。<br><br></div>
                <div>所以——</div>
                <div>怎能忘了西游？</div>
                <div>怎能忘了五百年前的遗憾？<br><br></div>
                <div>愿你历经九九八十一难，归来仍是那只<span class="text-red">石头憨憨</span>。</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 图文介绍2 -->
        <div :class="slidesClass(2)">
          <div class="home-3">
            <div
              v-if="!isPhone"
              class="home-3-img slides-animation-short"
            >
            </div>
            <div class="home-3-info home-text home-text-line-height slides-animation-long">
              <div class="home-3-title">
                <div class="home-title">用<span class="text-red">最真诚</span>的方式，</div>
                <div class="home-title">谱写东方的超级英雄史诗。
                  <template v-if="!isPhone"><br><br></template>
                </div>
              </div>
              <div class="home-3-text home-content-text">
                <div v-if="isPhone">
                  <div>名为悟空，不只讲猴子。</div>
                  <div>猴子自是当仁不让的主角，却远非故事的全部。<br><br></div>
                  <div>西游记里，有太多耐人寻味的角色，值得琢磨的对白，甚至</div>
                  <div>细思极恐的情节。在“大师兄打妖怪”的表象背后，有狡狯的</div>
                  <div>妖精，凶残的鬼怪，多情的星君，怯懦的神仙……他们究竟</div>
                  <div>是谁？他们的动机是什么？他们的怕与爱，善与恨，参不透</div>
                  <div>的执念，日常的生活图景，又都是怎样的？<br><br></div>
                  <div>我们的野心，不只是去重新塑造一个个大主角。</div>
                  <div>而是用顶尖的画面，丰富的细节，</div>
                  <div>沉浸的战斗体验，足量的剧情演绎，</div>
                  <div>去还原我们心中一直存在的那个<span class="text-red">东方魔幻世界</span>——</div>
                  <div>她是如此辽阔、狂野、浪漫、充满想象力与神秘感，</div>
                  <div>又无比真实可信。<br><br></div>
                  <div><span class="text-red">《黑神话：悟空》</span>，</div>
                  <div>正是这个终极虚拟世界建造工程的第一次严肃构建。</div>
                  <div>这当然很难。幸运的是，我们早过了急功近利的年纪。<br><br></div>
                  <div>黑夜给了我火眼金睛，我要用它，<span class="text-red">看穿宿命</span>。</div>
                </div>
                <div v-else>
                  <div>名为悟空，不只讲猴子。</div>
                  <div>猴子自是当仁不让的主角，却远非故事的全部。<br><br></div>
                  <div>西游记里，有太多耐人寻味的角色，值得琢磨的对白，甚至细思极恐的情节。</div>
                  <div>在“大师兄打妖怪”的表象背后，有狡狯的妖精，凶残的鬼怪，多情的星君，怯懦的神仙……他们究竟是谁？他们</div>
                  <div>的动机是什么？他们的怕与爱，善与恨，参不透的执念，日常的生活图景，又都是怎样的？<br><br></div>
                  <div>我们的野心，不只是去重新塑造一个个大主角。而是用顶尖的画面，丰富的细节，沉浸的战斗体验，足量的剧情演</div>
                  <div>绎，去还原我们心中一直存在的那个<span class="text-red">东方魔幻世界</span>——</div>
                  <div>她是如此辽阔、狂野、浪漫、充满想象力与神秘感，又无比真实可信。<br><br></div>
                  <div><span class="text-red">《黑神话：悟空》</span>，正是这个终极虚拟世界建造工程的第一次严肃构建。</div>
                  <div>这当然很难。幸运的是，我们早过了急功近利的年纪。<br><br></div>
                  <div>黑夜给了我火眼金睛，我要用它，<span class="text-red">看穿宿命</span>。</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 图文介绍3 -->
        <div :class="slidesClass(3)">
          <div class="home-4">
            <div class="home-4-info home-text home-text-line-height slides-animation-long">
              <div class="home-4-title">
                <div class="home-title">只要这旗在，</div>
                <div class="home-title">妖族的<span class="text-red">自由之魂</span>，就在！
                  <template v-if="!isPhone"><br><br></template>
                </div>
              </div>
              <div class="home-4-text home-content-text">
                <div v-if="isPhone">
                  <div>很多年前的愚人节，我们宣布要做一款真正的主机大作。</div>
                  <div>更多年前的烧烤摊，我们激烈争吵孙悟空成佛以后，到底干</div>
                  <div>嘛去了。一恍惚，六年过去；再一楞神，十二年没了。</div>
                  <div>经，到底还是没取回来。<br><br></div>
                  <div>后来，又有很多个夜晚，</div>
                  <div>我们加班到神志不清时，总会半开玩笑地问自己——</div>
                  <div><span class="text-red">游戏科学</span>这家公司，独一无二的存在意义是什么？</div>
                  <div>我们开发的每一款产品，有让这个世界变得好玩一点吗？</div>
                  <div>我们创造的那些故事、角色与玩法，曾经感动过人心吗？</div>
                  <div>坦白说，不确定。<br><br></div>
                  <div>我们只是相信，唯有先打动自己，</div>
                  <div>再打动相似的人，才是值得的窄门。<br><br></div>
                  <div>《黑神话：悟空》，</div>
                  <div>一部西游题材的<span class="text-red">单机·动作·角色扮演游戏</span>，没有其他定义。</div>
                  <div>它是游戏科学预备交出的，一份最新的答案。<br><br></div>
                  <div style="font-size: 0.14rem;">希望你能喜欢。</div>
                </div>
                <div v-else>
                  <div>很多年前的愚人节，我们宣布要做一款真正的主机大作。</div>
                  <div>更多年前的烧烤摊，我们激烈争吵孙悟空成佛以后，到底干嘛去了。</div>
                  <div>一恍惚，六年过去；再一楞神，十二年没了。</div>
                  <div>经，到底还是没取回来。<br><br></div>
                  <div>后来，又有很多个夜晚，我们加班到神志不清时，总会半开玩笑地问自己——</div>
                  <div><span class="text-red">游戏科学</span>这家公司，独一无二的存在意义是什么？</div>
                  <div>我们开发的每一款产品，有让这个世界变得好玩一点吗？</div>
                  <div>我们创造的那些故事、角色与玩法，曾经感动过人心吗？</div>
                  <div>坦白说，不确定。<br><br></div>
                  <div>我们只是相信，唯有先打动自己，再打动相似的人，才是值得的窄门。</div>
                  <div>《黑神话：悟空》，一部西游题材的<span class="text-red">单机·动作·角色扮演游戏</span>，没有其他定义。</div>
                  <div>它是游戏科学预备交出的，一份最新的答案。<br><br></div>
                  <div style="font-size: 0.28rem;">希望你能喜欢。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-news-and-show">
      <!-- 动态 -->
      <!-- <div class="home-news" ref="homeNews">
        <div class="home-news-container">
          <div
            v-for="(_, i) in newsData"
            :key="i"
            class="news-item-container"
            :style="i==0?'width:100%':''"
          >
            <NewsItem
              :data="newsData[i]"
            />
          </div>
          <div class="news-more">
            <B1Button @click="urlRedirect('/news/')">更多动态</B1Button>
          </div>
        </div>
      </div> -->

      <!-- 视听站 -->
      <div
        class="home-show"
        ref="homeShow"
      >
        <div class="home-show-container">
          <template v-if="isPhone||(clientHeight < 450)">
            <ResPreviewPhone :showData="showData" />
          </template>
          <template v-else>
            <ResPreview :showData="showData" />
          </template>
        </div>
      </div>
    </div>

    <!-- Q&A -->
    <div
      class="home-qa"
      ref="homeQa"
    >
      <!-- <div class="home-qa-bg">
        <img src="/img/b1/img_bg_qa.png" />
      </div> -->
      <div class="home-qa-info">
        <div class="home-qa-container">
          <QAItem
            v-for="(item, i) in qaData"
            :key="i"
            :data="item"
            class="qa-info-item"
          />
        </div>
      </div>
    </div>

    <!-- 加入我们 -->
    <div
      class="home-join-us"
      ref="homeJoinUs"
    >
      <CompanyPreview class="join-us-company-show" />
      <div class="home-join-us-box">
        <div class="home-join-us-container">
          <div class="join-us-info home-text">
            <div class="home-title join-us-title">正在招聘岗位</div>
            <div class="join-us-subtitle">“你们现在开始一点也不晚，已经发生的事情根本什么都不算。”<span v-if="isPhone"><br><br></span></div>
            <div class="join-us-subtitle">——凯文·凯利<br><br></div>
            <div class="join-us-text">我们殷切地期盼很多、很多的新同事一起来共同打造这个世界，这是如此早就发布游戏实机视频的初衷。我们对现阶段的体验品质并不满意，对当前的内容生产效率也颇有忧虑。我们提供大量的核心岗位，出色的薪酬福利，以及让人感动的工作室环境，并且有杭州与深圳两地可供选择。<br><br></div>
            <div class="join-us-text">我们希望你是一个职业素养，专业能力与从业热情都足够高的人。我们不在意所谓的学历与履历，不过有自己的作品，会有加分。</div>
          </div>
          <div class="join-us-box">
            <JoinUsItem
              v-for="(item, i) in joinUsData"
              :key="i"
              :data="item"
            />
          </div>
          <div class="join-us-more">
            <B1Button @click="urlRedirect('https://www.zhipin.com/gongsi/a1ed8da22bfd2e1b1nJ93ti0GQ~~.html?ka=company-intro')">更多职位</B1Button>
          </div>
        </div>
      </div>
    </div>

    <!-- 关注我们弹窗 -->
    <FollowUsPopup :visible.sync="followUsShow" />

    <!-- 首页视频弹窗 -->
    <VideoPopup
      :src="homeVideo"
      :visible.sync="showHomeVideo"
    />
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import PhoneHomeNav from "../components/PhoneHomeNav.vue";
// import NewsItem from "../components/NewsItem.vue";
import QAItem from "../components/QAItem.vue";
import JoinUsItem from "../components/JoinUsItem.vue";
import B1Button from "../components/B1Button.vue";
import FollowUsPopup from "../components/FollowUsPopup.vue";
import ResPreview from "../components/ResPreview.vue";
import ResPreviewPhone from "../components/ResPreviewPhone.vue";
import CompanyPreview from "../components/CompanyPreview.vue";
// import ScrollAnimationBox from "../components/scrollAnimation/ScrollAnimationBox.vue";
// import ScrollAnimationContainer from "../components/scrollAnimation/ScrollAnimationContainer.vue";
import VideoPopup from "../components/VideoPopup.vue";
import gsData from "../gsData";
import scroll from "../scroll";

export default {
  components: {
    HomeNav,
    PhoneHomeNav,
    // NewsItem,
    QAItem,
    JoinUsItem,
    B1Button,
    FollowUsPopup,
    ResPreview,
    ResPreviewPhone,
    // ScrollAnimationBox,
    // ScrollAnimationContainer,
    VideoPopup,
    CompanyPreview,
  },
  data: function () {
    return {
      scrollLock: false,
      // scrollJudgeLock: false,
      navActive: "homeTop",
      followUsShow: false,
      // disableAnimation: false,
      inSlides: false,
      slidesIdx: -1,
      slidesNum: 4,
      slidesLock: false,
      slidesTopOld: 0,
      slidesLockTimer: undefined,
      homeVideo: "",
      showHomeVideo: "",
      navData: [
        { id: "homeTop", name: "首页", fix: 0 },
        { id: "homeIntroduction", name: "介绍", fix: 0 },
        // { id: "homeNews", name: "动态", fix: 400 },
        { id: "homeShow", name: "视听站", fix: 300 },
        { id: "homeQa", name: "常见问题", fix: 30 },
        { id: "homeJoinUs", name: "加入我们", fix: 200 },
      ],
      animationProgress: {
        home1: 0,
      },
      newsData: [],
      showData: [
        {
          title: "视频",
          stype: "video",
          items: [
            {
              thumbnail: "/img/Wallpaper/Wallpaper5.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile5.jpg",
              img: "/img/Wallpaper/Wallpaper5.jpg",
              video: "/video/preview/video_Day1.mp4",
            },
            {
              thumbnail: "/img/Wallpaper/Wallpaper6.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile6.jpg",
              img: "/img/Wallpaper/Wallpaper6.jpg",
              video: "/video/preview/video_Day2.mp4",
            },
            {
              thumbnail: "/img/Wallpaper/Wallpaper7.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile7.jpg",
              img: "/img/Wallpaper/Wallpaper7.jpg",
              video: "/video/preview/video_Day3.mp4",
            },
            {
              thumbnail: "/img/Wallpaper/Wallpaper8.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile8.jpg",
              img: "/img/Wallpaper/Wallpaper8.jpg",
              video: "/video/preview/video_Day4.mp4",
            },
            {
              thumbnail: "/img/Wallpaper/Wallpaper9.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile9.jpg",
              img: "/img/Wallpaper/Wallpaper9.jpg",
              video: "/video/preview/video_Day5.mp4",
            },
            {
              thumbnail: "/img/Wallpaper/Wallpaper10.jpg",
              phoneThumbnail: "/img/Wallpaper/Wallpaper_mobile10.jpg",
              img: "/img/Wallpaper/Wallpaper10.jpg",
              video: "/video/preview/video_Day6.mp4",
            },
          ],
        },
        {
          title: "游戏截图",
          stype: "img",
          items: [
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_1.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_1.png",
              img: "/img/screenshot/screenshot1.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_2.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_2.png",
              img: "/img/screenshot/screenshot2.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_3.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_3.png",
              img: "/img/screenshot/screenshot3.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_4.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_4.png",
              img: "/img/screenshot/screenshot4.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_5.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_5.png",
              img: "/img/screenshot/screenshot5.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_6.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_6.png",
              img: "/img/screenshot/screenshot6.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_7.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_7.png",
              img: "/img/screenshot/screenshot7.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_8.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_8.png",
              img: "/img/screenshot/screenshot8.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_9.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_9.png",
              img: "/img/screenshot/screenshot9.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_10.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_10.png",
              img: "/img/screenshot/screenshot10.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_11.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_11.png",
              img: "/img/screenshot/screenshot11.jpg",
            },
            {
              thumbnail: "/img/thumbnail/screenshot/img_art_screenshot_12.png",
              phoneThumbnail:
                "/img/thumbnail/screenshot/img_MbWeb_art_screenshot_12.png",
              img: "/img/screenshot/screenshot12.jpg",
            },
          ],
        },
        {
          title: "壁纸",
          stype: "img",
          items: [
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_1.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_1.png",
              img: "/img/Wallpaper/Wallpaper1.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile1.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_2.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_2.png",
              img: "/img/Wallpaper/Wallpaper2.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile2.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_3.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_3.png",
              img: "/img/Wallpaper/Wallpaper3.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile3.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_4.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_4.png",
              img: "/img/Wallpaper/Wallpaper4.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile4.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_5.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_5.png",
              img: "/img/Wallpaper/Wallpaper5.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile5.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_6.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_6.png",
              img: "/img/Wallpaper/Wallpaper6.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile6.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_7.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_7.png",
              img: "/img/Wallpaper/Wallpaper7.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile7.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_8.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_8.png",
              img: "/img/Wallpaper/Wallpaper8.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile8.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_9.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_9.png",
              img: "/img/Wallpaper/Wallpaper9.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile9.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Wallpaper/img_art_wallpaper_10.png",
              phoneThumbnail:
                "/img/thumbnail/Wallpaper/img_MbWeb_art_wallpaper_10.png",
              img: "/img/Wallpaper/Wallpaper10.jpg",
              phoneImg: "/img/Wallpaper/Wallpaper_mobile10.jpg",
            },
          ],
        },
        {
          title: "原画",
          stype: "img",
          items: [
            {
              thumbnail: "/img/thumbnail/Concept/img_art_concept_guishiwei.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_guishiwei.png",
              img: "/img/Concept/Concept_guishiwei.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_heifenshan1.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_heifenshan1.png",
              img: "/img/Concept/Concept_heifenshan1.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_heifenshan2.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_heifenshan2.png",
              img: "/img/Concept/Concept_heifenshan2.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_heifenshan3.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_heifenshan3.png",
              img: "/img/Concept/Concept_heifenshan3.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_heifenshan4.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_heifenshan4.png",
              img: "/img/Concept/Concept_heifenshan4.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_huodaolang.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_huodaolang.png",
              img: "/img/Concept/Concept_huodaolang.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_landscape1.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_landscape1.png",
              img: "/img/Concept/Concept_landscape1.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_landscape2.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_landscape2.png",
              img: "/img/Concept/Concept_landscape2.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_landscape3.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_landscape3.png",
              img: "/img/Concept/Concept_landscape3.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_landscape6.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_landscape6.png",
              img: "/img/Concept/Concept_landscape6.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Concept/img_art_concept_langren.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_langren.png",
              img: "/img/Concept/Concept_langren.jpg",
            },
            {
              thumbnail:
                "/img/thumbnail/Concept/img_art_concept_lingxudaozhang.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_lingxudaozhang.png",
              img: "/img/Concept/Concept_lingxudaozhang.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Concept/img_art_concept_tudi.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_tudi.png",
              img: "/img/Concept/Concept_tudi.jpg",
            },
            {
              thumbnail: "/img/thumbnail/Concept/img_art_concept_wukong.png",
              phoneThumbnail:
                "/img/thumbnail/Concept/img_MbWeb_art_concept_wukong.png",
              img: "/img/Concept/Concept_wukong.jpg",
            },
          ],
        },
      ],
      qaData: [
        {
          question:
            "我们为什么选择这个时间发布《黑神话：悟空》（以下简称《悟空》）的早期视频？",
          answer:
            "答：直接原因是开发团队相当缺人，尤其缺高手。我们非常渴望全国乃至全世界，有志于从事高品质动作游戏开发的朋友能够加入游戏科学，一起来创造这个方兴未艾的东方魔幻世界。详情请关注官网底部的招聘信息，内容会随时动态更新。",
        },
        {
          question: "《悟空》的付费模式是怎样的？",
          answer:
            "答：一次性买断制的经典单机付费模式，未来不排除有发售DLC与非数值向的内购内容。另外，我们非常乐于见到大家把这个回答截图保存，以备未来随时提醒我们。",
        },
        {
          question: "《悟空》准备登陆哪些游戏平台？",
          answer:
            "答：PC+所有主流主机平台，也不排斥可以流畅运行端游的云游戏平台。",
        },
        {
          question: "《悟空》大概什么时候发售？我已经等不及了。",
          answer:
            "答：应该用不了500年……我们会在自己作为玩家觉得满意的时候再发布，但也会考虑边际效应与性价比——毕竟黑神话系列的更多作品，也在梦中认真规划着。",
        },
        {
          question:
            "《悟空》一周目通关预计多少时长？会加入其他英雄吗？会有联网模式吗？",
          answer:
            "答：暂时无可奉告。最让我们苦恼是，尤卡本人确实很爱玩单人剧情模式内容扎实，多样化的职业/武器战斗体验，支持联网共斗的主机动作游戏……",
        },
      ],
      joinUsData: [
        {
          jtype: "UE4",
          name: "资深图形工程师",
          location: "杭州",
          url:
            "https://www.zhipin.com/job_detail/cb0e167b91f17a2a3nB_2tm4EFs~.html?ka=comp_joblist_1",
        },
        {
          jtype: "技术美术",
          name: "（动画方向）",
          location: "深圳/杭州",
          url:
            "https://www.zhipin.com/job_detail/dff9ed5c345364633nB_396_GFM~.html?ka=comp_joblist_6",
        },
        {
          jtype: "UE4",
          name: "特效设计师",
          location: "杭州",
          url:
            "https://www.zhipin.com/job_detail/2f6cfe4418d3e8823nB_2Ni0EVM~.html?ka=comp_joblist_7",
        },
        {
          jtype: "",
          name: "美术项目经理",
          location: "杭州",
          url:
            "https://www.zhipin.com/job_detail/bd95426588e927583nB_2NW0ElU~.html?ka=comp_joblist_2",
        },
        {
          jtype: "",
          name: "声音设计师",
          location: "杭州",
          url:
            "https://www.zhipin.com/job_detail/344ff2a508b771c83nB_2Nm_F1I~.html?ka=comp_joblist_2",
        },
        {
          jtype: "游戏策划",
          name: "（文学方向）",
          location: "杭州",
          url:
            "https://www.zhipin.com/job_detail/ed4aa8b278d5938a3nB_2N61E1c~.html?ka=comp_joblist_1",
        },
      ],
    };
  },
  created: function () {
    this.fetchNewsData();
  },
  mounted: function () {},
  // beforeDestroy: function() {
  //   this.$store.commit("setGsScrollSpeed", 5);
  // },
  methods: {
    fetchNewsData: function () {
      let l = gsData.newsData.length;
      if (l > 4) {
        l = 4;
      }

      let t = [];
      for (let i = 0; i < l; i++) {
        t.push(gsData.newsData[i]);
      }
      this.newsData = t;
    },
    scrollTo: function (elName) {
      // this.$store.commit("setGsScrollLockOffset", this.$refs[elName].getBoundingClientRect().top);
      // this.$refs[elName].scrollIntoView(
      //   {behavior: "smooth", block: "start", inline: "nearest"}
      // );
      if (this.slidesLock) {
        return;
      }
      this.slidesLock = true;
      this.inSlides = false;
      let offset = this.$refs[elName].getBoundingClientRect().top;
      // if (elName == "homeIntroduction") {
      //   offset += this.clientHeight / 2;
      // }
      scroll.scrollLinear(offset, 300, 300, () => {
        this.slidesLock = false;
        // this.slidesIdx = -1;
        // this.autoScrollJudge();
      });
      if (!this.isPhone && elName == "homeIntroduction") {
        setTimeout(this.autoScrollJudge, 800);
      }
    },
    homeVideoPlay: function () {
      this.homeVideo = "http://heishenhua.com/video/b1/gamesci_wukong.mp4";
      this.showHomeVideo = true;
    },
    joinUsClick: function () {
      window.open("https://www.lagou.com/gongsi/36721.html", "_blank");
    },
    urlRedirect: function (url) {
      window.open(url, "_blank");
    },
    slidesClass: function (idx) {
      // if ((idx < 0) || (idx >= this.slidesNum)) {
      //   if (this.slidesIdx == idx) {
      //     return "slides-over-show";
      //   } else if (idx < 0) {
      //     return "slides-over-hidden-up";
      //   }
      //   return "slides-over-hidden-down";
      // }
      if (this.isPhone) {
        return "";
      }

      let c = "";
      if (this.inSlides) {
        c += "gs-slides-in";
      }
      if (this.slidesIdx == idx) {
        c += " gs-slides-show";
      } else {
        c += " gs-slides-hidden-" + (idx < this.slidesIdx ? "up" : "down");
      }
      return c;
    },
    getNavActive: function () {
      // let newNavActive = this.navActive;
      // let topOffset = -Infinity;
      // for (let i = 0; i < this.navData.length; i++) {
      //   let topTmp = this.$refs[this.navData[i].id].getBoundingClientRect().top;
      //   if ((topTmp <= this.navData[i].fix) && (topTmp > topOffset)) {
      //     newNavActive = this.navData[i].id;
      //   }
      // }

      let newNavActive = this.navActive;
      for (let i = 0; i < this.navData.length; i++) {
        let topTmp = this.$refs[this.navData[i].id].getBoundingClientRect().top;
        if (topTmp > this.navData[i].fix) {
          break;
        } else {
          newNavActive = this.navData[i].id;
        }
      }

      if (this.navActive != newNavActive) {
        this.navActive = newNavActive;
      }
    },
    // autoScrollJudge: function() {
    //   let gsSlidesTop = this.$refs.gsSlides.getBoundingClientRect().top;
    //   if (gsSlidesTop > 0) {
    //     this.inSlides = false;
    //     this.slidesIdx = 0;
    //   } else if (gsSlidesTop < this.clientHeight - this.$refs.gsSlides.clientHeight) {
    //     this.inSlides = false;
    //     this.slidesIdx = this.slidesNum - 1;
    //   } else {
    //     this.inSlides = true;
    //     this.slidesIdx = Math.floor(-gsSlidesTop / this.clientHeight);
    //     if (!this.slidesLock) {
    //       let offset;
    //       if (this.isScrollDown) {
    //         if (this.slidesIdx >= this.slidesNum - 1) {
    //           return;
    //         }
    //         offset = gsSlidesTop + (this.slidesIdx + 1) * this.clientHeight;
    //       } else {
    //         if (this.slidesIdx <= 0) {
    //           return;
    //         }
    //         offset = gsSlidesTop + (this.slidesIdx) * this.clientHeight;
    //       }
    //       this.slidesLock = true;
    //       scroll.scrollLinear(
    //         offset,
    //         200,
    //         1200,
    //         () => {
    //           this.slidesLock = false;
    //         }
    //       );
    //     }
    //   }
    // },
    autoScrollJudge: function () {
      if (this.inSlides && this.slidesIdx < 0 && this.isScrollDown) {
        if (this.slidesLockTimer) {
          clearTimeout(this.slidesLockTimer);
        }
        this.slidesLock = false;
      } else if (
        this.inSlides &&
        this.slidesIdx >= this.slidesNum &&
        !this.isScrollDown
      ) {
        if (this.slidesLockTimer) {
          clearTimeout(this.slidesLockTimer);
        }
        this.slidesLock = false;
      }

      if (this.slidesLock) {
        return;
      }

      let gsSlidesTop = this.$refs.gsSlides.getBoundingClientRect().top;
      let newSlidesIdx;
      if (gsSlidesTop > this.clientHeight) {
        // top
        newSlidesIdx = -1;
      } else if (gsSlidesTop >= 0) {
        // to index 0
        newSlidesIdx = 0;
      } else if (
        gsSlidesTop <
        -this.$refs.gsSlides.clientHeight - this.clientHeight / 2
      ) {
        // out of last slide
        newSlidesIdx = this.slidesNum;
      } else if (gsSlidesTop <= -this.$refs.gsSlides.clientHeight) {
        // last slide
        newSlidesIdx = this.slidesNum - 1;
      } else {
        // in slides
        newSlidesIdx = Math.floor(-gsSlidesTop / this.clientHeight);
        if (this.inSlides) {
          if (this.isScrollDown) {
            newSlidesIdx++;
          } else {
            newSlidesIdx--;
          }
        }
      }
      let newInSlides = newSlidesIdx >= 0 && newSlidesIdx < this.slidesNum;
      if (!this.inSlides && !newInSlides) {
        this.slidesIdx = newSlidesIdx;
        return;
      }
      this.slidesLock = true;
      this.slidesIdx = newSlidesIdx;
      let fix = this.clientHeight / 2;
      if (newInSlides) {
        this.inSlides = newInSlides;
      } else if (newSlidesIdx < 0) {
        fix = 0;
      } else {
        fix = this.clientHeight / 2 + 5;
      }
      let offset = gsSlidesTop + newSlidesIdx * this.clientHeight + fix;
      // let lockTime = 500;
      // if ((newSlidesIdx < 0) || (newSlidesIdx >= this.slidesNum)) {
      //   lockTime = 0;
      // }
      if (newInSlides) {
        scroll.scrollLinear(offset, 500, 110, () => {
          this.inSlides = newInSlides;
          this.slidesLock = false;
        });
      } else {
        scroll.scrollSmoothNoLock(offset, 0);
        this.slidesLockTimer = setTimeout(() => {
          this.inSlides = newInSlides;
          this.slidesLock = false;
        }, 1000);
      }
    },
    scrollJudge: function () {
      let gsSlidesTop = this.$refs.gsSlides.getBoundingClientRect().top;
      let scrollDown = gsSlidesTop < this.slidesTopOld;
      if (this.inSlides && this.slidesIdx < 0 && scrollDown) {
        this.slidesLock = false;
      } else if (
        this.inSlides &&
        this.slidesIdx >= this.slidesNum &&
        !scrollDown
      ) {
        this.slidesLock = false;
      }

      if (this.slidesLock) {
        return;
      }

      if (gsSlidesTop > 0) {
        this.slidesIdx = -1;
      } else if (gsSlidesTop < -this.$refs.gsSlides.clientHeight) {
        this.slidesIdx = this.slidesNum;
      } else {
        this.slidesIdx = Math.floor(-gsSlidesTop / this.clientHeight);
      }
      this.inSlides =
        gsSlidesTop <= 0 &&
        gsSlidesTop > -this.$refs.gsSlides.clientHeight + this.clientHeight;

      this.slidesTopOld = gsSlidesTop;
    },
    onScroll: function () {
      if (this.scrollLock) {
        return;
      }
      this.scrollLock = true;
      setTimeout(() => {
        this.scrollLock = false;
        this.getNavActive();
        if (!this.isPhone) {
          this.autoScrollJudge();
          // this.scrollJudge();
        }
      }, 100);
    },
  },
  computed: {
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
    scrollTop: function () {
      return this.$store.state.base.scrollTop;
    },
    scrollElement: function () {
      return this.$store.state.base.scrollElement;
    },
    clientWidth: function () {
      return this.$store.state.base.clientWidth;
    },
    clientHeight: function () {
      return this.$store.state.base.clientHeight;
    },
    gsScrollLock: function () {
      return this.$store.state.base.gsScrollLock;
    },
    isScrollDown: function () {
      return this.$store.state.base.isScrollDown;
    },
    rootFontSizeRate: function () {
      return this.$store.state.base.rootFontSizeRate;
    },
    topScrollLineStart: function () {
      return this.clientWidth * 0.2;
    },
  },
  watch: {
    "$store.state.base.windowScroll": function () {
      this.onScroll();
    },
    showHomeVideo: function () {
      if (this.showHomeVideo) {
        this.$refs.homePreviewVideo.pause();
      } else {
        this.$refs.homePreviewVideo.play();
      }
    },
  },
};
</script>

<style>
</style>