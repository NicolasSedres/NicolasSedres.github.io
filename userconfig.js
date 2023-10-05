let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Montevideo, Uruguay',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "facebook",
            url: "https://www.facebook.com/",
            icon: "brand-facebook",
            icon_color: "#0356FF",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
        ],
      }, {
        name: "Useful",
        links: [
            {
              name: "translate",
              url: "https://translate.google.com/?hl=es",
              icon: "brand-google",
              icon_color: "#7daea3",
            },
            {
              name: "chatGPT",
              url: "https://chat.openai.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
        ],
      }, {
        name: "Music",
        links: [
          {
            name: "youtubeMusic",
            url: "https://music.youtube.com/",
            icon: "music",
            icon_color: "#BE0202",
          },
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/dev.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "bitbucket",
              url: "https://bitbucket.org/",
              icon: "brand-bitbucket",
              icon_color: "#1F71D1",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/myself.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
