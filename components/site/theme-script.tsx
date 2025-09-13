export function ThemeScript() {
  const code = `(()=>{try{const s=localStorage.getItem('theme');const d=document.documentElement;const m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&m)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}

