const API_CONFIG_FILE = "/api.json";

type APIConfig = {
  api_url: string;
};

let config: APIConfig | undefined;

export async function loadConfig(): Promise<APIConfig> {
  const response = await fetch(API_CONFIG_FILE);
  config = (await response.json()) as APIConfig;
  return config;
}

export function getConfig(): APIConfig {
  if (!config) {
    throw new Error("The config file has to be loaded first");
  }
  return config;
}
