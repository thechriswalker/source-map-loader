# source maps loader for webpack

> Forked from arielschiavoni/source-map-loader who forked from webpack/source-map-loader.
> I did this purely to publish under a different name (`source-maps-loader` vs `source-map-loader` so I could easily use the fixed functionality.
>
> **No credit for actual code should be given to me, but the original authors.**

Extracts SourceMaps for source files that as added as `sourceMappingURL` comment.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)


### example webpack config

``` javascript
module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-maps-loader"
      }
    ]
  }
};
```

This extracts all SourceMaps from all files. That's not so good performance-wise so you may only want to apply the loader to relevant files.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
