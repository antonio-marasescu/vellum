import { InjectionToken, type EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export type VellumConfig = Record<string, never>;

export const VELLUM_CONFIG = new InjectionToken<VellumConfig>('VELLUM_CONFIG', {
  providedIn: 'root',
  factory: () => ({})
});

export function provideVellumConfig(config: Partial<VellumConfig>): EnvironmentProviders {
  const defaultConfig: VellumConfig = {};

  return makeEnvironmentProviders([
    {
      provide: VELLUM_CONFIG,
      useValue: { ...defaultConfig, ...config }
    }
  ]);
}
