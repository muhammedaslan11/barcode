import React, { useRef, useEffect } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const Fancybox = (props: {
  children?: React.ReactNode
  delegate?: string
  options?: Partial<FancyboxOptionsType>
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const delegate = props.delegate || '[data-fancybox]'
    const options = props.options || {}

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  }, [props.delegate, props.options]) // Adding dependencies to ensure correct effect behavior

  return <div ref={containerRef}>{props.children}</div>
}

export default Fancybox
