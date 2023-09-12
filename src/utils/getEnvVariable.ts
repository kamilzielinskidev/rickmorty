import { EnvVar } from '../const/envVar';

export const getEnvVariable = (name: EnvVar) => {
  const envVar = import.meta.env[name];

  if (envVar === undefined) {
    throw new Error(`Environment variable ${name} not found`);
  }

  return envVar;
};
