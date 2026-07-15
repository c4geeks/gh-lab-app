export function greet(name) {
  const target = name || "world";
  return `hello, ${target}`;
}

export function shout(name) {
  return greet(name).toUpperCase;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet(process.env.GREET_TARGET));
}
