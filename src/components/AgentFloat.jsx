import { useState } from 'react'

const AGENT_URL = 'https://hurcane.com/chat/tire-suas-duvidas-1778523717415?embedded=true&theme=light'

export default function AgentFloat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Falar com assistente jurídico"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C4952E] hover:bg-[#AD8429] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_28px_rgba(196,149,46,0.45)] transition-all duration-300 hover:scale-110 active:scale-100"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A3.5 3.5 0 0 0 12 7zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
          <div className="pointer-events-auto flex flex-col w-full max-w-sm h-[600px] rounded-2xl shadow-2xl overflow-hidden bg-white">
            <div className="flex items-center justify-between px-4 py-3 bg-[#C4952E]">
              <span className="text-white font-medium text-sm">Assistente Jurídico</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar chat"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <iframe
              src={AGENT_URL}
              title="Assistente Jurídico"
              className="flex-1 w-full border-0"
              allow="microphone"
            />
          </div>
        </div>
      )}
    </>
  )
}
