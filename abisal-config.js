window.ABISAL_CFG = {

  ADSGRAM_BLOCK_REWARD: "",
  ADSGRAM_BLOCK_TASKS:  "",
  ADSGRAM_ENABLED:      false,

  API_BASE:   "",
  BOT_USER:   "AbisalGameBot",
  APP_NAME:   "abisal",

  POT: {
    usd:      100,
    target:   10000,
    current:  0,
    deadline: null
  },

  PRICES: {
    clanCreate:   2500,
    clanRename:   800,
    userRename:   500,
    starPacks: [
      { id: "p1", stars: 50,  bonus: 0   },
      { id: "p2", stars: 150, bonus: 20  },
      { id: "p3", stars: 400, bonus: 80  }
    ]
  },

  LIMITS: {
    adsPerDay:    12,
    clanMax:      30,
    tasksVisible: 6
  },

  ECONOMY: {
    coinsPerKill: 25,
    coinsPerOrb:  2,
    winBonus:     200,
    streakBonus:  [50, 80, 120, 180, 260, 380, 550]
  }

};
