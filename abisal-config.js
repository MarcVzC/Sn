window.ABISAL_CFG = {

  API_BASE: "https://bhezxjwihnvblzstjeqj.supabase.co/functions/v1/abisal",

  BOT_USER: "AbisalGameBot",
  APP_NAME: "abisal",

  ADSGRAM_BLOCK_REWARD: "42738",
  ADSGRAM_BLOCK_TASKS:  "task-42739",
  ADSGRAM_ENABLED:      true,

  POT: { usd: 100, raised: 0, deadline: null },

  PRICES: { clanCreate: 2500, clanRename: 800, userRename: 0 },

  LIMITS: { adsPerDay: 12, clanMax: 30, tasksVisible: 6 },

  ECONOMY: {
    coinsPerKill: 25,
    coinsPerOrb:  2,
    winBonus:     200,
    streakBonus:  [50, 80, 120, 180, 260, 380, 550]
  }

};
