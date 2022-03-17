import { useLocation } from "react-router-dom"

import { parse } from "query-string"

const useSearchParams = () => {
  const { search } = useLocation()

  return parse(search)
}

export { useSearchParams }
