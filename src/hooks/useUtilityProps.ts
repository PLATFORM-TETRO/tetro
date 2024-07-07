import { DragEvent, SyntheticEvent } from 'react'

export function useDragPreventionProps () {
  return {
    onDragStart: (e: DragEvent<unknown>) => e.preventDefault(),
    onSelect: (e: SyntheticEvent<unknown, Event>) => e.preventDefault(),
    onSelectCapture: (e: SyntheticEvent<unknown, Event>) => e.preventDefault()
  }
}
