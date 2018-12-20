const slugify = require('transliteration').slugify;

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}
module.exports = {
  raw: true,
  use: [
    //? 为各级标题添加锚点
    [require('markdown-it-anchor'), {
      level: 2, //? 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
      slugify: slugify, //? 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
      permalink: true, //? 开启标题锚点功能
      permalinkBefore: true //? 在标题前创建锚点
    }],
    /* [require('markdown-it-container'), 'demo', {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          var description = (m && m.length > 1) ? m[1] : '';
          var content = tokens[idx + 1].content;
          var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          var script = striptags.fetch(content, 'script');
          var style = striptags.fetch(content, 'style');
          var jsfiddle = { html: html, script: script, style: style };
          var descriptionHTML = description
            ? md.render(description)
            : '';

          jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

          return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }], */
    [require('markdown-it-container'), 'tip'],
    [require('markdown-it-container'), 'warning']
  ],
  preprocess: function(MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  },
  wrapper: 'section'
}