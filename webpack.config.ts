import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVariables {
	mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';

	const config: webpack.Configuration = {
		mode: env.mode ?? 'development',
		entry: './src/pages/Main/lib/MainPage.ts',
	  output: {
	    path: 'C:/Users/Voevodich/Desktop/ksp/timer-before-ksp/build',
	    filename: 'bundle.[contenthash].js',
	    clean: true
	  },

    plugins: [
			new HtmlWebpackPlugin({ template: 'public/index.html' }),
      isDev && new webpack.ProgressPlugin(),
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/styles.[contenthash:8].css',
        chunkFilename: 'css/styles.[contenthash:8].css',
      })
		],

    module: {
      rules: [
        //Порядок в лоадерах важен!!!
        {
          test: /\.s[ac]ss$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
      port: env.port ?? 5000,
      open: true
    }
	}
	
	return config;
};