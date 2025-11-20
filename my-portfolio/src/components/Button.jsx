export default function Button({ text, href }) {
  return (
    <a
      href={href}
      className="px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-accent/80 duration-300"
    >
      {text}
    </a>
  );
}
