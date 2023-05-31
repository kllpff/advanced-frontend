import React, {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDownEvent = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDownEvent)
    }
    return () => {
      window.removeEventListener('keydown', onKeyDownEvent)
      clearTimeout(timeRef.current)
    }
  }, [isOpen, onKeyDownEvent])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
