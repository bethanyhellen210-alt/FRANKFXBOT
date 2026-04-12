type TTabsTitle = {
  [key: string]: string | number
}

type TDashboardTabIndex = {
  [key: string]: number
}

export const tabs_title: TTabsTitle = Object.freeze({
  FREE_BOTS: "Free Bots",
  DASHBOARD: "Dashboard",
  CHART: "Chart",
  ANALYSIS: "Analysis",
  STRATEGIES: "Strategies",
  BOT_BUILDER: "Bot Builder",
  TUTORIAL: "Tutorials",
  AI_BOTS: "AI Bots",
})

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
  FREE_BOTS: 0,
  DASHBOARD: 1,
  BOT_BUILDER: 2,
  CHART: 3,
  TUTORIAL: 4,
  ANALYSIS: 5,
  STRATEGIES: 6,
  AI_BOTS: 7,
})

export const MAX_STRATEGIES = 10

export const TAB_IDS = [
  "id-free-bots",
  "id-dbot-dashboard",
  "id-bot-builder",
  "id-charts",
  "id-tutorials",
  "id-analysis",
  "id-strategies",
  "id-ai-bots",
]

export const DEBOUNCE_INTERVAL_TIME = 500
