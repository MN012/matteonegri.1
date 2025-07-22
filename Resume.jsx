import React from "react";

const Resume = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] pt-24">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-green-400 to-lime-400 text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all montserrat text-lg"
    >
      Open Resume PDF
    </a>
    <p className="mt-6 text-sm text-gray-500">(If the PDF does not open, please ensure <code>resume.pdf</code> is placed in your <b>public</b> folder.)</p>
  </div>
);

export default Resume; 