"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-4 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            First name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#1e2d45] bg-[#0d1425] px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Last name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#1e2d45] bg-[#0d1425] px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Work email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-[#1e2d45] bg-[#0d1425] px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="jane@yourcompany.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Company
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-[#1e2d45] bg-[#0d1425] px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Acme IT Services"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Tell us about your needs
        </label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-[#1e2d45] bg-[#0d1425] px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Which tools are you currently using? What's the biggest pain point?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors shadow-lg shadow-blue-500/20"
      >
        Send message
      </button>
    </form>
  );
}
