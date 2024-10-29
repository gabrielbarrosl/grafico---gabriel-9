const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
  type: "pie",
  data: {
    labels:[
      "Instagram",
      "WhatsApp",
      "Facebook",
      "WeChat",
      "TikTok",
      "DouYin",
      "Twitter",
      "Telegram",
      "FB Messenger",
      "LINE"
    ], datasets:[{
        data:[
        16.5,
        16.1,
        12.8,
        12.8,
        7.4,
        6.6,
        3.2,
        2.4,
        2.3,
        1.7,
        ],
    backgroundColor:[
        "rgb(255, 250, 205)",
        "rgb(169,169,169)",
        "rgb(105,89,205)",
        "rgb(0,0,205)",
        "rgb(176,196,222)",
        "rgb(72,209,204)",
        "rgb(144,238,144)",
        "rgb(0,128,0)",
        "rgb(154,205,50)",
        "rgb(139,69,19)",
        ]
    }]
  }
}
)