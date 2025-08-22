export function UnderDevelopment() {
    return (
      <div
        className=" my-20 px-10 flex flex-col items-center justify-center min-h-screen p-8 rounded-lg border-2 border-dashed"
        style={{
          backgroundColor: "var(--color-light)",
          borderColor: "var(--color-secondary)",
          color: "var(--color-primary)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--color-primary)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
        </div>
  
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
          Still Under Development
        </h2>
  
        <p className="text-center mb-6 max-w-md" style={{ color: "var(--color-tertiary)" }}>
          This feature is currently being built. We're working hard to bring you something amazing!
        </p>
  
        <div
          className="px-6 py-3 rounded-full font-[450]"
          style={{
            backgroundColor: "var(--color-active)",
            color: "var(--color-primary)",
          }}
        >
          Coming Soon
        </div>
      </div>
    )
  }
  