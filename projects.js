/* ============================================================
   项目配置 —— 部署到你自己的服务器后，把各项目的「网页版地址」
   webUrl 改成真实可访问的地址即可（点「网页版」会直接打开它）。
   下载包 download 同理放真实下载链接；没有就留空 ""。
   ============================================================ */
const PROJECTS = [
  {
    id: "iraone",
    name: "iraone",
    tag: "流媒体内容平台",
    logo: "▶", color: "linear-gradient(135deg,#ff5b7c,#ff8f5b)",
    badges: ["Django", "Python", "Celery", "Redis", "FFmpeg"],
    intro: "基于 Django 的流媒体 / 内容平台基座，分阶段交付（当前 V1.4，Celery + Redis）。" +
           "涵盖账号体系、内容与媒体库、直播、弹幕、播放器、推荐、创作者与变现、搜索、审核运营等模块，" +
           "面向可投产的内容平台能力建设。",
    features: [
      "账号 / 内容 / 媒体库 / 直播 / 弹幕 / 播放器",
      "推荐、搜索、创作者中心与变现、审核与运营",
      "媒体校验与缩略图依赖 FFmpeg / ffprobe",
    ],
    usage: [
      "python manage.py migrate",
      "python manage.py runserver 127.0.0.1:8000",
    ],
    usageNote: "需本机装有 FFmpeg / ffprobe（不在 PATH 时用 FFPROBE_BINARY / FFMPEG_BINARY 指定路径）。",
    source: "https://github.com/iramembritc586-sudo/iraone",
    webUrl: "",          // ← 部署后填，如 https://你的域名/iraone/
    download: "",
  },
  {
    id: "oncode",
    name: "oncode",
    tag: "无代码库存同步工具",
    logo: "◧", color: "linear-gradient(135deg,#34d399,#3b82f6)",
    badges: ["Vite", "Node.js", "Windows EXE", "库存同步", "LAN"],
    intro: "基于 Vite 的本地化无代码工具，主打库存数据同步，已打包成 Windows 可执行程序。" +
           "双击 exe 即用：自动启动本地服务、自动打开浏览器；支持同一 Wi-Fi 下用手机访问 LAN 地址，" +
           "本机即开即用、免安装、可局域网协作。",
    features: [
      "无代码方式配置 / 同步库存数据",
      "双击 exe 自动起服务并打开浏览器，同 Wi-Fi 手机可访问",
      "Win7 ~ Win11 可用，免安装，整文件夹复制即可分发",
    ],
    usage: [
      "双击 nocode.exe",
      "浏览器自动打开 → 手机访问控制台显示的 http://192.168.x.x:8080",
    ],
    usageNote: "手机与电脑需在同一个 Wi-Fi。或在源码目录 npm run dev 本地开发。",
    source: "https://github.com/iramembritc586-sudo/nocode-inventory-sync",
    noWeb: true,         // 无独立网页版：网页界面由 exe 程序自身启动
    downloadPending: true, // ← exe 构建发布后把下方 download 填上即可
    webUrl: "",
    download: "",        // ← 放 nocode.exe 下载链接（仓库 Release）
  },
  {
    id: "toursaas",
    name: "toursaas",
    tag: "旅行社 SaaS 管理系统",
    logo: "✈", color: "linear-gradient(135deg,#5b8cff,#7c5bff)",
    badges: ["Laravel", "PHP", "MySQL", "Multi-Tenant"],
    intro: "面向组团社的内部管理系统，正在 SaaS 化重构：多租户隔离、统一订单号、" +
           "PII 敏感信息保护、标准化角色权限。基于 Laravel，目标是把单体内部系统升级为可多租户运营的 SaaS。",
    features: [
      "多租户数据隔离、统一订单号体系",
      "PII 保护与标准角色权限",
      "订单 / 资源采购等业务模块（重构推进中）",
    ],
    usage: [
      "composer install",
      "cp .env.example .env && php artisan key:generate",
      "php artisan migrate",
      "php artisan serve",
    ],
    usageNote: "需 PHP / Composer / 数据库环境（如 MySQL）。",
    source: "https://github.com/iramembritc586-sudo/TourSaaS",
    webUrl: "",          // ← 部署后填
    download: "",
  },
  {
    id: "video-parser",
    name: "video-parser",
    tag: "网页视频地址提取",
    logo: "🎬", color: "linear-gradient(135deg,#f59e0b,#ef4444)",
    badges: ["Python", "Flask", "yt-dlp", "FFmpeg", "跨平台"],
    intro: "输入网页地址，提取真实视频流，可在线播放或下载（音视频自动合并）。" +
           "支持 YouTube、B站（含番剧 4K/HDR）、抖音 及上千网站；yt-dlp 搞不定时用无头浏览器真正跑页面抓流（短剧站等）。" +
           "提供网页版（浏览器即用，跨平台）和桌面版（含 Windows exe）。",
    features: [
      "B站(含番剧4K) / 抖音 / YouTube / 上千网站解析",
      "无头浏览器捕获 JS 动态站视频流；ffprobe 自动补清晰度",
      "在线播放、aria2c 多线程下载、批量解析、下载进度、B站扫码登录",
    ],
    usage: [
      "# 网页版（推荐，跨平台）",
      "./run-web.sh        # Windows 双击 run-web.bat",
      "# 浏览器自动打开 http://127.0.0.1:8731",
    ],
    usageNote: "需 Python 3 与 FFmpeg；可选 mpv / aria2。桌面版另提供 Windows exe，双击即用。",
    source: "https://github.com/iramembritc586-sudo/video-parser",
    webUrl: "http://127.0.0.1:8731",   // ← 部署后改成你的服务器地址
    download: "https://github.com/iramembritc586-sudo/video-parser/releases/download/v1.0.0/video-parser.exe",
  },
];
