import React from "react";

type ContactLabelProps = {
  label: string;
  value: string;
  href?: string; // opcional, por si es link
};

export default function ContactLabel({ label, value, href }: ContactLabelProps) {
  return (
    <div className="flex flex-col items-start mb-4">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-lg text-blue-600 dark:text-blue-400 hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <span className="text-lg text-gray-900 dark:text-gray-100 break-all">
          {value}
        </span>
      )}
    </div>
  );
}
