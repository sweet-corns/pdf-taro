import {
  useEffect
} from 'react'

export function useAsyncEffect(effect, deps) {
  useEffect(() => {
    effect()
  }, deps)
}
