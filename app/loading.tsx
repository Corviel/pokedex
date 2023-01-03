export default function Loading() {
  return (
    <div className="w-full h-full grid place-items-center">
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`.spinner_VpEe{animation:spinner_vXu6 1.2s cubic-bezier(0.52,.6,.25,.99) infinite}.spinner_eahp{animation-delay:.4s}.spinner_f7Y2{animation-delay:.8s}@keyframes spinner_vXu6{0%{r:0;opacity:1}100%{r:11px;opacity:0}}`}</style>
        <circle className="spinner_VpEe" cx="12" cy="12" r="0" />
        <circle className="spinner_VpEe spinner_eahp" cx="12" cy="12" r="0" />
        <circle className="spinner_VpEe spinner_f7Y2" cx="12" cy="12" r="0" />
      </svg>
    </div>
  )
}
