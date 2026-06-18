export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center h-9 w-9 rounded-full border border-primary text-primary font-serif text-lg font-semibold">
          К
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-lg font-serif font-semibold tracking-wide text-primary">KOPNINOVA</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">studio</span>
        </span>
      </div>
    </div>
  )
}