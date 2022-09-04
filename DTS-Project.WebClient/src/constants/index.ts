export const settings = {
    environment: process.env.VUE_APP_ENV as string,
    appInsights: {
        instrumentationKey: process.env.VUE_APP_APP_INSIGHTS_INSTRUMENTATION_KEY as string,
    },
    graphApi: {
        baseUrl: process.env.VUE_APP_GRAPH_API_BASE_URL as string,
    },
    webApi: {
        baseUrl: process.env.VUE_APP_WEB_API_BASE_URL as string,
    },
};
