export interface TooltipProps {
  children: React.ReactNode
  label: string
  position: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip: React.FC<TooltipProps> = ({ children, label, position }) => {
  const tooltipStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2',
    bottom: 'top-full left-1/2 -translate-x-1/2',
    left: 'right-full top-1/2 -translate-y-1/2',
    right: 'left-full top-1/2 -translate-y-1/2',
  }
  const tooltipPosition:string = tooltipStyles[position]
  const tooltipClass = `pointer-events-none absolute mt-2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800 before:content-[''] group-hover:opacity-100 ${tooltipPosition}`

  return (
    <div className="group relative">
      {children}
      <span className={tooltipClass}>
        {label}
      </span>
    </div>
  )
}
