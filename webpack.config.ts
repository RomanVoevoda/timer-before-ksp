import {buildWebpack} from "./config/build/buildWebpack";
import webpack from 'webpack';
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
	mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: 'C:/Users/Voevodich/Desktop/ksp/timer-before-ksp/build',
    entry: './src/pages/Main/lib/MainPage.ts',
    html: 'public/index.html'
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });
	
	return config;
};