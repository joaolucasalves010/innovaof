import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

const LazySection = ({children, fallback = <p>Carregando...</p>, rootMargin = "200px"}: Props) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((
      [entry]
    ) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    },
    { rootMargin }
  )

  observer.observe(el)

  return () => observer.disconnect()

  }, [rootMargin])

  return (
    <div ref={ref}>
      {visible && (
        <Suspense fallback={fallback}>
          {children}
        </Suspense> 
      )}
    </div>
  )

}

export default LazySection