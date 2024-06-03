import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
// eslint-disable-next-line react/prop-types
const MarkdownRenderer = ({ markdown }) => {
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre><code className="hljs bg-slate-900">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code></pre>"
          );
        } catch (__) {
          console.log(str);
        }
      }

      return (
        '<pre><code className="hljs bg-slate-900">' +
        md.utils.escapeHtml(str) +
        "</code></pre>"
      );
    },
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    langPrefix: "language-",
  });
  const result = md.render(markdown);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
};

export default MarkdownRenderer;
