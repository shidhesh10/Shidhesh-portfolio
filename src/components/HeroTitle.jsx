import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Front End Developer", "Backend Developer"];

export default function HeroTitle() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 900); // pause at full text
        }
      } else {
        // deleting
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="text-2xl md:text-4xl font-semibold mb-6 ">
      <span className="typewriter">{text}</span>
    </h2>
  );
}
